const fetch = require("node-fetch");
const express = require("express");
const app = express();
const { resolve } = require("path");

// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });
app.use(express.static("./dist"));
app.use(express.json());
app.get("/", (req, res) => {
  const path = resolve("./dist" + "/index.html");
  res.sendFile(path);
});
app.get("/completion", (req, res) => {
  const path = resolve("./dist" + "/index.html");
  res.sendFile(path);
});
// replace the test api key with your hyperswitch api key
const hyper = require("@juspay-tech/hyperswitch-node")(
  process.env.HYPERSWITCH_SECRET_KEY
);

const SERVER_URL =
  process.env.HYPERSWITCH_SERVER_URL == "SELF_HOSTED_SERVER_URL"
    ? ""
    : process.env.HYPERSWITCH_SERVER_URL;
const CLIENT_URL =
  process.env.HYPERSWITCH_CLIENT_URL == "SELF_HOSTED_CLIENT_URL"
    ? ""
    : process.env.HYPERSWITCH_CLIENT_URL;

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.HYPERSWITCH_PUBLISHABLE_KEY,
  });
});

app.get("/urls", (req, res) => {
  res.send({
    serverUrl: SERVER_URL,
    clientUrl: CLIENT_URL,
  });
});

app.get("/payment", (req, res) => {
  const path = resolve("./dist" + "/index.html");
  res.sendFile(path);
});

app.get("/complete", (req, res) => {
  const path = resolve("./dist" + "/index.html");
  res.sendFile(path);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentFlow = req.body.paymentFlow;
    var paymentIntent;
    const request = {
      // profile_id: "pro_bpgbEC5OdE27gyEhgW2Y",
      amount: 2999,
      // order_details: [
      //   {
      //     product_name: "Apple iphone 15",
      //     quantity: 1,
      //     amount: 2999,
      //   },
      // ],
      currency: "USD",
      confirm: false,
      capture_method: "automatic",
      authentication_type: "no_three_ds",
      customer_id: req.body.customer_id,
      email: "hyperswitch_sdk_demo_id@gmail.com",
      description: "Hello this is description",
      // allowed_payment_method_types:["sofort"],
      shipping: {
        address: {
          state: "zsaasdas",
          city: "Banglore",
          country: "US",
          line1: "sdsdfsdf",
          line2: "hsgdbhd",
          line3: "alsksoe",
          zip: "571201",
          first_name: "joseph",
          last_name: "doe",
        },
        phone: {
          number: "123456789",
          country_code: "+1",
        },
      },
      billing: {
        address: {
          line1: "1467",
          line2: "Harrison Street",
          line3: "Harrison Street",
          city: "San Fransico",
          state: "California",
          zip: "94122",
          country: "US",
          first_name: "joseph",
          last_name: "Doe",
        },
        phone: {
          number: "123456789",
          country_code: "+1",
        },
      },
      connector_metadata: {
        noon: {
          order_category: "applepay",
        },
      },
      metadata: {
        udf1: "value1",
        new_customer: "true",
        login_date: "2019-09-10T10:11:12Z",
      },
    };

    if (paymentFlow !== "OneTimePayment") {
      request.setup_future_usage = "off_session";
      request.mandate_data = {
        mandate_type: {
          multi_use: {
            amount: 2999,
            currency: "USD",
          },
        },
      };
    }

    if (paymentFlow == "ZeroAuth") {
      request.amount = 0;
      request.order_details = null;
    }

    if (SERVER_URL) {
      const apiResponse = await fetch(
        `${process.env.HYPERSWITCH_SERVER_URL}/payments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "api-key": process.env.HYPERSWITCH_SECRET_KEY,
          },
          body: JSON.stringify(request),
        }
      );
      paymentIntent = await apiResponse.json();

      if (paymentIntent.error) {
        return res.status(400).send({
          error: paymentIntent.error,
        });
      }
    } else {
      paymentIntent = await hyper.paymentIntents.create(request);
    }

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    return res.status(400).send({
      error: {
        message: err.message,
      },
    });
  }
});

app.post("/get-mandate-data", async (req, res) => {
  try {
    let response = await fetch(
      `${process.env.HYPERSWITCH_SERVER_URL}/customers/${req.body.customer_id}/mandates`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "api-key": process.env.HYPERSWITCH_SECRET_KEY,
        },
      }
    );

    let resData = await response.json();
    res.send({
      data: resData.error ? [] : resData,
    });
  } catch (ex) {
    res.send([]);
  }
});

app.post("/confirm-mandate", async (req, res) => {
  try {
    let reqBody = req.body;

    let request = {
      amount: 1000,
      currency: "USD",
      confirm: true,
      capture_method: "automatic",
      amount_to_capture: 1000,
      customer_id: reqBody.customer_id,
      description: "Its my first payment request",
      return_url: "https://google.com",
      mandate_id: reqBody.mandate_id,
      // "profile_id": "pro_bpgbEC5OdE27gyEhgW2Y",
      off_session: true,
      browser_info: {
        user_agent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36",
        accept_header:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        language: "nl-NL",
        color_depth: 24,
        screen_height: 723,
        screen_width: 1536,
        time_zone: 0,
        java_enabled: true,
        java_script_enabled: true,
        ip_address: "125.0.0.1",
      },
      billing: {
        address: {
          first_name: "John",
          last_name: "Doe",
          line1: "1467",
          line2: "Harrison Street",
          line3: "Harrison Street",
          city: "San Fransico",
          state: "California",
          zip: "94122",
          country: "US",
        },
        phone: {
          number: "8056594427",
          country_code: "+91",
        },
      },
      metadata: {
        udf1: "value1",
        new_customer: "true",
        login_date: "2019-09-10T10:11:12Z",
      },
    };

    let response = await fetch(
      `${process.env.HYPERSWITCH_SERVER_URL}/payments`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": process.env.HYPERSWITCH_SECRET_KEY,
        },
        body: JSON.stringify(request),
      }
    );

    res.send({
      data: await response.json(),
    });
  } catch (ex) {
    res.send([]);
  }
});

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
