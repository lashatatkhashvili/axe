import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  TextField,
  Dialog,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "../../assets/svg/Close";

import TicTacImage from "../../assets/card-tic-tac.jpg";
import WatlImage from "../../assets/card-watl.jpg";
import LineUpImage from "../../assets/card-line-up.jpg";
import TicTacBanner from "../../assets/banner-tic-tac.jpg";

import styled from "@emotion/styled";

const CustomizedDialog = styled(Dialog)({
  "& .MuiDialog-paper": {
    minWidth: 562,
    minHeight: 470,
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

  "& .MuiFormControl-root": {
    overflow: "visible",
  },
});

const CustomizedTextfield = styled(TextField)({
  autoComplete: "off",
  "& input": {
    color: "white",
  },

  "& fieldset": {
    borderColor: "white !important",
    borderRadius: 17,
  },

  "& label": {
    color: "white !important",
  },
});

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width:550px)");

  const data = {
    0: {
      image: TicTacImage,
      url: "/tic-tac",
      title: "Tic Tac Toe Play",
      banner: TicTacBanner,
    },
    1: { image: WatlImage, url: "/watl", title: "Watl", banner: TicTacBanner },
    2: {
      image: LineUpImage,
      url: "/line-up",
      title: "Line Em Up Play",
      banner: TicTacBanner,
    },
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full h-full bg-[#1a1a1a] overflow-auto pb-[100px]">
        <div className="flex items-center justify-between px-[50px] ld:px-[100px] xl:px-[150px] w-full h-[81px] bg-[#353535]">
          <p className="text-white">Badaxetargets</p>
          <p
            className="text-white cursor-pointer"
            onClick={() => !user && setOpen(true)}
          >
            {user ? name : "Log In"}
          </p>
        </div>

        <div className="hidden md:block w-full px-[50px] ld:px-[100px] xl:px-[150px] mt-[40px]">
          <div className="w-full h-[350px] rounded-[25px] bg-[#353535] relative">
            <img
              src={data[bannerIndex]?.banner}
              alt="banner"
              className="w-full h-[350px]"
            />

            <div className="w-full flex justify-center items-center gap-[12px] absolute bottom-[25px]">
              {[...Array(6)].map((item, index) => {
                return (
                  <div
                    className="w-[13px] h-[13px] rounded-[50%] bg-white cursor-pointer"
                    style={{ backgroundColor: index !== bannerIndex && "gray" }}
                    onClick={() => setBannerIndex(index)}
                    key={index}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full px-[50px] ld:px-[100px] xl:px-[150px] mt-[41px]">
          <p className="text-white">Top Games</p>

          <div
            className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-[20px] mt-[20px]"
            style={{
              gridTemplateColumns: isMobile && "repeat(1, minmax(0, 1fr))",
            }}
          >
            {[...Array(6)].map((item, index) => {
              return (
                <div className="grow">
                  <div
                    className="h-[400px] md:h-[300px] bg-[#353535] rounded-[20px] cursor-pointer bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${data[index]?.image})`,
                    }}
                    onClick={() => {
                      if (!user) {
                        setOpen(data[index]?.url);
                      } else {
                        navigate(data[index]?.url);
                      }
                    }}
                  ></div>
                  <p className="text-white mt-[2px] text-center">
                    {data[index]?.title}
                  </p>
                  <p className="text-white text-center">In this Game...</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <CustomizedDialog open={open}>
        <Box
          className="absolute right-[26px] top-[35px]"
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </Box>
        <p className="text-[30px] text-white text-center mt-[80px]">Log In</p>

        <CustomizedTextfield
          label={"Log in"}
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          className="!my-[40px] !color-white"
        />

        <CustomizedTextfield
          label={"Password"}
          type="password"
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          className="!mb-[20px] s!color-white"
        />

        <Box className="flex items-center text-[#fff] text-[16px]">
          <Checkbox className="!border-[1px] !text-[#fff]" /> Remember Me
        </Box>

        <Button
          className="login-button !text-white h-[60px] !rounded-[17px]"
          onClick={() => {
            setUser(name);
            if (name) {
              if (typeof open === "string") navigate(open);
              setOpen(false);
            }
          }}
        >
          Next
        </Button>
      </CustomizedDialog>
    </div>
  );
};

export default Login;
