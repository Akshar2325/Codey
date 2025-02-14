"use client";

import React from "react";

const DeviceRestriction = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Access Restricted</h1>
        <p className="text-lg">
          This website only supports desktop devices. Please switch to a desktop browser for the best experience.
        </p>
      </div>
    </div>
  );
};

export default DeviceRestriction;