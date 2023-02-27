import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

import Axe from "../../assets/axe.png";
import Hat from "../../assets/hat.png";

const CustomizedTextfield = styled(TextField)(({ active }) => ({
  width: "100%",

  "& input": {
    color: active ? "#11E089" : "#5A5A5A",
  },

  "& fieldset": {
    borderColor: active ? "#11E089 !important" : "#5A5A5A !important",
    borderRadius: 10,
  },
}));

const TicTac = (props) => {
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
      <div className="w-full flex justify-center bg-[#1D1D1D] pb-[20px]">
        <div className="mt-[50px]" style={{ width: g.width }}>
          <div className="w-full flex flex-col sm:flex-row gap-[20px] sm:gap-[60px]">
            <div className="w-full flex gap-[12px] sm:mb-[30px]">
              <CustomizedTextfield value={"Player 1"} active={player === 1} />
              <div
                className="flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]"
                style={{
                  backgroundColor: player === 1 ? "#11E089" : "#363636",
                }}
              >
                0
              </div>
            </div>

            <div className="w-full flex gap-[12px] mb-[12px] sm:mb-0">
              <CustomizedTextfield value={"Player 2"} active={player === 2} />
              <div
                className="flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]"
                style={{
                  backgroundColor: player === 2 ? "#11E089" : "#363636",
                }}
              >
                0
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[calc(100%-155px)] p-[50px] pt-0 flex items-center justify-center bg-[#1D1D1D]">
        <div
          className="w-full h-full flex items-start justify-center"
          ref={ref}
        >
          <div
            ref={ref2}
            style={{
              padding: "30px",
              borderRadius: 20,
              background: "#FFF",
              width: g.width,
              height: g.height,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
            }}
          >
            {[...Array(9)].map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center cursor-pointer relative"
                  style={{
                    borderTop: `${(g.width * 75) / 4608}px solid black`,
                    borderLeft: `${(g.width * 75) / 4608}px solid black`,
                    borderRight:
                      index === 2 || index === 5 || index === 8
                        ? `${(g.width * 75) / 4608}px solid black`
                        : "none",
                    borderBottom:
                      index <= 5
                        ? "none"
                        : `${(g.width * 75) / 4608}px solid black`,
                  }}
                  onClick={() => {
                    setImages((prev) => ({
                      ...prev,
                      [index]: player === 1 ? Axe : Hat,
                    }));
                    setPlayer(player === 1 ? 2 : 1);
                  }}
                >
                  {images[index] && (
                    <img
                      src={images[index]}
                      alt="img"
                      className="w-[50%] h-[70%] absolute"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTac;
