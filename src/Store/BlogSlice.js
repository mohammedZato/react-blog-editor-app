import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    blogForm: {
        title: "",
        description: ""
    },
    blogList: [],
    currentEdittedBlog: null,
}

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        handleOnchangeValues: (state, action) => {
            let cpyBlogForm = {...state.blogForm};
            cpyBlogForm = {
                ...state.blogForm,
                ...action.payload
            }
            state.blogForm = cpyBlogForm;
        },

        handleAddNewBlog: (state, action) => {
            state.blogList.push({
                id: nanoid(),
                ...state.blogForm
            });

            state.blogForm = {
                title: "",
                description: ""
            }
        },

        handleDeleteBlog: (state, action) => {
            const { payload } = action;
            const { currentBlogId } = payload;
            let cpyBlogList = [...state.blogList];
            cpyBlogList = cpyBlogList.filter(singleBlog => singleBlog.id !== currentBlogId);

            state.blogList = cpyBlogList;
        },

        setCurrentEdittedBlogId: (state, action) => {
            const { payload } = action;
            const { currentBlogId } = payload;

            state.currentEdittedBlog = currentBlogId;
        },

        handleEditBlog: (state, action) => {
            let cpyBlogList = [...state.blogList];
            const findIndexofCurrentEdittedBlog = cpyBlogList.findIndex(singleBlog => singleBlog.id === state.currentEdittedBlog);
            cpyBlogList[findIndexofCurrentEdittedBlog] = {
                ...cpyBlogList[findIndexofCurrentEdittedBlog],
                ...state.blogForm
            };
            state.blogList = cpyBlogList;
        }
    }
});

export const { handleOnchangeValues, handleAddNewBlog, handleDeleteBlog, setCurrentEdittedBlogId, handleEditBlog  } = blogSlice.actions;
export default blogSlice.reducer;