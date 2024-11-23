/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./Services";


const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

 
  const accessToken = (await cookies()).get("accessToken")?.value;

  if (!accessToken) {
    
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
     
      return NextResponse.redirect(
        new URL(
          pathname ? `/login?redirect=${pathname}` : "/login",
          request.url
        )
      );
    }
  }



const decodedToken = await getCurrentUser();



  const role = decodedToken?.role;




  if (role === "admin" && pathname.match(/^\/admin-dashboard/)) {
    return NextResponse.next();
  }

  if (role === "user" && pathname.match(/^\/dashboard/)) {
    return NextResponse.next();
  }
  if (role === "user" || role==="admin" && pathname === "/newsfeed") {
    return NextResponse.next();
  }


  return NextResponse.redirect(new URL("/", request.url));
}



export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/admin-dashboard/:page*",
   
  ],
};


