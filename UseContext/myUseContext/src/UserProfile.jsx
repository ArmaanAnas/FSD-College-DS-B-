import { useContext } from "react";
import UserContext from "./UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>

      <p>Name: {user.name}</p>

      <p>Branch: {user.branch}</p>

      <p>College: {user.college}</p>
    </div>
  );
}

export default UserProfile;