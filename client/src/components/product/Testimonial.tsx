import React from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  testimonial: { name: string; quote: string };
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="py-12 px-4 sm:px-8 bg-eggshell"
    >
      <div className="max-w-3xl mx-auto text-center">
        <blockquote className="font-satoshi text-lg italic text-charcoal mb-4">
          "{testimonial.quote}"
        </blockquote>
        <p className="font-grotesk text-sm text-sandBrown">
          {testimonial.name}
        </p>
      </div>
    </motion.section>
  );
};

export default Testimonial;
