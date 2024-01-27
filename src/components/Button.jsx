import PropTypes from "prop-types";

function Button({ title }) {
  return (
    <button className="inline-block px-8 py-3 md:text-base lg:text-lg capitalize font-medium text-white bg-red-600 border border-red-600 rounded-md lg:rounded-lg active:text-red-500 hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring">
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};
export default Button;

//todo install the prop-types in the npm
