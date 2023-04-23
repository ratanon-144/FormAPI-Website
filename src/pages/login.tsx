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
import { Box, Stack } from "@mui/material";
import { useAppDispatch } from "@/store/store";
import { signIn } from "@/store/slices/userSlice";
import withAuth from "@/components/withAuth"; 
import { UserData } from "@/models/user.model";
type Props = {};


type signProps = {
  username: string;
  password: string;
  user: UserData;
};
const Login = ({}: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const showForm = ({
    values,
    setFieldValue,
    isValid,
    dirty,
    handleSubmit,
  }: FormikProps<any>) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Field
          component={TextField}
          name="username"
          id="username"
          margin="normal"
          required
          fullWidth
          label="Username"
          autoComplete="email"
          autoFocus
        />
        <Field
          component={TextField}
          name="password"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Stack spacing={1} >
        <Button type="submit" fullWidth size="small" variant="contained" color="success">
          Login
        </Button>
        <Button  fullWidth size="small" variant="contained"  color="warning"  onClick={() => router.push("/register")} >
          Register
        </Button>
        </Stack>
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

              initialValues={{ username: "", password: "" }}
              onSubmit={async (values:any) => {
              
                const response = await dispatch(signIn(values)); 
                if (response.meta.requestStatus === "rejected") {
                  alert("Login failed");
                } else {
                  router.prefetch("/stock");
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

export default withAuth(Login);

