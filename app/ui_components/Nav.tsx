import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="text-h-20 px-20 py-5 text-white flex justify-start align-center w-auto bg-blue-600  ">
      <Link href={"/profile"}> Profile </Link>
      <Link href={"/feed"}>Feed</Link>
    </div>
  );
}
