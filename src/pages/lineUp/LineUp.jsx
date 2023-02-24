import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

import YellowCircle from "../../assets/yellow-circle.png";
import RedCircle from "../../assets/red-circle.png";

const CustomizedTextfield = styled(TextField)(({ active }) => ({
  width: "100%",

  "& input": {
    color: active ? "#FFF" : "#5A5A5A",
  },

  "& fieldset": {
    borderColor: "#032FE0 !important",
    opacity: active ? 1 : 0.4,
    borderRadius: 10,
  },
}));

const LineUp = (props) => {
  const [g, setG] = useState({ width: 0, height: 0 });
  const [player, setPlayer] = useState(1);
  const [images, setImages] = useState({});

  const ref = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      if (ref) {
        const ez = Math.min(ref.current.offsetWidth, ref.current.offsetHeight);
        setG({
          width: ez,
          height: ez,
        });
      }
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full !h-full bg-black">
      <div className="w-full flex justify-center bg-[#1D1D1D] pb-[20px]  px-[50px]">
        <div className="mt-[50px]" style={{ width: g.width + g.width / 7 }}>
          <div className="w-full flex flex-col sm:flex-row gap-[20px] sm:gap-[60px]">
            <div className="w-full flex gap-[12px] sm:mb-[30px]">
              <CustomizedTextfield value={"Player 1"} active={player === 1} />
              <div
                className="flex justify-center items-center min-w-[56px] w-[56px] h-[56px] 
              text-white rounded-[10px]"
                style={{
                  backgroundColor: "#032FE0",
                  opacity: player === 1 ? 1 : 0.4,
                }}
              >
                <div className="bg-[#EBDA0C] w-[34px] h-[34px] rounded-[50%]"></div>
              </div>
            </div>

            <div className="w-full flex gap-[12px] mb-[12px] sm:mb-0">
              <CustomizedTextfield value={"Player 2"} active={player === 2} />
              <div
                className="flex justify-center items-center min-w-[56px] w-[56px] h-[56px] 
              text-white rounded-[10px]"
                style={{
                  backgroundColor: "#032FE0",
                  opacity: player === 2 ? 1 : 0.4,
                }}
              >
                <div className="bg-[#DD0D1F] w-[34px] h-[34px] rounded-[50%]"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-[56px] bg-[#0825E9] rounded-[10px] text-white">
            Miss
          </div>
        </div>
      </div>

      <div className="w-full h-[calc(100%-270px)] sm:h-[calc(100%-210px)] p-[50px] pt-0 flex items-center justify-center bg-[#1D1D1D]">
        <div
          className="w-full h-full flex items-start justify-center"
          ref={ref}
        >
          <div
            ref={ref2}
            style={{
              padding: (g.width * 30) / 588,
              borderRadius: 20,
              background: "#FFF",
              width: g.width + g.width / 7,
              height: g.height,
              // display: "grid",
              // gridTemplateColumns: "repeat(7, 1fr)",
              // gridTemplateRows: "repeat(6, 1fr)",
              // gap: (g.width * 10) / 588,
              // alignItems: "center",
            }}
          >
            <div
              style={{
                padding: (g.width * 20) / 588,
                background: "#0825E9",
                width: "100%",
                height: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                gridTemplateRows: "repeat(6, 1fr)",
                gap: (g.width * 10) / 588,
                alignItems: "center",
              }}
            >
              {[...Array(42)].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center cursor-pointer relative"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "#1D1D1D",
                      aspectRatio: "1/1",
                    }}
                    onClick={() => {
                      setImages((prev) => ({
                        ...prev,
                        [index]: player === 1 ? YellowCircle : RedCircle,
                      }));
                      setPlayer(player === 1 ? 2 : 1);
                    }}
                  >
                    {images[index] && (
                      <img
                        src={images[index]}
                        alt="img"
                        className="w-[100%] h-[100%] absolute"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineUp;
