import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddNewBlog, handleEditBlog, handleOnchangeValues, setCurrentEdittedBlogId } from "../Store/BlogSlice";

export default function AddBlog() {
    const dispatch = useDispatch();
    const { blog } = useSelector(state => state);
    const { blogForm } = blog;
    const { currentEdittedBlog } = blog;

    function handleChange(event) {
        dispatch(handleOnchangeValues({
           [event.target.name]: event.target.value
        }));
    };

    function handleBlogSubmit(event) {
        event.preventDefault();

        if (currentEdittedBlog !== null) {
            dispatch(handleEditBlog());
        } else {
            dispatch(handleAddNewBlog());
        }

        if (currentEdittedBlog !== null) {
            dispatch(setCurrentEdittedBlogId({
                currentBlogId: null
            }));
        }

        dispatch(handleOnchangeValues({
            title: "",
            description: ""
        }));
    };
    
    return (
        <div>
            <h1 class="text-center font-medium mb-5">Life is a Journey</h1>
            <form onSubmit={handleBlogSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter Journal Title"
                    id="title"
                    name="title"
                    class="border focus:border-blue-400 w-full px-3 py-3 mb-3 rounded-md outline-none"
                    value={blogForm.title}
                    onChange={handleChange}
                />
                <div class="flex flex-col">
                    <label class="font-medium mb-1" htmlFor="description">Description:</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        class="border px-3 focus:border-blue-400 py-3 rounded-md h-44 outline-none mb-3"
                        placeholder="What's On Your Mind..."
                        value={blogForm.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button class="w-full bg-blue-400 rounded-md">{currentEdittedBlog ? "Edit Blog" : "Add Blog"}</button>
                </div>
            </form>
        </div>
    )
}