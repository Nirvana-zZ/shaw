import React from 'react';
import styles from './style.less';

export default () => {
  return (
    <div>
      <p>
        <input type="radio" name="radioName" id="fed-engineer" hidden />
        <label for="fed-engineer"></label>
        <span>前端工程师</span>
      </p>
    </div>
  )
}