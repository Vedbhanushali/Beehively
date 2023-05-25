const UserDeconstructor = ({name,username,email})=>{
    return (
      <div className="card">
          <h3>{name}</h3>
            <h4>{username}</h4>
            <h4>{email}</h4>
      </div>
  );
};

export default UserDeconstructor;