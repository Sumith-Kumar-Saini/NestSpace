import { useState } from "react";
import { motion } from "framer-motion";
import axios from "@/lib/axios";
import { Link, useNavigate } from "react-router";

// Framer Motion variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("/auth/register", {
        email,
        password,
      });
      // Handle successful registration (e.g., redirect to login or dashboard)
      console.log("Registration successful:", response.data);
      // Example redirect: window.location.href = '/login';
      navigate("/login");
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        setError(err.message || "Registration failed. Please try again.");
      } else {
        console.log(err);
        setError("Registration failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-eggshell flex flex-col lg:flex-row">
      {/* Brand/Graphic Side - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 bg-glowPeach items-center justify-center">
        <div className="text-center">
          <h1 className="font-grotesk text-4xl text-charcoal">NestSpace</h1>
          <p className="font-satoshi text-lg text-charcoal/80 mt-2">
            Create your sanctuary for focused work.
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full max-w-md bg-white rounded-xl shadow-md p-6"
        >
          <h2 className="font-grotesk text-3xl text-charcoal mb-6 text-center">
            Create an Account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="font-satoshi text-charcoal block mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`w-full px-3 py-2 border ${
                  error && error.includes("email")
                    ? "border-red-500"
                    : "border-softGray"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-sandBrown font-satoshi`}
                aria-describedby={
                  error && error.includes("email") ? "email-error" : undefined
                }
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="font-satoshi text-charcoal block mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`w-full px-3 py-2 border ${
                  error && error.includes("password")
                    ? "border-red-500"
                    : "border-softGray"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-sandBrown font-satoshi`}
                aria-describedby={
                  error && error.includes("password")
                    ? "password-error"
                    : undefined
                }
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="font-satoshi text-charcoal block mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className={`w-full px-3 py-2 border ${
                  error && error.includes("password")
                    ? "border-red-500"
                    : "border-softGray"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-sandBrown font-satoshi`}
                aria-describedby={
                  error && error.includes("password")
                    ? "password-error"
                    : undefined
                }
              />
            </div>
            {error && (
              <p
                id="error-message"
                className="text-red-500 text-sm font-satoshi"
              >
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-sandBrown text-eggshell font-satoshi py-2 rounded-md hover:bg-glowPeach hover:text-charcoal transition-colors duration-300 disabled:opacity-50 flex items-center justify-center"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-eggshell"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : null}
              {isLoading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
          <div className="mt-4 text-center font-satoshi text-charcoal/80">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-sandBrown hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterPage;
