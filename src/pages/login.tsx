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
import { Box, Icon } from "@mui/material";
import router from "next/router";
import { orange } from "@mui/material/colors";
import { fontSize } from "@mui/system";
import QuizIcon from "@mui/icons-material/Quiz";

type Props = {};

export default function login({}: Props) {
  function showForm({
    values,
    setFieldValue,
    isValid,
    dirty,
    handleSubmit,
  }: FormikProps<any>): JSX.Element {
    return (
      <Form onSubmit={handleSubmit}>
        <Field
          component={TextField}
          name="username"
          id="username"
          margin="normal"
          required
          fullWidth
          label="ชื่อผู้ใช้(เฉพาะ@kmitl.ac.th)"
          autoComplete="email"
          autoFocus
        />
        <Field
          component={TextField}
          name="password"
          margin="normal"
          required
          fullWidth
          label="รหัสผ่าน"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          เข้าสู่ระบบ
        </Button>

        <br />
        <h5 align="center">หรือ เข้าสู่ระบบด้วย Google</h5>

        <Button
          fullWidth
          size="small"
          color="primary"
          onClick={() => router.push("https://accounts.google.com")}
        >
          <img src="static/img/google.jpg" alt="" width="42" height="42" />
          
        </Button>
      </Form>
    );
  }

  function signIn(values: { username: string; password: string }): any {
    throw new Error("Function not implemented.");
  }

  function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
  }

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

          <Typography variant="h4" color={"#f57c00"} fontWeight={"bold"} textAlign={"center"}>
            QIUZ
          </Typography>
          <Typography variant="h4" color={"#2F4F4F"} fontWeight={"bold"} textAlign={"center"}>
            BANK
          </Typography>

          <br />
          <br />
          <Typography variant="h5"  color={"#2F4F4F"} fontWeight={"bold"} textAlign={"center"}>
            ลงชื่อเข้าสู่ระบบ
          </Typography>

          <CardContent>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={async (values) => {
                const response = await dispatch(signIn(values));
                if (response.meta.requestStatus === "rejected") {
                  alert("Login failed");
                } else {
                  router.push("/course");
                }
              }}
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
              background-color:while (100) {
              }
              text-align: center;
            }
          `}
        </style>
      </Box>
    </React.Fragment>
  );
}

function userAppDispatch() {
  throw new Error("Function not implemented.");
}
