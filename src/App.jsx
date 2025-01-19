import React from "react";
import AddBlog from "./components/AddNewBlog";
import BlogList from "./components/BlogList";

function App() {
  return (
    <div class="border shadow shadow-slate-500 mt-12 px-5 py-4 w-[28rem] md:w-[42rem] rounded">
      <AddBlog />
      <BlogList />
    </div>
  )
}

export default App
