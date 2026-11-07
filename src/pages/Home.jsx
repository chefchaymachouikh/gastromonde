import React from "react";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-tag">
           Découvrez les saveurs du monde
        </span>

        <h1>
          Cuisine <span>Internationale</span>
        </h1>

        <p>
          Explorez les spécialités culinaires,
          les recettes emblématiques et les traditions
          gastronomiques des plus beaux pays du monde.
        </p>

 <div className="hero-buttons">
  <button className="btn-primary" onClick={() => window.location.href = "/countries"}>
     Découvrir les pays
  </button>


</div>
      </div>
    </section>
  );
}