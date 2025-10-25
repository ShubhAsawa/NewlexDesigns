// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const SingleBlog = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const blog = location.state?.blog;

//   if (!blog) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black text-white">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
//           <button
//             className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded"
//             onClick={() => navigate("/blog")}
//           >
//             Back to Blog
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a1a] to-[#111111] text-white px-6 md:px-20 py-16">
//       <div className="max-w-4xl mx-auto space-y-6">
//         <button
//           onClick={() => navigate("/blog")}
//           className="text-red-400 hover:text-red-300 mb-4"
//         >
//           ← Back to Blog
//         </button>

//         <h1 className="text-4xl font-bold">{blog.title}</h1>
//         <p className="italic text-red-400 text-lg">{blog.subtitle}</p>
//         <p className="text-sm text-red-300">
//           {blog.author ? `By ${blog.author}` : ""} |{" "}
//           {new Date(blog.date).toLocaleDateString()}
//         </p>

//         <div
//           className="prose prose-invert max-w-none"
//           dangerouslySetInnerHTML={{ __html: blog.content }}
//         />
//       </div>
//     </div>
//   );
// };

// export default SingleBlog;

// /pages/SingleBlog.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SingleBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
          <button
            className="bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent hover:bg-red-700 text-white font-semibold px-6 py-2 rounded"
            onClick={() => navigate("/blog")}
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <button
          onClick={() => navigate("/blog")}
          className="bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent hover:text-red-700 mb-4"
        >
          ← Back to Blog
        </button>

        <h1 className="text-4xl font-bold ttext-xl font-bold mb-1 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">{blog.title}</h1>
        <p className="italic text-gray-700 text-lg">{blog.subtitle}</p>
        <p className="text-sm text-gray-600">
          {blog.author ? `By ${blog.author}` : ""} |{" "}
          {new Date(blog.date).toLocaleDateString()}
        </p>

        <div
          className="prose max-w-none text-black"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};

export default SingleBlog;
