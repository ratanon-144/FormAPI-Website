import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as serverService from "@/services/serverService";
import { CourseData } from "@/models/course.model";
import { RootState, store } from "../store";
import { NextRouter } from "next/router";

interface CourseState {
  courses: CourseData[];
  currentCourse: CourseData | null;
}

const initialState: CourseState = {
  courses: [],
  currentCourse: null,
};

export const getCourses = createAsyncThunk(
  "courses/get",
  async () => {
    return await serverService.getCourses();
  }
);

export const getCourseById = createAsyncThunk(
  "course/getById",
  async (id: string) => {
    return await serverService.getCourseById(id);
  }
);

export const addCourse = createAsyncThunk(
  "course/add",
  async (course: CourseData) => {
    await serverService.addCourse(course);
    store.dispatch(getCourses());
  }
);

export const editCourse = createAsyncThunk(
  "course/edit",
  async ({ id, course }: { id: string, course: CourseData }) => {
    await serverService.editCourse(id, course);
    store.dispatch(getCourses());
  }
);

export const deleteCourse = createAsyncThunk(
  "course/delete",
  async (id: string) => {
    await serverService.deleteCourse(id);
    store.dispatch(getCourses());
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: initialState,
  reducers: {
    setCurrentCourse: (state, action: PayloadAction<CourseData | null>) => {
      state.currentCourse = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
    });
    builder.addCase(getCourseById.fulfilled, (state, action) => {
      state.currentCourse = action.payload;
    });
  },
});

// export common course selector
export const courseSelector = (store: RootState): CourseData[] | undefined =>
  store.course.courses;

export const currentCourseSelector = (store: RootState): CourseData | null =>
  store.course.currentCourse;

// export actions and reducer
export const { setCurrentCourse } = courseSlice.actions;
export default courseSlice.reducer;
