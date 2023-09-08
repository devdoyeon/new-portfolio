import { useState, useEffect, useRef } from 'react';

const Intro = ({
  setBlockScroll,
  scrollCount,
}: {
  setBlockScroll: React.Dispatch<React.SetStateAction<boolean>>;
  scrollCount: number;
}) => {
  const [test, setTest] = useState(1);

  useEffect(() => {
    console.log(test);
    if (scrollCount !== 1) return;
    if (test <= 0) setTest(1);
    else if (test >= 5) setTest(4);
    else {
      setBlockScroll(true);
    }
    // if (test === 1 || test === 4) setBlockScroll(false);
  }, [test, scrollCount]);

  return (
    <div className='content-wrap intro'>
      <div
        className='a'
        onWheel={e => {
          if (e.nativeEvent.deltaY > 0) {
            setTest(test => test + 1);
            e.currentTarget.scrollTo(740 * test, 0);
          } else if (e.nativeEvent.deltaY <= 0) {
            setTest(test => test - 1);
            e.currentTarget.scrollTo(e.currentTarget.scrollLeft - 740, 0);
          }
        }}
        // onClick={(e) => {
        //   setTest(test => test + 1)
        //   e.currentTarget.scrollTo(740*test, 0)
        // }}
      >
        <div className='content'>1</div>
        <div className='content'>2</div>
        <div className='content'>3</div>
        <div className='content'>4</div>
        <div className='content'>5</div>
      </div>
    </div>
  );
};

export default Intro;
