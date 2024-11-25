import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DOMPurify from 'dompurify';
export type Donation = {
    _id: number
    title: string
    description: string
    status: 'active' | 'completed'
    target: number
    current: number
    progress: number
    image: string
}
const Card = ({data}:{
    data:Donation
}) => {
    
    
    const slicededDescription = data.description.slice(0, 100);


    return (
        <div key={data._id} className="lg:max-w-[400px]  bg-white rounded-lg shadow-lg overflow-hidden">

            <div className="relative h-[250px] ">
                <Image
                
                height={250}
                width={400}

                src={data.image} alt="" 

                className="w-full h-full object-cover "
                />

                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {
                        data.status === 'active' ? 'Active' : 'Completed'
                    }
                </div>

            </div>


            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    {data.title}
                </h2>
                <div className="text-sm text-gray-600 mb-4">
                    <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(slicededDescription)}}></div>
                </div>
              

                {/* Progress Info */}
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-800"> 
                        ${data.current} Raised
                    </span>
                    <span className="text-sm font-medium text-gray-800"> 
                        
                        {/* get the percetnt */}
                        {data.progress}%

                    </span> 
                    <span className="text-sm font-medium text-gray-800">
                        ${data.target} Target
                    </span>

                </div>

                {/* Progress Bar */}
                <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                    <div style={{ width: `${data.progress}%` }} className="h-2 bg-green-500"></div>

                </div>

              
                <Link href={`causes/${data._id}?title=${data.title}`}>
                <button className="w-full py-3 bg-orange-500 text-white font-semibold  rounded-md hover:bg-orange-600 transition duration-200">
                    Donate Now
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Card;