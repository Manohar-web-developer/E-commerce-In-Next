import React from "react";

const steps = [
  { id: 1, title: "Information" },
  { id: 2, title: "Shipping" },
  { id: 3, title: "Payment" },
  { id: 4, title: "Review" },
];

const CheckoutSteps = ({ currentStep }) => {
  
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-6">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isActive = step.id === currentStep;
          const isDone = isCompleted || isActive;
          const isLastStep = index === steps.length - 1;

          return (
            <React.Fragment key={step.id}>
              {/* Step circle + label */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className={`flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 font-semibold text-sm sm:text-base transition-all duration-500 ease-in-out
                    ${
                      isDone
                        ? "bg-[#602A0B] border-[#602A0B] text-white"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                >
                  {isCompleted ? (
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-opacity duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <span
                  className={`mt-2 text-xs sm:text-sm font-medium text-center transition-colors duration-500 ease-in-out
                    ${isDone ? "text-[#602A0B]" : "text-gray-400"}`}
                >
                  {step.title}
                </span>
              </div>

              {/* Connecting line */}
              {!isLastStep && (
                <div className="flex-1 h-0.5 mx-1 sm:mx-2 mb-5 sm:mb-6 relative bg-gray-200 overflow-hidden rounded">
                  <div
                    className={`absolute top-0 left-0 h-full bg-[#602A0B] transition-all duration-500 ease-in-out
                      ${isCompleted ? "w-full" : "w-0"}`}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CheckoutSteps;