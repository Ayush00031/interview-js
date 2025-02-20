import { createContext, useState } from "react";

import UpadateUser from "./UpadateUser";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "ayush", age: 23 });

  const updateUser = (newName) => {
    setUser((prevUser) => ({ ...prevUser, name: newName }));
  };

  return (
    <div>
      userContext
      <UserContext.Provider value={{ user, updateUser }}>
        {children}
        <UpadateUser />
      </UserContext.Provider>
    </div>
  );
};

export { UserProvider };
