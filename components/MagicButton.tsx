import { useState } from "react";
import { toast } from "react-hot-toast";

const MagicButton = ({
  title,
  icon,
  position,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  otherClasses?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText("taarikashenafi@gmail.com");
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy email!");
    }
  };

  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFC1C1_0%,#B22222_50%,#FFC1C1_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {copied ? "Copied!" : title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
