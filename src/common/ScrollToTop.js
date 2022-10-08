import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) setVisible(true);
    else setVisible(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      {visible && (
        <div
          onClick={handleScrollToTop}
          className="w-10 h-10 bg-blue-500 rounded-full flex justify-center items-center cursor-pointer fixed right-5 bottom-10 transition ease-in-out"
        >
          <FaChevronUp className="text-white" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
