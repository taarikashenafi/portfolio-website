import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Contact = () => {
  return (
    <div className="h-[50rem] w-full bg-gradient-to-tl from-bg-light via-bg-light to-bg-dark dark:bg-gradient-to-tl dark:from-bg-dark dark:via-bg-dark dark:to-bg-light relative flex items-center justify-center">
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
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Ready to work with me?
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today so we can discuss potential opportunities.
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
          Taarik Ashenafi © {new Date().getFullYear()}
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