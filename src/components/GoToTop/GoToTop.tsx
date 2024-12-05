import { FaArrowUp } from "react-icons/fa";
import "./GoToTop.css";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [isVasible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    const winSacroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(winSacroll);
    if (winSacroll > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div>
      {isVasible && (
        <div
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 cursor-pointer transition duration-300"
          onClick={goToBtn}
        >
          <FaArrowUp className="animate-up-down" />
        </div>
      )}
    </div>
  );
};

export default GoToTop;