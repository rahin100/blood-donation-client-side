/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SearchDonorInfo from "./SearchDonorInfo";
import Container from "../../Components/Container/Container";

const SearchDonor = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");
  const [allDistricts, setAllDistricts] = useState([]);
  const [zilla, setZilla] = useState([]);
  const [allUser, setAllUser] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetch("https://blood-donation-server-side-three.vercel.app/all_districts")
      .then((res) => res.json())
      .then((data) => setAllDistricts(data));
  }, []);

  useEffect(() => {
    fetch("https://blood-donation-server-side-three.vercel.app/zilla")
      .then((res) => res.json())
      .then((data) => setZilla(data));
  }, []);

  useEffect(() => {
    axiosSecure.get("/users",{
      headers:{
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    }).then((res) => {
      setAllUser(res.data);
      setSearchResults(res.data); // Initialize search results with all users
    });
  }, [axiosSecure]);

  const handleSearch = () => {
    // Implement search logic based on the selected filters
    const results = allUser.filter((user) => {
      const matchesBloodGroup = bloodGroup
        ? user.bloodGroup === bloodGroup
        : true;
      const matchesDistrict = selectedDistrict
        ? user.district === selectedDistrict
        : true;
      const matchesUpazila = selectedUpazila
        ? user.upazila === selectedUpazila
        : true;

      return matchesBloodGroup && matchesDistrict && matchesUpazila;
    });

    setSearchResults(results);
  };

  return (
    <Container>
      <div>
        {/* Search Form */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Blood Group:
          </label>
          <select
            className="border rounded w-full py-2 px-3"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            District:
          </label>
          <select
            className="border rounded w-full py-2 px-3"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">District</option>
            {allDistricts.map((district) => (
              <option value={district.bn_name} key={district.id}>
                {district.bn_name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upazila:
          </label>
          <select
            className="border rounded w-full py-2 px-3"
            value={selectedUpazila}
            onChange={(e) => setSelectedUpazila(e.target.value)}
          >
            <option value="">Upazila</option>
            {zilla.map((upazila) => (
              <option value={upazila.bn_name} key={upazila.id}>
                {upazila.bn_name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>

        {/* Display Search Results */}
        {searchResults.length > 0 && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {searchResults.map((singleUser) => (
              <SearchDonorInfo
                key={singleUser._id}
                singleUser={singleUser}
              ></SearchDonorInfo>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default SearchDonor;
