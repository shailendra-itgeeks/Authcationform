import React, { useEffect, useState } from "react";
import "../compontent/Login.css";
import { IoMdStar } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";
import { useNative } from "use-drop";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  console.log(error);

  const LoginupSchema = Yup.object().shape({
    password: Yup.string()
      .required("No password provided.")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    email: Yup.string().email("Invalid email").required("email is Required"),
  });
  const onSubmit = async (values) => {
    setError("");
    alert("You are Signed In");
    try {
      const data = await axios.post(`https://reqres.in/api/login`, {
        email: values.email,
        password: values.password,
      });

      toast.success("Login  Successfully!");
      navigate("/Dash");
      console.log(data.data);
      const token = data.data.token;
      console.log(token);
      sessionStorage.setItem("token", token);
    } catch (e) {
      if (e.message) {
        toast.error("Login in unSuccessfully.");
        setError(e.message);
      }
    }
    console.log(values);
  };
  useEffect(() => {
    let obj = sessionStorage.getItem("token");

    if (obj) {
      navigate("/Dash");
    }
  });
  return (
    <div className="section flex flex-row gap-[25px] p-[30px]">
      <div className=" secondmobilify p-[50px]    h-full rounded-[15px] w-[60%]">
        <div className=" flex w-full justify-between">
          <div>
            <img
              src="https://framerusercontent.com/images/ZtNJM6UJgu0YPxCAQKIZMBGn7lo.png?scale-down-to=512"
              style={{ width: "129px", height: "29px" }}
            />
          </div>
          <div className=" flex flex-row gap-[30px] items-center">
            <div>
              <h6 className="apps">apps@itgeeks.com</h6>
            </div>
            <div>
              <a href="">
                <p className="send">Send A Message</p>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className=" flex flex-col  w-full gap-[30px] h-min ">
            <div>
              <h1 className="every">Every Project Start With a Plan.</h1>
            </div>
            <div className=" p-[0px]">
              <div className="marques">
                <div className="marques-content flex w-full flex-row gap-[25px] p-[25px] ">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      gap: "10px",
                      padding: "25px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IoMdStar />
                      <IoMdStar />

                      <IoMdStar />

                      <IoMdStar />

                      <IoMdStar />
                    </div>
                    <div>
                      <p className="sitee">
                        SiteSyncPro proves to be an excellent product, offering
                        an <br /> effective method to cultivate a devoted brand
                        community and <br /> boost recurring sales!
                      </p>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <p className="Alex">Alex</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      gap: "10px",
                      padding: "25px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IoMdStar />
                      <IoMdStar />

                      <IoMdStar />

                      <IoMdStar />

                      <IoMdStar />
                    </div>
                    <div>
                      <p className="sitee">
                        SiteSyncPro proves to be an excellent product, offering
                        an <br /> effective method to cultivate a devoted brand
                        community and <br /> boost recurring sales!
                      </p>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <p className="Alex">Alex</p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      gap: "10px",
                    }}
                  >
                    .
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IoMdStar />
                      <IoMdStar />

                      <IoMdStar />

                      <IoMdStar />

                      <IoMdStar />
                    </div>
                    <div>
                      <p className="sitee">
                        SiteSyncPro proves to be an excellent product, offering
                        an <br /> effective method to cultivate a devoted brand
                        community and <br /> boost recurring sales!
                      </p>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                      <p className="Alex">Alex</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="     bg-[#1E1E2F] rounded-[15px] "
        style={{ height: "100%", width: "40%" }}
      >
        {error ? <div style={{ color: "white" }}>{error}</div> : ""}

        <div className=" flex flex-col p-[100px] items-center gap-[40px]">
          <div className=" flex flex-col gap-[10px]">
            <div>
              <h3 className="welcome">Welcome Back</h3>
            </div>
            <div>
              <p className="take">Take another step in your mobile journey!</p>{" "}
            </div>
          </div>
          <Formik
            initialValues={{
              password: "",
              email: "",
            }}
            validationSchema={LoginupSchema}
            onSubmit={onSubmit}
          >
            {(loginprops) => (
              <Form>
                <div className="flex flex-col gap-[15px]">
                  <div>
                    <input
                      name="email"
                      class=" text-slate-200 w-[332px] h-[52px] p-[14px] bg-[#1E1E2F] border border-[#6D6D78] shadow-sm placeholder-[#FFFFFF59] focus:outline-none  block  rounded-md sm:text-sm focus:ring-1"
                      placeholder="Email"
                      onChange={(e) =>
                        loginprops.setFieldValue("email", e.target.value)
                      }
                      value={loginprops.values.email}
                    />
                    <ErrorMessage name="email">
                      {(err) => <span style={{ color: "red" }}>{err}</span>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <input
                      name="password"
                      class=" text-slate-200 w-[332px] h-[52px] p-[14px] bg-[#1E1E2F] border border-[#6D6D78] shadow-sm placeholder-[#FFFFFF59] focus:outline-none  block  rounded-md sm:text-sm focus:ring-1"
                      placeholder="Password"
                      onChange={(e) =>
                        loginprops.setFieldValue("password", e.target.value)
                      }
                      value={loginprops.values.password}
                    />
                    <ErrorMessage name="password">
                      {(err) => <span style={{ color: "red" }}>{err}</span>}
                    </ErrorMessage>
                  </div>
                  <div className="hover-div">
                    <button className="submit-btn">Log In</button>
                    <button className="submit-btn1" type="submit">
                      Log In
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
