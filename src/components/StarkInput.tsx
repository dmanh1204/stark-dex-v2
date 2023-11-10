import { Input, InputProps, InputRef } from "antd";
import classNames from "classnames";

export const DonaInput = (
  props: InputProps & { ref?: React.Ref<InputRef> }
) => {
  console.log(props.className);
  return (
    <Input
      ref={props.ref}
      {...props}
      className={classNames(
        "h-[51px] rounded-[10px] rounded-lg border-[1px] border-[#FFF] bg-[#1A1F29] text-[#fff]",
        props.className
      )}
    />
  );
};
