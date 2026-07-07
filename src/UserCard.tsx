type UserCardProps = {
    id: number,
    username:string,
    email:string
    onClick: () => void;
};

const UserCard = ({id, username, email,onClick}:UserCardProps) =>{
    return(
        <div className ="userContainer">
            <div className="userImage"></div>
            <div className="userText">
                <h3 className="idText">id : {id}</h3>
                <p className="userCardText" onClick={onClick}>{username}</p>
                <p className="userCardText">{email}</p>
            </div>
        </div>
    )
}

export default UserCard