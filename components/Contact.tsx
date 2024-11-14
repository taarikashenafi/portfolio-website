import { FaLocationArrow } from "react-icons/fa";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/utils/cn";


const Contact = () => {
  return (
    <div className="h-[50rem] w-full bg-gradient-to-tl from-bg-light via-bg-light to-bg-dark dark:bg-gradient-to-tl dark:from-bg-dark dark:via-bg-dark dark:to-bg-light relative flex items-center justify-center">
      <footer className="w-full pt-20 pb-10" id="contact">
        <div className="flex flex-col items-center">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,grey,transparent)]",
          )}
        />

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
            Taarik Ashenafi &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((link) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.id}>
                <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <img src={link.img} alt="icons" width={20} height={20} />
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
