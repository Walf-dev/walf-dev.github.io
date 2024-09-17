import React from "react";

import {
  Column,
  Row,
  Button,
  Img,
  Text,
  SelectBox,
  Line,
  Stack,
  List,
  Grid,
  Input,
} from "components";

const PortfolioPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center justify-end mx-[auto] lg:pt-[17px] xl:pt-[19px] 2xl:pt-[22px] 3xl:pt-[26px] w-[100%]">
        <Column className="items-center w-[91%]">
          <header className="font-inter w-[97%]">
            <Row className="items-center pr-[2px] pt-[2px] w-[100%]">
              <Button className="text-center w-[2%]"></Button>
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
                src="images/img_user.svg"
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                alt="user"
              />
            </Row>
          </header>
          <Row className="font-inter justify-evenly lg:mt-[59px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
            <Column className="lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[49%]">
              <Button
                className="font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-deep_orange_400 w-[37%]"
                shape="RoundedBorder10"
                size="sm"
                variant="FillWhiteA700"
              >
                Never Stop Learning
              </Button>
              <Text className="font-bold lg:leading-[58px] xl:leading-[66px] 2xl:leading-[75px] 3xl:leading-[90px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[50px] xl:text-[57px] 2xl:text-[65px] 3xl:text-[78px] text-gray_900 w-[92%]">
                Grow up your skills
                <br />
                by online courses
                <br />
                with Eduvi
              </Text>
              <Text className="font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[87%]">
                Eduvi is a Global training provider based across the UK that
                specialises in accredited and bespoke training courses. We crush
                the barriers togetting a degree.
              </Text>
              <Row className="bg-white_A700 justify-end lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius10 w-[94%]">
                <SelectBox
                  className="font-medium lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700_99 w-[20%]"
                  placeholderClassName="text-gray_700_99"
                  name="Courses One"
                  placeholder="Kindergarten"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_red_300.svg"
                      className="mr-[0] lg:w-[7px] lg:h-[5px] xl:w-[8px] xl:h-[6px] 2xl:w-[10px] 2xl:h-[7px] 3xl:w-[12px] 3xl:h-[8px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Line className="bg-bluegray_100 lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[1px]" />
                <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700_99 w-[auto]">
                  Class/Course
                </Text>
                <Button
                  className="2xl:ml-[167px] 3xl:ml-[200px] flex items-center justify-center lg:ml-[129px] text-center w-[24%] xl:ml-[148px]"
                  leftIcon={
                    <Img
                      src="images/img_search.svg"
                      className="text-center lg:w-[15px] lg:h-[16px] lg:mr-[5px] xl:w-[17px] xl:h-[18px] xl:mr-[6px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[7px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[8px]"
                      alt="search"
                    />
                  }
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillRed300"
                >
                  <div className="bg-transparent font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Search
                  </div>
                </Button>
              </Row>
            </Column>
            <Stack className="lg:h-[544px] xl:h-[622px] 2xl:h-[700px] 3xl:h-[840px] w-[51%]">
              <Stack className="absolute bottom-[0] lg:h-[521px] xl:h-[596px] 2xl:h-[670px] 3xl:h-[804px] inset-x-[0] mx-[auto] w-[89%]">
                <Img
                  src="images/img_vector1.svg"
                  className="absolute lg:h-[438px] xl:h-[501px] 2xl:h-[564px] 3xl:h-[676px] top-[1%] w-[100%]"
                  alt="VectorOne"
                />
                <Column
                  className="absolute bg-cover bg-repeat items-center lg:px-[38px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] right-[0] rounded-radius30 w-[88%]"
                  style={{ backgroundImage: "url('images/img_group1081.png')" }}
                >
                  <Column
                    className="bg-cover bg-repeat items-center w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group1082.png')",
                    }}
                  >
                    <Stack
                      className="bg-cover bg-repeat lg:h-[521px] xl:h-[596px] 2xl:h-[670px] 3xl:h-[804px] px-[3px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group1083.png')",
                      }}
                    >
                      <Img
                        src="images/img_favorite.svg"
                        className="absolute lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] right-[0] top-[4%] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                        alt="favorite"
                      />
                    </Stack>
                  </Column>
                </Column>
              </Stack>
              <Img
                src="images/img_rewind.svg"
                className="absolute lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] inset-y-[0] left-[11%] my-[auto] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                alt="rewind"
              />
              <Img
                src="images/img_4.svg"
                className="absolute lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] left-[0] top-[0] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                alt="Four"
              />
              <Img
                src="images/img_car.svg"
                className="absolute bottom-[9%] lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] right-[0] lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                alt="car"
              />
            </Stack>
          </Row>
          <Stack className="font-airbnbcerealapp 2xl:h-[1121px] 3xl:h-[1345px] lg:h-[872px] xl:h-[997px] lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] w-[83%]">
            <Column className="absolute inset-x-[0] items-center mx-[auto] rounded-radius10 top-[0] w-[71%]">
              <Text className="font-bold font-metropolis lg:leading-[42px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-center text-gray_900 w-[71%]">
                High quality video, audio
                <br />& live classes
              </Text>
              <Text className="font-inter font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[100%]">
                High-definition video is video of higher resolution and quality
                than standard-definition. While there is no standardized meaning
                for high-definition, generally any video image with considerably
                more than
                <br />
                480 vertical scan lines or 576 vertical lines is considered
                high-definition.
              </Text>
              <Button
                className="font-inter font-medium lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[21%]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillRed300"
              >
                Visit Courses
              </Button>
            </Column>
            <Stack className="absolute bottom-[0] 3xl:h-[1009px] lg:h-[654px] xl:h-[748px] 2xl:h-[841px] w-[100%]">
              <List
                className="absolute gap-[0] min-h-[auto] right-[0] top-[0] w-[16%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
                <Row className="items-center justify-between lg:my-[1px] 2xl:my-[2px] xl:my-[2px] 3xl:my-[3px] w-[100%]">
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
              <Column className="absolute bottom-[0] font-inter inset-x-[0] items-center mx-[auto] w-[97%]">
                <Row
                  className="bg-cover bg-repeat lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius16 w-[94%]"
                  style={{ backgroundImage: "url('images/img_group1275.png')" }}
                >
                  <Img
                    src="images/img_portraitlittle.png"
                    className="lg:h-[168px] xl:h-[192px] 2xl:h-[216px] 3xl:h-[259px] lg:mt-[206px] xl:mt-[235px] 2xl:mt-[265px] 3xl:mt-[318px] rounded-radius16 w-[22%]"
                    alt="portraitlittle"
                  />
                  <Button
                    className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:ml-[182px] xl:ml-[208px] 2xl:ml-[234px] 3xl:ml-[280px] lg:mt-[311px] xl:mt-[355px] 2xl:mt-[400px] 3xl:mt-[480px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                    size="lgIcn"
                    variant="icbFillDeeporange400"
                  >
                    <Img
                      src="images/img_vector.svg"
                      className="flex items-center justify-center lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px]"
                      alt="Vector"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[410px] lg:mt-[311px] xl:mt-[355px] 2xl:mt-[400px] 3xl:mt-[480px] rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                    size="xlIcn"
                    variant="icbFillRed300"
                  >
                    <Img
                      src="images/img_arrowup_white_A700.svg"
                      className="flex items-center justify-center"
                      alt="arrowup"
                    />
                  </Button>
                </Row>
                <Row className="items-center justify-between lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]">
                  <Row className="bg-white_A700 items-center lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[31%]">
                    <Stack className="bg-red_50 lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]">
                      <Img
                        src="images/img_volume.svg"
                        className="absolute lg:h-[18px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] inset-[0] justify-center m-[auto] w-[43%]"
                        alt="volume"
                      />
                    </Stack>
                    <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                      Audio Classes
                    </Text>
                  </Row>
                  <List
                    className="lg:gap-[23px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] w-[66%]"
                    orientation="horizontal"
                  >
                    <Row className="bg-white_A700 items-center lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]">
                      <Stack className="bg-gray_50 lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]">
                        <Img
                          src="images/img_settings.svg"
                          className="absolute lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] inset-[0] justify-center m-[auto] w-[40%]"
                          alt="settings"
                        />
                      </Stack>
                      <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                        Live Classes
                      </Text>
                    </Row>
                    <Row className="bg-white_A700 items-center lg:p-[11px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius10 w-[100%]">
                      <Stack className="bg-cyan_50 lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]">
                        <Img
                          src="images/img_vector_green_A700.svg"
                          className="absolute lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] inset-[0] justify-center m-[auto] lg:w-[23px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                          alt="Vector One"
                        />
                      </Stack>
                      <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[19px] xl:text-[22px] 2xl:text-[25px] 3xl:text-[30px] text-gray_900 w-[auto]">
                        Recorded Class
                      </Text>
                    </Row>
                  </List>
                </Row>
              </Column>
            </Stack>
          </Stack>
          <Text className="font-bold font-metropolis lg:mt-[117px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[181px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-gray_900 w-[auto]">
            Qualified lessons for students
          </Text>
          <Text className="font-inter font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_700 w-[48%]">
            A lesson or class is a structured period of time where learning is
            intended to occur. It involves one or more students being taught by
            a teacher or instructor.
          </Text>
          <Row className="font-inter justify-center lg:mt-[42px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] rounded-radius10 w-[31%]">
            <Text className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Kindergarten
            </Text>
            <Button
              className="font-medium lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[37%]"
              shape="RoundedBorder10"
              size="lg"
              variant="FillOrange200"
            >
              High School
            </Button>
            <Text className="font-medium lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              College
            </Text>
          </Row>
          <Grid className="font-inter lg:gap-[31px] xl:gap-[35px] 2xl:gap-[40px] 3xl:gap-[48px] grid grid-cols-4 lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[97%]">
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
                alt="rewind One"
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
                alt="volume One"
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
          </Grid>
          <Button
            className="font-inter font-medium lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[15%]"
            shape="RoundedBorder10"
            size="lg"
            variant="FillRed300"
          >
            Visit More Classes
          </Button>
          <Stack className="bg-red_51 lg:h-[519px] xl:h-[594px] 2xl:h-[668px] 3xl:h-[801px] lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] lg:pl-[16px] xl:pl-[18px] 2xl:pl-[21px] 3xl:pl-[25px] rounded-radius20 w-[97%]">
            <Column className="absolute h-[max-content] inset-y-[0] left-[4%] my-[auto] rounded-radius10 w-[39%]">
              <Button
                className="font-inter font-medium lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[34%]"
                shape="RoundedBorder10"
                size="md"
                variant="FillBlack900"
              >
                College Level
              </Button>
              <Text className="font-bold font-metropolis lg:leading-[42px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-gray_900 w-[91%]">
                Don’t waste time in
                <br />
                COVID-19 pandemic.
                <br />
                Develop your skills.
              </Text>
              <Text className="font-inter font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[100%]">
                High-definition video is video of higher resolution and quality
                than standard-definition. While there is no standardized
                <br />
                meaning for high-definition, generally any video.
              </Text>
              <Button
                className="font-inter font-medium lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[37%]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillRed300"
              >
                Registation Now
              </Button>
            </Column>
            <Stack className="absolute lg:h-[460px] xl:h-[526px] 2xl:h-[592px] 3xl:h-[710px] right-[0] top-[0] w-[61%]">
              <Stack className="absolute lg:h-[457px] xl:h-[523px] 2xl:h-[588px] 3xl:h-[705px] top-[1%] w-[100%]">
                <Row
                  className="absolute bg-cover bg-repeat justify-between lg:p-[49px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] right-[0] w-[88%]"
                  style={{ backgroundImage: "url('images/img_group1276.png')" }}
                >
                  <Button
                    className="flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center lg:mb-[279px] xl:mb-[319px] 2xl:mb-[359px] 3xl:mb-[431px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                    shape="icbRoundedBorder5"
                    size="mdIcn"
                    variant="icbOutlineGray90026"
                  >
                    <Img
                      src="images/img_arrowdown_50X50.svg"
                      className="flex items-center justify-center"
                      alt="arrowdown Five"
                    />
                  </Button>
                  <Img
                    src="images/img_close.svg"
                    className="lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] lg:mb-[256px] xl:mb-[293px] 2xl:mb-[330px] 3xl:mb-[396px] 3xl:mr-[110px] lg:mr-[71px] xl:mr-[81px] 2xl:mr-[92px] lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                    alt="close"
                  />
                </Row>
                <div className="absolute backdrop-opacity-[0.5] bg-black_900 blur-[100.00px] bottom-[0] lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] left-[0] rounded-radius3705 w-[95%]"></div>
              </Stack>
              <Button
                className="absolute flex lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] items-center justify-center right-[12%] top-[0] lg:w-[38px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
                shape="icbRoundedBorder5"
                size="mdIcn"
                variant="icbOutlineGray90026"
              >
                <Img
                  src="images/img_fire.svg"
                  className="flex items-center justify-center"
                  alt="fire"
                />
              </Button>
            </Stack>
          </Stack>
          <Row className="items-center lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] w-[83%]">
            <Img
              src="images/img_image.png"
              className="lg:h-[406px] xl:h-[464px] 2xl:h-[522px] 3xl:h-[626px] w-[47%]"
              alt="Image One"
            />
            <Column className="lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] rounded-radius10 w-[46%]">
              <Text className="font-bold font-metropolis lg:leading-[42px] xl:leading-[48px] 2xl:leading-[55px] 3xl:leading-[66px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-gray_900 w-[87%]">
                Want to share your
                <br />
                knowledge? Join us
                <br />a Mentor
              </Text>
              <Text className="font-inter font-normal lg:leading-[23px] xl:leading-[26px] 2xl:leading-[30px] 3xl:leading-[36px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[100%]">
                High-definition video is video of higher resolution and quality
                than standard-definition. While there is no standardized meaning
                for high-definition, generally any video.
              </Text>
              <Button
                className="font-inter font-medium lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[41%]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillRed300"
              >
                Career Information
              </Button>
            </Column>
          </Row>
          <Stack className="bg-black_901 lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] lg:px-[38px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] rounded-radius20 w-[97%]">
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
                src="images/img_social.svg"
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

export default PortfolioPage;
