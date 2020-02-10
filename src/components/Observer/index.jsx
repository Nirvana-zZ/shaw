import React, { useState, useEffect, useRef } from 'react';
import styles from './style.less';

export default () => {
  const testBox = useRef();
  const [opcity, setOpcity] = useState('0');
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      let temp = entries[0].intersectionRatio;
      if (temp > 0 && temp <= .25) {
        setOpcity('1/4');
      } else if (temp > .25 && temp <= .5) {
        setOpcity('1/2');
      } else if (temp > .5 && temp <= .75) {
        setOpcity('3/4');
      } else if (temp > .75) {
        setOpcity('1')
      } else {
        setOpcity('0')
        console.log(entries[0].target)
      }
    }, {
      threshold: [0, 0.25, 0.5, 0.75, 1]
    })
    io.observe(testBox.current)
  })
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{opcity}</h3>
      <div className={styles.innnerbox}>
        <div></div>
        <div className={styles.testBox} ref={testBox}></div>
      </div>
    </div>
  )
}