import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log(data);

  //   const [data, setData] = useState(0);

  //   useEffect(() => {
  //     const url = `https://api.github.com/users/mukesh`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //   }, []);

  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github Followers : {data.followers}
      </div>
    </>
  );
}

export default Github;

export const getGithubFollowers = async () => {
  const response = await fetch("https://api.github.com/users/mukesh");
  return response.json();
};
