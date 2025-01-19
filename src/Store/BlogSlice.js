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
            localStorage.setItem("blogs", JSON.stringify(state.blogList));
        },

        setBlogListOnPageLoad: (state, action) => {
            state.blogList = action.payload.blogs
        },

        handleDeleteBlog: (state, action) => {
            const { payload } = action;
            const { currentBlogId } = payload;
            let cpyBlogList = [...state.blogList];
            cpyBlogList = cpyBlogList.filter(singleBlog => singleBlog.id !== currentBlogId);

            state.blogList = cpyBlogList;

            localStorage.setItem("blogs", JSON.stringify(state.blogList));
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
            localStorage.setItem("blogs", JSON.stringify(cpyBlogList));
        }
    }
});

export const { handleOnchangeValues, handleAddNewBlog, setBlogListOnPageLoad, handleDeleteBlog, setCurrentEdittedBlogId, handleEditBlog  } = blogSlice.actions;
export default blogSlice.reducer;