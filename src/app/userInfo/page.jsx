"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "next/navigation";
import { getData } from "@/app/Thunks/productThunk";

export default function DynamicUser() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!data || data.length === 0)
    return <p className="text-center text-gray-500">loading....</p>;

  const user = data.find((item) => item.id === Number(id));

  if (!user)
    return (
      <p className="text-center text-gray-500">
        No post found for ID <strong>{id}</strong>
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        📰 Post Details
      </h1>

      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {user.title}
        </h2>
        <p className="text-gray-600">{user.body}</p>
        <div className="text-gray-500 mt-4 text-sm">Post ID: {user.id}</div>
      </div>
    </div>
  );
}
