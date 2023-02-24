import { useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";

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

const Watl = (props) => {
  const [g, setG] = useState({ width: 0, height: 0 });
  const [player, setPlayer] = useState(1);

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
    <div className='w-full !h-full bg-black'>
      <div className='w-full flex justify-center bg-[#1D1D1D] sm:pb-[20px]'>
        <div className='mt-[10px] sm:mt-[50px]' style={{ width: g.width }}>
          <div className='w-full flex flex-col justify-between flex-row sm:flex-row sm:gap-[60px]'>
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
                  20
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
                  15
                </div>
              </div>
            </div>
            <div>
              <div className='w-full flex gap-[12px] mb-[12px] sm:mb-[30px]'>
                <CustomizedTextfield
                  defaultValue={"Player 3"}
                  active={player === 2}
                />
                <div
                  className='flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]'
                  style={{
                    backgroundColor: player === 2 ? "#11E089" : "#363636",
                  }}
                >
                  12
                </div>
              </div>
              <div className='w-full flex gap-[12px] mb-[12px] sm:mb-0'>
                <CustomizedTextfield
                  defaultValue={"Player 4"}
                  active={player === 2}
                />
                <div
                  className='flex justify-center items-center w-[56px] h-[56px] 
              text-white rounded-[10px]'
                  style={{
                    backgroundColor: player === 2 ? "#11E089" : "#363636",
                  }}
                >
                  18
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#1D1D1D] w-full'>
        <div
          style={{ width: g.width }}
          className='grid grid-cols-3 sm:grid-cols-7 gap-[15px] sm:py-[34px] pb-[5px]  m-auto bg-transparent'
        >
          <button className='text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]'>
            <div className=' text-[18px] leading-[23px]'>1</div>
          </button>
          <button className='text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]'>
            <div className=' text-[18px] leading-[23px]'>2</div>
          </button>
          <button className='text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]'>
            <div className=' text-[18px] leading-[23px]'>3</div>
          </button>
          <button className='text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]'>
            <div className=' text-[18px] leading-[23px]'>4</div>
          </button>
          <button className='text-[#fff] py-[14px] rounded-[10px]  border-solid border-[1px] border-[#5A5A5A]'>
            <div className=' text-[18px] leading-[23px]'>5</div>
          </button>
          <button className='text-[#fff] py-[14px] rounded-[10px] bg-[#FF0016] border-solid border-[1px] border-[#5A5A5A]'>
            <div className=' text-[18px] leading-[23px]'>6</div>
          </button>
          <button className='text-[#fff] py-[14px] rounded-[10px] bg-[#0636D7] border-solid border-[1px] border-[#5A5A5A]'>
            <div className=' text-[18px] leading-[23px]'>8</div>
          </button>
        </div>
      </div>
      <div className='w-full h-[calc(100%-400px)] sm:h-[calc(100%-300px)] p-[50px] pt-0 flex items-center justify-center bg-[#1D1D1D]'>
        <div
          className='w-full h-full flex items-start justify-center'
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
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: `${(30 * g.width) / 4608}px solid black`,
                padding: (384 * g.width) / 4608,
              }}
            >
              <div
                className='w-full h-full rounded-[50%]'
                style={{
                  padding: (384 * g.width) / 4608,
                  border: `${(30 * g.width) / 4608}px solid black`,
                }}
              >
                <div
                  className='w-full h-full rounded-[50%]'
                  style={{
                    padding: (384 * g.width) / 4608,
                    border: `${(30 * g.width) / 4608}px solid black`,
                  }}
                >
                  <div
                    className='w-full h-full rounded-[50%]'
                    style={{
                      padding: "20%",
                      border: `${(30 * g.width) / 4608}px solid black`,
                    }}
                  >
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
    </div>
  );
};

export default Watl;
