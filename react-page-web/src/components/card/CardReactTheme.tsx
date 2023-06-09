import React from 'react'
import ReactThemes from '../models/ReactThemes';
import react_logo from './assets/react_logo.png';
import "./cardReactTheme.css";

export type ReactThemeCharacteristics = {
  reactTheme: ReactThemes;
}

const CardReactTheme: React.FC<ReactThemeCharacteristics> = ({ reactTheme }) => {
  return (
    <div className='border'>

      <div className='image'> 
        <img src={react_logo} alt={reactTheme.title} /> 
      </div>

      <div className='align-left'> {reactTheme.title} </div>
      <div className='align-left'> {reactTheme.description} </div>
      <div className='align-right'> {reactTheme.tag} </div>
      <div className='align-left'> {reactTheme.price} / {reactTheme.sales} </div>
      <div className='align-left'> {reactTheme.downloads} </div>
      <div className='align-right'> {reactTheme.notation} / 5.00 </div>

    </div>
  );

}

export default CardReactTheme