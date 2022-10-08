import Register from "../components/UserLogin/Register";
import Layout from "../Layout/Layout";

const SignUp = () => {
  return (
    <Layout>
      <div className="container md:flex justify-center my-20 px-5">
        <Register />
      </div>
    </Layout>
  );
};

export default SignUp;
