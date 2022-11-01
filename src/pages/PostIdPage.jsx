import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
  }, []);

  return (
    <div className="page" style={{ marginTop: 50 }}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2>
            {post.id}. {post.title}
          </h2>
          <div>{post.body}</div>
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
