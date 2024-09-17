import React from "react";
import ModalProvider from "react-modal";

import { useGoogleLogin } from "@react-oauth/google";
import {
  Column,
  Stack,
  Slider,
  Row,
  Img,
  Text,
  Line,
  Input,
  CheckBox,
  Button,
  PagerIndicator,
} from "components";

const SignUpModal = (props) => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[74%]"
        overlayClassName="bg-black_900_b2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Stack className="lg:h-[623px] xl:h-[712px] 2xl:h-[801px] 3xl:h-[961px] w-[100%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={1}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="absolute w-[100%]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Row className="bg-white_A700 items-center justify-end lg:p-[61px] xl:p-[70px] 2xl:p-[79px] 3xl:p-[94px] rounded-radius15">
                    <Column className="pr-[4px] py-[4px] w-[49%]">
                      <Row className="font-inter w-[30%]">
                        <Img
                          src="images/img_location.svg"
                          className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[17%]"
                          alt="location"
                        />
                        <Text className="font-normal 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] lg:text-[17px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[27px] text-black_900 w-[auto]">
                          Educatsy
                        </Text>
                      </Row>
                      <Text className="font-bold font-metropolis lg:leading-[38px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[80%]">
                        Welcome to
                        <br />
                        Eduvi Online
                        <br />
                        Learning Platform
                      </Text>
                      <Img
                        src="images/img_group_322X325.svg"
                        className="lg:h-[251px] xl:h-[287px] 2xl:h-[323px] 3xl:h-[387px] ml-[2px] lg:my-[32px] xl:my-[37px] 2xl:my-[42px] 3xl:my-[50px] w-[74%]"
                        alt="Group"
                      />
                    </Column>
                    <Line className="bg-gradient  lg:h-[499px] xl:h-[571px] 2xl:h-[642px] 3xl:h-[770px] mt-[1px] w-[1px]" />
                    <Column className="items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] w-[41%]">
                      <Row className="bg-white_A700 border border-gray_300 border-solid items-center justify-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[92%]">
                        <Stack className="bg-red_600 lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius7 lg:w-[31px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                          <Img
                            src="images/img_google.svg"
                            className="common-pointer absolute lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] inset-[0] justify-center m-[auto] w-[60%]"
                            onClick={googleSignIn}
                            alt="google"
                          />
                        </Stack>
                        <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mr-[53px] xl:mr-[61px] 2xl:mr-[69px] 3xl:mr-[82px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                          Signup with google
                        </Text>
                      </Row>
                      <Row className="justify-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[68%]">
                        <div className="bg-gray_700 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[8%]"></div>
                        <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                          Or signup with your email
                        </Text>
                        <div className="bg-gray_700 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[8%]"></div>
                      </Row>
                      <Column className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                        <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                          Full name
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                          wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] flex lg:mt-[8px] w-[100%] xl:mt-[9px]"
                          name="Group7608"
                          placeholder="Esther Howard"
                          prefix={
                            <Img
                              src="images/img_user_15X14.svg"
                              className="ml-[3px] lg:w-[10px] lg:mr-[12px] xl:w-[12px] xl:mr-[14px] 2xl:w-[14px] 2xl:mr-[16px] 3xl:w-[16px] 3xl:mr-[19px] my-[auto]"
                              alt="user"
                            />
                          }
                          shape="RoundedBorder10"
                          size="sm"
                          variant="OutlineGray300"
                        ></Input>
                        <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                          Email
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                          wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] flex lg:mt-[8px] w-[100%] xl:mt-[9px]"
                          name="email One"
                          placeholder="bill.sanders@example.com"
                          prefix={
                            <Img
                              src="images/img_vector_gray_700.svg"
                              className="ml-[3px] lg:w-[11px] lg:mr-[12px] xl:w-[13px] xl:mr-[14px] 2xl:w-[15px] 2xl:mr-[16px] 3xl:w-[18px] 3xl:mr-[19px] my-[auto]"
                              alt="Vector"
                            />
                          }
                          shape="RoundedBorder10"
                          size="sm"
                          variant="OutlineGray300"
                        ></Input>
                        <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                          Passord
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                          wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] flex lg:mt-[8px] w-[100%] xl:mt-[9px]"
                          name="password"
                          placeholder="*************"
                          prefix={
                            <Img
                              src="images/img_lock.svg"
                              className="lg:w-[9px] lg:ml-[3px] lg:mr-[14px] xl:w-[10px] xl:ml-[4px] xl:mr-[16px] 2xl:w-[12px] 2xl:ml-[5px] 2xl:mr-[18px] 3xl:w-[14px] 3xl:ml-[6px] 3xl:mr-[21px] my-[auto]"
                              alt="lock"
                            />
                          }
                          suffix={
                            <Img
                              src="images/img_eye.svg"
                              className="mr-[3px] lg:w-[11px] lg:ml-[27px] xl:w-[13px] xl:ml-[31px] 2xl:w-[15px] 2xl:ml-[35px] 3xl:w-[18px] 3xl:ml-[42px] my-[auto]"
                              alt="eye"
                            />
                          }
                          shape="RoundedBorder10"
                          size="sm"
                          variant="OutlineGray300"
                        ></Input>
                        <CheckBox
                          className="font-medium ml-[2px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900"
                          inputClassName="h-[20px] mr-[5px] w-[20px]"
                          name="Iagreedtothe"
                          label="I agreed to the Terms & Conditions"
                        ></CheckBox>
                        <Button
                          className="font-medium lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                          shape="RoundedBorder10"
                          size="md"
                          variant="FillRed300"
                        >
                          Sign Up
                        </Button>
                        <Text className="font-medium lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_300 w-[auto]">
                          <span className="text-gray_700 font-inter">
                            Alreay have account?{" "}
                          </span>
                          <span className="text-red_300 font-inter">
                            Sign in
                          </span>
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                </React.Fragment>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] border-red_300 border border-solid bg-white_A700 relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-deep_orange_400_7f relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[13%] h-[10px] left-[23%] w-[max-content]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] border-red_300 border border-solid bg-white_A700 relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-deep_orange_400_7f relative"
              sliderRef={sliderRef}
              selectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] xl:mx-[2px]"
              unselectedWrapperCss="2xl:mx-[2px] 3xl:mx-[3px] inline-block lg:mx-[1px] xl:mx-[2px]"
            />
          </Stack>
        </div>
      </ModalProvider>
    </>
  );
};

export default SignUpModal;
