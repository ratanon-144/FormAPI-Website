export interface CourseData {
  id?:         number;
  id_code:    string;
  name:       string;
  createdAt?:  Date;
  updatedAt?:  Date;
  Enrollment?: Enrollment;
}

export interface Enrollment {
  createdAt: Date;
  updatedAt: Date;
  CourseId:  number;
  UserId:    number;
}
