import { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={user.name}
            onChange={handleChange}
            name="name"
          />
          Age:
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <h3>Profile Information</h3>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
    </div>
  );
};

export default Profile;
