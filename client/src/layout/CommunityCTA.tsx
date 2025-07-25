import { useCommunityCTA } from "@/hooks/useCommunityCTA";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CommunityCTA() {
  const { email, loading, handleChange, handleSubmit } = useCommunityCTA();

  return (
    <section className="bg-eggshell text-charcoal my-8 font-satoshi px-6 py-10 md:py-14 rounded-3xl max-w-2xl mx-auto shadow-[0_0_0_3px_var(--color-glowPeach)]">
      <ToastContainer position="top-right" autoClose={5000} />
      <h2 className="font-grotesk text-3xl md:text-4xl font-semibold mb-4">
        Join the Inner Nest
      </h2>
      <p className="mb-1 text-base md:text-lg">
        Early drops. Workflow rituals. Desk setup inspo.
      </p>
      <p className="mb-6 text-sm md:text-base">
        We only email when it matters. Promise.
      </p>

      <div className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="px-4 py-3 rounded-xl border border-softGray text-base font-medium focus:outline-none focus:ring-2 focus:ring-sandBrown"
          aria-label="Email for newsletter subscription"
          autoComplete="email"
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          aria-busy={loading}
          className={`bg-sandBrown text-white py-3 px-4 rounded-xl font-semibold text-base transition-opacity ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
          }`}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      <p className="mt-6 text-sm text-charcoal opacity-80">
        3,000+ creatives already inside.
      </p>
    </section>
  );
}
