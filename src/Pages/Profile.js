import Layout from "../Layout/Layout";
import { useAuth } from "../Providers/AuthProvider";

const Profile = () => {
  const userData = useAuth();

  return (
    <Layout>
      <div className="container">
        <div className="bg-white p-4">
            <div>{userData.name}</div>
            <div>{userData.email}</div>
            <div>{userData.phoneNumber}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
