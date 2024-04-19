import React from "react";
import Header from "../common/Header";
import { blogsData } from "../data/blogsData";
import { Link } from "react-router-dom";

export default function Blog() {
  let allBlogsData = blogsData.map((data, index) => {
    return (
      <div className="blogItems" key={index}>
        <h3>{data.title}</h3>
        <p>{data.body}</p>
        <button className="btn">
          <Link to={`/blogs/${data.id}`} className="link">Read More</Link>
        </button>
      </div>
    );
  });
  return (
    <>
      <Header />
      <h1>Hello From Blog Page</h1>
      <div className="container">{allBlogsData}</div>
    </>
  );
}
