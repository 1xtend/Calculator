import classes from './Button.module.css';

import classNames from 'classnames';

function Button({ value, onClick }) {
  function checkOperationValue(value) {
    return (
      value === '=' ||
      value === '+' ||
      value === '-' ||
      value === 'x' ||
      value === '÷' ||
      value === 'CE' ||
      value === 'C'
    );
  }

  return (
    <button
      type="button"
      className={classNames(classes.value, checkOperationValue(value) ? classes.operation : '')}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
export default Button;
