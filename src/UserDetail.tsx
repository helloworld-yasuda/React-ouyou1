// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import fetchUserStatus from "./FetchUser";
// import { User } from "./type";
import { Link } from "react-router-dom";
import { useUser } from "./useUser";

const UserDetail = () => {
  const { user } = useUser();
  // const { id } = useParams();
  // const [user, setUser] = useState<User | null>(null);
  // const data = fetchUserStatus(Number(id));

  // useEffect(() => {
  //   const getUser = async () => {
  //     if (!id) return;
  //     const data = await fetchUserStatus(Number(id));
  //     if (data) {
  //       setUser(data);
  //     }
  //   };
  //   getUser();
  // }, [id, data]);

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
