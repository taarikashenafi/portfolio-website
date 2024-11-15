import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { cn } from "@/utils/cn";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="h-[50rem] w-full bg-no-repeat bg-cover bg-fixed relative flex items-center justify-center">
      <footer className="w-full pt-20" id="contact">
        <div className="flex flex-col items-center">
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            Ready to <span className="text-[#E33333]">work</span> with me?
          </h2>
          <p className="text-white-200 md:mt-10 mt-6 text-center">
            Reach out to me today so we can discuss potential opportunities.
          </p>
          <a>
            <MagicButton
              title="taarikashenafi@gmail.com" 
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-8 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Taarik Ashenafi &copy; {new Date().getFullYear()}
          </p>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((link) => (
              <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.id}>
                <div className="w-10 h-10 aspect-square cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                  <Image src={link.img} alt="icons" width={20} height={20} />
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

