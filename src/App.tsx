import React from "react";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";
import fetchUsers, { User } from "./Fetch";
import fetchUserStatus from "./FetchUser";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [selectUser, setSelectUser] = useState<User | null>(null);
  const getUser = async (userId: number) => {
    const data = await fetchUserStatus(userId);
    if (data) {
      setSelectUser(data);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      if (data) {
        setUsers(data);
      }
      setLoading(false);
    };
    getUsers();
  }, []);

  if (selectUser) {
    return (
      <div className="userCardContainer">
        <h1>ユーザーページ</h1>
        <div className="detailContainer">
          <p>name: {selectUser.username}</p>
          <p>email: {selectUser.email}</p>
          <p>phone: {selectUser.phone}</p>
          <p>Address</p>
          <p>street: {selectUser.address.street}</p>
          <p>suite: {selectUser.address.suite}</p>
          <p>city: {selectUser.address.city}</p>
          <button onClick={() => setSelectUser(null)}>戻る</button>
        </div>
      </div>
    );
  }

  if (loading) return <h2>Loading...</h2>;
  return (
    <div className="userCardContainer">
      <h1>ユーザー一覧</h1>
      <div className="searchTextContainer">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="ユーザー名を検索"
        />
      </div>
      {users
        .filter((user) => user.username.includes(searchText))
        .map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            username={user.username}
            email={user.email}
            onClick={() => getUser(user.id)}
          />
        ))}
    </div>
  );
};

export default App;
