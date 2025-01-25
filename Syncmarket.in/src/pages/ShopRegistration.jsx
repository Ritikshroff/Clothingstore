import React from "react";

const ShopRegistration = () => {
  return (
    <form className="space-y-8">
      <div>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shop Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-store text-gray-400"></i>
              </div>
              <input
                type="text"
                className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom"
                placeholder="Enter shop name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Type
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-briefcase text-gray-400"></i>
              </div>
              <select className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom appearance-none bg-none">
                <option>Select business type</option>
                <option>Retail Store</option>
                <option>Restaurant</option>
                <option>Service Provider</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Business Registration Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-id-card text-gray-400"></i>
              </div>
              <input
                type="text"
                className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom"
                placeholder="Enter registration number"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Website (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fas fa-globe text-gray-400"></i>
              </div>
              <input
                type="url"
                className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom"
                placeholder="Enter website URL"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ShopRegistration;
