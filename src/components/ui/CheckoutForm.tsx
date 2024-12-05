"use client";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";


// Your Stripe publishable key
const stripePromise = loadStripe('pk_test_51QJAsOGfdOoPNQ6XawUT6DyY7Iq9vN2wzBN7nKbS9cZqryJB0OgNEEnRI2HtOF7NhB4zC79nPoDoxIk0e12CpLB600TvzrEtH2');

interface CheckoutFormProps {
  amount: number;
  donation: string;
  email: string;
  name: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ amount, donation ,name,email}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) {
      alert("Stripe has not loaded yet. Please try again.");
      return;
    }

    const payload = {
      email: email,
      name: name,
      amount:  amount,
      donationID: donation,
    };

    setLoading(true);

    try {
      
      const { data } = await axios.post(`http://localhost:5000/api/v1/payments/createpayment`, 
        
        payload, 
        {
            headers: {
            "Content-Type": "application/json",
            },
        }

      );

      console.log(data?.data?.status      );
      const success = data?.data?.status;
      const clientSecret = data?.data.client_secret;
     
     
      if (!clientSecret) {
        console.log("Payment Failed");
        return;
        
      }

      const {error,paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });
    
        
        if (success === "succeeded") {
            

           const { data } = await axios.post(`http://localhost:5000/api/v1/payments/invoice`,
            payload,
            {
                headers: {
                "Content-Type": "application/json",
                },
            }
           );
              console.log(data);
            
        }



      
      
      
      
    

    
    } catch (error: any) {
      console.log(error);
    
    } finally {
        setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md space-y-4">
    <div className="relative border border-gray-300 rounded-lg p-4 focus-within:ring-2 focus-within:ring-indigo-500">
      <CardElement
        options={{ hidePostalCode: true }}
        className="bg-transparent"
      />
    </div>
    <button
      type="submit"
      disabled={!stripe || loading}
      className={`w-full py-2.5 px-4 rounded-lg text-white font-semibold transition ${
        loading || !stripe
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-700"
      }`}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
          <span>Processing...</span>
        </div>
      ) : (
        `Pay $50`
      )}
    </button>
  </form>
  
  );
};

interface StripeWrapperProps {
  amount: number;
  donation: string;
  email: string;
  username: string;
}

const StripeWrapper: React.FC<StripeWrapperProps> = ({
  amount,
  donation,
  email,
  username,
}) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm 
      amount={amount}
      donation={donation}
      email={email}
      name={username}
      />
    </Elements>
  );
};

export default StripeWrapper;
