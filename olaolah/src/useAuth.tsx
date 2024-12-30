// import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface AuthContextProps {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (token: string, user: User) => void;
//   logout: () => void;
//   token: string | null;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [token, setToken] = useState<string | null>(null);
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");
//     const storedUser = localStorage.getItem("authUser");

//     if (storedToken && storedUser) {
//       setToken(storedToken);
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const login = (newToken: string, newUser: User) => {
//     setToken(newToken);
//     setUser(newUser);

//     localStorage.setItem("authToken", newToken);
//     localStorage.setItem("authUser", JSON.stringify(newUser));
//   };

//   const logout = () => {
//     setToken(null);
//     setUser(null);

//     localStorage.removeItem("authToken");
//     localStorage.removeItem("authUser");
//   };

//   const isAuthenticated = !!token;

//   return (
//     <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
