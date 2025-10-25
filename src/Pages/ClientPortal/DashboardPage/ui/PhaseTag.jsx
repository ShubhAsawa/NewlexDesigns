import React from "react";

const statusStyles = {
  Development: "bg-[#E32225] text-white",      // Red for development
  Testing: "bg-yellow-600 text-yellow-100",    // Golden for testing
  Live: "bg-green-600 text-white",            // You can adjust this if needed
  Closed: "bg-gray-600 text-gray-100",        // Neutral for closed
  Default: "bg-gray-700 text-gray-300",       // Default styling
};

const PhaseTag = ({ phase }) => {
  const style = statusStyles[phase] || statusStyles.Default;

  return (
    <span className={`text-sm px-3 py-1 rounded-full font-medium ${style}`}>
      {phase}
    </span>
  );
};

export default PhaseTag;
