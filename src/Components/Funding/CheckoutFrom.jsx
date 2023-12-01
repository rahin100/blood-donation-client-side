import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState, useContext } from "react";
import useSecureAxios from "../../Hooks/useSecureAxios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [donationAmount, setDonationAmount] = useState();
  const [transactionId,setTransactionId] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const secureAxios = useSecureAxios();
  const { user } = useContext(AuthContext);
  

  const calculateTotalPrice = (donationAmount) => {
    
    return donationAmount;
  };

  const price = calculateTotalPrice(donationAmount);
  

  useEffect(() => {
    secureAxios.post("/create-payment-intent", { price })
      .then((response) => {
        console.log("Payment Intent created:", response.data.clientSecret);
        setClientSecret(response.data.clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching Payment Intent:", error);
      });
  }, [secureAxios, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user?.displayName || "Anonymous",
          email: user?.email || "anonymous@example.com",
        },
      },
    });

    if (error) {
      console.error("[Payment Error]", error);
      setError(error.message);
    } else if (paymentIntent.status === "succeeded") {
      console.log("[Payment Intent]", paymentIntent);
      setError("");
      if (paymentIntent.status === 'succeeded') {
        Swal.fire({
          icon: "success",
          title: "YaY",
          text: "Donation Successful",
        });
        setTransactionId(paymentIntent.id);

        const paymentData = {
          name: user?.displayName,
          email: user?.email,
          price: donationAmount,
          date: new Date().toISOString(),
        };

        secureAxios.post("/payment", paymentData)
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.error("Error submitting payment data:", err);
          });
      }
    }
  };

  const handleDonationAmountChange = (event) => {
    setDonationAmount(parseFloat(event.target.value) || 0);
  };



  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md mb-[100px]">
      <label className="block mb-4 text-lg font-medium text-gray-800">
        Enter Donation Amount
      </label>
      <input
        type="text"
        placeholder="Amount"
        value={donationAmount}
        onChange={handleDonationAmountChange}
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium text-gray-800">
          Card Information
        </label>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none"
      >
        Pay Now
      </button>
      <p className="mt-4 text-red-600">{error}</p>
      {transactionId && <p className="mt-4 text-green-600 text-sm">Your transaction id: {transactionId}</p>}
    </form>
  );
};

export default CheckoutForm;
