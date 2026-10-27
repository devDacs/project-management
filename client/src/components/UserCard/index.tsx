import { User } from "@/state/api";
import Image from "next/image";
import React from "react";
import Header from "../Header";

type Props = {
  user: User;
};

const UserCard = ({ user: { username, profilePictureUrl, email } }: Props) => {
  return (
    <div className="flex items-center rounded border p-4 shadow">
      {profilePictureUrl && (
        <Image
          src={`/${profilePictureUrl}`}
          alt={`${username}'s Profile`}
          width={32}
          height={32}
          className="mr-4 rounded-full"
        />
      )}
      <div>
        <h3 className="text-lg font-semibold dark:text-white">{username}</h3>
        <p className="dark:text-white">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
