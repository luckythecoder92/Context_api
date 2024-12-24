import React, { createContext } from "react";

export const data = createContext();
const UserContext = ({ children }) => {
  const user = {
    username: "Lakshya",
    age: 18,
    city: "Jaipur",
  };
  return <div>
    <data.Provider value={user}>
        {children}
    </data.Provider>
  </div>;
};

export default UserContext;
