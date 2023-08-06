import classes from './Screen.module.css';

function Screen({ calc }) {
  return (
    <div
      className={classes.screen}
      style={{
        fontSize: '32px',
      }}
    >
      <span>{calc.sign && !calc.number && calc.sign}</span>
      {calc.number ? calc.number : calc.result}
    </div>
  );
}
export default Screen;
