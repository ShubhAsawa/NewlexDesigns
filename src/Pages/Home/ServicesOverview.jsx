import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ServicesOverview = () => {
  return (
    <section className="w-full py-28 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col gap-10">

        <h2 className="text-3xl md:text-5xl font-extrabold leading-snug bg-gradient-to-r from-[#E32225] via-black to-[#E32225] bg-clip-text text-transparent text-center uppercase">
          4 WAYS NEWLEXDESIGNS BUILDS BRANDS WITH GLOBAL BUSINESSES
        </h2>

        <p className="text-center text-lg opacity-80 max-w-2xl mx-auto">
          Design systems with bold clarity, strategy & identity.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">

          <Link to="/services/BrandIdentity" className="flex flex-col items-center group cursor-pointer">
            <div className="rounded-full border border-black w-8 h-8 flex justify-center items-center group-hover:border-[#E32225] transition-all">
              <ChevronRight size={26} className="group-hover:text-[#E32225]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mt-3 text-center group-hover:text-[#E32225] transition-all uppercase">
              FULL BRAND IDENTITY
            </h3>
          </Link>

          <Link to="/services/LogoDesign" className="flex flex-col items-center group cursor-pointer">
            <div className="rounded-full border border-black w-8 h-8 flex justify-center items-center group-hover:border-[#E32225] transition-all">
              <ChevronRight size={26} className="group-hover:text-[#E32225]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mt-3 text-center group-hover:text-[#E32225] transition-all uppercase">
              LOGO DESIGN
            </h3>
          </Link>

          <Link to="/services/PackagingDesign" className="flex flex-col items-center group cursor-pointer">
            <div className="rounded-full border border-black w-8 h-8 flex justify-center items-center group-hover:border-[#E32225] transition-all">
              <ChevronRight size={26} className="group-hover:text-[#E32225]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mt-3 text-center group-hover:text-[#E32225] transition-all uppercase">
              PACKAGING DESIGN
            </h3>
          </Link>

          <Link to="/services/GraphicDesign" className="flex flex-col items-center group cursor-pointer">
            <div className="rounded-full border border-black w-8 h-8 flex justify-center items-center group-hover:border-[#E32225] transition-all">
              <ChevronRight size={26} className="group-hover:text-[#E32225]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mt-3 text-center group-hover:text-[#E32225] transition-all uppercase">
              GRAPHIC DESIGN
            </h3>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
