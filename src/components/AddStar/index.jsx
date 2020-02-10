import React from 'react';
import Icon_full from '@/assets/full.png';
import Icon_half from '@/assets/half.png';
import Icon_empty from '@/assets/empty.png';

export default ({ number }) => {
  let StarArr = [];
  for (let i = 1; i < 6; i++) {
    if (i <= number) {
      StarArr.push(Icon_full);
    } else {
      if (Math.ceil(number) > number) {
        StarArr.push(Icon_half);
        number=Math.ceil(number);
        i++;
      }
      StarArr.push(Icon_empty);
    }
  }
  return (
    <div>
      {StarArr.map((item, index) => {
        return <img src={item} alt='' key={index} />
      })}
    </div>
  )
}