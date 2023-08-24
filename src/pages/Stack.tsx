import { useState, MouseEvent } from 'react';
import langIcon from 'image/languageIcon.png';
import communicateIcon from 'image/communicationIcon.png';
import { BsArrowRightSquareFill } from 'react-icons/bs';
import slack from 'image/communicate/slack.png';
import discord from 'image/communicate/discord.png';
import asana from 'image/communicate/asana.png';
import jira from 'image/communicate/jira.png';
import StackInfo from 'components/StackInfo';

const Stack = () => {
  const [stackInfoToggle, setStackInfoToggle] = useState(false);
  const [selectStack, setSelectStack] = useState('');

  const openStackInfo = (select: MouseEvent<HTMLDivElement>): void => {
    if (select.target instanceof HTMLDivElement) {
      console.log(select.target.id);
      setSelectStack(select.target.id);
      setStackInfoToggle(false);
    }
  };

  return (
    <>
      <div className='content-wrap stack'>
        <div className='column'>
          <div className='row stack'>
            <div className='column'>
              <img src={langIcon} alt='기술 스택' />
              <p>Stack</p>
            </div>
            <div className='column stack-list'>
              <div className='row' id='use' onClick={e => openStackInfo(e)}>
                <p>
                  지금 <strong>당장</strong> 적용 가능해요
                </p>
                <BsArrowRightSquareFill />
              </div>
              <div
                className='row'
                id='studying'
                onClick={e => openStackInfo(e)}>
                <p>
                  실무 투입은 어렵지만 <strong>공부 중</strong>이에요
                </p>
                <BsArrowRightSquareFill />
              </div>
            </div>
          </div>
          <div className='row communication'>
            <div className='column'>
              <img src={communicateIcon} alt='커뮤니케이션' />
              <p>Communication</p>
            </div>
            <div className='row communicate-wrap'>
              <img src={slack} alt='Slack Logo' />
              <img src={discord} alt='Discord Logo' />
              <img src={asana} alt='Asana Logo' />
              <img src={jira} alt='Jira Logo' />
            </div>
          </div>
        </div>
      </div>
      {stackInfoToggle && (
        <StackInfo
          setStackInfoToggle={setStackInfoToggle}
          selectStack={selectStack}
        />
      )}
    </>
  );
};

export default Stack;
