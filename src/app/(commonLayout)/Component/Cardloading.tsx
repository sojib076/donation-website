import React from 'react';

const Cardloading = () => {
    return (
        <div className="lg:max-w-[400px] bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
        {/* Image Section */}
        <div className="relative h-[250px] bg-gray-300">
            <div className="absolute top-4 right-4 w-16 h-6 bg-gray-200 rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="p-6">
            {/* Title */}
            <div className="h-6 bg-gray-200 rounded-md mb-4"></div>
            {/* Description */}
            <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-200 rounded-md"></div>
                <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
            </div>

            {/* Progress Info */}
            <div className="flex justify-between items-center mb-4">
                <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded-md w-1/6"></div>
                <div className="h-4 bg-gray-200 rounded-md w-1/4"></div>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div className="absolute top-0 left-0 h-2 bg-gray-300"></div>
            </div>

            {/* Button */}
            <div className="w-full h-12 bg-gray-200 rounded-md"></div>
        </div>
    </div>
    );
};

export default Cardloading;