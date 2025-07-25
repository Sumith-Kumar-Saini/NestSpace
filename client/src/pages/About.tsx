import { motion } from "framer-motion";
import type { JSX } from "react";
import { Link } from "react-router";

// Variants for Framer Motion animations
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="min-h-[80vh] flex items-center justify-center bg-eggshell text-charcoal"
      style={{
        background:
          "linear-gradient(135deg, var(--color-eggshell) 0%, var(--color-glowPeach) 100%)",
      }}
    >
      <div className="text-center max-w-3xl mx-auto px-4">
        <h1 className="font-grotesk text-4xl md:text-6xl font-bold mb-6">
          Born in Chaos. Built for Calm.
        </h1>
        <p className="font-satoshi text-lg md:text-xl text-charcoal/80">
          NestSpace began in a burnout spiral. Today, it’s a movement to reclaim
          clarity.
        </p>
      </div>
    </motion.section>
  );
};

interface TimelineItem {
  year: string;
  description: string;
}

const TimelineBlock: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: "2020",
      description:
        "The burnout moment. Working from bed, doomscrolling, zero clarity.",
    },
    {
      year: "2021",
      description: "Prototyping our first modular desk organizer.",
    },
    {
      year: "2023",
      description: "10K+ free Notion downloads, first desk kit sells out.",
    },
    {
      year: "2025",
      description: "NestSpace now ships globally. We’re just getting started.",
    },
  ];

  return (
    <section className="py-16 bg-softGray">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-grotesk text-3xl md:text-4xl text-center mb-12">
          Our Journey
        </h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sandBrown"></div>
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 px-4">
                <div className="bg-eggshell p-6 rounded-lg shadow-md">
                  <h3 className="font-grotesk text-2xl text-sandBrown">
                    {item.year}
                  </h3>
                  <p className="font-satoshi text-charcoal">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FounderNoteCard: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-16 bg-eggshell"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="relative">
          <span className="text-6xl text-glowPeach absolute -left-8 -top-4">
            “
          </span>
          <p className="font-grotesk text-2xl md:text-3xl text-charcoal italic">
            I didn’t start NestSpace to sell products. I started it because I
            couldn’t focus anymore. This brand is a letter to every freelancer
            trying to stay grounded in a chaotic world.
          </p>
          <span className="text-6xl text-glowPeach absolute -right-8 -bottom-4">
            ”
          </span>
        </div>
        <p className="font-satoshi text-lg mt-4 text-sandBrown">— Founder</p>
      </div>
    </motion.section>
  );
};

interface Testimonial {
  quote: string;
  initials: string;
}

const TestimonialCard: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "My NestSpace setup helps me work with clarity I haven’t felt in years.",
      initials: "A.R.",
    },
    {
      quote: "Transformed my chaotic desk into a sanctuary of focus.",
      initials: "S.K.",
    },
  ];

  return (
    <section className="py-16 bg-softGray">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="font-grotesk text-3xl md:text-4xl text-center mb-12">
          What Our Community Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-eggshell p-6 rounded-lg shadow-md"
            >
              <p className="font-satoshi text-charcoal mb-4">
                “{testimonial.quote}”
              </p>
              <p className="font-grotesk text-sandBrown">
                — {testimonial.initials}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-16 bg-eggshell text-center"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-grotesk text-3xl md:text-4xl mb-6">
          Ready to reclaim your workspace?
        </h2>
        <Link
          to="/products"
          className="inline-block bg-sandBrown text-eggshell font-satoshi px-6 py-3 rounded-md hover:bg-glowPeach hover:text-charcoal transition-colors duration-300"
        >
          Explore Products
        </Link>
      </div>
    </motion.section>
  );
};

const AboutPage: () => JSX.Element = () => {
  return (
    <div className="min-h-screen bg-eggshell">
      <HeroSection />
      <TimelineBlock />
      <FounderNoteCard />
      <TestimonialCard />
      <CTASection />
    </div>
  );
};

export default AboutPage;
