import { useRef } from 'react'

const Navigator = () => {
  const navRef = useRef(null)

  return (
    <div
      className='row navigator'
      ref={navRef}
      onMouseEnter={() => {
        navRef.current.classList.add('active')
      }}
      onMouseLeave={() => {
        navRef.current.classList.remove('active')
      }}
    >
      <div className='nav column'>
        <span>Main</span>
        <span>Introduce</span>
        <span>Career</span>
        <span>Education</span>
        <span>Projects</span>
      </div>
      <div className='nav-btn'>&gt;</div>
    </div>
  )
}

export default Navigator
