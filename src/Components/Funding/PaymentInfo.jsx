/* eslint-disable react/prop-types */
const PaymentInfo = ({ singlePayment}) => {
    const { name, email, price, date } = singlePayment;
    return (
      <tr className="border-b hover:bg-gray-100">
        <td className="py-2 px-4">{name}</td>
        <td className="py-2 px-4">{email}</td>
        <td className="py-2 px-4">{new Date(date).toLocaleDateString()}</td>
        <td className="py-2 px-4">${price.toFixed(2)}</td>
      </tr>
    );
  };
  
  export default PaymentInfo;