import axiosInstance from "@/lib/axiosInstance";


export const createpayment = async (payload) => {
    try {
      const { data } = await axiosInstance.post(`/payments/createpayment`);
      return data;
    } catch (error: any) {
      return error?.response?.data;
    }
};