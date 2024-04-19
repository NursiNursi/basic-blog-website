"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateForm = () => {
  const [inputData, setInputData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3030/posts", inputData)
      .then((res) => {
        alert("Data Added Successfully!");
        router.push("/");
      })
      .catch((err) => console.log(err));
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
            onChange={(e) =>
              setInputData({ ...inputData, title: e.target.value })
            }
            placeholder="Title..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            onChange={(e) =>
              setInputData({ ...inputData, content: e.target.value })
            }
            placeholder="Content..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
            onChange={(e) =>
              setInputData({ ...inputData, author: e.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <button className="inline-flex items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-md text-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
