
// upload images

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { createImageUpload, deleteImage, fetchImages } from "@/Services/Images";



export const usecreateImageUpload= ( ) => {
    const queryClient = useQueryClient();
        return useMutation({
          mutationKey: ["CREATE_IMAGE_UPLOAD"],
          mutationFn: async (donation:FormData) => await createImageUpload (donation),
          onSuccess: () => {
            toast({
                title: 'Image uploaded successfully',
                description: 'Your image has been uploaded successfully',
            } as any);
  
            queryClient.invalidateQueries({ queryKey: [" Image uplaod  "] });
              
          },
          onError: (error) => {
            console.log(error);
            toast({
              title: 'Error',
              description: 'An error occurred while creating donation',
            } as any);
          },
  
        
        });
      };




// 
interface GetImagesParams {
    page: number;
    limit: number;
}

export const useGetImages = ( page, limit ) => {
    console.log(page, limit , ' from hook');
    return useQuery({
        queryKey: ["GET_IMAGES", page, limit],
        queryFn: async () => await fetchImages(page, limit),
    });
};


export const useDeleteImage = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["DELETE_IMAGE"],
        mutationFn: async (id: string) => await deleteImage(id),
        onSuccess: () => {
            toast({
                title: 'Image deleted successfully',
                description: 'Your image has been deleted successfully',
            } as any);

            queryClient.invalidateQueries({ queryKey: ["GET_IMAGES"] });
        },
        onError: (error) => {
            console.log(error);
            toast({
                title: 'Error',
                description: 'An error occurred while deleting image',
            } as any);
        },
    });
};