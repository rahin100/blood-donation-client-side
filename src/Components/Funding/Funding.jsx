import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import Container from "../Container/Container";

const Funding = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
  return (
    <Container>
      <div className="mt-[50px]">
        <Elements stripe={stripePromise}>
          <CheckoutFrom></CheckoutFrom>
        </Elements>
      </div>
    </Container>
  );
};

export default Funding;
