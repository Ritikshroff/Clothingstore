import React from "react";

const ContactInformation = () => {
  return (
    <form>
      <div className="space-y-8">
        <div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Person Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <input
                  type="text"
                  className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom"
                  placeholder="Enter full name"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
                <input
                  type="email"
                  className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom"
                  placeholder="Enter email address"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-phone text-gray-400"></i>
                </div>
                <input
                  type="tel"
                  className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alternative Phone Number (Optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-phone-alt text-gray-400"></i>
                </div>
                <input
                  type="tel"
                  className="!rounded-button block w-full pl-10 py-2.5 border border-gray-300 shadow-sm focus:ring-custom focus:border-custom"
                  placeholder="Enter alternative phone number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactInformation;
