import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>UserProfile</h1>
      <p>
        My name is {user.name} and My Age is {user.age}
      </p>
    </div>
  );
};

export default UserProfile;
