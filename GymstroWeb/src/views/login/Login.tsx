import React, { useEffect } from "react";
import "./component/Login.css";
import { useHistory } from "react-router-dom";
import { getAccessToken } from "../../acesstoken";
import { Formik, FormikHelpers, Form, FormikProps, ErrorMessage } from "formik";
import * as Yup from "yup";

interface ValueProps {
  username: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("required"),
  password: Yup.string().required("required"),
});

const initialValues: ValueProps = {
  username: "",
  password: "",
};

export const LoginPage: React.FC = () => {
  const history = useHistory();
  React.useEffect(() => {
    if (getAccessToken()) {
      history.push("/dashboard");
    }
  }, [history]);

  const handleSubmit = async (values: ValueProps) => {
    console.log("inside handlesubmit");
    alert(`tried to login ${values.username} ${values.password}`);
    // const response = await login({
    //   variables: {
    //     usernameOrEmail: values.email,
    //     password: values.password,
    //   },
    //   update: UpdateHandlers.login,
    // });
    // if (response && response.data?.login.accessToken) {
    //   setSubmitting(false);
    //   setAccessToken(response.data.login.accessToken!);
    //   history.push("/dashboard");
    // } else if (response.data?.login.shouldUpdatePassword) {
    //   setSubmitting(false);
    //   setShowNewPassword(true);
    // } else {
    //   setSubmitting(false);
    //   setShowLogInFailed(true);
    //}
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center h-100">
        <div className="card">
          <div className="card-header">
            <h3>Sign In</h3>
            <div className="d-flex justify-content-end social_icon">
              <span>
                <i className="fab fa-facebook-square"></i>
              </span>
              <span>
                <i className="fab fa-google-plus-square"></i>
              </span>
              <span>
                <i className="fab fa-twitter-square"></i>
              </span>
            </div>
          </div>
          <div className="card-body">
            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={handleSubmit}
            >
              {(formikProps: FormikProps<ValueProps>) => (
                <Form>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="username"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.username}
                    />
                  </div>
                  <ErrorMessage name="username">
                    {(msg: string) => (
                      <div style={{ color: "red", marginTop: 0 }}>{msg}</div>
                    )}
                  </ErrorMessage>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="password"
                      onChange={formikProps.handleChange}
                      onBlur={formikProps.handleBlur}
                      value={formikProps.values.password}
                    />
                  </div>
                  <ErrorMessage name="username">
                    {(msg: string) => (
                      <div style={{ color: "red", marginTop: 0 }}>{msg}</div>
                    )}
                  </ErrorMessage>

                  {/* <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right loginBtn"
                    />
                  </div> */}
                  {/* <i className="fa fa-spinner fa-spin"></i> */}
                  <button className="btn float-right loginBtn" type="submit">
                    {true && <i className="fa fa-spinner fa-spin"></i>}
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-center links">
              Don't have an account?<a href="#">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
