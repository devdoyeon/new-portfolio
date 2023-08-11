import thinkingImg from 'image/thinkingHeart.png';
import viewMoreIcon from 'image/viewMore.svg'

const Main = () => {
  return (
    <div className='content-wrap main'>
      <div className='column title'>
        <img src={thinkingImg} alt='생각하는 이미지' />
        <p>
          즐기는 <strong>프론트엔드</strong> 개발자
          <br />
          <strong>권도연</strong>입니다.
        </p>
      </div>
      <img src={viewMoreIcon} alt="더보기 아이콘" className='view-more' />
    </div>
  );
};

export default Main;
