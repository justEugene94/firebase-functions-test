"use strict";

const functions = require("firebase-functions");
const axios = require("axios");
// const cors = require("cors")({origin: true});

exports.orderUpdated = functions.database.ref("/orders/{orderId}")
    .onUpdate((snapshot, context) =>{
      // const order = snapshot.after.val();
      functions.logger.log("OrderId: ", context.params.orderId);
      return axios.get("https://dev.foodfamily.com.ua/api/firebase/orders");
    });
