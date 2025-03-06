import { useEffect, useRef } from "react";
import React from "react";

function LandingSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="reflect bg.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <a
            href="#events"
            className=" font-italic bg-transparent ring-1 ring-purple-600 font-Inter text-semibold text-gradient-to-r from-purple-300 via-purple-200 to-purple-100 px-8 py-2 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transition-all duration-300 mb-10  text-xs font-medium "
          >
            LET'S DIVE INTO THE WORLD OF CODING
          </a>
          <div className="h-6"></div>
          <h1 className="text-4xl shadow-2xl md:text-6xl font-semibold font-sora mb-100 animate-fadeIn ">
            Learn Inspire Grow with Us
          </h1>
          {/* <h6 className="text-xl  font-bold font-Sora  mb-8">
            Nerver miss a note, always be updated!
          </h6> */}
          <p className="text-lg text-left tracking-18 md:text-xl animate-fadeIn delay-1s font-Sora mb-0 mx-auto max-w-4xl ">
            Dive into the world of innovation, creativity, and collaboration!
            Our club is a hub for tech enthusiasts, developers, and learners who
            aim to explore the vast field of coding. Whether you are a beginner
            or an expert, there's a place for you here.
          </p>
          <a className="mb-1">
            <button className="group relative inline-flex rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-slate-50 bg-gradient-to-r from-purple-900 via-purple-700 to-violet-900 ">
              <span className="inline-flex  h-full w-full items-center justify-center rounded-full bg-purple-200 px-8 py-3 text-sm  text-black text-bold font-sora  group-hover:bg-gradient-to-r from-violet-900 via-violet-400 to-violet-200 ">
                Lets Get Started
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="absolute inset-0  opacity-15"></div>
    </section>
  );
}

export default LandingSection;

// CSS animations in Tailwind (add this to tailwind.config.js)
