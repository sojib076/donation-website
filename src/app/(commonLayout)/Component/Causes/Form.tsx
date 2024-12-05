"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from 'next/link';

const Form = (data: any) => {

    const donation = data?.data?.data._id

    const [selectedAmount, setSelectedAmount] = React.useState(10)
    const [customAmount, setCustomAmount] = React.useState(0)
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [customAmountError, setCustomAmountError] = React.useState(false)



    const presetAmounts = [10, 25, 50, 100, 200, 250]

    const handleAmountClick = (amount: number) => {
        setSelectedAmount(amount)
        setCustomAmount(amount)
    }

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value

        if (value === "") {
            setCustomAmount(0)
            setCustomAmountError(false)
            setSelectedAmount(0)
        } else {
            setCustomAmount(parseInt(value))
            setSelectedAmount(parseInt(value))
            setCustomAmountError(false)
        }


    }

    const handelDonate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (customAmount <= 0) {
            setCustomAmountError(true)
        }
    }
    return (
        <div>
            <form
                onSubmit={handelDonate}

                className="space-y-8 mt-7">
                <div className="space-y-4">
                    <div className="  grid grid-cols-3 gap-2 lg:flex justify-between items-center">
                        {presetAmounts.map((amount) => (
                            <Button
                                key={amount}
                                type="button"
                                variant={selectedAmount === amount ? "default" : "outline"}
                                onClick={() => handleAmountClick(amount)}
                                className="min-w-[58px] min-h-[58px] rounded "
                            >
                                ${amount}
                            </Button>
                        ))}
                        <Input
                            type="number"
                            placeholder="Insert Custom Value"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className="lg:max-w-[342px] w-[300px] h-[58px] rounded-md"
                        />

                    </div>
                    {
                        customAmountError && (
                            <div className="text-red-500 text-sm absolute font-bold">
                                Please enter a amount greater than 0

                            </div>
                        )
                    }

                </div>


                <div className="space-y-6 lg:py-10">
                    <h1>
                        Personal Information
                    </h1>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">
                                First Name <span className="text-red-500">*</span>
                            </Label>
                            <Input 
                                onChange={(e) => setUsername(e.target.value)}
                            
                            id="firstName" placeholder="First Name"
                                className="h-[58px] w-full rounded-md"

                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Last Name"
                                className="h-[58px] w-full rounded-md"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">

                        <Label htmlFor="email">

                            
                            Email <span className="text-red-500">*</span>
                        </Label>
                        <Input id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        type="email" placeholder="Your Email"
                            className="h-[58px] w-full rounded-md"
                        />
                    </div>
                </div>

                <div className="lg:flex items-center justify-between">
                    <Link
                        href="/checkout/[amount]/[donation]"
                        as={`/checkout/${selectedAmount}/${donation}?name=${username}&email=${email}&amount=${selectedAmount}&donation=${donation}`}
                    >
                        <Button
                            type="submit"

                            className="w-full lg:w-auto"
                        >
                            Donate Now
                        </Button>
                    </Link>
                    <div className="text-lg font-semibold">
                        Donation Total: <span className="text-primary">${selectedAmount}</span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;