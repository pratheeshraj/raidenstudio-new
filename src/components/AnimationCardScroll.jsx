import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const AnimationCardScroll = ({ children, animateIn ,animateOut}) => {
  return (
    <ScrollAnimation animateIn={animateIn} animateOut={animateOut} duration={1.5} >
      {children}
    </ScrollAnimation>
  )
}

export default AnimationCardScroll
