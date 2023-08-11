import './App.css';
import { useEffect, useState } from 'react';
import Main from './pages/Main';
import Intro from 'pages/Intro';
import Sub from 'pages/Sub';
import Career from 'pages/Career';
import Stack from 'pages/Stack';

function App() {
  const [scrollCount, setScrollCount] = useState(0);
  const pageLength = 3;

  useEffect(() => {
    window.addEventListener(
      'wheel',
      function (e) {
        e.preventDefault();
      },
      { passive: false }
    );
  }, []);

  useEffect(() => {
    if (scrollCount >= pageLength || scrollCount < 0) return;
    window.scrollTo({
      top: window.innerHeight * scrollCount,
      behavior: 'smooth',
    });
  }, [scrollCount]);

  return (
    <div
      className='container'
      onWheel={e => {
        if (e.nativeEvent.deltaY > 0) setScrollCount(count => count + 1);
        else if (e.nativeEvent.deltaY <= 0) setScrollCount(count => count - 1);
      }}>
      <Main />
      <Stack />
      <Career />
    </div>
  );
}

export default App;
