import Container from "../../Components/Container/Container";

/* eslint-disable react/prop-types */
const SearchDonorInfo = ({ singleUser }) => {
  const { name, email, photo, bloodGroup, upazila, district } = singleUser;
  return (
    <Container>
      <div className="card bg-base-100 shadow-xl mt-5 mb-5">
        <figure className="px-10 pt-10 h-[400px]">
          <img src={photo} alt="Shoes" className="rounded-xl h-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Email: {email}</h2>
          <p>BG: {bloodGroup}</p>
          <p>District: {district}</p>
          <p>Upazila: {upazila}</p>
          <div className="card-actions">
            <button className="btn bg-[#ea062b] text-white border-none hover:bg-black hover:text-white">View Details</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SearchDonorInfo;
