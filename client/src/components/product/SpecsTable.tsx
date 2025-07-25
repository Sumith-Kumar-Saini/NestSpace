import React from "react";
import { motion } from "framer-motion";

interface SpecsTableProps {
  specs: Record<string, string>;
}

const SpecsTable: React.FC<SpecsTableProps> = ({ specs }) => {
  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="py-12 px-4 sm:px-8 bg-charcoal text-eggshell"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-grotesk text-2xl sm:text-3xl mb-6">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(specs).map(([key, value], index) => (
            <motion.div
              key={index}
              className="flex justify-between border-b border-softGray py-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="font-satoshi text-lg">{key}</span>
              <span className="font-satoshi text-lg text-softGray">
                {value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SpecsTable;
