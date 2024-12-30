// import { useAuth } from "./useAuth";

// export const useAuthenticatedFetch = () => {
//     const { token } = useAuth();
  
//     const authenticatedFetch = async (url: string, options: RequestInit = {}) => {
//       const headers = new Headers(options.headers || {});
  
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
  
//       return fetch(url, {
//         ...options,
//         headers,
//       });
//     };
  
//     return authenticatedFetch;
//   };
  