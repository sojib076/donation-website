import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")?.value;
  
    let decodedToken = null;
  
    if (accessToken) {
      decodedToken = await jwtDecode(accessToken);
  
      return {
        _id: decodedToken._id,
        name: decodedToken.name,
        email: decodedToken.email,
        role: decodedToken.role,
        img: decodedToken.img,
      };
    }
    return decodedToken;
  };