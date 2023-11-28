import { useParams } from "react-router-dom";
import Container from "../../Components/Container/Container";
import useDonationRequest from "../../Hooks/useDonationRequest";
import ViewDetailsPageInfo from "./ViewDetailsPageInfo";
import { useEffect, useState } from "react";

const ViewDetails = () => {
  const [donationId, setDonationId] = useState([]);
  const [donationRequest, refetch] = useDonationRequest();
  const { _id } = useParams();

  useEffect(() => {
    const findDonationDetails = donationRequest?.find(
      (findDetails) => findDetails?._id === _id
    );
    setDonationId(findDonationDetails ? [findDonationDetails] : []);
  }, [_id, donationRequest]);

  return (
    <Container>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-[50px]">
        {donationId.map((singleViewDetails) => (
          <ViewDetailsPageInfo
            key={singleViewDetails?._id}
            singleViewDetails={singleViewDetails}
            refetch={refetch}
          ></ViewDetailsPageInfo>
        ))}
      </div>
    </Container>
  );
};

export default ViewDetails;
