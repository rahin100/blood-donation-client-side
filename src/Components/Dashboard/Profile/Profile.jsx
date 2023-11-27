
// import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useProfile from "../../../Hooks/useProfile";
import ProfileInfo from "./ProfileInfo";
// import {useContext, useEffect, useState } from "react";



const Profile = () => {
// const {user} = useContext(AuthContext)

// const [profile, setProfile] = useState([])

//   const url = `http://localhost:5000/users?email=${user?.email}`

//   useEffect(()=>{
//     fetch(url)
//     .then((res)=>res.json())
//     .then(data=>setProfile(data))
//   },[url])

//   console.log(profile)
// eslint-disable-next-line no-unused-vars
const [profile, refetch] = useProfile()

  return (
    <div className="grid grid-cols-2">
      {
        profile?.map((singleProfile)=><ProfileInfo key={singleProfile._id} singleProfile={singleProfile} refetch={refetch}></ProfileInfo>)
      }
    </div>
  );
};

export default Profile;
