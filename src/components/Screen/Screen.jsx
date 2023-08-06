import classes from './Screen.module.css';

import { useState } from 'react';

function Screen({ result }) {
  return (
    <div
      className={classes.screen}
      style={{
        fontSize: '32px',
      }}
    >
      {result}
    </div>
  );
}
export default Screen;
