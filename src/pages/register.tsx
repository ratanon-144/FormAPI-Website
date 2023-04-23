import React, { ReactElement } from "react";

import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field, FormikProps } from "formik";
import Router, { useRouter } from "next/router";
import { Box, FormControl, InputLabel ,Select ,MenuItem,SelectChangeEvent} from "@mui/material";
import { useAppDispatch } from "@/store/store";
import { signUp } from "@/store/slices/userSlice";
import withAuth from "@/components/withAuth";

type Props = {};

const Register = ({}: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [userType, setUserType] = React.useState("");
  const handleUserTypeChange = (event: SelectChangeEvent) => {
    setUserType(event.target.value as string);
  };
  const showForm = ({ values, setFieldValue, isValid,dirty, handleSubmit, }: FormikProps<any>) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Field component={TextField}  name="username"  id="username"  margin="normal"  required   fullWidth   label="Username"   autoComplete="email"   autoFocus />
        <Field component={TextField}  name="password"  margin="normal"  required   fullWidth   label="Password"   type="password"   id="password"   autoComplete="current-password" />
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="level-label">Level</InputLabel>
          <Field as={Select} labelId="level-label" name="level">
            <MenuItem value="instructor">Instructor</MenuItem>
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="admin">admin</MenuItem>
          </Field>
        </FormControl> 
        <Field component={TextField}  name="email"  id="email"  margin="normal"  required   fullWidth   label="email"   autoComplete="email"   autoFocus />
        <Field component={TextField}  name="title"  id="title"  margin="normal"  required   fullWidth   label="title"      autoFocus />
        <Field component={TextField}  name="firstname"  id="firstname"  margin="normal"  required   fullWidth   label="firstname"    autoFocus />
        <Field component={TextField}  name="lastname"  id="lastname"  margin="normal"  required   fullWidth   label="lastname"     autoFocus />
       
          <Button type="submit" fullWidth variant="contained" color="primary">
          Register
        </Button>
        <Button
          fullWidth
          size="small"
          color="primary"
          onClick={() => router.push("/login")}
        >
          Cancel
        </Button>
      </Form>
    );
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/static/img/next_login.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Formik
                initialValues={{ username: "", password: "" ,level:"" ,email:"",title:"",firstname:"",lastname:""}}
                onSubmit={async (values:any) => {
                 // console.log("Form submitted with values: ", values);
                  const response = await dispatch(signUp(values));
                  if (response.meta.requestStatus === "rejected") {
                    alert("Register failed");
                  } else {
                    const valuesString = JSON.stringify(values, null, 2);
                   // alert(`Registration successful. Form values:\n${valuesString}`);
                   router.push("/login");
                  }
                }
          }
            >
              {(props) => showForm(props)}
            </Formik>
          </CardContent>
        </Card>

        <style jsx global>
          {`
            body {
              min-height: 100vh;
              position: relative;
              margin: 0;
              background-size: cover;
              background-color : #e2e2e2;
              text-align: center;
            }
          `}
        </style>
      </Box>
    </React.Fragment>
  );
};

export default withAuth(Register);
