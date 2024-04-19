import React from 'react'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'
import { blogsData } from '../data/blogsData';

export default function BlogDetails() {
    let urlData = useLocation();
    // let idFromURL = urlData.pathname.split("/").slice(-1)[0];
    let idFromURL = urlData.pathname.split("/")[2];

    let dataToShow = blogsData.filter((data) => data.id == idFromURL)[0];
    console.log(dataToShow);
  return (
    <>
      <Header/>
      <h1>{dataToShow.title}</h1>
      <p>{dataToShow.body}</p>
    </>
  )
}
