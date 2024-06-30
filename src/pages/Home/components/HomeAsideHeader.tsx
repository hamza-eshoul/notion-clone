import { useState } from "react";

// state
import { useAuthStore } from "services/state/authStore";

// animations
import { AnimatePresence, motion } from "framer-motion";

// icons
import { ChevronDown, ChevronsLeft, SquarePen } from "lucide-react";

// images
import avatar from "assets/images/avatar.jpeg";

// partials
import AccountDropdown from "./AccountDropdown";

// components
import Image from "components/Image";
import Tooltip from "components/Tooltip";

interface HomeAsideHeaderProps {
  hideAside: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const HomeAsideHeader = ({ hideAside }: HomeAsideHeaderProps) => {
  // local state
  const [showCloseAside, setShowCloseAside] = useState(false);
  const [showExitToolTip, setShowExitToolTip] = useState(false);
  const [createPageToolTip, setCreatePageToolTip] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);

  // global state
  const user = useAuthStore((state) => state.user);

  // formatted data
  const user_picture = user?.picture ?? avatar;

  return (
    <div
      className="relative mb-2 flex cursor-pointer items-center justify-between rounded-lg px-2 py-1.5 transition duration-300 ease-in-out hover:bg-[#00000008]"
      onMouseEnter={() => setShowCloseAside(true)}
      onMouseLeave={() => setShowCloseAside(false)}
      onClick={() => setShowAccountDropdown(!showAccountDropdown)}
    >
      <div className="flex items-center gap-3">
        <div className="size-[1.375rem]">
          <Image src={user_picture} alt="user" className="rounded-lg" />
        </div>

        <span className="text-sm font-medium">Notion of ...</span>

        <div className="cursor-pointer">
          <ChevronDown className="size-4 text-[#91918e]" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <AnimatePresence>
          {showCloseAside && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative cursor-pointer"
            >
              <ChevronsLeft
                className="size-[1.3rem] text-[#91918e] hover:text-black"
                onMouseEnter={() => setShowExitToolTip(true)}
                onMouseLeave={() => setShowExitToolTip(false)}
                onClick={(e) => {
                  setShowExitToolTip(false);
                  hideAside(e);
                }}
              />
              {showExitToolTip && (
                <Tooltip text={"Close sidebar"} className="w-24" />
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative cursor-pointer">
          <SquarePen
            className="size-4"
            onMouseEnter={() => setCreatePageToolTip(true)}
            onMouseLeave={() => setCreatePageToolTip(false)}
          />
          {createPageToolTip && (
            <Tooltip text="Create a new page" className="-top-1 left-9 w-32" />
          )}
        </div>
      </div>

      <AnimatePresence>
        {showAccountDropdown && <AccountDropdown />}
      </AnimatePresence>
    </div>
  );
};

export default HomeAsideHeader;
