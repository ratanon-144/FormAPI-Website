import { SignUp, SignIn, GetSession } from "@/models/auth.model";
import { ProductData } from "@/models/product.model";
import { CourseData } from "@/models/course.model";
import { UserData } from "@/models/user.model";
import httpClient from "@/utils/httpClient";
import axios from "axios";

type signProps = {
  username: string;
  password: string;
};

export const signUp = async (user: signProps): Promise<SignUp> => {
  const response = await httpClient.post<SignUp>("/authen/register", user);
  return response.data;
};

export const signIn = async (user: signProps): Promise<SignIn> => {
  const { data: response } = await httpClient.post<SignIn>(
    `/auth/signin`,
    user,
    {
      baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
    }
  );
  return response;
};

export async function signOut() {
  const response = await httpClient.get(`/auth/signout`, {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
  });
  return response.data;
}

export const getSession = async (): Promise<GetSession> => {
  const response = await httpClient.get(`/auth/session`, {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
  });

  return response.data;
};

export const getProfiles = async (): Promise<UserData> => {
    // return (await httpClient.get(`/auth/profile`)).data;
    const response = await httpClient.get(`/auth/profile`, {
      baseURL: process.env.NEXT_PUBLIC_BASE_URL_LOCAL_API,
    }); 
    return response.data;
};
 
export const getCourses = async (): Promise<CourseData[]> => {
  const response = await httpClient.get("/course/courses");
  return response.data;
};

export const getCourseById = async (id: string): Promise<CourseData> => {
  const response = await httpClient.get(`course/courses/${id}`);
  return response.data;
};

export const addCourse = async (course: CourseData): Promise<void> => {
  await httpClient.post("/course/courses", course);
};

export const editCourse = async (id: string, course: CourseData): Promise<void> => {
  await httpClient.put(`/course/courses/${id}`, course);
};

export const deleteCourse = async (id: string): Promise<void> => {
  await httpClient.delete(`/course/courses/${id}`);
};