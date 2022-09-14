import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  List,
  SelectBox,
  Stack,
  Line,
  Input,
} from "components";

const AllmentorsPage = () => {
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
          <Row className="bg-red_53 lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius20 w-[100%]">
            <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
              <span className="text-black_900 font-inter">Home | </span>
              <span className="text-red_300 font-inter">Our Mentors</span>
            </Text>
            <Text className="font-normal lg:leading-[38px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] ml-[2px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-gray_900 w-[29%]">
              Eduvi has the
              <br />
              qualified mentor
            </Text>
            <Img
              src="images/img_49063311.svg"
              className="lg:h-[154px] xl:h-[176px] 2xl:h-[198px] 3xl:h-[237px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:ml-[120px] xl:ml-[137px] 2xl:ml-[155px] 3xl:ml-[186px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[33%]"
              alt="49063311"
            />
          </Row>
          <Row className="items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] rounded-radius10 w-[72%]">
            <Button
              className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 text-center w-[16%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              All Mentors
            </Button>
            <Button
              className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 text-center w-[21%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              For Kindergarten
            </Button>
            <Button
              className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillOrange200"
            >
              For high school
            </Button>
            <Button
              className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 text-center w-[16%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              For college
            </Button>
            <Button
              className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 text-center w-[19%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillWhiteA700"
            >
              For Technology
            </Button>
          </Row>
          <Row className="items-center justify-between lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
            <List
              className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-2 min-h-[auto] w-[48%]"
              orientation="horizontal"
            >
              <Column className="w-[100%]">
                <Img
                  src="images/img_bg.png"
                  className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                  alt="BG"
                />
                <SelectBox
                  className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                  placeholderClassName="text-black_900"
                  name="Group1118"
                  placeholder="Kristin Watson"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                  Founder & Mentor
                </Text>
              </Column>
              <Column className="w-[100%]">
                <Img
                  src="images/img_bg_290X290.png"
                  className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                  alt="BG One"
                />
                <SelectBox
                  className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                  placeholderClassName="text-black_900"
                  name="Group1132"
                  placeholder="Brooklyn Simmons"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Text className="font-medium 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                  Founder & Mentor
                </Text>
              </Column>
            </List>
            <Column className="w-[23%]">
              <Img
                src="images/img_bg_1.png"
                className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                alt="BG Two"
              />
              <SelectBox
                className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                placeholderClassName="text-black_900"
                name="Group1157"
                placeholder="Robert Fox"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                Founder & Mentor
              </Text>
            </Column>
            <Column className="w-[23%]">
              <Img
                src="images/img_bg_2.png"
                className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                alt="BG Three"
              />
              <SelectBox
                className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                placeholderClassName="text-black_900"
                name="Group1125"
                placeholder="Wade Warren"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                Founder & Mentor
              </Text>
            </Column>
          </Row>
          <Row className="justify-between lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
            <List
              className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-2 min-h-[auto] w-[48%]"
              orientation="horizontal"
            >
              <Column className="w-[100%]">
                <Img
                  src="images/img_bg_3.png"
                  className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                  alt="BG Four"
                />
                <SelectBox
                  className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                  placeholderClassName="text-black_900"
                  name="Group1121"
                  placeholder="Bessie Cooper"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Text className="font-medium 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                  Founder & Mentor
                </Text>
              </Column>
              <Column className="w-[100%]">
                <Img
                  src="images/img_bg_4.png"
                  className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                  alt="BG Five"
                />
                <SelectBox
                  className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                  placeholderClassName="text-black_900"
                  name="Group1135"
                  placeholder="Ronald Richards"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                  Founder & Mentor
                </Text>
              </Column>
            </List>
            <Column className="items-center w-[23%]">
              <Img
                src="images/img_bg_5.png"
                className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                alt="BG Six"
              />
              <Stack className="3xl:h-[113px] lg:h-[74px] xl:h-[84px] 2xl:h-[95px] w-[100%]">
                <Row className="absolute bottom-[12%] inset-x-[0] justify-center mx-[auto] w-[33%]">
                  <Line className="bg-gray_700 lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] w-[1px]" />
                  <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                    <span className="text-gray_700 font-inter">Courses(</span>
                    <span className="text-red_300 font-inter underline">
                      30
                    </span>
                    <span className="text-gray_700 font-inter">)</span>
                  </Text>
                </Row>
                <Column className="absolute bg-white_A700 items-center xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[9px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] shadow-bs5 w-[100%]">
                  <Line className="bg-red_300 h-[1px] w-[100%]" />
                  <Column className="lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[92%]">
                    <SelectBox
                      className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_300 w-[100%]"
                      placeholderClassName="text-red_300"
                      name="Group1149"
                      placeholder="Guy Hawkins"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_black_900.svg"
                          className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Text className="font-medium 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                      Founder & Mentor
                    </Text>
                    <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[31%]">
                      <Img
                        src="images/img_star.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                        alt="star"
                      />
                      <Text className="font-medium lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                        <span className="text-gray_700 font-inter">4.9 (</span>
                        <span className="text-red_300 font-inter underline">
                          135
                        </span>
                        <span className="text-gray_700 font-inter">)</span>
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Stack>
            </Column>
            <Column className="w-[23%]">
              <Img
                src="images/img_bg_6.png"
                className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                alt="BG Seven"
              />
              <SelectBox
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                placeholderClassName="text-black_900"
                name="Group1128"
                placeholder="Floyd Miles"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Text className="font-medium 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                Founder & Mentor
              </Text>
            </Column>
          </Row>
          <List
            className="lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-4 min-h-[auto] mt-[3px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="w-[100%]">
              <Img
                src="images/img_bg_7.png"
                className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                alt="BG Eight"
              />
              <SelectBox
                className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                placeholderClassName="text-black_900"
                name="Group1124"
                placeholder="Theresa Webb"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                Founder & Mentor
              </Text>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_bg_8.png"
                className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                alt="BG Nine"
              />
              <SelectBox
                className="font-medium lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                placeholderClassName="text-black_900"
                name="Group1138"
                placeholder="Cody Fisher"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Text className="font-medium 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                Founder & Mentor
              </Text>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_bg_9.png"
                className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                alt="BG Ten"
              />
              <SelectBox
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                placeholderClassName="text-black_900"
                name="Group1141"
                placeholder="Courtney Henry"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Text className="font-medium 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                Founder & Mentor
              </Text>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_bg_10.png"
                className="lg:h-[226px] xl:h-[258px] 2xl:h-[291px] 3xl:h-[349px] rounded-radius10 lg:w-[225px] xl:w-[257px] 2xl:w-[290px] 3xl:w-[348px]"
                alt="BG Eleven"
              />
              <SelectBox
                className="font-medium lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[98%]"
                placeholderClassName="text-black_900"
                name="Group1131"
                placeholder="Jerome Bell"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_black_900.svg"
                    className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Text className="font-medium lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                Founder & Mentor
              </Text>
            </Column>
          </List>
          <Row className="justify-center lg:ml-[392px] xl:ml-[448px] 2xl:ml-[504px] 3xl:ml-[605px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[21%]">
            <Button
              className="flex lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
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
            <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
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
            <Text className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
              of 3
            </Text>
            <Button
              className="flex lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] rotate-[180deg] lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
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

export default AllmentorsPage;
