
"use server";
import axiosInstance from "@/lib/axiosInstance";

export const createImageUpload = async (donation:any) => {
    
    try {
      const { data } = await axiosInstance.post("/images/upload", donation);
  
      return data;
    } catch (error: any) {
        console.log(error,'error');
      return error?.response?.data;
    }
  };


  export const fetchImages = async (page: number, perPage: number) => {
    try {
      const { data } = await axiosInstance.get(`/images?page=${page}&perPage=${perPage}`);
  
      return data;
    } catch (error: any) {
      return error?.response?.data
  }
}

export const deleteImage = async (id: string) => {
    try {
      const { data } = await axiosInstance.delete(`/images/${id}`);
  
      return data;
    } catch (error: any) {
      return error?.response?.data
  } 
};