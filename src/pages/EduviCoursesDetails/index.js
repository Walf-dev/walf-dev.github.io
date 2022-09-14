import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  List,
  Grid,
  Stack,
  Input,
} from "components";

const EduviCoursesDetailsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-end mx-[auto] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] w-[100%]">
        <Column className="w-[89%]">
          <header className="font-inter w-[100%]">
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
          <Row className="bg-gray_200 font-inter items-center lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:p-[22px] xl:p-[25px] 2xl:p-[29px] 3xl:p-[34px] rounded-radius20 w-[100%]">
            <Column className="mb-[1px] ml-[1px] w-[69%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-deep_orange_400 tracking-ls1 w-[auto]">
                <span className="text-black_900 font-inter">
                  Home | Courses |
                </span>
                <span className="text-red_400 font-inter"> Course Details</span>
              </Text>
              <Column
                className="bg-cover bg-repeat items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[153px] xl:p-[175px] 2xl:p-[197px] 3xl:p-[236px] rounded-radius20 w-[92%]"
                style={{ backgroundImage: "url('images/img_group7667.png')" }}
              >
                <Button
                  className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center mb-[1px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  size="xlIcn"
                  variant="icbFillRed300"
                >
                  <Img
                    src="images/img_polygon3.svg"
                    className="flex items-center justify-center lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="PolygonThree"
                  />
                </Button>
              </Column>
              <Text className="font-normal lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                Maths - for Standard 3 Students | Episode 2
              </Text>
            </Column>
            <Column className="w-[31%]">
              <Text className="font-normal lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-black_900 w-[auto]">
                Course Playlists
              </Text>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                orientation="vertical"
              >
                <Column className="bg-white_A700 hover:cursor-pointer lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Row className="items-end rounded-radius5 w-[74%]">
                    <Img
                      src="images/img_image_50X80.png"
                      className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius5 w-[30%]"
                      alt="Image"
                    />
                    <Column className="mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[67%]">
                      <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                        Maths - Introduction
                      </Text>
                      <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                        1:57
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="bg-white_A700 hover:cursor-pointer lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Row className="items-end rounded-radius5 w-[89%]">
                    <Img
                      src="images/img_image_50X80.png"
                      className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] rounded-radius5 w-[25%]"
                      alt="Image One"
                    />
                    <Column className="mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[72%]">
                      <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                        Maths - for Standard 3 St..
                      </Text>
                      <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400 w-[auto]">
                        5:43
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Row className="bg-white_A700_87 hover:cursor-pointer items-end lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius5 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_image_50X80.png')",
                    }}
                  >
                    <Button
                      className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_vector_red_300.svg"
                        className="flex items-center justify-center"
                        alt="Vector"
                      />
                    </Button>
                  </Column>
                  <Column className="mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[64%]">
                    <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900_87 w-[auto]">
                      Maths - for Standard 3 St..
                    </Text>
                    <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400_87 w-[auto]">
                      8:11
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700_87 hover:cursor-pointer items-end lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius5 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_image_50X80.png')",
                    }}
                  >
                    <Button
                      className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_vector_red_300.svg"
                        className="flex items-center justify-center"
                        alt="Vector One"
                      />
                    </Button>
                  </Column>
                  <Column className="mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[64%]">
                    <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900_87 w-[auto]">
                      Maths - for Standard 3 St..
                    </Text>
                    <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400_87 w-[auto]">
                      6:10
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700_87 hover:cursor-pointer items-end lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius5 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_image_50X80.png')",
                    }}
                  >
                    <Button
                      className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_vector_red_300.svg"
                        className="flex items-center justify-center"
                        alt="Vector Two"
                      />
                    </Button>
                  </Column>
                  <Column className="mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[64%]">
                    <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900_87 w-[auto]">
                      Maths - for Standard 3 St..
                    </Text>
                    <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400_87 w-[auto]">
                      10:00
                    </Text>
                  </Column>
                </Row>
                <Row className="bg-white_A700_87 hover:cursor-pointer items-end lg:my-[6px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 hover:shadow-bs2 w-[100%]">
                  <Column
                    className="bg-cover bg-repeat items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius5 w-[22%]"
                    style={{
                      backgroundImage: "url('images/img_image_50X80.png')",
                    }}
                  >
                    <Button
                      className="flex lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      size="smIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_vector_red_300.svg"
                        className="flex items-center justify-center"
                        alt="Vector Three"
                      />
                    </Button>
                  </Column>
                  <Column className="mb-[3px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[64%]">
                    <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900_87 w-[auto]">
                      Maths - for Standard 3 St..
                    </Text>
                    <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_orange_400_87 w-[auto]">
                      7:53
                    </Text>
                  </Column>
                </Row>
              </List>
            </Column>
          </Row>
          <Row className="font-inter justify-evenly lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[100%]">
            <Column className="pr-[2px] py-[2px] w-[69%]">
              <Text className="font-normal lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                Course Details
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[94%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </Text>
              <Text className="font-normal lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                Certification
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[94%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </Text>
              <Text className="font-normal lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                Who this course is for
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[94%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </Text>
              <Text className="font-normal lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
                What you'll learn in this course:
              </Text>
              <Row className="lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[49%]">
                <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Row>
              <Row className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[49%]">
                <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Row>
              <Row className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[49%]">
                <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Row>
              <Row className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[49%]">
                <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Row>
              <Row className="mb-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[49%]">
                <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Row>
            </Column>
            <Column className="items-center w-[31%]">
              <Column className="bg-white_A700 items-center justify-center lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[100%]">
                <Row className="justify-between xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[auto]">
                    Price
                  </Text>
                  <Text className="font-normal lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-deep_orange_400 w-[auto]">
                    $49.00
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[auto]">
                    Instructor
                  </Text>
                  <Text className="font-normal lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 underline w-[auto]">
                    Wade Warren
                  </Text>
                </Row>
                <Row className="justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[auto]">
                    Ratings
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[26%]"
                    alt="mobile"
                  />
                </Row>
                <Row className="justify-between lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Text className="font-normal mb-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[auto]">
                    Durations
                  </Text>
                  <Text className="font-normal mt-[2px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    10 Days
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[auto]">
                    Lessons
                  </Text>
                  <Text className="font-normal mb-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    30
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[auto]">
                    Quizzes
                  </Text>
                  <Text className="font-normal mb-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    5
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Text className="font-normal mb-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[auto]">
                    Certificate
                  </Text>
                  <Text className="font-normal mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    Yes
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[auto]">
                    Language
                  </Text>
                  <Text className="font-normal mb-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    English
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Text className="font-normal mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[auto]">
                    Access
                  </Text>
                  <Text className="font-normal mb-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
                    Lifetime
                  </Text>
                </Row>
              </Column>
              <Button
                className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                shape="RoundedBorder5"
                size="lg"
                variant="FillRed300"
              >
                Purchase Course
              </Button>
            </Column>
          </Row>
          <Text className="font-bold font-metropolis lg:mt-[117px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[181px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-gray_900 w-[auto]">
            Similar Courses
          </Text>
          <Grid className="font-inter lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-2 lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]">
            <Row className="bg-white_A700 hover:cursor-pointer items-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_image_103X160.png"
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
                variant="icbFillRed300"
              >
                <Img
                  src="images/img_icon.svg"
                  className="flex items-center justify-center"
                  alt="icon"
                />
              </Button>
            </Row>
            <Row className="bg-white_A700 hover:cursor-pointer items-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_image_1.png"
                className="2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] rounded-radius10 w-[27%]"
                alt="Image Four"
              />
              <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[59%]">
                <Text className="font-normal lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Img
                  src="images/img_star_amber_500.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[32%]"
                  alt="star One"
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
            <Row className="bg-white_A700 hover:cursor-pointer items-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_image_2.png"
                className="2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] rounded-radius10 w-[27%]"
                alt="Image Six"
              />
              <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[59%]">
                <Text className="font-normal lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Img
                  src="images/img_star_amber_500.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[32%]"
                  alt="star Two"
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
                  alt="bag Two"
                />
              </Button>
            </Row>
            <Row className="bg-white_A700 hover:cursor-pointer items-end lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_image_3.png"
                className="2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] rounded-radius10 w-[27%]"
                alt="Image Eight"
              />
              <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[59%]">
                <Text className="font-normal lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Img
                  src="images/img_star_amber_500.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[32%]"
                  alt="star Three"
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
                  alt="bag Three"
                />
              </Button>
            </Row>
          </Grid>
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

export default EduviCoursesDetailsPage;
