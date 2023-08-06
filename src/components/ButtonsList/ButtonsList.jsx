import Button from '../Button/Button';
import classes from './ButtonsList.module.css';

import classNames from 'classnames';

function ButtonsList({ store, handleButtonClick }) {
  return (
    <ul className={classes.list}>
      {store.flat().map((btn, i) => (
        <li
          key={i}
          className={classNames(
            classes.item,
            btn === 'CE' ? classes.ce : btn === '=' ? classes.equal : ''
          )}
        >
          <Button value={btn} onClick={(e) => handleButtonClick(e, btn)} />
        </li>
      ))}
    </ul>
  );
}
export default ButtonsList;
