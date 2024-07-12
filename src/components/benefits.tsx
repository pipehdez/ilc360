import Image from "next/image";
import React from "react";
import Container from "./container";
import Separator from './separator'

export default function Benefits(props: any) {
  const { title, image, desc, imgPos } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap bg-white shadow-lg rounded-lg">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div>
            <Image
              src={image}
              width="400"
              height="400"
              alt="Benefits"
              // layout="intrinsic"
              // placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              {title !== '' && <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {title}
              </h3>}
              {
                title !== '' && <Separator />
              }
              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300 text-justify ">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
