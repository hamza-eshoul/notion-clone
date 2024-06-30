import { useState } from "react";

// animations
import { AnimatePresence, motion } from "framer-motion";

// icons
import { ChevronsRight } from "lucide-react";

// components
import HomeAsideHeader from "./HomeAsideHeader";
import Tooltip from "components/Tooltip";
import HomeAsideBody from "./HomeAsideBody";
import HomeAsideFooter from "./HomeAsideFooter";

const HomeAside = () => {
  // local state
  const [showAside, setShowAside] = useState(true);
  const [showOpenAsideToolTip, setShowOpenAsideToolTip] = useState(false);

  // functions
  const hideAside = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    setShowAside(false);
  };

  return (
    <>
      <AnimatePresence>
        {showAside && (
          <motion.aside
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            className="fixed left-0 h-full w-60 border-r-[0.5px] border-gray-200 bg-[#f7f7f5] px-2 py-1.5"
          >
            <HomeAsideHeader hideAside={hideAside} />
            <HomeAsideBody />
            <HomeAsideFooter />
          </motion.aside>
        )}
      </AnimatePresence>

      {!showAside && (
        <div
          className="fixed left-0 mx-2 my-1.5 flex max-w-7 cursor-pointer items-center justify-center rounded transition duration-300 ease-in-out hover:bg-gray-100"
          onClick={() => {
            setShowAside(true);
            setShowOpenAsideToolTip(false);
          }}
        >
          <ChevronsRight
            className="size-[1.5rem] text-[#91918e]"
            onMouseEnter={() => setShowOpenAsideToolTip(true)}
            onMouseLeave={() => setShowOpenAsideToolTip(false)}
          />
          {showOpenAsideToolTip && (
            <Tooltip text="Lock sidebar open" className="left-8 top-0 w-32" />
          )}
        </div>
      )}
    </>
  );
};

export default HomeAside;
