import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Contact = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <footer className="w-full pt-20 pb-10" id="contact">
          {/* background grid */}
          {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img
              src="/footer-grid.svg"
              alt="grid"
              className="w-full h-full opacity-50 "
            />
          </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to <span className="text-red">hire</span> me{" "}?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today so i can be a winning addition to your team.
        </p>
        <a href="mailto:supertaarik@gmail.com">
          <MagicButton
            title="Supertaarik@gmail.com"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Built by Taarik Ashenafi © 2024
        </p>

        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
                <a href={info.url} target="_blank" rel="noopener noreferrer" key={info.id}>
                    <div
                        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                    >
                        <img src={info.img} alt="icons" width={20} height={20} />
                    </div>
                </a>
            ))}
        </div>
      </div>
      </footer>
    </div>
  );
};

export default Contact;