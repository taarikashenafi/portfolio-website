"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from 'next/image';


import { projects } from "@/data";

const Projects = () => {
  return (
    <div className="py-20" id="projects">
      <h2 className="text-[#E33333] text-2xl md:text-6xl font-bold text-center">
        Projects
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-5">
        {projects.map((item) => (
          <CardContainer key={item.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-red-500/[0.2] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                {item.title}
              </CardItem>
              <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                {item.des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.img}
                  alt="cover"
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  priority={true}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem translateZ={20} as={Link} href={item.link} target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  Try now →
                </CardItem>
                <CardItem translateZ={20} className="flex justify-between items-center">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image src={icon} alt="icon" className="p-2" width={100} height={100} />
                      </div>
                    ))}
                  </div>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Projects;
