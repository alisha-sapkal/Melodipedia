'use client'
import React from "react";
import Link from "next/link";
import CourseData from "../data/music_courses.json";
import { p } from "motion/react-client";
import { BackgroundGradient } from "./ui/baackground-gradient";

interface Course {
  id:number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
}

function FeaturedCourses() {
  const featureCourses = CourseData.courses.filter((course:Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-base">
            FEATURED COURSES
          </h2>
          <p className="font-extrabold m-2 text-3xl leading-8 tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featureCourses.map((course:Course) => (
            <div key={course.id} className="flex justify-center">
                 <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-gray-100 hover:bg-gray-300 transition duration-200"
        >
          View all Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
