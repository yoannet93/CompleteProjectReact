import className from "classnames";

function Input({ children, type, value, onChange, ...rest }) {
  const classes = className(rest.className, "mb-5 block border rounded");
  return <input onChange={onChange} value={value} type={type} className={classes}/>;
}

export default Input;
