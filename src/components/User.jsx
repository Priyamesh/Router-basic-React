import { useParams } from "react-router-dom";

function User() {
  const { user_id } = useParams();

  return (
    <>
      <div className="bg-gray-600 text-white text-3xl">
        <h1>User:{user_id}</h1>
      </div>
    </>
  );
}

export default User;
