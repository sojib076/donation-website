"use server";

import axiosInstance from "@/lib/axiosInstance";


export const createBlog = async (blog:any) => {
    console.log(blog,'blog data');
    try {
      const { data } = await axiosInstance.post("/blogs/create", blog);
  
  
        console.log(data,'data from blog');
      return data;
    } catch (error: any) {
        console.log(error,'error');
      return error?.response?.data;
    }
  }


  export const getBlogs = async (page: any,perPage: any) => {
    try {
      const { data } = await axiosInstance.get(`/blogs/all?page=${page}&perPage=${perPage}`);
  
      return data;
    } catch (error: any) {
      return error?.response?.data;
    }

  }    