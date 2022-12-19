import React from "react";
import useFetch from "../custom hook/useFetch";
import BlogList from "./BlogList";

const Home = () => {
    const {
        data: blogs,
        isPending,
        error,
    } = useFetch("https://fake-server-dojo-blog.vercel.app/blogs");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
};

export default Home;
