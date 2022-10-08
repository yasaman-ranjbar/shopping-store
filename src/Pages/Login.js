import UserLogin from "../components/UserLogin/UserLogin";
import Layout from "../Layout/Layout";

const Login = () => {
  return (
    <Layout>
      <div className="container md:flex justify-center my-20 px-5">
        <UserLogin />
      </div>
    </Layout>
  );
};

export default Login;
