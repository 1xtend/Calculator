import classes from './ThemeSwitchers.module.css';

import classNames from 'classnames';

const buttonThemes = ['theme1', 'theme2', 'theme3'];

function ThemeSwitchers({ theme, changeTheme }) {
  return (
    <div className={classes.dots}>
      {buttonThemes.map((btnTheme) => (
        <button
          data-theme={btnTheme}
          key={btnTheme}
          onClick={() => changeTheme(btnTheme)}
          className={classNames(classes.dot, btnTheme === theme ? classes.activeBtn : '')}
        ></button>
      ))}
    </div>
  );
}
export default ThemeSwitchers;
