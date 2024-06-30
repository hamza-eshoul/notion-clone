// icons
import { House, Search } from "lucide-react";

interface NavigationItem {
  title: string;
  icon: JSX.Element;
}

const naviagation_items: NavigationItem[] = [
  {
    title: "Search",
    icon: <Search className="size-[1.1rem] text-[#91918e]" />,
  },
  { title: "Home", icon: <House className="size-[1.1rem] text-[#91918e]" /> },
];

const HomeAsideBody = () => {
  return (
    <ul className="flex flex-col justify-center gap-0.5">
      {naviagation_items.map((item) => (
        <li className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 transition duration-300 ease-in-out hover:bg-[#00000008]">
          {item.icon}
          <span className="text-sm font-medium text-[#5F5E5B]">
            {item.title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default HomeAsideBody;
