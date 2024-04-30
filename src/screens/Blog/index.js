import React, { useEffect } from "react";
import Header from "./Header";
import NewPosts from "./AllPosts";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "../../redux/slices/blogSlice";
import Pagination from "../../components/Paginate";

const Index = () => {
  const blog = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  const { posts, currentPage, totalPages, loading, error } = blog;

  useEffect(() => {
    dispatch(fetchPosts(1));
    console.log(loading);
  }, []);

  return (
    <>
      <Header posts={posts} loading={loading} />
      <main>
        <NewPosts posts={posts} loading={loading} />
        <Pagination nPages={totalPages} currentPage={currentPage} />
      </main>
    </>
  );
};

export default Index;
