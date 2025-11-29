import React from 'react';
import styles from './Child.module.scss'

// console.log(styles)
const Child = () => {
  return (
    <div>
      <ul>
        <li className={styles.item}>child-11111</li>
        <li className={styles.item}>child-11111</li>
      </ul>
    </div>
  );
}

export default Child;
