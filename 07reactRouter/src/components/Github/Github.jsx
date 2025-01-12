import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
const data = useLoaderData()
    //-- way 1
  //const gitHubLink = 'https://api.github.com/users/hiteshchoudhary';
//   const gitHubLink = "https://api.github.com/users/se-roshangupta";
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(gitHubLink).then((respons) =>
//       respons.json().then((data) => {
//         console.log(data);
//         setData(data);
//       })
//     );
//   }, []);

  return (
    <div>
      <div className="text-center m-4 bg-gray-600 text-white p-4 rext-3xl">
        {" "}
        Githun followers : {data.followers}
        <img
          className="text-center"
          src={data.avatar_url}
          alt="Git Picture"
          width={300}
        />
      </div>
    </div>
  );
}

export default Github;


export const githubInfoLoader =  async ()=>{
    const gitHubLink = 'https://api.github.com/users/hiteshchoudhary';
    const respons = await fetch(gitHubLink)
    return respons.json()
}