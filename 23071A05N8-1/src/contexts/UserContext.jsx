import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Custom hook to access user context
export const useUser = () => useContext(UserContext);

// Provider component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // optional persistence
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
