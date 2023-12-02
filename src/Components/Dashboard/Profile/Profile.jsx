

import useProfile from "../../../Hooks/useProfile";
import Container from "../../Container/Container";
import ProfileInfo from "./ProfileInfo";




const Profile = () => {

const [profile, refetch] = useProfile()

  return (
   <Container>
     <div className="grid grid-cols-2">
      {
        profile?.map((singleProfile)=><ProfileInfo key={singleProfile._id} singleProfile={singleProfile} refetch={refetch}></ProfileInfo>)
      }
    </div>
   </Container>
  );
};

export default Profile;
