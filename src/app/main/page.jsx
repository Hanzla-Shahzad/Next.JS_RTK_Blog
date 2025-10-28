"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../Thunks/productThunk";

export default function Main() {
  const dispatch = useDispatch();
  const { data, isPending, isError } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (isPending)
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading posts...
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-600 font-semibold">
        Failed to load posts 😢
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        📰 Latest Posts
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.length > 0 ? (
          data.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.body}
                </p>
              </div>
              <div className="flex justify-between items-center px-5 py-3 border-t text-sm text-gray-500">
                <span>Post #{post.id}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 w-full col-span-full">
            No posts found.
          </p>
        )}
      </div>
    </div>
  );
}
