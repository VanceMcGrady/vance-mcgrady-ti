import React from "react";
import { getMe } from "../actions/getMe";
import { getUser } from "../actions/getUser";

export default async function Profile({ user_id }: { user_id: string }) {
  // ordinarily, this data would already be cached and present and we wouldn't have to refetch the data
  // every time Profile renders.
  const user = await getUser(user_id);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center p-5 my-10 width-auto min-w-[80%] max-w-[80%] border-2 border-indigo-100 rounded">
        <h3 className="text-xl">{user?.name}</h3>
        <p>bio: {user?.about}</p>
        <p>Birdthday: {user?.birthday}</p>
      </div>
      <div className="flex flex-col justify-center items-center p-5 my-10 min-w-[80%]  max-w-[80%] border-2 border-indigo-100 rounded">
        <h3 className="text-xl ">Friends</h3>
        {user?.friends.map((friend) => {
          return <div key={Math.random() * 10}>{friend}</div>;
        })}
      </div>
    </div>
  );
}
