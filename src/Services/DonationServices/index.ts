"use server";
import axiosInstance from "@/lib/axiosInstance";


export const createDonation = async (donation:any) => {
    console.log(donation,'donation data');
    try {
      const { data } = await axiosInstance.post("/admin/create-donation", donation);
  
  
        console.log(data,'data from donation');
      return data;
    } catch (error: any) {
        console.log(error,'error');
      return error?.response?.data;
    }
  };


export const getDonations = async (page: any,limit: any) => {
    try {
      const { data } = await axiosInstance.get(`/admin/get-donations?page=${page}&limit=${limit}`);
  
      return data;
    } catch (error: any) {
      return error?.response?.data;
    }
};

export const deleteDonation = async (id: any) => {
    try {
      const { data } = await axiosInstance.delete(`/admin/delete-donation/${id}`);
  
      return data;
    } catch (error: any) {
      return error?.response?.data;
    }
};

export const markDonationAsCompleted = async (id: any) => {
  console.log(id,'id');
    try {
      const { data } = await axiosInstance.patch(`/admin/mark-donation-as-collected/${id}`);
  
      return data;
    } catch (error: any) {
      return error?.response?.data;
    }
};


export const getDonationById = async (id: any) => {
    try {
      const { data } = await axiosInstance.get(`/admin/get-donation/${id}`);
  
      return data;
    } catch (error: any) {
      return error?.response?.data;
    }
};
