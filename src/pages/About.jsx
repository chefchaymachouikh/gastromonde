import React from "react";

export default function About() {
return (
  <div className="about-page">

    {/* HERO */}

    <div className="about-hero">

      <h1> À propos de GASTROMONDE</h1>

      <p className="about-intro">
        Découvrez les saveurs, les traditions et les spécialités
        culinaires les plus célèbres du monde à travers une
        expérience interactive et immersive.
      </p>

      {/* INSTITUT */}

      <div className="institute-section">

        <div className="logos-row">

          <img
            src="/images/afmt.jpg"
            alt="AFMT"
            className="institute-logo"
          />

          <div className="institute-text">

            <h2>
              Projet pédagogique réalisé à
            </h2>

            <h3>
              Institut de Formation aux Métiers du Tourisme
            </h3>

            <p>
              Nabeul - Tunisie
            </p>

          </div>

          <img
            src="/images/ifmt.jpg"
            alt="IFMT Nabeul"
            className="institute-logo"
          />

        </div>

      </div>

      {/* AUTEURS */}

      <div className="authors-section">

        <h2>👨‍🍳 Réalisé par</h2>

        <div className="authors">

          <div className="author-card">

            <img
              src="/images/chayma.jpg"
              alt="Chayma Chouikh"
              className="author-image"
            />

            <h3>Chayma Chouikh</h3>

            <p>BTS Cuisine</p>

          </div>

          <div className="author-card">

            <img
              src="/images/balsem.jpg"
              alt="Balsem Jebali"
              className="author-image"
            />

            <h3>Balsem Jebali</h3>

            <p>BTS Cuisine</p>

          </div>

        </div>

      </div>

    </div>

    {/* OBJECTIF */}

    <div className="about-section">

      <h2>🎯 Objectif du Projet</h2>

      <p>
        Cuisine Internationale est un projet réalisé dans le cadre
        du BTS Cuisine. Son objectif est de mettre en valeur les
        traditions gastronomiques de différents pays à travers une
        présentation moderne, interactive et pédagogique.
      </p>

      <p>
        Les visiteurs peuvent explorer plusieurs cuisines du monde,
        découvrir leurs plats emblématiques et consulter des fiches
        techniques détaillées comprenant les ingrédients, les
        quantités, les temps de préparation et les méthodes de
        réalisation.
      </p>

    </div>

    {/* VISION */}

    <div className="about-section">

      <h2>💡 Notre Vision</h2>

      <p>
        La cuisine est un langage universel qui rapproche les peuples
        et favorise les échanges culturels. À travers ce projet,
        nous souhaitons partager la richesse du patrimoine culinaire
        mondial et faire découvrir des recettes authentiques
        accessibles à tous les passionnés de gastronomie.
      </p>

    </div>

  </div>
);
}