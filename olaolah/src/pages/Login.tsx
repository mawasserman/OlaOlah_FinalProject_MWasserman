// import React, { useState } from "react";
// import { useAuth } from "../useAuth";
// import { useAuthenticatedFetch } from "../useAuthenticatedFetch.tsx";
// import './index.css';

// const Login = () => {
//   const { login, logout, user, isAuthenticated } = useAuth();
//   const fetchWithAuth = useAuthenticatedFetch();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       await login(username, password);
//       alert("Login successful!");
//     } catch (error) {
//       setError("Login failed. Please check your credentials.");
//     }
//   };

//   const handleLogout = () => {
//     logout();
//   };

//   const fetchData = async () => {
//     try {
//       const response = await fetchWithAuth("https://api.example.com/protected", {
//         method: "GET",
//       });
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       setError("Error fetching data.");
//     }
//   };

//   return (
//     <div className="auth-form">
//       <h1>Authentication Example</h1>
//       {isAuthenticated ? (
//         <div>
//           <p>Welcome, {user?.name}</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           {error && <span className="error">{error}</span>}
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//       <button onClick={fetchData}>Fetch Protected Data</button>
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//     </div>
//   );
// };

// export default Login;
