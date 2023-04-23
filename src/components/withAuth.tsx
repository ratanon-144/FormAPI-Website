import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import {
  isAuthenticatedSelector,
  isAuthenticatingSelector,
  userSelectorAres
} from "@/store/slices/userSlice";
import { RootState } from "@/store/store";
import { isClient } from "@/utils/commonUtil";

// eslint-disable-next-line react/display-name
const withAuth = (WrappedComponent: React.FC) => (props: any) => {
  // this hoc only supports client side rendering.
  if (isClient()) {
    const router = useRouter();
    const { route } = router;
    const isAuthenticated = useSelector(isAuthenticatedSelector);
    const isAuthenticating = useSelector(isAuthenticatingSelector);
    const  isUserAres = useSelector(userSelectorAres);
    // is fetching session (eg. show spinner)
    if (isAuthenticating) {
      return null;
    }
    if (route !== "/login" && route !== "/register") {
      if (!isAuthenticated) {
        router.push(`/login`);
        return null;
      } else if (route == "/") {
        router.push('/instructor'); // default page after login when call root path
       
        if (isUserAres.user?.level === "teacher") {
          console.log("teacher");
      } else if (isUserAres.user?.level === "student") {
        console.log("student");
       }
        return null;
        
      }
    } else {
      if (isAuthenticated) {

       
        router.push('/instructor'); // default page after login
      
        if (isUserAres.user?.level === "teacher") {
          console.log("teacher");
      } else if (isUserAres.user?.level === "student") {
        console.log("student");
    }
        return null;
      }
    }
 
      // If user is not logged in, return login component
      // if (route !== "/login" && route !== "/register") {
      //   if (!isAuthenticated) {
      //     router.push(`/login`);
      //     return null;
      //   } else if (route == "/") {
      //     router.push('/instructor'); // default page after login when call root path
      //     return null;
      //   }
      // } else {
      //   if (isAuthenticated && isUserAres.user?.level === "teacher") {
      //     router.push('/instructor'); // default page after login
      //     return null;
      //   }else if (isAuthenticated && isUserAres.user?.level === "student") {
      //     router.push('/student'); //  default page after login
      //     return null;
      //   }
      // }

    // If user is logged in, return original component
    return <WrappedComponent {...props} />;
  }

  return null;
};

export default withAuth;
