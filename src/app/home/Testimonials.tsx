"use client";
import heartSrc from "public/assets/heart.svg";
import testimonialSpiegelSrc from "public/assets/testimonial-spiegel.jpg";
import testimonialSantiSrc from "public/assets/testimonial-santi.jpg";
import testimonialVivianSrc from "public/assets/testimonial-vivian.jpg";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTailwindBreakpoints } from "lib/hooks/useTailwindBreakpoints";

const TESTIMONIALS = [
  {
    src: testimonialSpiegelSrc,
    quote:
      "Students frequently make simple errors on their resumes, such as mismatched bullet styles or inconsistent font sizes. The auto-formatting feature in Resume Maker is incredibly useful for maintaining a uniform and polished layout.",
    name: "Ms. Spiegel",
    title: "Educator",
  },
  {
    src: testimonialSantiSrc,
    quote:
      "When I used Resume Maker during my previous job hunt, its sleek and professional design helped me secure interviews at leading tech companies like Google and Amazon.",
    name: "Santi",
    title: "Software Engineer",
  },
  {
    src: testimonialVivianSrc,
    quote:
      "Using Resume Maker to craft a professional resume is a seamless and stress-free experience. It has saved me countless hours and eliminated the frustration of working with Google Docs templates.",
    name: "Vivian",
    title: "College Student",
  },
];

const LG_TESTIMONIALS_CLASSNAMES = [
  "z-10",
  "translate-x-44 translate-y-24 opacity-40",
  "translate-x-32 -translate-y-28 opacity-40",
];
const SM_TESTIMONIALS_CLASSNAMES = ["z-10", "opacity-0", "opacity-0"];
const ROTATION_INTERVAL_MS = 8 * 1000; // 8s

export const Testimonials = ({ children }: { children?: React.ReactNode }) => {
  const [testimonialsClassNames, setTestimonialsClassNames] = useState(
    LG_TESTIMONIALS_CLASSNAMES
  );
  const isHoveredOnTestimonial = useRef(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHoveredOnTestimonial.current) {
        setTestimonialsClassNames((preClassNames) => {
          return [preClassNames[1], preClassNames[2], preClassNames[0]];
        });
      }
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, []);

  const { isLg } = useTailwindBreakpoints();
  useEffect(() => {
    setTestimonialsClassNames(
      isLg ? LG_TESTIMONIALS_CLASSNAMES : SM_TESTIMONIALS_CLASSNAMES
    );
  }, [isLg]);

  return (
    <section className="mx-auto -mt-2 px-8 pb-24">
      <h2 className="mb-8 text-center text-3xl font-bold">
        People{" "}
        <Image src={heartSrc} alt="love" className="-mt-1 inline-block w-7" />{" "}
        Resume Maker
      </h2>
      <div className="mx-auto mt-10 h-[235px] max-w-lg lg:h-[400px] lg:pt-28">
        <div className="relative lg:ml-[-50px]">
          {TESTIMONIALS.map(({ src, quote, name, title }, idx) => {
            const className = testimonialsClassNames[idx];
            return (
              <div
                key={idx}
                className={`bg-primary absolute max-w-lg rounded-[1.7rem] bg-opacity-30 shadow-md transition-all duration-1000 ease-linear ${className}`}
                onMouseEnter={() => {
                  if (className === "z-10") {
                    isHoveredOnTestimonial.current = true;
                  }
                }}
                onMouseLeave={() => {
                  if (className === "z-10") {
                    isHoveredOnTestimonial.current = false;
                  }
                }}
              >
                <figure className="m-1 flex gap-5 rounded-3xl bg-white p-5 text-gray-900 lg:p-7">
                  <Image
                    className="hidden h-24 w-24 select-none rounded-full lg:block"
                    src={src}
                    alt="profile"
                  />
                  <div>
                    <blockquote>
                      <p className="before:content-['“'] after:content-['”']">
                        {quote}
                      </p>
                    </blockquote>
                    <figcaption className="mt-3">
                      <div className="hidden gap-2 lg:flex">
                        <div className="font-semibold">{name}</div>
                        <div
                          className="select-none text-gray-700"
                          aria-hidden="true"
                        >
                          •
                        </div>
                        <div className="text-gray-600">{title}</div>
                      </div>
                      <div className="flex gap-4 lg:hidden">
                        <Image
                          className=" block h-12 w-12 select-none rounded-full"
                          src={src}
                          alt="profile"
                        />
                        <div>
                          <div className="font-semibold">{name}</div>
                          <div className="text-gray-600">{title}</div>
                        </div>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
      {children}
    </section>
  );
};
