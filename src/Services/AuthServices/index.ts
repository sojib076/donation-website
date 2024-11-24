"use server";


import axiosInstance from "@/lib/axiosInstance";
import { cookies } from "next/headers";


export const loginUser = async (userData:any) => {
    try {
      const { data } = await axiosInstance.post("/auth/login", userData);
  
      if (data.success) {
        (await cookies()).set("accessToken", data?.data?.accessToken);
      }
  
      return data;
    } catch (error: any) {
    
      return error?.response?.data;
    }
  };

  export const logoutUserCookes = async () => {
   
    (await cookies()).delete("accessToken");
    
  
  };