import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteBlog, handleOnchangeValues, setCurrentEdittedBlogId } from "../Store/BlogSlice";

export default function BlogList() {
    const { blog } = useSelector(state => state);
    const { blogList } = blog;

    const dispatch = useDispatch();

    function onDelete(getCurrentBlog) {
        dispatch(handleDeleteBlog({
            currentBlogId: getCurrentBlog.id
        }));
    };

    function onEdit(getCurrentBlog) {
        dispatch(setCurrentEdittedBlogId({
            currentBlogId: getCurrentBlog.id
        }));
        dispatch(handleOnchangeValues({
            title: getCurrentBlog.title,
            description: getCurrentBlog.description
        }));
    };

    return (
        <div>
            {
                blogList &&
                blogList.map(singleBlogItem => {
                    return (
                        <div key={singleBlogItem.id} class="border p-3 mt-3 rounded-md shadow shadow-slate-400">
                            <div class="">
                                <h2><span class="font-medium">Title</span>: {singleBlogItem.title}</h2>
                                <h2><span class="font-medium">Description</span>: {singleBlogItem.description}</h2>
                            </div>
                            <div class="mt-3">
                                <button onClick={() => onEdit(singleBlogItem)} class="bg-black text-white rounded-md mr-2">Edit Blog</button>
                                <button onClick={() => onDelete(singleBlogItem)} class="bg-red-500 rounded-md">Delete Blog</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}