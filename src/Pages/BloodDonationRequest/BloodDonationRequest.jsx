import Container from "../../Components/Container/Container";
import useDonationRequest from "../../Hooks/useDonationRequest";
import BloodDonationRequestInfo from "./BloodDonationRequestInfo";

const BloodDonationRequest = () => {


  const [donationRequest, refetch] = useDonationRequest();
  console.log(donationRequest);

  return (
    <Container>
      <div className="my-[50px]">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Requester Name</th>
                <th>Recipent Name</th>
                <th>Recipent District</th>
                <th>Recipent Upazila</th>
                <th>Donation Date</th>
                <th>Donation Time</th>
                <th>Donation Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {donationRequest?.map((singleBloodDonation) => (
                <BloodDonationRequestInfo
                  key={singleBloodDonation._id}
                  singleBloodDonation={singleBloodDonation}
                  refetch={refetch}
                ></BloodDonationRequestInfo>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default BloodDonationRequest;
