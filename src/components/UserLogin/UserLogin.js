import Input from "../../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link , useNavigate } from "react-router-dom";
import { loginUser } from "../../services/loginService";
import { ToastContainer ,toast } from "react-toastify";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";


const UserLogin = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const setAuth = useAuthActions();
  const userData = useAuth();
  const navigate = useNavigate();
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  console.log(redirect);

  useEffect(() => {
    if(userData) {
      navigate(redirect);
    }
  } , [userData , redirect]);

  const onSubmit = async (values) => {
    try {
     const {data} = await loginUser(values);
     setAuth(data); 
     localStorage.setItem('authState' , JSON.stringify(data))
    navigate(redirect);

    } catch(error) {
      console.log(error)
      toast.error( "email or password is incorrect", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
    }
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("email is not validate")
      .required("email is required"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    // validate,
  });

  return (
    <div className="lg:w-1/3 bg-white p-6 rounded-lg">
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Email"
          name="email"
          formik={formik}
          placeholder="Email"
          type="email"
        />
        <Input
          label="Password"
          name="password"
          formik={formik}
          placeholder="Password"
          type="Password"
        />
        <button className=" bg-orange-500 w-32 rounded-md text-white py-2 mt-3 disabled:bg-slate-400 hover:bg-orange-400" type="submit" disabled={!formik.isValid}>
          submit
        </button>
        <Link to={`/signup?redirect=${redirect}`}>
          <p className="text-orange-500 mt-3">Not signup yet ?</p>
        </Link>
        <ToastContainer />
      </form>
    </div>
  );
};

export default UserLogin;
