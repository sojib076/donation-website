"use client"
import StripeWrapper from "@/components/ui/CheckoutForm";
import { useSearchParams } from "next/navigation";


const page =  () => {

 
    const searchParams = useSearchParams();
    const username = searchParams.get("name");
    const email = searchParams.get("email");
    const amount = searchParams.get("amount");
    const donation = searchParams.get("donation");

    return (
        <div>
            
              
               <StripeWrapper amount={parseInt(amount)} donation={donation} 
                email={email} username={username}
               />

            
           

        </div>
    );
};

export default page;