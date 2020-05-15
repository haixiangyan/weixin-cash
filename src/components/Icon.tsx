import * as React from 'react'
import {SVGAttributes} from 'react'

type TProps = SVGAttributes<SVGElement> & {
  name: string
}

const Icon: React.FC<TProps> = (props) => {
  const {name} = props

  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${name}`}/>
    </svg>
  )
}

export default Icon
