import React from 'react'
import ReactThemes from '../models/ReactThemes';
import react_logo from './assets/react_logo.png';
import "./cardReactTheme.css";
// import Card from 'react-bootstrap/Card';

export type ReactThemeCharacteristics = {
  reactTheme: ReactThemes;
}

const CardReactTheme: React.FC<ReactThemeCharacteristics> = ({ reactTheme }) => {
  return (
    <div className='card-border'>

      <div className='image'> 
        <img src={react_logo} alt={reactTheme.title} /> 
      </div>

      <div className='text-border'>
        <div> {reactTheme.title} </div>
        <div> {reactTheme.description} </div>

        <div className='align-right-left'>
          <div> {reactTheme.price} / {reactTheme.sales} </div>
          <div> {reactTheme.tag} </div>
        </div>

        <div className='align-right-left'>
          <div> {reactTheme.downloads} </div>
          <div> {reactTheme.notation} / 5.00 </div>
        </div>

      </div>

    </div>
  );

}

export default CardReactTheme