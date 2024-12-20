import { createDonation, deleteDonation, getDonationById, getDonations, markDonationAsCompleted } from "@/Services/DonationServices";
import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "./use-toast";


export const useCreateDonation= ( ) => {
  const queryClient = useQueryClient();
      return useMutation({
        mutationKey: ["CREATE_DONATION"],
        mutationFn: async (donation:FormData) => await createDonation (donation),
        onSuccess: () => {
          toast({
            title: 'Donation created successfully',
            description: 'Your donation has been created successfully',
          } as any);

          queryClient.invalidateQueries({ queryKey: ["GET_DONATIONS"] });
            
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


    // getDonations

    export const useGetDonations = (page = 1, limit = 10) => {
  
        return useQuery({
            queryKey: ["GET_DONATIONS", page, limit],
            queryFn: async () => await getDonations(page, limit),
            refetchOnWindowFocus: true,
            
          
        });
    };  

    // deleteDonation
  
    export const useDeleteDonation = () => {
      const queryClient = useQueryClient();
   
        return useMutation({
            mutationKey: ["DELETE_DONATION"],
            mutationFn: async (id: string) => await deleteDonation(id),

            onSuccess: (data) => {
              toast({
                title: 'Donation deleted successfully',
                description: 'Your donation has been deleted successfully',
              } as any);

              queryClient.invalidateQueries({ queryKey: ["GET_DONATIONS"] });


                
            },
            
        });
    };

    export const useMarkDonationAsCompleted = () => {
      const queryClient = useQueryClient();
   
        return useMutation({
            mutationKey: ["MARK_DONATION_AS_COMPLETED"],
            mutationFn: async (id: string) => await markDonationAsCompleted(id),

            onSuccess: () => {
              toast({
                title: 'Donation marked as completed successfully',
                description: 'Your donation has been marked as completed successfully',
              } as any);

              queryClient.invalidateQueries({ queryKey: ["GET_DONATIONS"] });
            },
            
            onError: (error) => {
              toast({
                title: 'Error',
                description: 'An error occurred while marking donation as completed',
              } as any);
            }
    }  
    )}

    // get donation by id
    export const useGetDonationById = (id: string) => {
  
      return useQuery({
          queryKey: ["GET_DONATION_BY_ID", id],
          queryFn: async () => await getDonationById(id),
          refetchOnWindowFocus: true,
          
          
      });
  }