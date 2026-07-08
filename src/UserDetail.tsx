import { Link } from "react-router-dom";
import { useUser } from "./useUser";

const UserDetail = () => {
  const { user } = useUser();

  if (!user) return <h2>Loading...</h2>;
  return (
    <div className="userCardContainer">
      <h1>ユーザーページ</h1>

      <div className="detailContainer">
        <p>name: {user.username}</p>
        <p>email: {user.email}</p>
        <p>phone: {user.phone}</p>

        <p>Address</p>
        <p>street: {user.address.street}</p>
        <p>suite: {user.address.suite}</p>
        <p>city: {user.address.city}</p>
      </div>
      <Link to="/">戻る</Link>
    </div>
  );
};

export default UserDetail;
