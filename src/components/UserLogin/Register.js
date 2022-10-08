import React , {useEffect} from "react";
import Input from "../../common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link , useNavigate } from "react-router-dom";
import { signupUser } from "../../services/signupService";
import { ToastContainer ,toast } from "react-toastify";
import { useAuthActions , useAuth} from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: "",
  };

  const setAuth = useAuthActions();
  const userData = useAuth();
  const navigate = useNavigate();

  const query = useQuery(); 
  const redirect = query.get('redirect') || "/";

  useEffect(() => {
    if(userData) {
      navigate(redirect);
    }
  } , [userData , redirect]);

  const onSubmit = async(values) => {
    const userData = {
      name:values.name,
      email:values.email ,
      phoneNumber:values.phoneNumber ,
      password:values.password,
    }
    try {
     const {data} = await signupUser(userData);
     setAuth(data);
     localStorage.setItem("authState" , JSON.stringify(data));
     navigate(redirect);

     toast.success( "your register was successful !", {
      position: toast.POSITION.TOP_CENTER,
      theme: "colored",
    });

    } catch(error) {
      toast.error( error.response.data.message , {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
    }
  }

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("name is required")
      .min(6, "name lenght is not valid"),
    email: yup
      .string()
      .email("email is not validate")
      .required("email is required"),
    phoneNumber: yup
      .string()
      .required("email is required")
      .matches(/^[0-9]{11}$/, "phone number format is not valid")
      .nullable(),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
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
        <Input label="Name" name="name" formik={formik} placeholder="Name" />
        <Input
          label="Email"
          name="email"
          formik={formik}
          placeholder="Email"
          type="email"
        />
        <Input
          label="Phone Number"
          name="phoneNumber"
          formik={formik}
          placeholder="Phone Number"
          type="tell"
        />
        <Input
          label="Password"
          name="password"
          formik={formik}
          placeholder="Password"
          type="Password"
        />
        <Input
          label="Password Confirm"
          name="passwordConfirm"
          formik={formik}
          placeholder="Password Confirm"
          type="Password"
        />
        <button
          className=" bg-orange-500 w-32 rounded-md text-white py-2 mt-3 disabled:bg-slate-400 hover:bg-orange-400"
          type="submit"
          disabled={!formik.isValid}
        >
          submit
        </button>
        <Link to={`/login?redirect=${redirect}`}>
          <p className="text-orange-500 mt-3">Already login ?</p>
        </Link>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Register;
