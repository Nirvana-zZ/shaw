import React from 'react';
import styles from './style.less'

export default () => {
  return (
    <div>
      <div className={styles.textstyle}>
        <p>少年听雨歌楼上</p>
        <p>红烛昏罗帐</p>
        <p>壮年听雨客舟中</p>
        <p>江阔云低，断雁叫西风</p>
      </div>
      <div className={styles.ellipsis}><p>少年听雨歌楼上,少年听雨歌楼上少年听雨歌楼上少年听雨歌楼上，少年听雨歌楼上，少年听雨歌楼上，少年听雨歌楼上</p></div>
      <p className={styles.tips}>浮现文字</p>
    </div>
  )
}