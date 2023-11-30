

import useProfile from "../../../Hooks/useProfile";
import ProfileInfo from "./ProfileInfo";




const Profile = () => {

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
