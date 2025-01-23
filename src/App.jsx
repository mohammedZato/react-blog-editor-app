import React from "react";
import AddBlog from "./components/AddNewBlog";
import BlogList from "./components/BlogList";

function App() {
  return (
    <div class="pt-12 px-5 py-4 w-[28rem] sm:w-[42rem] rounded bg-gray-50 h-screen">
      <AddBlog />
      <BlogList />
    </div>
  )
}

export default App
