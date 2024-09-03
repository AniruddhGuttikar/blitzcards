import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <ul className="bg-slate-500 p-3 flex flex-col gap-6 w-1/6 h-screen">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/my-flashcards">My Flashcards</Link>
      </li>
      <li>
        <Link href="/ai-answer-store">AI Answer Store</Link>
      </li>
      <li>
        <Link href="/settings">Settings</Link>
      </li>
      <li className="pt-">
        <Link href={"/log-out"}>Logout</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
