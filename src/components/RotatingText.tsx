import { useState, useEffect } from "react";

const texts = ["P2P Core", "Pay Engine", "Branding", "Legal"];

function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      // Typing effect
      if (displayText.length < texts[currentIndex].length) {
        timeoutId = setTimeout(() => {
          setDisplayText(texts[currentIndex].slice(0, displayText.length + 1));
        }, 200);
      } else {
        // Finished typing, wait then start erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Erasing effect
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 100);
      } else {
        // Finished erasing, move to next text
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="inline-block relative">
      <span className="text-[#316bb6]">{displayText}</span>
      <span
        className={`inline-block w-[3px] h-[0.8em] bg-[#316bb6] ml-1 transition-opacity duration-100 ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      ></span>
    </span>
  );
}

export default RotatingText;
