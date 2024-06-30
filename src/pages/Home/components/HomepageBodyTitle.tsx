import { useState } from "react";

const HomepageBodyTitle = () => {
  const [titleValue, setTitleValue] = useState("title");

  // functions
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={titleValue}
      onChange={handleTitleChange}
      className="text-[2.5rem] font-bold text-[#35372F]"
    />
  );
};

export default HomepageBodyTitle;
