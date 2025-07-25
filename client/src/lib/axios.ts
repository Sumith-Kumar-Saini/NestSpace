import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

if (!import.meta.env.VITE_API_BASE_URL) {
  console.error("VITE_API_BASE_URL is not defined in .env");
  throw new Error("Missing VITE_API_BASE_URL");
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // Add auth token if available (e.g., from localStorage)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const errorResponse = error.response?.data as {
      error?: { message: string; code?: string };
    };
    const message =
      errorResponse?.error?.message || "An unexpected error occurred";
    const code = errorResponse?.error?.code;

    // Display user-friendly error
    toast.error(`${message}${code ? ` (${code})` : ""}`, {
      position: "top-right",
      autoClose: 5000,
    });

    return Promise.reject(error);
  }
);

export default instance;
