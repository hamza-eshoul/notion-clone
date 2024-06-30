import { useState } from "react";

// state
import { useAuthStore } from "services/state/authStore";

// icons
import { Check, CircleX, Ellipsis, GripVertical } from "lucide-react";

// images
import avatar from "assets/images/avatar.jpeg";

// animations
import { AnimatePresence, motion } from "framer-motion";
import { scaleDropDownVariant } from "services/animations/DropdownAnimations";

// components
import Image from "components/Image";

const AccountDropdown = () => {
  // local state
  const [showEllipsisDropdown, setShowEllipsisDropdown] = useState(false);

  // global state
  const user = useAuthStore((state) => state.user);

  // formatted data
  const user_picture = user?.picture ?? avatar;

  // functions
  const toggleEllipsisDropdown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    setShowEllipsisDropdown(!showEllipsisDropdown);
  };

  const handleLogout = () => {};

  return (
    <motion.div
      variants={scaleDropDownVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.1 }}
      className="absolute top-10 z-10 flex min-w-80 flex-col gap-1 rounded bg-white py-1.5 shadow-md"
    >
      <div className="relative flex justify-between px-3">
        <span className="text-[0.6875rem] font-medium text-[#37352FA6]">
          {user?.email}
        </span>
        <div
          className="flex cursor-pointer items-center justify-center rounded p-0.5 hover:bg-gray-100"
          onClick={(e) => toggleEllipsisDropdown(e)}
        >
          <Ellipsis className="size-4 cursor-pointer text-[#91918e]" />
        </div>
        <AnimatePresence>
          {showEllipsisDropdown && (
            <motion.div
              variants={scaleDropDownVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.1 }}
              className="absolute -right-12 top-6 flex w-32 cursor-pointer items-center gap-2 rounded border-[1px] border-gray-200 bg-white px-2 py-1.5 shadow-lg hover:bg-gray-100"
              onClick={handleLogout}
            >
              <CircleX className="size-3.5 cursor-pointer" />
              <span className="text-sm">Log out</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex w-full items-center justify-between border-b-[1px] border-gray-200 px-3.5 py-1 pb-4 hover:bg-gray-100">
        <div className="flex items-center gap-1.5">
          <GripVertical className="size-4 text-[#91918e]" />

          <div className="flex items-center gap-3">
            <div className="size-8">
              <Image src={user_picture} alt="user" className="rounded-full" />
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-sm">Notion of {user?.name}</span>
              <span className="text-xs text-[#37352FA6]">
                Free Plan · 1 member
              </span>
            </div>
          </div>
        </div>
        <Check className="size-4" />
      </div>

      <div
        className="mx-2 mb-1 mt-1 flex items-center justify-between rounded px-3.5 py-1 text-xs text-[#37352FA6] hover:bg-gray-100"
        onClick={handleLogout}
      >
        Log out
      </div>
    </motion.div>
  );
};

export default AccountDropdown;
