import React from "react";

const InstagramSection = () => {
  // Demo placeholder data (20 images)
  const instagramPosts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: `https://picsum.photos/400/400?random=${i + 1}`,
    link: "https://www.instagram.com/", // placeholder Instagram link
  }));

  return (
    <section className="bg-white">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold py-10 bg-gradient-to-br from-black to-[#E32225] bg-clip-text text-transparent">
        FOLLOW US ON INSTAGRAM
      </h2>

      {/* Seamless Image Grid */}
      <div className="max-w-[1920px] mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-0">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group overflow-hidden"
          >
            <img
              src={post.image}
              alt={`Instagram Post ${post.id}`}
              className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
