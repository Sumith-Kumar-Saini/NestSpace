import React from "react";
import { motion } from "framer-motion";

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="py-12 px-4 sm:px-8 bg-eggshell"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-grotesk text-2xl sm:text-3xl text-charcoal mb-6">
          Features
        </h2>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="font-satoshi text-lg text-charcoal flex items-center"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="w-2 h-2 bg-sandBrown rounded-full mr-3"></span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default FeatureList;
