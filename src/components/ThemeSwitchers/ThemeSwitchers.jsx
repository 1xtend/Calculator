import classes from './ThemeSwitchers.module.css';

function ThemeSwitchers() {
  return (
    <div className={classes.dots}>
      <button className={classes.dot}></button>
      <button className={classes.dot}></button>
      <button className={classes.dot}></button>
    </div>
  );
}
export default ThemeSwitchers;
