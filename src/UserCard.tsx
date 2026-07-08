import { Link } from "react-router-dom";

type UserCardProps = {
  id: number;
  username: string;
  email: string;
};

const UserCard = ({ id, username, email }: UserCardProps) => {
  return (
    <div className="userContainer">
      <div className="userImage"></div>
      <div className="userText">
        <h3 className="idText">id : {id}</h3>
        <Link to={`/users/${id}`}>{username}</Link>{" "}
        <p className="userCardText">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
