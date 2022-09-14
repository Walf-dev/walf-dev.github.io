import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  FillWhiteA70033: "bg-white_A700_33",
  OutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
  FillWhiteA700: "bg-white_A700",
};
const shapes = {
  CustomBorderTL10:
    "rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0]",
  RoundedBorder10: "rounded-radius10",
};
const sizes = {
  sm: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  md: "lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[17px] xl:pt-[20px] pt-[23px] 3xl:pt-[27px] lg:px-[15px] xl:px-[17px] px-[20px] 3xl:px-[24px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["CustomBorderTL10", "RoundedBorder10"]),
  variant: PropTypes.oneOf([
    "FillWhiteA70033",
    "OutlineGray300",
    "FillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "CustomBorderTL10",
  variant: "FillWhiteA70033",
  size: "md",
};

export { Input };
