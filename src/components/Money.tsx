import * as React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Category from './Category'
import {DEFAULT_CATEGORIES} from '../lib/category'

const Header = styled.header`
  
`

const TypeSection = styled.section`
  
`

const Money: React.FC = () => {
  const category = DEFAULT_CATEGORIES[0]

  return (
    <div>
      <Header>
        <Icon name="cancel" size={32}/>
      </Header>
      <TypeSection>
          <button>支出</button>
          <button>收入</button>
          <button>5月15日</button>
      </TypeSection>
      <section>
        <input type="text"/>
      </section>
      <ul>
        <li>
          <Category category={category} type="expense"/>
          <span>{category.name}</span>
        </li>
      </ul>
      <section>
        <button>添加备注</button>
      </section>
      <div>
        数字面板
      </div>
    </div>
  )
}

export default Money
