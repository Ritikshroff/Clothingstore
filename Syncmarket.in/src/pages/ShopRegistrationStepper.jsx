import React, { useState } from "react";
import ShopRegistration from "./ShopRegistration";
import ContactInformation from "./ContactInformation";
import Location from "./Location";
import FinalVerification from "./FinalVerification";
import ShopRegistrationComplete from "./ShopRegistrationComplete";

const ShopRegistrationStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Business Info",
      content: (
        <>
          <ShopRegistration />
        </>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          <ContactInformation />
        </>
      ),
    },
    {
      title: "Location",
      content: (
        <>
          <Location />
        </>
      ),
    },
    {
      title: "Verification",
      content: (
        <>
          <FinalVerification />
        </>
      ),
    },
    {
      title: "Registration Complete",
      content: (
        <>
          <ShopRegistrationComplete />
        </>
      ),
    },
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-gray-50 font-['Inter']">
      <nav className="bg-white shadow-sm">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            {steps[currentStep].title}
          </h1>
          <p className="mt-2 text-gray-600">
            Complete the form below to register your shop
          </p>
        </div>

        <div className="bg-white shadow rounded-lg mb-8">
          <div className="px-8 pt-6">{steps[currentStep].content}</div>

          {steps[currentStep].title !== "Registration Complete" && (
            <div className="px-8 pb-8">
              <div className="mt-8 flex items-center justify-between">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 !rounded-button"
                  >
                    Back
                  </button>
                )}
                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-custom hover:bg-custom-600 !rounded-button"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-custom hover:bg-custom-600 !rounded-button"
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 text-center text-sm text-gray-500">
            © 2024 Shop Registration. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopRegistrationStepper;
