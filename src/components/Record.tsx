import * as React from 'react'
import Divider from './Dividier'

const Record: React.FC = () => {
  return (
    <li>
      <header>
        <span>
          <span>5月14日</span>
          <span>星期二</span>
        </span>
        <span>
          <span>支</span>
          <span>359.00</span>
          <span>收</span>
          <span>888.00</span>
        </span>
      </header>

      <section>
        <div>ICON</div>
        <div>
          <div>其他</div>
          <div>
            <span>01:00</span>
            <Divider/>
            <span>同程旅行-退款</span>
          </div>
        </div>
        <div>
          -8.00
        </div>
      </section>
    </li>
  )
}

export default Record
