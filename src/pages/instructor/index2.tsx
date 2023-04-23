import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  getCourses,
  getCourseById,
  addCourse,
  editCourse,
  deleteCourse,
} from "@/store/slices/courseSlice";
import { userID, getSession } from "@/store/slices/userSlice";

const CourseGrid = () => {
  const dispatch = useDispatch();
  const courses = useSelector(getCourses);
  const userId = useSelector(userID);
  const session = useSelector(getSession);

  const [editRowsModel, setEditRowsModel] = useState({});

  const handleEditClick = (id) => {
    setEditRowsModel((prev) => {
      return { ...prev, [id]: true };
    });
  };

  const handleSaveClick = async (id, course) => {
    const updatedCourse = {
      ...course,
      Enrollment: { CourseId: course.id, UserId: userId },
    };
    if (id) {
      await dispatch(editCourse(id, updatedCourse));
    } else {
      await dispatch(addCourse(updatedCourse));
    }
    setEditRowsModel({});
    dispatch(getCourses());
  };

  const handleDeleteClick = async (id) => {
    await dispatch(deleteCourse(id));
    dispatch(getCourses());
  };

  const handleCancelClick = () => {
    setEditRowsModel({});
  };

  const columns = [
    { field: "id_code", headerName: "ID Code", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "createdAt", headerName: "Created At", width: 200 },
    { field: "updatedAt", headerName: "Updated At", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        const id = params.getValue(params.id, "id");
        const isEditMode = editRowsModel[id];
        return isEditMode ? (
          <>
            <button onClick={() => handleSaveClick(id, params.row)}>
              Save
            </button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => handleEditClick(id)}>Edit</button>
            <button onClick={() => handleDeleteClick(id)}>Delete</button>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={courses}
        columns={columns}
        editRowsModel={editRowsModel}
        onEditRowsModelChange={(newModel) => {
          setEditRowsModel(newModel);
        }}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
};

export default CourseGrid;
