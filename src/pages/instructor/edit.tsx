import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import { CourseData } from "@/models/course.model";
import { editCourse } from "@/services/serverService";
import { Card, CardContent, Typography, CardActions,Button} from "@mui/material";
import { Field, Form, Formik, FormikProps } from "formik";
import { TextField } from "formik-material-ui";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

type Props = {
  course?: CourseData;
};

const Edit = ({ course }: Props) => {
  const router = useRouter();

  const showForm = ({
    values,
    setFieldValue,
    isValid,
  }: FormikProps<CourseData>) => {
    return (
      <Form>
        <Card>
          <CardContent sx={{ padding: 4 }}>
            <Typography gutterBottom variant="h3">
              Edit Course
            </Typography>

            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextField}
              name="id_code"
              type="text"
              label="Code"
              disabled
            />

            <Field
              style={{ marginTop: 16 }}
              fullWidth
              component={TextField}
              name="name"
              type="text"
              label="Name"
            />
           
          </CardContent>
          <CardActions>
            <Button
              disabled={!isValid}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginRight: 1 }}
            >
              Save
            </Button>
            <Link href="/instructor" passHref>
              <Button variant="outlined" fullWidth>
                Cancel
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Form>
    );
  };

  const initialValues: CourseData = {
    id_code: course?.id_code ?? "",
    name: course?.name ?? "",
  };

  return (
    <Layout>
      <Formik
        validate={(values) => {
          let errors: any = {};
          if (!values.name) errors.name = "Enter name";
          return errors;
        }}
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting }) => {
          await editCourse(values);
          router.push("/instructor");
          setSubmitting(false);
        }}
      >
        {(props) => showForm(props)}
      </Formik>
    </Layout>
  );
};

export default withAuth(Edit);
