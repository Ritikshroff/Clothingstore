import React from "react";
import { Link } from "react-router-dom";
const ShopRegistrationComplete = () => {
  return (
    <div>
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto bg-green-500 text-white rounded-full flex items-center justify-center mb-4">
          <i className="fas fa-check text-2xl"></i>
        </div>
        <p className="text-xl font-medium text-gray-900 mb-2">
          Thank you for registering!
        </p>
        <p className="text-gray-600">
          Your shop registration has been submitted successfully.
        </p>

        <div className="mt-6 text-center">
          <p className="text-m text-gray-600">
            Go to{" "}
            <Link
              to="/"
              className="font-medium text-custom hover:text-custom-600"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopRegistrationComplete;
