import React, {useRef, useEffect} from 'react'

const FadeInAnimation = ({children, wrapperElement = 'div', direction = null, ...props}) => {
  const Component = wrapperElement;
  const compRef = useRef(null)
  useEffect(() => {
    // animations
  }, [compRef])
  return (
    <Component ref={compRef} {...props}>
      {children}
    </Component>
  )
}

export default FadeInAnimation