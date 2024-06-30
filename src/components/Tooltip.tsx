import { twMerge } from "tailwind-merge";

interface TooltipProps {
  text: string;
  className?: string;
}

const Tooltip = ({ text, className }: TooltipProps) => {
  return (
    <div
      className={twMerge(
        "absolute rounded bg-black px-2 py-1 text-xs font-medium text-white",
        className,
      )}
    >
      {text}
    </div>
  );
};

export default Tooltip;
