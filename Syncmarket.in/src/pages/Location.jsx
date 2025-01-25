import React from "react";

const Location = () => {
  return (
    <form>
      <div className="space-y-8">
        <div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-map-marker-alt text-gray-400"></i>
                </div>
                <input
                  type="text"
                  className="w-full pl-10 py-2.5 border border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                  placeholder="Enter street address"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-city text-gray-400"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 py-2.5 border border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                    placeholder="Enter city"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State/Province
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-map text-gray-400"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 py-2.5 border border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                    placeholder="Enter state"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 py-2.5 border border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                    placeholder="Enter postal code"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-globe text-gray-400"></i>
                  </div>
                  <select className="w-full pl-10 py-2.5 border border-gray-300 focus:border-custom focus:ring-custom !rounded-button">
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Address Information
              </label>
              <textarea
                className="w-full pl-3 py-2.5 border border-gray-300 focus:border-custom focus:ring-custom !rounded-button"
                rows="3"
                placeholder="Enter any additional address information"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Location;
