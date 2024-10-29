import scrollDownIcon from 'images/scrollDown.svg'

const WelcomePage = () => {
  return (
    <div className='page welcome-page'>
      <div className='title column'>
        <p>DevOps</p>
        <p>Kwon Doyeon</p>
        <p>Portfolio</p>
        <div className='line first'></div>
        <div className='line second'></div>
        <div className='line third'></div>
      </div>
      <img
        src={scrollDownIcon}
        alt='스크롤 다운 아이콘'
        className='scroll-down-icon'
      />
    </div>
  )
}

export default WelcomePage
