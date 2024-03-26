import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import "../compontent/Signpage.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";

export const Signpage = () => {
 
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate()
  useEffect(()=>{
    let item= sessionStorage.getItem('token')
 
    if(item){
     navigate('/Dash')
    }
  })
  
  const handleSubmit = async (values) => {
    setError("");
    alert("You are Signed In");
    try {
      const data = await axios.post(`https://reqres.in/api/register`, {
        email: values.email,
        password: values.password,
      });
      
        navigate("/login");
        
  
      toast.success("signup suceesful ");
  
      console.log(data);
      // const token = data.data.token;
      // console.log(token)
      // sessionStorage.setItem("token", token);
    } catch (e) {
      if (e.message) {
        toast.error("Signup is not Suceess.");
        setError(e.message);
      }
    }
  };
 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const SignupSchema = Yup.object().shape({
    password: Yup.string()
    .required('No password provided.') 
    .min(6, 'Password is too short - should be 6 chars minimum.')
    
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      
    email: Yup.string().email("Invalid email").required("email is Required"),
  });

  return (
    <>
      <div className="mainsignup">
        <div className="   h-full w-full">
          <h1 className="text-center text-3xl text-[#9fafca] hover:text-[#b8df10] font-extrabold pt-10 pb-10">
            Sign In Form
          </h1>
          {error ? <div>{error}</div> : ""}
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {(sign) => (
              <Form>
                <div
                  typeof="submit"
                  className="max-w-sm max-h-max mx-auto w-full"
                >
                  <div className="flex flex-col pt-10 max-h-max ">
                    <label htmlFor="email" className="text-white">
                      Email
                    </label>
                    <input
                      type="text"
                      className=" email h-[40px] border-none mb-3 rounded-md "
                      onChange={(e) =>
                        sign.setFieldValue("email", e.target.value)
                      }
                      value={sign.values.email}
                      name="email"
                    />
                    {
                      <ErrorMessage name="email">
                        {(err) => <span style={{ color: "red" }}>{err}</span>}
                      </ErrorMessage>
                    }

                    <label htmlFor="password" className="text-white">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className=" h-[40px] rounded-md border-none pr-48"
                        onChange={(e) =>
                          sign.setFieldValue("password", e.target.value)
                        }
                        value={sign.values.password}
                        name="password"
                      />
                      {
                        <ErrorMessage name="password">
                          {(err) => <span style={{ color: "red" }}>{err}</span>}
                        </ErrorMessage>
                      }
                      <button
                        type="button"
                        className="absolute top-3 right-0 pr-2 flex items-center  "
                        onClick={toggleShowPassword}
                      >
                        {" "}
                        {showPassword ? (
                          <i>
                            <IoEyeSharp />
                          </i>
                        ) : (
                          <i>
                            <IoEyeSharp />
                          </i>
                        )}{" "}
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="rounded-full text-lg leading-4 font-medium bg-[#DDF186] hover:bg-sky-700 h-8  text-white mt-5"
                    >
                      Sign In
                    </button>
                    <div>
                      <p style={{ color: "#ffff", padding: "20px" }}>
                        Are you Already?{" "}
                        <Link to="/login" style={{ color: "red" }}>
                          Login
                        </Link>
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
