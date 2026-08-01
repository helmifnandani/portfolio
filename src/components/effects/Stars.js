import {
  motion,
  useTransform,
  useScroll,
  useReducedMotion,
} from "framer-motion";
import React, { useEffect, useState } from "react";
const NUM_STARS = 150;

function Stars() {
  const [stars, setStars] = useState([]);
  const { scrollY } = useScroll();

  const generateStars = () => {
    const starData = [];
    for (let i = 0; i < NUM_STARS; i++) {
      const scrollPos = pickRandom(scrollPosValues);
      const scrollParams = pickRandom(scrollParamsValues);
      const horizontalPos = pickRandom(horizontalPosValues);
      const bottomInitial = pickRandom(bottomInitValues);
      starData.push({
        key: i,
        scrollPos,
        scrollParams,
        horizontalPos,
        bottomInitial,
      });
    }

    setStars(starData);
  };

  const pickRandom = (arr) => {
    const length = arr.length;
    const randomIndex = Math.floor(Math.random() * length);
    const val = arr[randomIndex];
    return val;
  };

  useEffect(() => {
    generateStars();
  }, []);

  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 right-0  z-0">
      {stars.map(
        ({ key, scrollPos, scrollParams, horizontalPos, bottomInitial }) => (
          <Star
            key={key}
            scrollY={scrollY}
            scrollPos={scrollPos}
            scrollParams={scrollParams}
            horizontalPos={horizontalPos}
            bottomInitial={bottomInitial}
          />
        )
      )}
    </div>
  );
}

export default React.memo(Stars, () => {
  return true;
});

const Star = ({
  scrollY,
  scrollPos = [0, 8250],
  scrollParams = [0, -2000],
  horizontalPos = "12px",
  bottomInitial = "-50vh",
}) => {
  const shouldReduceMotion = useReducedMotion();
  // Raw scrollY (not scrollYProgress) is intentional: each star's scrollPos
  // range is a different pixel span, giving them independent drift lengths.
  // Normalizing to 0-1 progress would make every star drift over the same
  // scroll distance and lose that variation.
  const y = useTransform(
    scrollY,
    scrollPos,
    shouldReduceMotion ? [0, 0] : scrollParams
  );

  const getRandValue = (max, min = 0) =>
    Math.floor(Math.random() * (max - min) + min);

  const widthHeight = getRandValue(6, 1);

  return (
    <motion.div
      className="rounded-full bg-white animate-pulse absolute z-0"
      style={{
        y,
        animationDuration: `${getRandValue(10)}s`,
        width: widthHeight,
        height: widthHeight,
        bottom: bottomInitial,
        right: horizontalPos,
      }}
    />
  );
};

const scrollPosValues = [
  [0, 8000],
  [0, 9000],
  [0, 10000],
  [0, 11000],
  [0, 12000],
  [0, 13000],
  [0, 14000],
  [0, 15000],
  [0, 16000],
  [0, 17000],
  [0, 18000],
  [0, 19000],
  [0, 20000],
  [0, 21000],
  [0, 22000],
  [0, 23000],
  [0, 24000],
  [0, 25000],
];

const scrollParamsValues = [
  [0, -100],
  [0, -200],
  [0, -300],
  [0, -400],
  [0, -500],
  [0, -600],
  [0, -700],
  [0, -800],
  [0, -900],
  [0, -1000],
  [0, -1250],
  [0, -1500],
  [0, -1750],
  [0, -2000],
];

const horizontalPosValues = [
  "3%",
  "6%",
  "9%",
  "12%",
  "15%",
  "18%",
  "21%",
  "24%",
  "27%",
  "30%",
  "33%",
  "36%",
  "39%",
  "42%",
  "45%",
  "48%",
  "51%",
  "54%",
  "57%",
  "60%",
  "63%",
  "66%",
  "69%",
  "72%",
  "75%",
  "78%",
  "81%",
  "84%",
  "87%",
  "90%",
  "93%",
  "96%",
  "99%",
  // ---
  "3%",
  "6%",
  "9%",
  "12%",
  "15%",
  "18%",
  "21%",
  "24%",
  "27%",
  "30%",
  "33%",
  "36%",
  "39%",
  "42%",
  "45%",
  "48%",
  "51%",
  "54%",
  "57%",
  "60%",
  "63%",
  "66%",
  "69%",
  "72%",
  "75%",
  "78%",
  "81%",
  "84%",
  "87%",
  "90%",
  "93%",
  "96%",
  "99%",
];

const bottomInitValues = [
  "0vh",
  "-5vh",
  "-10vh",
  "-15vh",
  "-20vh",
  "-25vh",
  "-30vh",
  "-35vh",
  "-40vh",
  "-45vh",
  "-50vh",
  "-55vh",
  "-60vh",
  "-65vh",
  "-70vh",
  "-75vh",
  "-80vh",
  "-85vh",
  "-90vh",
  "-95vh",
  // ---
  "5vh",
  "10vh",
  "15vh",
  "20vh",
  "25vh",
  "30vh",
  "35vh",
  "40vh",
  "45vh",
  "50vh",
  "55vh",
  "60vh",
  "65vh",
  "70vh",
  "75vh",
  "80vh",
  "85vh",
  "90vh",
  "95vh",
];
