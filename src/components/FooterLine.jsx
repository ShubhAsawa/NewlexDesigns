// "use client";

// import { gsap } from "gsap";
// import React, { useEffect, useRef } from "react";

// const CrowdCanvas = ({ src, rows = 15, cols = 7 }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const config = { src, rows, cols };

//     // ---------- UTILS ----------
//     const randomRange = (min, max) => min + Math.random() * (max - min);
//     const randomIndex = (array) => (randomRange(0, array.length) | 0);
//     const removeFromArray = (array, i) => array.splice(i, 1)[0];
//     const removeItemFromArray = (array, item) =>
//       removeFromArray(array, array.indexOf(item));
//     const removeRandomFromArray = (array) =>
//       removeFromArray(array, randomIndex(array));
//     const getRandomFromArray = (array) => array[randomIndex(array) | 0];

//     // ---------- TWEEN FACTORIES ----------
//     const resetPeep = ({ stage, peep }) => {
//       const direction = Math.random() > 0.5 ? 1 : -1;
//       const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random());
//       const startY = stage.height - peep.height + offsetY;
//       let startX, endX;

//       if (direction === 1) {
//         startX = -peep.width;
//         endX = stage.width;
//         peep.scaleX = 1;
//       } else {
//         startX = stage.width + peep.width;
//         endX = 0;
//         peep.scaleX = -1;
//       }

//       peep.x = startX;
//       peep.y = startY;
//       peep.anchorY = startY;

//       return { startX, startY, endX };
//     };

//     const normalWalk = ({ peep, props }) => {
//       const { startX, startY, endX } = props;
//       const xDuration = 10;
//       const yDuration = 0.25;

//       const tl = gsap.timeline();
//       tl.timeScale(randomRange(0.5, 1.5));
//       tl.to(
//         peep,
//         { duration: xDuration, x: endX, ease: "none" },
//         0
//       );
//       tl.to(
//         peep,
//         {
//           duration: yDuration,
//           repeat: xDuration / yDuration,
//           yoyo: true,
//           y: startY - 10,
//         },
//         0
//       );

//       return tl;
//     };

//     const walks = [normalWalk];

//     // ---------- FACTORY ----------
//     const createPeep = ({ image, rect }) => {
//       const peep = {
//         image,
//         rect: [],
//         width: 0,
//         height: 0,
//         drawArgs: [],
//         x: 0,
//         y: 0,
//         anchorY: 0,
//         scaleX: 1,
//         walk: null,
//         setRect: (rect) => {
//           peep.rect = rect;
//           peep.width = rect[2];
//           peep.height = rect[3];
//           peep.drawArgs = [peep.image, ...rect, 0, 0, peep.width, peep.height];
//         },
//         render: (ctx) => {
//           ctx.save();
//           ctx.translate(peep.x, peep.y);
//           ctx.scale(peep.scaleX, 1);
//           ctx.drawImage(
//             peep.image,
//             peep.rect[0],
//             peep.rect[1],
//             peep.rect[2],
//             peep.rect[3],
//             0,
//             0,
//             peep.width,
//             peep.height
//           );
//           ctx.restore();
//         },
//       };

//       peep.setRect(rect);
//       return peep;
//     };

//     // ---------- MAIN ----------
//     const img = document.createElement("img");
//     const stage = { width: 0, height: 0 };

//     const allPeeps = [];
//     const availablePeeps = [];
//     const crowd = [];

//     const createPeeps = () => {
//       const { rows, cols } = config;
//       const { naturalWidth: width, naturalHeight: height } = img;
//       const total = rows * cols;
//       const rectWidth = width / rows;
//       const rectHeight = height / cols;

//       for (let i = 0; i < total; i++) {
//         allPeeps.push(
//           createPeep({
//             image: img,
//             rect: [
//               (i % rows) * rectWidth,
//               ((i / rows) | 0) * rectHeight,
//               rectWidth,
//               rectHeight,
//             ],
//           })
//         );
//       }
//     };

//     const initCrowd = () => {
//       while (availablePeeps.length) {
//         addPeepToCrowd().walk.progress(Math.random());
//       }
//     };

//     const addPeepToCrowd = () => {
//       const peep = removeRandomFromArray(availablePeeps);
//       const walk = getRandomFromArray(walks)({
//         peep,
//         props: resetPeep({ peep, stage }),
//       }).eventCallback("onComplete", () => {
//         removePeepFromCrowd(peep);
//         addPeepToCrowd();
//       });

//       peep.walk = walk;
//       crowd.push(peep);
//       crowd.sort((a, b) => a.anchorY - b.anchorY);

//       return peep;
//     };

//     const removePeepFromCrowd = (peep) => {
//       removeItemFromArray(crowd, peep);
//       availablePeeps.push(peep);
//     };

//     const render = () => {
//       if (!canvas) return;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.save();
//       ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);

//       crowd.forEach((peep) => {
//         peep.render(ctx);
//       });

//       ctx.restore();
//     };

//     const resize = () => {
//       if (!canvas) return;
//       stage.width = canvas.clientWidth;
//       stage.height = canvas.clientHeight;
//       const dpr = window.devicePixelRatio || 1;
//       canvas.width = stage.width * dpr;
//       canvas.height = stage.height * dpr;

//       crowd.forEach((peep) => {
//         if (peep.walk) peep.walk.kill();
//       });

//       crowd.length = 0;
//       availablePeeps.length = 0;
//       availablePeeps.push(...allPeeps);

//       initCrowd();
//     };

//     const init = () => {
//       createPeeps();
//       resize();
//       gsap.ticker.add(render);
//     };

//     img.onload = init;
//     img.src = config.src;

//     const handleResize = () => resize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       gsap.ticker.remove(render);
//       crowd.forEach((peep) => {
//         if (peep.walk) peep.walk.kill();
//       });
//     };
//   }, [src, rows, cols]);

//   return <canvas ref={canvasRef} className="absolute bottom-0 h-[90vh] w-full" />;
// };

// const Skiper39 = () => {
//   return (
//     <div className="relative h-full w-full bg-white text-black">
//       <div className="top-22 absolute left-1/2 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-black">
//         <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-white after:to-black after:content-['']">
//           Crowd Canvas
//         </span>
//       </div>
//       <div className="absolute bottom-0 h-full w-screen">
//         <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
//       </div>
//     </div>
//   );
// };

// export { CrowdCanvas, Skiper39 };

"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const FooterLine = ({ src, rows = 15, cols = 7 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animate each tile on mount
    const tiles = containerRef.current.querySelectorAll(".tile");
    gsap.fromTo(
      tiles,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power3.out",
      }
    );
  }, []);

  const tiles = [];
  for (let i = 0; i < rows * cols; i++) {
    tiles.push(
      <div
        key={i}
        className="tile w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
    );
  }

  return (
    <div ref={containerRef} className="w-full h-[200px] grid overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {tiles}
    </div>
  );
};

export default FooterLine;
