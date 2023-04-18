import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const postSchema = yup.object().shape({
  title: yup.string().required("This Field is required"),
  body: yup.string().matches(/[^\w]/, 'neet to symbol').matches(/[A-Z]/, 'Need to letter').required().min(5, "too short").max(10, "too long"),
  number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  password: yup.string().matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol'),
  confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match'),
});


export default function Sighup() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20")
      .then((response) => {
        if (response && response.status === 200) {
          setPosts(response.data);
          setLoading(false);
          setError(false);
        } else {
          setError("Error Found");
        }
      })
      .catch((err) => {
        setError("page not found 404");
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <>
  
  <main >
      
      {error ? (
        <>{error}</>
      ) : (
        <div>
          {loading ? (
            <Loading />
          ) : (
            <div>
              <Formik
                validationSchema={postSchema}
                initialValues={{ title: "", body: "" , number: "" , password:"" , confirm_password:"" }}
                onSubmit={(values) => {
                  axios
                    .post("https://jsonplaceholder.typicode.com/posts", {
                      ...values,
                    })
                    .then((response) => {
                      fetchData();
                    });
                }}
              >
                {({ errors, touched }) => (
                  <Form className="form">
                    <div>
                      <div className="n">
                        <h1>sing up</h1>
                      </div>
                      <div className="n">
                      <div className="ee">
                          <div>
                          <Field type="text" placeholder="Name"  name="title" className="field" />
                          <div className="error">
                            <div>
                              <ErrorMessage name="title" component="p" />
                            </div>
                          </div>
                          </div>
                        </div>
                        <div className="ee">
                          <div>
                          <Field type="text" name="body" placeholder="user name" className="field" />
                          <div className="error">
                            <div>
                              <ErrorMessage name="body" component="p" />
                            </div>
                          </div></div>
                        </div>
                        <div className="ee">
                          <div>
                          <Field type="text" name="number"  placeholder="phone number" className="field" />
                          <div className="error">
                            <div>
                              <ErrorMessage name="number" component="p" />
                            </div>
                          </div>
                          </div>
                        </div>
                        <div className="ee">
                          <div>
                          <Field type="password"  placeholder="password" name="password" className="field" />
                          <div className="error">
                            <div>
                              <ErrorMessage name="password" component="p" />
                            </div>
                          </div>
                          </div>
                        </div>
                        <div className="ee">
                          <div>
                          <Field type="password"  placeholder="confirm_password" name="confirm_password" className="field" />
                          <div className="error">
                            <div>
                              <ErrorMessage name="confirm_password" component="p" />
                            </div>
                          </div>
                          </div>
                        </div>
                        <button id="btn" type="submit">Submit</button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          )}
        </div>
      )} 
    </main>
  </>;
}