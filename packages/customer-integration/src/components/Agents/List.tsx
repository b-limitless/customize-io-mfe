import React from 'react';
import NetWorkSVG from '@assets/icons/network.svg';
import WifiSVG from '@assets/icons/wifi.svg';
import BatteriesSVG from '@assets/icons/batteries.svg';
import BackIcon from '@assets/icons/back.svg';
import QuestionSVG from '@assets/icons/question.svg';
import SquireAvtar from '@assets/icons/squire-avatar.svg'
import { Input } from '@pasal/cio-component-library';
import Button from '../common/Button/Button';


type Props = {}

export default function ListAgents({ }: Props) {
  return (
    <div className="styles list__agents">
      <div className="styles row">
        <div className="styles time">9:41</div>
        <div className="styles indicators">
          <NetWorkSVG />
          <WifiSVG />
          <BatteriesSVG />
        </div>
      </div>

      <div className="styles navigation">
        <BackIcon />
        <div className="styles title">
          Select an agent
        </div>
        <QuestionSVG />
      </div>

      <div className="styles search">
        <div className="styles form"><input type='text' placeholder='Searh...' /></div>
        <Button text={<QuestionSVG />} variant='secondary' />
      </div>

      <div className="styles agents">
        <div className="style agent">
            
        </div>
      </div>
    </div>
  )
}