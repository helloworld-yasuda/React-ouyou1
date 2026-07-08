import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import fetchUsers from "./Fetch";
import { User } from "./type";

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const getUsers = async () => {
    const data = await fetchUsers();

    if (data) {
      setUsers(data);
    }

    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

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
          />
        ))}
    </div>
  );
};

export default UserList;
