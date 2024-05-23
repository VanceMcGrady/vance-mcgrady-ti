import React from "react";
import { getMe } from "../actions/getMe";

export default async function Profile() {
  // ordinarily, this data would already be cached and present and we wouldn't have to refetch the data
  // every time Profile renders.
  const me = await getMe();

  return (
    <div>
      <div>
        <h3>{me?.name}</h3>
        <p>bio: {me?.about}</p>
        <p>Birdthday: {me?.birthday}</p>
      </div>
      <div>
        <h3>Friends</h3>
        {me?.friends.map((friend) => {
          return <div key={Math.random() * 10}>{friend}</div>;
        })}
      </div>
    </div>
  );
}
