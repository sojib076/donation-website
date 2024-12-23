import { createBlog } from "@/Services/Blog";
import { useMutation } from "@tanstack/react-query";



export const useCreateBlog = ( ) => {
    return useMutation({
      mutationKey: ["CREATE_BLOG"],
      mutationFn: async (blog:any) => await createBlog(blog),
      onSuccess: (data) => {
        if (data.success) {
          console.log('success');
        }else{
            console.log('something went wrong');
        }
      },
    
    });
};