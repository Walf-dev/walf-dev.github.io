import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Button,
  Stack,
  List,
  Input,
} from "components";

const EduviJoinAsTeacherPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-end mx-[auto] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] w-[100%]">
        <Column className="items-center w-[90%]">
          <header className="w-[99%]">
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
          <Row className="bg-yellow_100 lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius20 w-[99%]">
            <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 tracking-ls1 w-[auto]">
              <span className="text-black_900 font-inter">Home | </span>
              <span className="text-red_300 font-inter">
                Become An Instructor
              </span>
            </Text>
            <Text className="font-normal lg:leading-[38px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] ml-[3px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-gray_900 w-[23%]">
              Join Eduvi as
              <br />a Mentor
            </Text>
            <Img
              src="images/img_group_322X325.svg"
              className="lg:h-[163px] xl:h-[186px] 2xl:h-[210px] 3xl:h-[251px] mb-[2px] lg:ml-[164px] xl:ml-[188px] 2xl:ml-[212px] 3xl:ml-[254px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[25%]"
              alt="OBJECTS"
            />
          </Row>
          <Row className="items-center justify-between lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] pr-[4px] w-[95%]">
            <Img
              src="images/img_image.png"
              className="lg:h-[406px] xl:h-[464px] 2xl:h-[522px] 3xl:h-[626px] w-[42%]"
              alt="Image"
            />
            <Column className="w-[49%]">
              <Text className="font-normal lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 w-[auto]">
                Apply As Instructor
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[100%]">
                Teaching is a vital and admirable career. As such, it comes with
                quite a bit of responsibility, both in practice and in
                preparation with many skills required to be a teacher. The
                following steps provide a general breakdown of the requirements
                for teachers:
              </Text>
              <Row className="lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[57%]">
                <Text className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_300 w-[auto]">
                  Intstructor Requirements
                </Text>
                <Text className="font-medium mb-[1px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                  Instructor Rules
                </Text>
              </Row>
              <Line className="bg-gray_700 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] shadow-bs3 w-[57%]" />
              <Line className="bg-red_300 h-[1px] shadow-bs3 w-[32%]" />
              <Row className="lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[36%]">
                <div className="bg-red_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                  An undergraduate degree
                </Text>
              </Row>
              <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[46%]">
                <div className="bg-red_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                  Participate in supervised teaching
                </Text>
              </Row>
              <Row className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[31%]">
                <div className="bg-red_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                  State teaching license
                </Text>
              </Row>
              <Row className="lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[32%]">
                <div className="bg-red_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[1px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                  Purse graduate studies
                </Text>
              </Row>
              <Button
                className="font-medium lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[24%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillRed300"
              >
                Apply Now
              </Button>
            </Column>
          </Row>
          <Stack className="lg:h-[564px] xl:h-[645px] 2xl:h-[726px] 3xl:h-[871px] lg:mt-[130px] xl:mt-[149px] 2xl:mt-[168px] 3xl:mt-[201px] w-[90%]">
            <List
              className="absolute font-airbnbcerealapp gap-[0] min-h-[auto] right-[0] top-[0] w-[16%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
              </Row>
              <Row className="items-center justify-between xl:my-[3px] lg:my-[3px] 3xl:my-[4px] 2xl:my-[4px] w-[100%]">
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
                <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_300 w-[auto]">
                  +
                </Text>
              </Row>
            </List>
            <Text className="absolute font-bold font-metropolis left-[14%] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-gray_900 top-[2%] w-[auto]">
              How to apply to join as instructor
            </Text>
            <Column className="absolute bg-white_A700 bottom-[0] font-airbnbcerealapp items-center left-[0] lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 shadow-bs4 w-[92%]">
              <Stack className="bg-indigo_51 lg:h-[444px] xl:h-[508px] 2xl:h-[571px] 3xl:h-[685px] rounded-radius20 w-[100%]">
                <Stack className="absolute bottom-[0] lg:h-[418px] xl:h-[478px] 2xl:h-[538px] 3xl:h-[645px] left-[16%] w-[62%]">
                  <Column
                    className="absolute bg-cover bg-repeat items-center left-[0] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rotate-[180deg] top-[21%] w-[25%]"
                    style={{
                      backgroundImage: "url('images/img_comments.svg')",
                    }}
                  >
                    <Text className="font-medium lg:leading-[17px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] rotate-[180deg] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-white_A700 w-[93%]">
                      3 Simple
                      <br />
                      Steps to go
                    </Text>
                  </Column>
                  <Stack
                    className="absolute bg-cover bg-repeat lg:h-[418px] xl:h-[478px] 2xl:h-[538px] 3xl:h-[645px] 3xl:px-[112px] lg:px-[73px] xl:px-[83px] 2xl:px-[94px] right-[0] w-[90%]"
                    style={{
                      backgroundImage: "url('images/img_group7681.png')",
                    }}
                  >
                    <Img
                      src="images/img_group_322X325.svg"
                      className="absolute bottom-[10%] xl:h-[101px] 2xl:h-[114px] 3xl:h-[136px] lg:h-[88px] left-[0] w-[30%]"
                      alt="OBJECTS One"
                    />
                  </Stack>
                </Stack>
                <Img
                  src="images/img_group7684.svg"
                  className="absolute bottom-[0] lg:h-[52px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] w-[100%]"
                  alt="Group7684"
                />
              </Stack>
            </Column>
          </Stack>
          <Stack className="bg-black_901 lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] lg:px-[38px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] rounded-radius20 w-[99%]">
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

export default EduviJoinAsTeacherPage;
