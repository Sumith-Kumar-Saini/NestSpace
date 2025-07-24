import { useState } from "react";
import axios from "@/lib/axios";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useCommunityCTA() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
    setSuccess(false);
  };

  const handleSubmit = async () => {
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/newsletter/subscribe", { email });
      setSuccess(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Try again?");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    error,
    success,
    loading,
    handleChange,
    handleSubmit,
  };
}
