import { useState } from "react";

const HomepageBodyText = () => {
  // local state
  const [textValue, setTextValue] = useState("title");

  // functions
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={textValue}
      onChange={handleTitleChange}
      className="text-[#35372F]"
    />
  );
};

export default HomepageBodyText;
