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
      setWinner(`Winner Player${player}`);
    } else if (currentPoint + point < 21) {
      finalPoint = currentPoint + point;
    } else if (currentPoint + point > 21) {
      finalPoint = 11;
    }

    setPlayersPoints((prev) => ({ ...prev, [player]: finalPoint }));
    if (finalPoint !== 21) setPlayer((prev) => (prev + 1 > 4 ? 1 : prev + 1));
  };

  return (
    <div className='w-full !h-full bg-black'>
      <div className='w-full flex justify-center bg-[#1D1D1D] sm:pb-[20px]'>
        <div className='mt-[20px] sm:mt-[50px]' style={{ width: g.width }}>
          <div className='w-full flex  justify-between flex-row gap-[20px] sm:gap-[60px]'>
            <div>
              <div className='w-full mb-[12px] flex gap-[12px] sm:mb-[30px]'>
                <CustomizedTextfield
                  defaultValue={"Player 1"}
                  active={player === 1}
                />
                <div
                  className='flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]'
                  style={{
                    backgroundColor: player === 1 ? "#11E089" : "#363636",
                  }}
                >
                  {playersPoints[1]}
                </div>
              </div>

              <div className='w-full flex gap-[12px] mb-[12px] sm:mb-0'>
                <CustomizedTextfield
                  defaultValue={"Player 2"}
                  active={player === 2}
                />
                <div
                  className='flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]'
                  style={{
                    backgroundColor: player === 2 ? "#11E089" : "#363636",
                  }}
                >
                  {playersPoints[2]}
                </div>
              </div>
            </div>
            <div>
              <div className='w-full flex gap-[12px] mb-[12px] sm:mb-[30px]'>
                <CustomizedTextfield
                  defaultValue={"Player 3"}
                  active={player === 3}
                />
                <div
                  className='flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]'
                  style={{
                    backgroundColor: player === 3 ? "#11E089" : "#363636",
                  }}
                >
                  {playersPoints[3]}
                </div>
              </div>
              <div className='w-full flex gap-[12px] mb-[12px] sm:mb-0'>
                <CustomizedTextfield
                  defaultValue={"Player 4"}
                  active={player === 4}
                />
                <div
                  className='flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]'
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
      <div className='bg-[#1D1D1D] w-full'>
        <div
          style={{ width: g.width }}
          className='grid grid-cols-7 gap-[5px] sm:gap-[15px] py-[20px] sm:py-[34px] m-auto bg-transparent'
        >
          <button
            className='text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]'
            onClick={() => handlePointClick(1)}
          >
            <div className=' text-[18px] leading-[23px]'>1</div>
          </button>
          <button
            className='text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]'
            onClick={() => handlePointClick(2)}
          >
            <div className=' text-[18px] leading-[23px]'>2</div>
          </button>
          <button
            className='text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]'
            onClick={() => handlePointClick(3)}
          >
            <div className=' text-[18px] leading-[23px]'>3</div>
          </button>
          <button
            className='text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]'
            onClick={() => handlePointClick(4)}
          >
            <div className=' text-[18px] leading-[23px]'>4</div>
          </button>
          <button
            className='text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]'
            onClick={() => handlePointClick(5)}
          >
            <div className=' text-[18px] leading-[23px]'>5</div>
          </button>
          <button
            className='text-[#fff] py-[14px] rounded-[10px] bg-[#FF0016] border-solid border-[1px] border-[#5A5A5A]'
            onClick={() => handlePointClick(6)}
          >
            <div className=' text-[18px] leading-[23px]'>6</div>
          </button>
          <button
            className='text-[#fff] py-[14px] rounded-[10px] bg-[#0636D7] border-solid border-[1px] border-[#5A5A5A]'
            onClick={() => handlePointClick(8)}
          >
            <div className=' text-[18px] leading-[23px]'>8</div>
          </button>
        </div>
      </div>
      <div className='w-full h-[calc(100%-240px)] sm:h-[calc(100%-300px)] p-[50px] pt-0 flex items-center justify-center bg-[#1D1D1D]'>
        <div
          className='w-full h-full flex items-start justify-center relative'
          ref={ref}
        >
          <div
            ref={ref2}
            className='relative'
            style={{
              padding: "30px",
              borderRadius: 20,
              background: "#FFF",
              width: g.width,
              height: g.height,
            }}
          >
            <span className='absolute text-[40%] sm:text-[80%] top-[15.1%] left-[4%]'>
              8PT
            </span>
            <span className='absolute text-[40%] sm:text-[80%] top-[40.1%] left-[0%]'>
              6PT
            </span>
            <span className='absolute text-[40%] sm:text-[80%] top-[40.1%] right-[0%]'>
              5PT
            </span>
            <span className='absolute text-[40%] sm:text-[80%] top-[15.1%] right-[4%]'>
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
              <span className='absolute text-[40%] sm:text-[80%] left-[3%] top-[48.1%] left-[4%]'>
                1PT
              </span>
              <span className='absolute text-[40%] sm:text-[80%] left-[10%] top-[47.9%] left-[12%]'>
                2PT
              </span>

              <div
                className='absolute bg-[#0636D7] rounded-[50%] left-[20%] top-[12%]'
                style={{
                  width: "5%",
                  height: "5%",
                }}
              ></div>
              <div
                className='absolute bg-[#0636D7] rounded-[50%] right-[20%] top-[12%]'
                style={{
                  width: "5%",
                  height: "5%",
                }}
              ></div>
              <div
                className='w-full h-full relative rounded-[50%]'
                style={{
                  padding: (384 * g.width) / 4608,
                  border: `${(30 * g.width) / 4608}px solid black`,
                }}
              >
                <span className='absolute text-[40%] sm:text-[80%] top-[47.6%] left-[17%] sm:left-[15%]'>
                  3PT
                </span>
                <div
                  className='w-full h-full rounded-[50%]'
                  style={{
                    padding: (384 * g.width) / 4608,
                    border: `${(30 * g.width) / 4608}px solid black`,
                  }}
                >
                  <div
                    className='w-full h-full relative rounded-[50%]'
                    style={{
                      padding: "30%",
                      border: `${(30 * g.width) / 4608}px solid black`,
                    }}
                  >
                    <span className='absolute text-[40%] sm:text-[80%] top-[45%] left-[5%] left-[10%]'>
                      4PT
                    </span>

                    <div
                      className='w-full h-full rounded-[50%]'
                      style={{
                        padding: "20%",
                        border: `${(30 * g.width) / 4608}px solid black`,
                      }}
                    >
                      <div className='w-full h-full rounded-[50%] bg-[red]'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomizedDialog open={winner}>
        <p className='text-white text-[30px] text-center mt-[10px]'>{winner}</p>

        <Button
          className='login-button !text-white h-[60px] !rounded-[17px] !my-[20px]'
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
          className='login-button !text-white h-[60px] !rounded-[17px]'
          onClick={() => navigate("/")}
        >
          Back Home
        </Button>
      </CustomizedDialog>
    </div>
  );
};

export default Watl;
