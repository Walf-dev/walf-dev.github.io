import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  List,
  Button,
  Input,
  SelectBox,
  Grid,
  Stack,
} from "components";

const EduviShopPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-inter items-center mx-[auto] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
        <header className="w-[92%]">
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
        <Row className="bg-red_53 lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:p-[14px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius20 w-[92%]">
          <Text className="font-medium 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_300 tracking-ls1 w-[auto]">
            <span className="text-black_900 font-inter">Home |</span>
            <span className="text-red_300 font-inter"> </span>
            <span className="text-red_300 font-inter">Shop</span>
          </Text>
          <Text className="font-normal lg:leading-[38px] xl:leading-[44px] 2xl:leading-[50px] 3xl:leading-[60px] ml-[4px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:text-[35px] xl:text-[40px] 2xl:text-[45px] 3xl:text-[54px] text-gray_900 w-[22%]">
            Eduvi Online
            <br />
            Book Shop
          </Text>
          <Img
            src="images/img_kisspngbookcas.png"
            className="lg:h-[164px] xl:h-[187px] 2xl:h-[211px] 3xl:h-[253px] mb-[1px] lg:ml-[193px] xl:ml-[221px] 2xl:ml-[249px] 3xl:ml-[298px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[30%]"
            alt="kisspngbookcas"
          />
        </Row>
        <Row className="lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[92%]">
          <Column className="lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[34%]">
            <Text className="font-normal lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
              Popular Books
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[92%]"
              orientation="vertical"
            >
              <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_image14.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] ml-[3px] rounded-radius5 w-[21%]"
                  alt="imageFourteen"
                />
                <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[40%]"
                    alt="mobile"
                  />
                  <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Text>
                  <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $39.00
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_image_90X75.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] ml-[3px] rounded-radius5 w-[21%]"
                  alt="Image"
                />
                <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[40%]"
                    alt="mobile One"
                  />
                  <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Text>
                  <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $39.00
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_image_4.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] ml-[3px] rounded-radius5 w-[21%]"
                  alt="Image One"
                />
                <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[40%]"
                    alt="mobile Two"
                  />
                  <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Text>
                  <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $39.00
                  </Text>
                </Column>
              </Row>
            </List>
            <Text className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-red_300 w-[auto]">
              See More
            </Text>
            <Text className="font-normal lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-black_900 w-[auto]">
              New Arrivals
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[92%]"
              orientation="vertical"
            >
              <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_image14.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] ml-[3px] rounded-radius5 w-[21%]"
                  alt="imageFourteen One"
                />
                <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[40%]"
                    alt="mobile Three"
                  />
                  <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Text>
                  <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $39.00
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_image_90X75.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] ml-[3px] rounded-radius5 w-[21%]"
                  alt="Image Two"
                />
                <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[40%]"
                    alt="mobile Four"
                  />
                  <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Text>
                  <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $39.00
                  </Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_image_4.png"
                  className="3xl:h-[109px] lg:h-[70px] xl:h-[81px] 2xl:h-[91px] ml-[3px] rounded-radius5 w-[21%]"
                  alt="Image Three"
                />
                <Column className="lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[64%]">
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[40%]"
                    alt="mobile Five"
                  />
                  <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[100%]">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Text>
                  <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $39.00
                  </Text>
                </Column>
              </Row>
            </List>
            <Text className="font-medium lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-red_300 w-[auto]">
              See More
            </Text>
          </Column>
          <Column className="w-[66%]">
            <Row className="items-center rounded-radius10 w-[73%]">
              <Button
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[21%]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillOrange200"
              >
                All Books
              </Button>
              <Button
                className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[25%]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillWhiteA700"
              >
                Kindergarten
              </Button>
              <Button
                className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[25%]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillWhiteA700"
              >
                High School
              </Button>
              <Button
                className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-gray_900 w-[19%]"
                shape="RoundedBorder10"
                size="lg"
                variant="FillWhiteA700"
              >
                College
              </Button>
            </Row>
            <Row className="items-center justify-between lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Input
                className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_700_99 text-gray_700_99 w-[100%]"
                wrapClassName="flex w-[66%]"
                type="text"
                name="Search"
                placeholder="Serach Class, Course, Book Name"
                suffix={
                  <Img
                    src="images/img_search.svg"
                    className="bg-red_300 lg:w-[15px] lg:h-[16px] lg:ml-[9px] lg:mr-[10px] xl:w-[17px] xl:h-[18px] xl:ml-[10px] xl:mr-[11px] 2xl:w-[20px] 2xl:h-[21px] 2xl:ml-[12px] 2xl:mr-[13px] 3xl:w-[24px] 3xl:h-[25px] 3xl:ml-[14px] 3xl:mr-[15px] rounded-radius8 my-[auto]"
                    alt="search"
                  />
                }
                shape="RoundedBorder10"
                variant="FillWhiteA700"
              ></Input>
              <SelectBox
                className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700_99 w-[32%]"
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
            <Grid className="lg:gap-[11px] xl:gap-[13px] 2xl:gap-[15px] 3xl:gap-[18px] grid grid-cols-3 lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Column className="w-[100%]">
                <Stack className="bg-white_A700 lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image14.png"
                    className="absolute lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] inset-[0] justify-center m-[auto] rounded-radius10 w-[85%]"
                    alt="Image Four"
                  />
                </Stack>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $40.00
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[34%]"
                    alt="mobile Six"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Stack className="bg-white_A700 lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image_90X75.png"
                    className="absolute lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] inset-[0] justify-center m-[auto] rounded-radius10 w-[85%]"
                    alt="Image Five"
                  />
                </Stack>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $40.00
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[34%]"
                    alt="mobile Seven"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Stack className="bg-white_A700 lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image_240X230.png"
                    className="absolute lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] inset-[0] justify-center m-[auto] rounded-radius10 w-[85%]"
                    alt="Image Six"
                  />
                </Stack>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $40.00
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[34%]"
                    alt="mobile Eight"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Stack className="bg-white_A700 lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image_5.png"
                    className="absolute lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] inset-[0] justify-center m-[auto] rounded-radius10 w-[85%]"
                    alt="Image Seven"
                  />
                </Stack>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $40.00
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[34%]"
                    alt="mobile Nine"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Stack className="bg-white_A700 lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image_4.png"
                    className="absolute lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] inset-[0] justify-center m-[auto] rounded-radius10 w-[85%]"
                    alt="Image Eight"
                  />
                </Stack>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $40.00
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[34%]"
                    alt="mobile Ten"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Stack className="bg-white_A700 lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image_6.png"
                    className="absolute lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] inset-[0] justify-center m-[auto] rounded-radius10 w-[85%]"
                    alt="Image Nine"
                  />
                </Stack>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $40.00
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[34%]"
                    alt="mobile Eleven"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Stack className="bg-white_A700 lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image_90X75.png"
                    className="absolute lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] inset-[0] justify-center m-[auto] rounded-radius10 w-[85%]"
                    alt="Image Ten"
                  />
                </Stack>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $40.00
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[34%]"
                    alt="mobile Twelve"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Stack className="bg-white_A700 lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image14.png"
                    className="absolute lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] inset-[0] justify-center m-[auto] rounded-radius10 w-[85%]"
                    alt="Image Eleven"
                  />
                </Stack>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $40.00
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[34%]"
                    alt="mobile Thirteen"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Stack className="bg-white_A700 lg:h-[218px] xl:h-[250px] 2xl:h-[281px] 3xl:h-[337px] lg:px-[15px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[24px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image_4.png"
                    className="absolute lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] inset-[0] justify-center m-[auto] rounded-radius10 w-[85%]"
                    alt="Image Twelve"
                  />
                </Stack>
                <Text className="font-normal lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  The Three Musketeers
                </Text>
                <Row className="items-center justify-between 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_300 w-[auto]">
                    $40.00
                  </Text>
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[34%]"
                    alt="mobile Fourteen"
                  />
                </Row>
              </Column>
            </Grid>
            <Row className="justify-center lg:ml-[216px] xl:ml-[247px] 2xl:ml-[278px] 3xl:ml-[333px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[34%]">
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
              <Text className="font-medium lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                Page
              </Text>
              <Button
                className="font-medium lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_802 text-center lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                shape="RoundedBorder10"
                size="sm"
                variant="FillWhiteA700"
              >
                5
              </Button>
              <Text className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                of 80
              </Text>
              <Button
                className="flex lg:h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] rotate-[180deg] lg:w-[34px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
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
        </Row>
        <Stack className="bg-black_901 lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] lg:px-[38px] xl:px-[44px] 2xl:px-[50px] 3xl:px-[60px] rounded-radius20 w-[92%]">
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
        <footer className="lg:mb-[45px] xl:mb-[51px] 2xl:mb-[58px] 3xl:mb-[69px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[92%]">
          <Row className="justify-evenly w-[100%]">
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

export default EduviShopPage;
