import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Stack,
  List,
  Button,
  Grid,
  Input,
  SelectBox,
  Slider,
} from "components";

const EduviCoursesPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-end mx-[auto] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] w-[100%]">
        <Column className="w-[89%]">
          <header className="w-[100%]">
            <Row className="items-center pr-[2px] pt-[2px] w-[100%]">
              <Img
                src="images/img_location.svg"
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[2%]"
                alt="location"
              />
              <Text className="cursor-pointer hover:font-normal font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[4px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                Educatsy
              </Text>
              <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] hover:text-black_900 text-gray_900 w-[auto]">
                Shop
              </Text>
              <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] hover:text-black_900 text-gray_900 w-[auto]">
                For Kindergarten
              </Text>
              <Img
                src="images/img_arrowdown_gray_900.svg"
                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[1%]"
                alt="arrowdown"
              />
              <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] hover:text-black_900 text-gray_900 w-[auto]">
                For High School
              </Text>
              <Img
                src="images/img_arrowdown_gray_900.svg"
                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[1%]"
                alt="arrowdown One"
              />
              <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[37px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] hover:text-black_900 text-gray_900 w-[auto]">
                For College
              </Text>
              <Img
                src="images/img_arrowdown_gray_900.svg"
                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[1%]"
                alt="arrowdown Two"
              />
              <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] hover:text-black_900 text-gray_900 w-[auto]">
                Courses
              </Text>
              <Img
                src="images/img_arrowdown_gray_900.svg"
                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[1%]"
                alt="arrowdown Three"
              />
              <Text className="cursor-pointer font-medium hover:font-normal 3xl:ml-[114px] lg:ml-[73px] xl:ml-[84px] 2xl:ml-[95px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] hover:text-black_900 text-gray_900 w-[auto]">
                Cart (0)
              </Text>
              <Img
                src="images/img_bag.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[2%]"
                alt="bag"
              />
              <Text className="cursor-pointer font-medium hover:font-normal lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] hover:text-black_900 text-gray_900 w-[auto]">
                My Account
              </Text>
              <Img
                src="images/img_user_24X24.svg"
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                alt="user"
              />
            </Row>
          </header>
          <Row className="bg-yellow_100 lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-radius20 w-[100%]">
            <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_300 tracking-ls1 w-[auto]">
              <span className="text-black_900 font-inter">Home |</span>
              <span className="text-red_300 font-inter"> </span>
              <span className="text-red_300 font-inter">Courses</span>
            </Text>
            <Text className="font-normal lg:leading-[38px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] ml-[3px] lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-gray_900 w-[30%]">
              Eduvi Courses
              <br />
              For All Standards
            </Text>
            <Stack className="font-airbnbcerealapp lg:h-[182px] xl:h-[208px] 2xl:h-[234px] 3xl:h-[280px] lg:ml-[122px] xl:ml-[140px] 2xl:ml-[158px] 3xl:ml-[189px] mt-[3px] w-[35%]">
              <Column className="absolute inset-y-[0] w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[32%]"
                  orientation="vertical"
                >
                  <Row className="items-center justify-between my-[1px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                  </Row>
                  <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                  </Row>
                  <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                  </Row>
                  <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                  </Row>
                  <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                  </Row>
                  <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                  </Row>
                  <Row className="items-center justify-between mb-[1px] mt-[1.575px] w-[100%]">
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                    <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                      +
                    </Text>
                  </Row>
                </List>
                <div className="backdrop-opacity-[0.5] bg-black_900_cc blur-[90.00px] lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] 2xl:mt-[96px] rounded-radius2155 w-[100%]"></div>
              </Column>
              <Img
                src="images/img_image_233X416.png"
                className="absolute lg:h-[182px] xl:h-[208px] 2xl:h-[234px] 3xl:h-[280px] left-[3%] right-[1%] w-[97%]"
                alt="Image"
              />
            </Stack>
          </Row>
          <Row className="items-center justify-between lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[100%]">
            <Button
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              All Courses
            </Button>
            <Button
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              Kindergarten
            </Button>
            <Button
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[12%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillOrange200"
            >
              High School
            </Button>
            <Button
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              College
            </Button>
            <Button
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[11%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              Computer
            </Button>
            <Button
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[9%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              Science
            </Button>
            <Button
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[12%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              Engineering
            </Button>
            <Button
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-deep_orange_400 w-[13%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              More Courses
            </Button>
          </Row>
          <Text className="font-normal lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
            Standard Classes
          </Text>
          <Grid className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-4 lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_download.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="download"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                Standard One
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[100%]">
                Standard 1 is a foundation Standard that reflects 7 important
                concepts...
              </Text>
              <Button
                className="font-medium lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[62%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_download_50X50.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="download One"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                Standard Two
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[98%]">
                Standard 2 builds on the foundations of Standard 1 and includes
                requirements...
              </Text>
              <Button
                className="font-medium lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[70%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[22px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_whatsapp.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] mt-[1px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="whatsapp"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                Standard Three
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[100%]">
                Standard 3 of the Aged Care Quality Standards applies to all
                services delivering personal...
              </Text>
              <Button
                className="font-medium mb-[1px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[70%]"
                shape="RoundedBorder5"
                size="sm"
                variant="FillRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_rewind_50X50.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="rewind"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                Standard Four
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[95%]">
                Standard 4 of the Aged Care Quality Standards focuses on
                services and supports...
              </Text>
              <Button
                className="font-medium lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[70%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_music.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] mt-[4px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="music"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                Standard Five
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[100%]">
                Standard 5 Learning Resources. Learning Resources ensure that
                the school has the...
              </Text>
              <Button
                className="font-medium mb-[4px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[68%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_volume_50X50.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="volume"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                Standard Six
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[99%]">
                Standard 6 requires an organisation to have a system to resolve
                complaints...
              </Text>
              <Button
                className="font-medium lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[66%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_arrowdown.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] mt-[4px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="arrowdown Four"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                Standard Seven
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[99%]">
                Standard 7 Blood Management mandates that leaders of health
                service organisations...
              </Text>
              <Button
                className="font-medium mb-[4px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[68%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_info.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] mt-[4px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="info"
              />
              <Text className="font-normal lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                Standard Eight
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[99%]">
                Standard 8 Course from NCERT Solutions help students to
                understand...
              </Text>
              <Button
                className="font-medium mb-[4px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[68%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[19px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_volume_1.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] mt-[4px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="volume One"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                Standard Nine
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[100%]">
                Standard 5 Learning Resources. Learning Resources ensure that
                the school has the...
              </Text>
              <Button
                className="font-medium mb-[4px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[68%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_group.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="Group"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                O- Level
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[99%]">
                Standard 6 requires an organisation to have a system to resolve
                complaints...
              </Text>
              <Button
                className="font-medium lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[66%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer items-center justify-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius15 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_arrowup.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="arrowup"
              />
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                A- Level
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[99%]">
                Standard 6 requires an organisation to have a system to resolve
                complaints...
              </Text>
              <Button
                className="font-medium lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[66%]"
                shape="RoundedBorder5"
                size="sm"
                variant="OutlineRed300"
              >
                Class Details
              </Button>
            </Column>
          </Grid>
          <Text className="font-normal lg:mt-[121px] xl:mt-[138px] 2xl:mt-[156px] 3xl:mt-[187px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
            Other Courses For High School
          </Text>
          <Row className="items-center justify-between lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[100%]">
            <Input
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_700_99 text-gray_700_99 w-[100%]"
              wrapClassName="flex w-[66%]"
              name="Search"
              placeholder="Serach Class, Course"
              suffix={
                <Img
                  src="images/img_search.svg"
                  className="bg-red_300 lg:w-[15px] lg:h-[16px] lg:ml-[10px] lg:mr-[11px] xl:w-[17px] xl:h-[18px] xl:ml-[12px] xl:mr-[13px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[14px] 2xl:mr-[15px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[16px] 3xl:mr-[18px] rounded-radius50 my-[auto]"
                  alt="search"
                />
              }
              shape="RoundedBorder10"
              variant="FillWhiteA700"
            ></Input>
            <SelectBox
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700_99 w-[31%]"
              placeholderClassName="text-gray_700_99"
              name="Sortby"
              placeholder="Sort by: Latest"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_red_300.svg"
                  className="lg:w-[7px] lg:h-[5px] lg:mr-[16px] xl:w-[8px] xl:h-[6px] xl:mr-[18px] 2xl:w-[10px] 2xl:h-[7px] 2xl:mr-[21px] 3xl:w-[12px] 3xl:h-[8px] 3xl:mr-[25px]"
                  alt="arrow_down"
                />
              }
              shape="RoundedBorder10"
              size="sm"
              variant="FillWhiteA700"
            ></SelectBox>
          </Row>
          <Stack className="3xl:h-[1056px] lg:h-[684px] xl:h-[782px] 2xl:h-[880px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
            <Row className="absolute bottom-[0] inset-x-[0] items-center justify-end mx-[auto] lg:px-[48px] xl:px-[55px] 2xl:px-[62px] 3xl:px-[74px] w-[22%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                Page
              </Text>
              <Button
                className="font-medium lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_802 text-center lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                shape="RoundedBorder10"
                size="sm"
                variant="FillWhiteA700"
              >
                1
              </Button>
              <Text className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                of 13
              </Text>
            </Row>
            <Column className="absolute items-center w-[100%]">
              <Slider
                slidesToShow={10}
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="w-[100%]"
                items={[...Array(30)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <Row className="bg-white_A700 items-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10">
                      <Img
                        src="images/img_image_7.png"
                        className="2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] rounded-radius10 w-[27%]"
                        alt="Image Two"
                      />
                      <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[59%]">
                        <Text className="font-normal lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[32%]"
                          alt="star"
                        />
                        <Text className="font-normal lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_400 w-[auto]">
                          $40.00
                        </Text>
                      </Column>
                      <Button
                        className="flex lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                        shape="icbRoundedBorder5"
                        size="mdIcn"
                        variant="icbFillRed52"
                      >
                        <Img
                          src="images/img_bag.svg"
                          className="flex items-center justify-center"
                          alt="bag One"
                        />
                      </Button>
                    </Row>
                  </React.Fragment>
                ))}
                Indicator={({ isActive }) => {
                  if (isActive) {
                    return <div className="" />;
                  }
                  return <div className="" role="button" tabIndex={0} />;
                }}
              />
              <Row className="items-center justify-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[22%]">
                <Button
                  className="cursor-pointer flex lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                  onClick={() => sliderRef.current?.slidePrev()}
                  shape="icbRoundedBorder5"
                  size="lgIcn"
                  variant="icbFillWhiteA700"
                >
                  <Img
                    src="images/img_arrowleft.svg"
                    className="flex items-center justify-center"
                    alt="arrowleft"
                  />
                </Button>
                <Button
                  className="cursor-pointer flex lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:ml-[147px] xl:ml-[169px] 2xl:ml-[190px] 3xl:ml-[228px] rotate-[180deg] lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                  onClick={() => sliderRef.current?.slideNext()}
                  shape="icbRoundedBorder5"
                  size="lgIcn"
                  variant="icbFillRed300"
                >
                  <Img
                    src="images/img_arrowleft_white_A700.svg"
                    className="flex items-center justify-center"
                    alt="arrowleft One"
                  />
                </Button>
              </Row>
            </Column>
          </Stack>
          <Stack className="bg-black_901 lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] lg:px-[38px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] rounded-radius20 w-[100%]">
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[45%]">
              <Text className="font-bold font-metropolis lg:leading-[42px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-center text-white_A700 w-[100%]">
                Subscribe For Get Update
                <br />
                Every New Courses
              </Text>
              <Text className="font-inter font-normal lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700_b2 w-[auto]">
                20k+ students daily learn with Eduvi. Subscribe for new courses.
              </Text>
              <Row className="font-inter items-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[88%]">
                <Input
                  className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                  wrapClassName="w-[72%]"
                  type="email"
                  name="button"
                  placeholder="enter your email"
                ></Input>
                <Button
                  className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
                  shape="CustomBorderLR10"
                  size="lg"
                  variant="FillRed300"
                >
                  Subscribe
                </Button>
              </Row>
            </Column>
            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[92%]">
              <Row className="items-center justify-between w-[97%]">
                <Img
                  src="images/img_ellipse168.png"
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rotate-[180deg] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse168"
                />
                <Img
                  src="images/img_ellipse166.png"
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse166"
                />
              </Row>
              <Row className="justify-between lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[78%]">
                <Img
                  src="images/img_ellipse167.png"
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:mb-[18px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] rotate-[180deg] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse167"
                />
                <Img
                  src="images/img_ellipse167_60X60.png"
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse167 One"
                />
              </Row>
              <Row className="items-center justify-between lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[97%]">
                <Img
                  src="images/img_ellipse166_60X60.png"
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rotate-[180deg] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse166 One"
                />
                <Img
                  src="images/img_ellipse168_60X60.png"
                  className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  alt="Ellipse168 One"
                />
              </Row>
            </Column>
          </Stack>
        </Column>
        <footer className="bg-gray_100 w-[100%]">
          <Row className="lg:mb-[62px] xl:mb-[71px] 2xl:mb-[80px] 3xl:mb-[96px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] mx-[auto] w-[89%]">
            <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:py-[4px] xl:py-[5px] 2xl:py-[6px] 3xl:py-[7px] w-[24%]">
              <Row className="font-inter w-[58%]">
                <Img
                  src="images/img_location.svg"
                  className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] w-[17%]"
                  alt="location One"
                />
                <Text className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                  Educatsy
                </Text>
              </Row>
              <Img
                src="images/img_social_deep_orange_400.svg"
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[46%]"
                alt="social"
              />
              <Text className="font-metropolis font-normal lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                <span className="text-gray_700 font-inter">©</span>
                <span className="text-gray_700 font-inter">2021 Eduvi.co</span>
              </Text>
              <Text className="font-inter font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] mb-[1px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[55%]">
                Eduvi is a registered
                <br />
                trademark of Eduvi.co
              </Text>
            </Column>
            <Column className="mt-[3px] pb-[3px] pr-[3px] w-[26%]">
              <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                Courses
              </Text>
              <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Classroom courses
              </Text>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Virtual classroom courses
              </Text>
              <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                E-learning courses
              </Text>
              <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Video Courses
              </Text>
              <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Offline Courses
              </Text>
            </Column>
            <Column className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[20%]">
              <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                Community
              </Text>
              <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Learners
              </Text>
              <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Parteners
              </Text>
              <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Developers
              </Text>
              <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Transactions
              </Text>
              <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Blog
              </Text>
              <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Teaching Center
              </Text>
            </Column>
            <Column className="mt-[3px] w-[24%]">
              <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                Quick links
              </Text>
              <Text className="font-normal lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Home
              </Text>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Professional Education
              </Text>
              <Text className="font-normal lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Courses
              </Text>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Admissions
              </Text>
              <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Testimonial
              </Text>
              <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Programs
              </Text>
            </Column>
            <Column className="mt-[3px] pb-[1px] w-[5%]">
              <Text className="font-normal lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 w-[auto]">
                More
              </Text>
              <Text className="font-normal lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Press
              </Text>
              <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Investors
              </Text>
              <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Terms
              </Text>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Privacy
              </Text>
              <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Help
              </Text>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                Contact
              </Text>
            </Column>
          </Row>
        </footer>
      </Column>
    </>
  );
};

export default EduviCoursesPage;
