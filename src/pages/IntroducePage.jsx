const IntroducePage = () => {
  const hiLang = [
    { lang: 'korean', hi: '안녕하세요' },
    { lang: 'english', hi: 'Hi' },
    { lang: 'japanese', hi: 'こんにちは' },
    { lang: 'spanish', hi: 'Hola' },
    { lang: 'franch', hi: 'Bonjour' },
    { lang: 'deutsch', hi: 'Hallo' },
  ]

  return (
    <div className='page intro-page'>
      <h2 className='title right'>INTRODUCE</h2>
      <div className='rolling-wrap'>
        <ul className='hi original'>
          {hiLang.map(({ lang, hi }) => {
            return <li className={lang}>{hi}!</li>
          })}
          {hiLang.map(({ lang, hi }) => {
            return <li className={lang}>{hi}!</li>
          })}
        </ul>
        <ul className='hi clone'>
          {hiLang.map(({ lang, hi }) => {
            return <li className={lang}>{hi}!</li>
          })}
          {hiLang.map(({ lang, hi }) => {
            return <li className={lang}>{hi}!</li>
          })}
        </ul>
      </div>
      <h1 className='name-intro'>즐기는 DevOps, 권도연입니다.</h1>
      <p className='content'>
        <span>
          개인적인 사정으로 고등학교를 자퇴한 후, 대학에 가는 것보다 취업 전선에
          빨리 뛰어드는 것이 좋다고 생각해 검정고시를 딴 상태로 알바만 하고
          있었을 때엔, 제 미래가 보이지 않았습니다. 고졸의 학력이지만 실력만으로
          인정 받을 수 있는 직업이 어떤 게 있을지에 대한 고민을 하게 되었습니다.
        </span>
        <br />
        <span>
          친언니의 권유로 인해 개발자라는 직업이 있다는 사실을 알게 되었습니다.
          그렇게 <b>프론트엔드 개발을 시작하려고 해</b> 라는 책을 무작정
          구입했습니다. 혼자 독학해 보니 이런 식으로도 내가 원하는 웹을 구현할
          수 있다는 점에서 흥미를 느꼈고, 사용자들에게 보이는 것을 구현하는
          것만이 아닌 넣고 싶은 기능을 넣어 웹을 개발할 수 있다는 생각에
          프론트엔드 공부가 재밌어졌습니다.
        </span>
        <br />
        <span>
          그렇게 개발자로 진로를 정한 그 순간부터 제게 매력적으로 다가왔던 것은
          프론트엔드였습니다. 그 후 개발에 관련된 K-Digital Training 수업을 듣게
          되었고, 프론트엔드를 지망하던 저는 프론트엔드 개발자가 되기 위해
          백엔드나 데이터베이스 관련 과정을 과감히 듣지 않고{' '}
          <b>HTML, CSS, JavaScript를 공부하는 데에 몰두</b>했습니다.
        </span>
        <br />
        <span>
          이후 첫 회사에 입사하여 실무에 투입되면서 전반적인 CS 지식을 넓혔고,
          2024년 10월부터 시작한 산업기술변화대응특화훈련을 수강하여 리눅스,
          데이터베이스, 네트워크 등 서버 운영에 관한 지식을 넓혀나가는 중입니다.
        </span>
      </p>
    </div>
  )
}

export default IntroducePage
