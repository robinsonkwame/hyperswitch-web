open RecoilAtoms
type token = {client_token: string}
type loadType = {
  container: option<string>,
  color_text: option<string>,
  payment_method_category: option<string>,
}

type res = {
  approved: bool,
  show_form: bool,
  authorization_token: string,
  finalize_required: bool,
}
type some = {
  init: token => unit,
  load: (loadType, res => unit) => unit,
  authorize: (loadType, JSON.t, res => unit) => unit,
  loadPaymentReview: (loadType, res => unit) => unit,
}

@val external klarnaInit: some = "Klarna.Payments"

@react.component
let make = (~sessionObj: SessionsType.token) => {
  open Utils
  let loggerState = Recoil.useRecoilValueFromAtom(RecoilAtoms.loggerAtom)
  let intent = PaymentHelpers.usePaymentIntent(Some(loggerState), Other)
  let {iframeId} = Recoil.useRecoilValueFromAtom(keys)
  let status = CommonHooks.useScript("https://x.klarnacdn.net/kp/lib/v1/api.js") // Klarna SDK script
  let paymentMethodListValue = Recoil.useRecoilValueFromAtom(PaymentUtils.paymentMethodListValue)

  let handleCloseLoader = () => {
    Utils.handlePostMessage([("fullscreen", false->JSON.Encode.bool)])
  }

  let submitCallback = React.useCallback((ev: Window.event) => {
    let json = ev.data->JSON.parseExn
    let confirm = json->Utils.getDictFromJson->ConfirmType.itemToObjMapper

    if confirm.doSubmit {
      Utils.handlePostMessage([
        ("fullscreen", true->JSON.Encode.bool),
        ("param", "paymentloader"->JSON.Encode.string),
        ("iframeId", iframeId->JSON.Encode.string),
      ])
      klarnaInit.authorize(
        {
          container: None,
          color_text: None,
          payment_method_category: Some("klarna"),
        },
        Dict.make()->JSON.Encode.object,
        (res: res) => {
          let (connectors, _) =
            paymentMethodListValue->PaymentUtils.getConnectors(PayLater(Klarna(SDK)))
          let body = PaymentBody.klarnaSDKbody(~token=res.authorization_token, ~connectors)
          res.approved
            ? intent(~bodyArr=body, ~confirmParam=confirm.confirmParams, ~handleUserError=false, ())
            : handleCloseLoader()
        },
      )
    }
  }, [status])
  useSubmitPaymentData(submitCallback)

  React.useEffect(() => {
    if status == "ready" {
      let klarnaWrapper = GooglePayType.getElementById(Utils.document, "klarna-payments")
      klarnaWrapper.innerHTML = ""
      klarnaInit.init({
        client_token: sessionObj.token,
      })

      klarnaInit.load(
        {
          container: Some("#klarna-payments"),
          color_text: Some("#E51515"),
          payment_method_category: Some("pay_later"),
        },
        (_res: res) => {
          handlePostMessageEvents(~complete=true, ~empty=false, ~paymentType="klarna", ~loggerState)
        },
      )
    }
    None
  }, [status])

  let bottomElement = <InfoElement />
  <div className="p-1 animate-slowShow">
    <div id="klarna-payments" className="m-3 hidden" />
    <Surcharge paymentMethod="pay_later" paymentMethodType="klarna" />
    <Block bottomElement />
  </div>
}

let default = make
