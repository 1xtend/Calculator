import ButtonsList from '../ButtonsList/ButtonsList';
import Screen from '../Screen/Screen';
import classes from './Calculator.module.css';

import store from '../../store.js';

import { useState } from 'react';
import ThemeSwitchers from '../ThemeSwitchers/ThemeSwitchers';

function math(a, b, sign) {
  return sign === '+' ? a + b : sign === '-' ? a - b : sign === 'x' ? a * b : a / b;
}

function Calculator({ changeTheme, theme }) {
  const [calc, setCalc] = useState({
    sign: '',
    number: 0,
    result: 0,
  });

  function handleNumberClick(e) {
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      number:
        calc.number % 1 === 0 && !calc.number.toString().includes('.')
          ? Number(calc.number + value)
          : calc.number + value,
      result: !calc.sign ? 0 : calc.result,
    });
  }

  function handleDotClick(e) {
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      number: !calc.number.toString().includes('.') ? calc.number + value : calc.number,
    });
  }

  function handleResetClick(btn) {
    btn === 'CE'
      ? setCalc({
          ...calc,
          sign: '',
          number: 0,
          result: 0,
        })
      : btn === 'C'
      ? setCalc({
          ...calc,
          number: calc.number ? calc.number.toString().slice(0, -1) : 0,
        })
      : '';
  }

  function handleSignClick(e) {
    setCalc({
      ...calc,
      sign: e.target.innerHTML,
      result: !calc.number
        ? calc.result
        : !calc.result
        ? calc.number
        : math(Number(calc.result), Number(calc.number), calc.sign),
      number: 0,
    });
  }

  function handleEqualsClick() {
    if (calc.number && calc.result) {
      setCalc({
        ...calc,
        result:
          calc.number === '0' && calc.sign === '÷'
            ? console.log('zero division error')
            : math(Number(calc.result), Number(calc.number), calc.sign),
        sign: '',
        number: 0,
      });
    }
  }

  function handleButtonClick(e, btn) {
    btn === 'CE' || btn === 'C'
      ? handleResetClick(btn)
      : btn === '.'
      ? handleDotClick(e)
      : btn === '+' || btn === '-' || (btn === 'x') | (btn === '÷')
      ? handleSignClick(e)
      : btn === '='
      ? handleEqualsClick()
      : handleNumberClick(e);
  }

  return (
    <div className={classes.calculator}>
      <header className={classes.header}>
        <ThemeSwitchers theme={theme} changeTheme={changeTheme} />

        <h2 className={classes.title}>calculator</h2>

        <a
          href="https://github.com/1xtend/Calculator/tree/main"
          className={classes.iconLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 14V13H3V12H4V11H5V10H6V9H7V8H8V7H9V6H10V5H11V4H12V10H14V0H4V2H10V3H9V4H8V5H7V6H6V7H5V8H4V9H3V10H2V11H1V12H0V14H2Z" />
          </svg>
        </a>
      </header>

      <div className={classes.actions}>
        <Screen calc={calc}></Screen>
        <ButtonsList store={store} handleButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}
export default Calculator;
