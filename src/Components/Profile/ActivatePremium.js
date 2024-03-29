import { Button } from "react-bootstrap";
import axios from "axios";
import { Fragment } from "react";

const path = process.env.REACT_APP_PATH;

const ActivatePremium = (props) => {
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const buyPremiumHandler = async () => {
    const result = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    const token = localStorage.getItem("expenseUser");
    if (result) {
      const response = await axios.get(path + "purchase/premiumMembership", {
        headers: { Authorization: token },
      });
      // console.log(response);
      var options = {
        key: response.data.key_id,
        order_id: response.data.order.id,

        handler: async function (response) {
          const data = {
            orderCreationId: options.order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await axios.post(
            path + "purchase/updateTransaction",
            data,
            { headers: { Authorization: token } }
          );

          console.log(result);
          if (result.status === 200) {
            alert("Premium account activated");
            props.loadAgain();
          } else {
            alert("Payment failed");
          }
        },

        onPaymentError: async function (error) {
          console.log(error);
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.open();
    }
  };

  return (
    <Fragment>
      <Button onClick={buyPremiumHandler}>Buy Premium</Button>
    </Fragment>
  );
};

export default ActivatePremium;
