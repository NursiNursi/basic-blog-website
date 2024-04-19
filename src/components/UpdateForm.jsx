"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateForm = ({ id }) => {
  const [post, setPost] = useState([]);

  const router = useRouter();

  useEffect(() => {
    axios
      .get("http://localhost:3030/posts/" + id)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const { author, content, title } = post;

  function handleSubmit(e) {
    e.preventDefault();
    axios.put("http://localhost:3030/posts/" + id, post).then((res) => {
      alert("Data updated successfully!");
      router.push("/");
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Title..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            defaultValue={title}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-900"
          >
            Content
          </label>
          <textarea
            type="text"
            name="content"
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            placeholder="Content..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            defaultValue={content}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-900"
          >
            Author
          </label>
          <input
            type="text"
            name="author"
            placeholder="Author..."
            onChange={(e) => setPost({ ...post, author: e.target.value })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            defaultValue={author}
          />
        </div>
        <button className="inline-flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-md text-md">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
