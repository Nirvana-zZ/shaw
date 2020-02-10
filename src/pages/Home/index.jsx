import React from 'react';
import { TextTest,AddStar } from '@/components';
import styles from './style.less';

const Home = () => {
  let time = '2012/12/23';
  console.log(time.replace(/\//g, '-'))
  // const throttle = (func, delay) => {
  //   var prev = Date.now();
  //   return function () {
  //     var context = this;
  //     var args = arguments;
  //     var now = Date.now();
  //     if (now - prev >= delay) {
  //       func.apply(context, args);
  //       prev = Date.now();
  //     }
  //   }
  // }
  
  return (
    <div className={styles.container}>
      <TextTest />
      {/* <button>点击</button> */}
      <AddStar number={4}/>
    </div>
  )
}
export default Home;