

import { loginSuccess } from "@/Redux/slices/authSlice";
import { loginUser } from "@/Services/AuthServices";
import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";

type UserLoginData = {
  email: string;
  password: string;
};


export const useUserLogin = ( ) => {

  const dispatch = useDispatch();
    return useMutation({
      mutationKey: ["USER_LOGIN"],
      mutationFn: async (userData:UserLoginData) => await loginUser(userData),
      onSuccess: (data) => {
        if (data.success) {
          console.log('success');
          const accessToken = data?.data?.accessToken;
          const decoded =    jwtDecode(accessToken) as {_id: string, name: string, role: string};
          console.log(decoded);
          dispatch(loginSuccess({ id: decoded._id, name: decoded.name, role: decoded.role }));
        }else{
            console.log('something went wrong');
        }
      },
    
    });
  };




