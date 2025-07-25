import React from "react";
import { motion } from "framer-motion";

interface LongDescriptionProps {
  description: string;
}

const LongDescription: React.FC<LongDescriptionProps> = ({ description }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-12 px-4 sm:px-8 bg-charcoal text-eggshell"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-grotesk text-2xl sm:text-3xl mb-6">
          About the Product
        </h2>
        <p className="font-satoshi text-lg leading-relaxed">{description}</p>
      </div>
    </motion.section>
  );
};

export default LongDescription;
