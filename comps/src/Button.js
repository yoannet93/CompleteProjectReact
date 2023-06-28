import PropTypes from "prop-types";
import className from "classnames";

function Button({ children, primary, secondary, success, warning, danger }) {
  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">
      {children}
    </button>
  );
}


//Validacion de propiedades que son pasadas al componentes para detectar cuando hay un conflicto
Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning, 
    danger,
    outline,
    rounded,
  }) => {
    //Number(!!prop) devuelve por definicion 0, si la suma de todas esas expresiones da mayor que uno es que a mas de una se le dio el valor de true.
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of prymary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
