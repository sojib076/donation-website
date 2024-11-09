import React from 'react';

const Card = (index:number) => {
    return (
        <div className="lg:max-w-[400px]  bg-white rounded-lg shadow-lg overflow-hidden">

            <div className="relative h-[250px] bg-gray-300">

                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Environment
                </div>
            </div>


            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Plant Tree, Save Earth & Lives Secure the Future
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                    Massa sed elementum tempus egestas sed sed risus pretium quam. Bibendum neque egestas congue quisque egestas diam.
                </p>

                {/* Progress Info */}
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-800">$7,250 Raised</span>
                    <span className="text-sm font-medium text-gray-800">35%</span>
                    <span className="text-sm font-medium text-gray-800">$20,000 Goal</span>

                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-green-500" style={{ width: index * 30 }} />

                </div>

                {/* Donate Button */}
                <button className="w-full py-3 bg-orange-500 text-white font-semibold  rounded-md hover:bg-orange-600 transition duration-200">
                    Donate Now
                </button>
            </div>
        </div>
    );
};

export default Card;