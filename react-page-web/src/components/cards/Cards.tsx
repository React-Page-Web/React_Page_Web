import React, { useEffect, useState } from 'react'
import ReactThemes from '../models/ReactThemes';
import reactThemesList from '../../data/ReactThemesList'
import CardReactTheme from '../card/CardReactTheme';
import "./cards.css";

const Cards = () => {
  // useState pour initialiser un tableau vide de ReactThemes
  const [reactThemes, setReactThemes] = useState<ReactThemes[]>([]);

  // Hook pour ajouter les différents ReactThemes de la liste dans le useState
  useEffect(() => {
    setReactThemes(reactThemesList);
  }, []);
  
  return (
    <>
      <div className='display-grid'>
        {reactThemes.map((reactTheme: ReactThemes) => {
          return <CardReactTheme key={reactTheme.id} reactTheme={reactTheme} />;
          })
        }
      </div>
    </>
  )
}

export default Cards