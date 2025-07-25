import { useState, useCallback } from "react";
import axios from "@/lib/axios";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useCommunityCTA() {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!emailRegex.test(email)) {
      throw new Error("Please enter a valid email.");
    }

    try {
      setLoading(true);
      await axios.post("/api/newsletter/subscribe", { email });
      setEmail("");
    } finally {
      setLoading(false);
    }
  }, [email]);

  return {
    email,
    loading,
    handleChange,
    handleSubmit,
  };
}
