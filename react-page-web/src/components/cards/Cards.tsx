import React, { useEffect, useState } from 'react'
import ReactThemes from '../models/ReactThemes';
import CardReactTheme from '../card/CardReactTheme';
import "./cards.css";

const Cards = () => {
  // useState pour initialiser un tableau vide de ReactThemes
  const [reactThemes, setReactThemes] = useState<ReactThemes[]>([]);

  const reactThemesList: ReactThemes[] = [
    {
      id: 1,
      title: "Modernize React MUI Dashboard Template",
      description: "",
      tag: "",
      price: 59.00,
      sales: 0,
      downloads: 0,
      notation: 0,
    },
    {
      id: 2,
      title: "Modernize Free React MUI Dashboard Template",
      description: "",
      tag: "",
      price: 0.00,
      sales: 0,
      downloads: 0,
      notation: 0,
    },
    {
      id: 3,
      title: "MaterialPro React Redux Admin",
      description: "React Redux-Toolkit Admin",
      tag: "React",
      price: 49.00,
      sales: 265,
      downloads: 0,
      notation: 0,
    },
    {
      id: 4,
      title: "Flexy - Bootstrap 5, React, Next js, Vuetify & Angular Dashboard",
      description: "Production Ready Admin Template",
      tag: "",
      price: 59.00,
      sales: 1105,
      downloads: 0,
      notation: 4.78,
    },
    {
      id: 5,
      title: "Xtreme React Admin Lite",
      description: "Free React Admin Template with hooks",
      tag: "React",
      price: 0,
      sales: 0,
      downloads: 5817,
      notation: 0,
    },
  ];

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