import { CircleX } from "lucide-react";

const HomeAsideFooter = () => {
  // funnctions
  const handleLogout = () => {};

  return (
    <div
      className="absolute bottom-3 flex w-[90%] cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 transition duration-300 ease-in-out hover:bg-[#00000008]"
      onClick={handleLogout}
    >
      <CircleX className="size-3.5 cursor-pointer" />

      <span className="text-sm font-medium text-[#5F5E5B]">Log Out</span>
    </div>
  );
};

export default HomeAsideFooter;
