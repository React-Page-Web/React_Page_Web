import React from 'react'
import Cards from '../cards/Cards'
import './pageReactThemes.css'

const PageReactThemes = () => {
  return (
    <div>

      <div>
        <div>
          <h1> React Templates & Themes </h1>
          <p> Top React Templates to create modern web Applications and Products. Download Free & Premium React Templates & Dashboards.</p>
        </div>
        <div>
          {/* Dans l'idéal : faire une vraie barre de recherche */}
          <input placeholder="eg. material pro"/>
        </div>
      </div>

      <div>
        {/* Dans l'idéal : faire un composant qui récupère les icônes */}
        <div>
          <img src="./assets/bootstrap.png" alt="" />
          <p> Bootstrap </p>
        </div>
        <div>
          <img src="./assets/react.png" alt="" />
          <p> React </p>
        </div>
      </div>

      <div>
        {/* mettre un bandeau ici avec les tag */}
        <p> React Bootstrap Templates </p>
        <p> React Material UI Template </p>
      </div>

      <div>
        <p> Premium & Free React Themes </p>
        <div>
          <p> Sort by: </p>
          <select><option> Popular Templates </option></select>
        </div>
      </div>

      <div>
        <Cards/>
      </div>
      <div>
        {/* Appel du composant "Texte" */}
      </div>
      
    </div>
  )
}

export default PageReactThemes