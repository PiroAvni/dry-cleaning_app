import PropTypes from "prop-types";
import { Button } from "reactstrap";


const BUTTON_TYPE_CLASSES = {
  className:
    "cta_button h-16 text-lg w-80 btn dark:text-white px-3 font-bold justify-items-center mt-4 hover: border-solid border-2 border-slate-200 ",
  color: "26466F",
  isDisabled: false,
  type: "button",
};

function Button1({
  children,
  version,
  type,
  isDisabled,
  color,
  className,
}) {


  return (
    <button
      type={type}
      disabled={isDisabled}
      ClassName={`${BUTTON_TYPE_CLASSES[className, color]}`}
      color={color}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  className: "",
  type: "button",
  color: "26466F",
  isDisabled: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDiabled: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.any,
};
export default Button1;
{
  /* <Link to="#">
<Button className="cta_button h-16 text-lg w-80  btn dark:text-white px-3 font-bold justify-items-center mt-4 hover: border-solid border-2 border-slate-200  " color="26466F">
  BOOK A PICK-UP NOW
</Button>
</Link> */
}
