"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";
import React from "react";


const CauseId = () => {

    const [selectedAmount, setSelectedAmount] = React.useState(10)
    const [customAmount, setCustomAmount] = React.useState(0)

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


        const data = {
            amount: selectedAmount,
            customAmount: customAmount,
            firstName: e.currentTarget.firstName.value,
            lastName: e.currentTarget.lastName.value,
            email: e.currentTarget.email.value
        }
        console.log(data);





    }
    return (
        <div>
            <div className=" lg:h-[400px] h-48 opacity-60 bg-[#292929] lg:p-28 p-5" >
                <div className=" text-white  lg:text-left lg:mt-0 mt-10 text-center lg:text-[40px]  text-2xl font-semibold lg:leading-[46px]">Help Children Rise out of Poverty</div>
            </div>

            <div className="lg:mt-[120px] mt-16 p-5">

                <div className="relative">
                    <div className="absolute top-4 right-[13%] bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Environment
                    </div>

                    <div className="lg:w-[80%] w-[100%] lg:h-[600px] h-[300px] bg-[#d9d9d9] mx-auto rounded-md " />
                    <div className="lg:w-[70%] relative top-[-80px]  bg-gray-50 rounded-[10px] shadow mx-auto lg:p-12 p-5" >
                        <h1 className="max-w-[810px] text-[#292929] text-[40px] font-semibold font-['Poppins'] leading-[46px]">Donate Now</h1>
                        <div className="lg:flex lg:gap-10 lg:items-center mt-5 ">

                            <div className="relative lg:w-[70%] h-2 bg-gray-200 rounded-full overflow-hidden  ">
                                <div className="h-full bg-green-500" style={{ width: 30 }} />

                            </div>
                            <div className="flex  gap-1 -center lg:mt-0 mt-2 ">
                                <span className="text-sm  font-bold text-green-800">$7,250 Raised</span>

                                <span className="text-sm font-medium text-gray-800">of </span>

                                <span className="text-sm font-medium text-yellow-500 *:font-semibold
                                
                                "> $20,000 Raised </span>
                            </div>
                        </div>

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
                                            <Input id="firstName" placeholder="First Name"
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
                                        <Input id="email" type="email" placeholder="Your Email"
                                            className="h-[58px] w-full rounded-md"
                                        />
                                    </div>
                                </div>

                                <div className="lg:flex items-center justify-between">
                                    <Button type="submit" size="lg"


                                        className=" w-[193px] h-[58px] gap-2 ">
                                        Donate Now <Heart className="w-4 h-4" />
                                    </Button>
                                    <div className="text-lg font-semibold">
                                        Donation Total: <span className="text-primary">${selectedAmount}</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>







            </div>
        </div>
    );
};

export default CauseId;