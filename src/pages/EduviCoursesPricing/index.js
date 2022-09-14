import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  List,
  Line,
  Button,
  Stack,
  Input,
} from "components";

const EduviCoursesPricingPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-end mx-[auto] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] w-[100%]">
        <Column className="items-center w-[89%]">
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
          <Row className="bg-red_53 font-inter lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius20 w-[100%]">
            <Text className="font-medium ml-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
              <span className="text-black_900 font-inter">Home | </span>
              <span className="text-red_300 font-inter">Pricing</span>
            </Text>
            <Text className="font-normal lg:leading-[38px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-gray_900 w-[31%]">
              Our Pre-ready
              <br />
              Pricing Packages
            </Text>
            <Img
              src="images/img_group_193X412.svg"
              className="lg:h-[151px] xl:h-[172px] 2xl:h-[194px] 3xl:h-[232px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[112px] xl:ml-[128px] 2xl:ml-[145px] 3xl:ml-[174px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[34%]"
              alt="Group"
            />
          </Row>
          <Text className="font-bold font-metropolis lg:leading-[42px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-center text-gray_900 w-[65%]">
            We create a monthly pricing package
            <br />
            for all standard students
          </Text>
          <Text className="font-inter font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[62%]">
            Basically we create this package for those who are really interested
            and get benifited from our courses or books. We want to make a low
            cost package for them. So that they can purchase any courses with
            the package they buy from us. Also will get free books from every
            packages.
          </Text>
          <List
            className="font-inter lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-3 min-h-[auto] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 hover:cursor-pointer lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_location_50X50.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="location One"
              />
              <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                Basic Pack
              </Text>
              <Line className="bg-gray_900_26 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[77%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  3 HD video lessons & tutorials
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[42%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark One"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  1 Official exam
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[61%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Two"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  100 Practice questions
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[59%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Three"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  1 Month subscriptions
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[36%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Four"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  1 Free book
                </Text>
              </Row>
              <Row className="ml-[1px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[78%]">
                <Img
                  src="images/img_close_20X20.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="close"
                />
                <Text className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  Practice quizes & assignments
                </Text>
              </Row>
              <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[58%]">
                <Img
                  src="images/img_close_20X20.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="close One"
                />
                <Text className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  In depth explanations
                </Text>
              </Row>
              <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[76%]">
                <Img
                  src="images/img_close_20X20.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="close Two"
                />
                <Text className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  Personal instructor Assitance
                </Text>
              </Row>
              <Text className="font-normal lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                <span className="text-gray_900 font-inter lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  $
                </span>
                <span className="text-gray_900 font-inter">200</span>
              </Text>
              <Button
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlineRed300"
              >
                Purchase Course
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_location_50X50.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="location Two"
              />
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                Standard Pack
              </Text>
              <Line className="bg-gray_900_26 h-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[77%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark One"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  8 HD video lessons & tutorials
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[43%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark One One"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  2 Official exam
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[61%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Two One"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  200 Practice questions
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[59%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Three One"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  1 Month subscriptions
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Four One"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  3 Free books
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[78%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Five"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  Practice quizes & assignments
                </Text>
              </Row>
              <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[58%]">
                <Img
                  src="images/img_close_20X20.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="close One"
                />
                <Text className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  In depth explanations
                </Text>
              </Row>
              <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[76%]">
                <Img
                  src="images/img_close_20X20.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="close One One"
                />
                <Text className="font-medium 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  Personal instructor Assitance
                </Text>
              </Row>
              <Text className="font-normal lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                <span className="text-gray_900 font-inter lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  $
                </span>
                <span className="text-gray_900 font-inter">600</span>
              </Text>
              <Button
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                shape="RoundedBorder5"
                size="lg"
                variant="FillRed300"
              >
                Purchase Course
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 hover:shadow-bs1 hover:w-[100%] w-[100%]">
              <Img
                src="images/img_location_50X50.svg"
                className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                alt="location Three"
              />
              <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                Premium Pack
              </Text>
              <Line className="bg-gray_900_26 h-[1px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[79%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Two"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  15 HD video lessons & tutorials
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[43%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark One Two"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  3 Official exam
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[62%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Two Two"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  300 Practice questions
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[59%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Three Two"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  1 Month subscriptions
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[39%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Four Two"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  5 Free books
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[78%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Five One"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  Practice quizes & assignments
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[58%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] mb-[1px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Six"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  In depth explanations
                </Text>
              </Row>
              <Row className="ml-[2px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[76%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:w-[15px] xl:w-[17px] 2xl:w-[20px] 3xl:w-[24px]"
                  alt="checkmark Seven"
                />
                <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  Personal instructor Assitance
                </Text>
              </Row>
              <Text className="font-normal lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                <span className="text-gray_900 font-inter lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                  $
                </span>
                <span className="text-gray_900 font-inter">1200</span>
              </Text>
              <Button
                className="font-medium lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlineRed300"
              >
                Purchase Course
              </Button>
            </Column>
          </List>
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
                  alt="location Four"
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

export default EduviCoursesPricingPage;
