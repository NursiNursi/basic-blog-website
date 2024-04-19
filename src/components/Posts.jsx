"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { DeleteButton, UpdateButton, ViewButton } from "./Buttons";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/posts").then((res) => {
      console.log(res);
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="flex gap-4 flex-wrap">
      {posts.map(({ id, author, content, title }) => (
        <div
          key={id}
          className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
        >
          <div className="p-6 flex flex-col h-full justify-between">
            <div>
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {title}
              </h5>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                {content}
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-1">
                <ViewButton id={id} />
                <UpdateButton id={id} />
                <DeleteButton id={id} />
              </div>
              <div>
                <p className="text-right">By: {author}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
