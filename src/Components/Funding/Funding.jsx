import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import Container from "../Container/Container";
import usePaymentCollection from "../../Hooks/usePaymentCollection";
import PaymentInfo from "./paymentInfo";

const Funding = () => {
  const [payment, refetch] = usePaymentCollection();
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
  return (
    <Container>
      <div className="my-[100px]">
        <Elements stripe={stripePromise}>
          <CheckoutFrom></CheckoutFrom>
        </Elements>
      </div>
      {payment.length > 0 ? (
        <div className="mb-[100px]">
          <div className="overflow-x-auto">
            <table className="min-w-[50%] border-collapse mx-auto text-center">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {payment.map((singlePayment) => (
                  <PaymentInfo
                    key={singlePayment._id}
                    singlePayment={singlePayment}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Funding;
