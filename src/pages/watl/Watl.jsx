import { useEffect, useRef, useState } from "react";
import { Button, Dialog, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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

const CustomizedDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    minWidth: 400,
    minHeight: 250,
    borderRadius: 35,
    overflow: "visible",
    backgroundColor: "#353535",
    padding: "0 83px",

    "@media screen and (max-width: 620px)": {
      minWidth: "80%",
      padding: "0 20px",
    },
  },

  "& .MuiDialogContent-root": {
    padding: 0,
  },
});

const Watl = (props) => {
  const [g, setG] = useState({ width: 0, height: 0 });
  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState(1);
  const [playersPoints, setPlayersPoints] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  });

  const ref = useRef(null);
  const ref2 = useRef(null);

  const navigate = useNavigate();

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

  const handlePointClick = (point) => {
    const currentPoint = playersPoints[player];
    let finalPoint;

    if (currentPoint + point === 21) {
      finalPoint = currentPoint + point;
      setWinner(`Player${player} Wins!`);
    } else if (currentPoint + point < 21) {
      finalPoint = currentPoint + point;
    } else if (currentPoint + point > 21) {
      finalPoint = 11;
    }

    setPlayersPoints((prev) => ({ ...prev, [player]: finalPoint }));
    if (finalPoint !== 21) setPlayer((prev) => (prev + 1 > 4 ? 1 : prev + 1));
  };

  return (
    <div className="w-full !h-full bg-black">
      <div className="w-full flex justify-center bg-[#1D1D1D] sm:pb-[20px]">
        <div className="mt-[5px]" style={{ width: g.width }}>
          <div className="w-full flex  justify-between flex-row gap-[20px]">
            <div className="w-full">
              <div className="w-full mb-[12px] flex gap-[12px] sm:mb-[30px]">
                <CustomizedTextfield
                  defaultValue={"Player 1"}
                  active={player === 1}
                />
                <div
                  className="flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]"
                  style={{
                    backgroundColor: player === 1 ? "#11E089" : "#363636",
                  }}
                >
                  {playersPoints[1]}
                </div>
              </div>

              <div className="w-full flex gap-[12px]">
                <CustomizedTextfield
                  defaultValue={"Player 2"}
                  active={player === 2}
                />
                <div
                  className="flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]"
                  style={{
                    backgroundColor: player === 2 ? "#11E089" : "#363636",
                  }}
                >
                  {playersPoints[2]}
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex gap-[12px] mb-[12px] sm:mb-[30px]">
                <CustomizedTextfield
                  defaultValue={"Player 3"}
                  active={player === 3}
                />
                <div
                  className="flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]"
                  style={{
                    backgroundColor: player === 3 ? "#11E089" : "#363636",
                  }}
                >
                  {playersPoints[3]}
                </div>
              </div>
              <div className="w-full flex gap-[12px]">
                <CustomizedTextfield
                  defaultValue={"Player 4"}
                  active={player === 4}
                />
                <div
                  className="flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]"
                  style={{
                    backgroundColor: player === 4 ? "#11E089" : "#363636",
                  }}
                >
                  {playersPoints[4]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1D1D1D] w-full">
        <div
          style={{ width: g.width }}
          className="grid grid-cols-7 gap-[5px] py-[10px] m-auto bg-transparent"
        >
          <button
            className="text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]"
            onClick={() => handlePointClick(1)}
          >
            <div className=" text-[18px] leading-[23px]">1</div>
          </button>
          <button
            className="text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]"
            onClick={() => handlePointClick(2)}
          >
            <div className=" text-[18px] leading-[23px]">2</div>
          </button>
          <button
            className="text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]"
            onClick={() => handlePointClick(3)}
          >
            <div className=" text-[18px] leading-[23px]">3</div>
          </button>
          <button
            className="text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]"
            onClick={() => handlePointClick(4)}
          >
            <div className=" text-[18px] leading-[23px]">4</div>
          </button>
          <button
            className="text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]"
            onClick={() => handlePointClick(5)}
          >
            <div className=" text-[18px] leading-[23px]">5</div>
          </button>
          <button
            className="text-[#fff] py-[14px] rounded-[10px] bg-[#FF0016] border-solid border-[1px] border-[#5A5A5A]"
            onClick={() => handlePointClick(6)}
          >
            <div className=" text-[18px] leading-[23px]">6</div>
          </button>
          <button
            className="text-[#fff] py-[14px] rounded-[10px] bg-[#0636D7] border-solid border-[1px] border-[#5A5A5A]"
            onClick={() => handlePointClick(8)}
          >
            <div className=" text-[18px] leading-[23px]">8</div>
          </button>
        </div>
        <div
          className="flex items-center m-auto !mb-[10px] outline-0 justify-center w-full h-[56px] bg-[#0825E9] rounded-[10px] text-white cursor-pointer"
          onClick={() => handlePointClick(0)}
          style={{ width: g.width }}
        >
          Miss
        </div>
      </div>
      <div className="w-full h-[calc(100%-240px)] sm:h-[calc(100%-300px)] p-[50px] pt-0 flex items-center justify-center bg-[#1D1D1D]">
        <div
          className="w-full h-full flex items-start justify-center relative"
          ref={ref}
        >
          <div
            ref={ref2}
            className="relative"
            style={{
              padding: (g.width * 30) / 619,
              borderRadius: 20,
              background: "#FFF",
              width: g.width,
              height: g.height,
            }}
          >
            <div
              className="absolute top-[50%] left-[1%] w-[46%]"
              style={{
                borderTop: `${(30 * g.width) / 6500}px dashed red`,
              }}
            />
            <div
              className="absolute xsm:top-[53%] top-[53.5%] right-[1%] w-[49%]"
              style={{
                borderTop: `${(30 * g.width) / 6500}px dashed #6e6e6f`,
              }}
            />
            <span
              className="absolute xsm:text-[10px]  text-[100%] xsm:top-[44.1%] sm:top-[46%] top-[47.1%] left-[0%]"
              style={{
                fontSize: (g.width * 16) / 619,
              }}
            >
              6PT
            </span>
            <span
              className="absolute xsm:text-[10px] text-[100%] xsm:top-[46.8%] top-[49.1%] right-[0%]"
              style={{
                fontSize: (g.width * 16) / 619,
              }}
            >
              5PT
            </span>
            <span
              className={`absolute xsm:text-[10px]  text-[100%] top-[8%] sm:top-[7.1%] right-[4%]`}
              style={{
                fontSize: (g.width * 16) / 619,
              }}
            >
              8PT
            </span>
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: `${(30 * g.width) / 4608}px solid black`,
                padding: (384 * g.width) / 4608,
                position: "relative",
                overflow: "visible",
              }}
            >
              <span
                className="absolute xsm:text-[10px] text-[100%] xsm:left-[2%] top-[51.8%] left-[3%]"
                style={{
                  fontSize: (g.width * 16) / 619,
                }}
              >
                1PT
              </span>
              <span
                className="absolute xsm:text-[10px] text-[100%] left-[10%] top-[51.8%] xs-left-[10%] left-[13%]"
                style={{
                  fontSize: (g.width * 16) / 619,
                }}
              >
                2PT
              </span>

              <div
                className="absolute top-[8.9%] left-[22%] w-[78.5%] z-[1]"
                style={{
                  borderTop: `${(30 * g.width) / 6500}px dashed #6e6e6f`,
                }}
              />

              <div
                className="absolute top-[8.9%] left-[22%] z-[1]"
                style={{
                  borderLeft: `${(30 * g.width) / 6500}px dotted #6e6e6f`,
                  height: "2.6%",
                }}
              />
              <div
                className="absolute top-[8.9%] right-[22.5%] z-[1]"
                style={{
                  borderLeft: `${(30 * g.width) / 6500}px dotted #6e6e6f`,
                  height: "2.6%",
                }}
              />

              <div
                className="absolute bg-[#0636D7] rounded-[50%] left-[20%] top-[12%]"
                style={{
                  width: "5%",
                  height: "5%",
                }}
              ></div>
              <div
                className="absolute bg-[#0636D7] rounded-[50%] right-[20%] top-[12%]"
                style={{
                  width: "5%",
                  height: "5%",
                }}
              ></div>
              <div
                className="w-full h-full relative rounded-[50%]"
                style={{
                  padding: (384 * g.width) / 4608,
                  border: `${(30 * g.width) / 4608}px solid black`,
                }}
              >
                <span
                  className="absolute xsm:text-[10px] text-[100%] top-[52.3%] xs:left-[15%] left-[16%] "
                  style={{
                    fontSize: (g.width * 16) / 619,
                  }}
                >
                  3PT
                </span>
                <div
                  className="w-full h-full rounded-[50%]"
                  style={{
                    padding: (384 * g.width) / 4608,
                    border: `${(30 * g.width) / 4608}px solid black`,
                  }}
                >
                  <div
                    className="w-full h-full relative rounded-[50%]"
                    style={{
                      padding: "30%",
                      border: `${(30 * g.width) / 4608}px solid black`,
                    }}
                  >
                    <span
                      className="absolute xsm:text-[10px] text-[100%] top-[55%] left-[12%] xsm:left-[7%]"
                      style={{
                        fontSize: (g.width * 16) / 619,
                      }}
                    >
                      4PT
                    </span>

                    <div
                      className="w-full h-full rounded-[50%]"
                      style={{
                        padding: "28%",
                        border: `${(30 * g.width) / 4608}px solid black`,
                      }}
                    >
                      <div className="w-full h-full rounded-[50%] bg-[red]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomizedDialog open={winner}>
        <p className="text-white text-[30px] text-center mt-[10px]">{winner}</p>

        <Button
          className="login-button !text-white h-[60px] !rounded-[17px] !my-[20px]"
          onClick={() => {
            setWinner(null);
            setPlayersPoints({
              1: 0,
              2: 0,
              3: 0,
              4: 0,
            });
            setPlayer(1);
          }}
        >
          Play Again
        </Button>
        <Button
          className="login-button !text-white h-[60px] !rounded-[17px]"
          onClick={() => navigate("/")}
        >
          Back Home
        </Button>
      </CustomizedDialog>
    </div>
  );
};

export default Watl;
