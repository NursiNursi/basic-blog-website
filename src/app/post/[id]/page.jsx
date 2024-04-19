"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const PostDetail = ({ params }) => {
  const [post, setPost] = useState([]);
  const { author, content, title } = post;

  useEffect(() => {
    axios
      .get("http://localhost:3030/posts/" + params.id)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div className="text-center p-8">
      <div className="text-right mb-8">Author: {author}</div>
      <div className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {title}
      </div>
      <div className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        {content}
      </div>
    </div>
  );
};

export default PostDetail;
