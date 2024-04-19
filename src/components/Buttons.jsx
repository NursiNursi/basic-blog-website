"use client";

import axios from "axios";
import Link from "next/link";
import {
  IoAddSharp,
  IoEyeOutline,
  IoPencil,
  IoTrashOutline,
} from "react-icons/io5";
import { useRouter } from "next/navigation";

export const CreateButton = () => {
  return (
    <Link
      href="/create"
      className="inline-flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-md text-md"
    >
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};

export const ViewButton = ({ id }) => {
  return (
    <Link
      href={`/post/${id}`}
      className="rounded-sm border p-1 hover:bg-gray-100"
    >
      <IoEyeOutline size={20} />
    </Link>
  );
};

export const UpdateButton = ({ id }) => {
  return (
    <Link
      href={`/edit/${id}`}
      className="rounded-sm border p-1 hover:bg-gray-100"
    >
      <IoPencil size={20} />
    </Link>
  );
};

export const DeleteButton = ({ id }) => {
  const router = useRouter();
  function handleDelete() {
    axios
      .delete("http://localhost:3030/posts/" + id)
      .then((res) => {
        alert("Post has been deleted");
        // router.refresh(); // not working
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }
  return (
    <button
      onClick={handleDelete}
      className="rounded-sm border p-1 hover:bg-gray-100"
    >
      <IoTrashOutline size={20} />
    </button>
  );
};
