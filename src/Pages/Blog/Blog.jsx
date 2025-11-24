// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const WEB_APP_URL =
//   "https://script.google.com/macros/s/AKfycbyDghYYL48dhoCsVAOWMaIBUi-MPrVVbLcTzs8hY9do5fG64kPtU09gc3yR9FTHjKQE2g/exec";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [filteredBlogs, setFilteredBlogs] = useState([]);
//   const [categories, setCategories] = useState(["All"]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(WEB_APP_URL)
//       .then((res) => {
//         const publishedBlogs = res.data;
//         setBlogs(publishedBlogs);
//         setFilteredBlogs(publishedBlogs);

//         const extractedCategories = publishedBlogs
//           .map((b) => b.category?.trim())
//           .filter((cat) => !!cat);

//         const uniqueCategories = ["All", ...new Set(extractedCategories)];
//         setCategories(uniqueCategories);
//       })
//       .catch((err) => console.error("Error loading blogs", err));
//   }, []);

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     filterBlogs(searchQuery, category);
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     filterBlogs(query, selectedCategory);
//   };

//   const filterBlogs = (query, category) => {
//     let filtered = blogs;

//     if (category !== "All") {
//       filtered = filtered.filter(
//         (b) => b.category?.trim().toLowerCase() === category.toLowerCase()
//       );
//     }

//     if (query.trim() !== "") {
//       const q = query.toLowerCase();
//       filtered = filtered.filter(
//         (b) =>
//           b.title?.toLowerCase().includes(q) ||
//           b.subtitle?.toLowerCase().includes(q) ||
//           b.content?.toLowerCase().includes(q)
//       );
//     }

//     setFilteredBlogs(filtered);
//   };

//   const handleCardClick = (blog) => {
//     const encodedId = encodeURIComponent(blog.title);
//     navigate(`/blog/${encodedId}`, { state: { blog } });
//   };

//   return (
//     <div className="-mt-[100px] bg-gradient-to-br from-black via-[#1a1a1a] to-[#111111] min-h-screen text-white">
//       {/* HERO SECTION */}
//       <section className="relative h-auto lg:h-[calc(100vh+100px)] pt-36 lg:pt-[100px] pb-20 flex flex-col justify-center items-center text-center px-6 overflow-visible">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute top-[-20%] left-[-30%] w-[80%] h-[160%] bg-gradient-to-tr from-red-700 via-red-900 to-transparent blur-3xl opacity-40 animate-pulse"></div>
//           <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[120%] bg-gradient-to-br from-black via-red-800 to-transparent blur-2xl opacity-30 animate-pulse"></div>
//         </div>

//         <div className="relative z-10 max-w-4xl">
//           <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//             Insights from the Seyreon Team
//           </h1>
//           <p className="text-lg md:text-xl text-red-300 font-medium">
//             We share lessons, breakthroughs, and behind-the-scenes from building
//             AI, automations, and the future of business tech.
//           </p>
//         </div>
//       </section>

//       {/* SEARCH + FILTER SECTION */}
//       <section className="px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Categories Sidebar */}
//         <div className="relative z-20">
//           <h2 className="text-xl font-semibold mb-4 text-white">Categories</h2>
//           <ul className="space-y-2">
//             {categories.map((cat, idx) => (
//               <li
//                 key={idx}
//                 onClick={() => handleCategorySelect(cat)}
//                 className={`cursor-pointer px-4 py-2 rounded-lg transition ${
//                   selectedCategory === cat
//                     ? "bg-red-600 text-white"
//                     : "bg-[#1a1a1a] text-red-300 hover:bg-[#333]"
//                 }`}
//               >
//                 {cat}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Blog Cards */}
//         <div className="md:col-span-3 relative z-20">
//           <input
//             type="text"
//             placeholder="Search blogs..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="w-full px-4 py-3 mb-8 rounded-md border border-red-500 bg-transparent text-white placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 relative z-20"
//           />

//           {filteredBlogs.length === 0 ? (
//             <p className="text-red-400 mt-4">No blogs found.</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredBlogs.map((blog, i) => (
//                 <div
//                   key={i}
//                   onClick={() => handleCardClick(blog)}
//                   className="bg-[#1a1a1a]/60 p-6 rounded-xl shadow-md hover:shadow-red-500/20 transition cursor-pointer"
//                 >
//                   <h3 className="text-xl font-bold mb-1 text-white">{blog.title}</h3>
//                   <p className="italic text-red-400 mb-2">{blog.subtitle}</p>
//                   <p className="text-sm text-red-300">
//                     {blog.author ? `By ${blog.author}` : ""} |{" "}
//                     {new Date(blog.date).toLocaleDateString()}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;

// // /pages/Blog.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const WEB_APP_URL =
//   "https://script.google.com/macros/s/AKfycbyDghYYL48dhoCsVAOWMaIBUi-MPrVVbLcTzs8hY9do5fG64kPtU09gc3yR9FTHjKQE2g/exec";

// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [filteredBlogs, setFilteredBlogs] = useState([]);
//   const [categories, setCategories] = useState(["All"]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(WEB_APP_URL)
//       .then((res) => {
//         const publishedBlogs = res.data;
//         setBlogs(publishedBlogs);
//         setFilteredBlogs(publishedBlogs);

//         const extractedCategories = publishedBlogs
//           .map((b) => b.category?.trim())
//           .filter((cat) => !!cat);

//         const uniqueCategories = ["All", ...new Set(extractedCategories)];
//         setCategories(uniqueCategories);
//       })
//       .catch((err) => console.error("Error loading blogs", err));
//   }, []);

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     filterBlogs(searchQuery, category);
//   };

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     filterBlogs(query, selectedCategory);
//   };

//   const filterBlogs = (query, category) => {
//     let filtered = blogs;

//     if (category !== "All") {
//       filtered = filtered.filter(
//         (b) => b.category?.trim().toLowerCase() === category.toLowerCase()
//       );
//     }

//     if (query.trim() !== "") {
//       const q = query.toLowerCase();
//       filtered = filtered.filter(
//         (b) =>
//           b.title?.toLowerCase().includes(q) ||
//           b.subtitle?.toLowerCase().includes(q) ||
//           b.content?.toLowerCase().includes(q)
//       );
//     }

//     setFilteredBlogs(filtered);
//   };

//   const handleCardClick = (blog) => {
//     const encodedId = encodeURIComponent(blog.title);
//     navigate(`/blog/${encodedId}`, { state: { blog } });
//   };

//   return (
//     <div className="-mt-[100px] min-h-screen">
//       {/* HERO SECTION (with gradient background) */}
// <section className="relative h-auto lg:h-[calc(100vh+100px)] pt-36 lg:pt-[100px] pb-20 flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black to-[#E32225] text-white">
//   <div className="relative z-10 max-w-4xl">
//     <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
//       Insights from the Seyreon Team
//     </h1>
//     <p className="text-lg md:text-xl font-medium text-red-300">
//       We share lessons, breakthroughs, and behind-the-scenes from building
//       AI, automations, and the future of business tech.
//     </p>
//   </div>
// </section>


//       {/* SEARCH + FILTER SECTION */}
//       <section className="bg-white text-black px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 min-h-screen">
//         {/* Categories Sidebar */}
//         <div className="relative z-20">
//           <h2 className="text-xl font-semibold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//             Categories
//           </h2>
//           <ul className="space-y-2">
//             {categories.map((cat, idx) => (
//               <li
//                 key={idx}
//                 onClick={() => handleCategorySelect(cat)}
//                 className={`cursor-pointer px-4 py-2 rounded-lg border transition ${
//                   selectedCategory === cat
//                     ? "bg-gradient-to-br from-black to-[#E32225] text-white font-semibold rounded-lg transition duration-300 shadow-lg hover:shadow-red-500/50 text-white border-[#E32225]"
//                     : "bg-white border border-gray-300 text-black hover:border-[#E32225] hover:text-[#E32225]"
//                 }`}
//               >
//                 {cat}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Blog Cards */}
//         <div className="md:col-span-3 relative z-20">
//           <input
//             type="text"
//             placeholder="Search blogs..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//             className="w-full px-4 py-3 mb-8 rounded-md border border-[#E32225] bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E32225]"
//           />

//           {filteredBlogs.length === 0 ? (
//             <p className="text-[#E32225] mt-4">No blogs found.</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredBlogs.map((blog, i) => (
//                 <div
//                   key={i}
//                   onClick={() => handleCardClick(blog)}
//                   className="bg-white border-2 border-[#E32225] text-black p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_#E32225] transition cursor-pointer"
//                 >
//                   <h3 className="text-xl font-bold mb-1 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
//                     {blog.title}
//                   </h3>
//                   <p className="italic text-gray-700 mb-2">{blog.subtitle}</p>
//                   <p className="text-sm text-gray-600">
//                     {blog.author ? `By ${blog.author}` : ""} |{" "}
//                     {new Date(blog.date).toLocaleDateString()}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;

// /pages/Blog.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const WEB_APP_URL =
   "https://script.google.com/macros/s/AKfycbyDghYYL48dhoCsVAOWMaIBUi-MPrVVbLcTzs8hY9do5fG64kPtU09gc3yR9FTHjKQE2g/exec";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(WEB_APP_URL)
      .then((res) => {
        const publishedBlogs = res.data;
        setBlogs(publishedBlogs);
        setFilteredBlogs(publishedBlogs);

        const extractedCategories = publishedBlogs
          .map((b) => b.category?.trim())
          .filter((cat) => !!cat);

        const uniqueCategories = ["All", ...new Set(extractedCategories)];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error loading blogs", err));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterBlogs(searchQuery, category);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterBlogs(query, selectedCategory);
  };

  const filterBlogs = (query, category) => {
    let filtered = blogs;

    if (category !== "All") {
      filtered = filtered.filter(
        (b) => b.category?.trim().toLowerCase() === category.toLowerCase()
      );
    }

    if (query.trim() !== "") {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.subtitle?.toLowerCase().includes(q) ||
          b.content?.toLowerCase().includes(q)
      );
    }

    setFilteredBlogs(filtered);
  };

  const handleCardClick = (blog) => {
    const encodedId = encodeURIComponent(blog.title);
    navigate(`/blog/${encodedId}`, { state: { blog } });
  };

  return (
    <div className="-mt-[100px] min-h-screen">
      {/* HERO SECTION (Animated) */}
      <section className="relative h-auto lg:h-[calc(100vh+100px)] pt-36 lg:pt-[100px] pb-20 flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black to-[#E32225] text-white">
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Insights from the NewlexDesigns Team
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl font-medium text-red-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Explore creative lessons, design discoveries, and behind-the-scenes stories from our journey of shaping brands, crafting visuals, and building unforgettable design experiences.
          </motion.p>
        </div>
      </section>

      {/* SEARCH + FILTER SECTION */}
      <section className="bg-white text-black px-6 md:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 min-h-screen">
        {/* Categories Sidebar */}
        <div className="relative z-20">
          <motion.h2
            className="text-xl font-semibold mb-4 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Categories
          </motion.h2>
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {categories.map((cat, idx) => (
              <li
                key={idx}
                onClick={() => handleCategorySelect(cat)}
                className={`cursor-pointer px-4 py-2 rounded-lg border transition ${
                  selectedCategory === cat
                    ? "bg-gradient-to-br from-black to-[#E32225] text-white font-semibold transition duration-300 shadow-lg hover:shadow-red-500/50 border-[#E32225]"
                    : "bg-white border border-gray-300 text-black hover:border-[#E32225] hover:text-[#E32225]"
                }`}
              >
                {cat}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Blog Cards */}
        <motion.div
          className="md:col-span-3 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 mb-8 rounded-md border border-[#E32225] bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#E32225]"
          />

          {filteredBlogs.length === 0 ? (
            <p className="text-[#E32225] mt-4">No blogs found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog, i) => (
                <motion.div
                  key={i}
                  onClick={() => handleCardClick(blog)}
                  className="bg-white border-2 border-[#E32225] text-black p-6 rounded-xl shadow-md hover:shadow-[0_0_20px_#E32225] transition cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3 className="text-xl font-bold mb-1 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
                    {blog.title}
                  </h3>
                  <p className="italic text-gray-700 mb-2">{blog.subtitle}</p>
                  <p className="text-sm text-gray-600">
                    {blog.author ? `By ${blog.author}` : ""} |{" "}
                    {new Date(blog.date).toLocaleDateString()}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
