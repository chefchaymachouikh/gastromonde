import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Countries() {
    
  const cuisines = [
    {
      cuisine: "🥘 Cuisine Maghrébine",
      countries: [
        {
          id: "couscous",
          country: "Tunisie",
          capital: "Tunis",
          language: "Arabe",
          flag: "/images/tn.png",
          dish: "Couscous Royal",
          image: "/images/couscous.jpg",

          description:
            "Le Couscous Royal est le plat emblématique de la Tunisie. Préparé avec une semoule fine, des légumes savoureux et une viande tendre, il symbolise le partage, la convivialité et les traditions culinaires tunisiennes.",
        },
        {
          id: "rechta",
          country: "Algérie",
          capital: "Alger",
          language: "Arabe",
          flag: "/images/alg.png",
          dish: "Rechta",
          image: "/images/rechta.jpg",

          description:
            "La Rechta est l'un des plats les plus emblématiques de la cuisine algérienne. Composée de fines nouilles traditionnelles accompagnées d'une sauce blanche parfumée au poulet, aux pois chiches et aux légumes, elle est particulièrement appréciée lors des fêtes familiales et des occasions spéciales.",
        },
        {
          id: "tajine",
          country: "Maroc",
          capital: "Rabat",
          language: "Arabe",
          flag: "/images/Mor.png",
          dish: "Tajine",
          image: "/images/tajine.jpg",
          description:
            "Le Tajine est une spécialité marocaine parfumée aux épices et cuite lentement dans un plat traditionnel en terre cuite.",
        },
      ],
    },

    {
      cuisine: "🍝 Cuisine Italienne",
      countries: [
        {
          id: "pizza",
          country: "Italie",
          capital: "Rome",
          language: "Italien",
          flag: "/images/it.png",
          dish: "Pizza Napolitaine",
          image: "/images/pizza.jpg",
          description:
            "La Pizza Napolitaine est l'une des spécialités italiennes les plus célèbres. Sa pâte légère et ses ingrédients frais en font un symbole mondial de la gastronomie italienne.",
        },
      ],
    },

    {
      cuisine: "🥩 Cuisine Française",
      countries: [
        {
          id: "boeuf-bourguignon",
          country: "France",
          capital: "Paris",
          language: "Français",
          flag: "/images/franc.png",
          dish: "Bœuf Bourguignon",
          image: "/images/boeuf.jpg",
          description:
            "Le Bœuf Bourguignon est un incontournable de la cuisine française, mijoté lentement dans une sauce au vin rouge.",
        },
      ],
    },

    {
  cuisine: "🍣 Cuisine Japonaise",
  countries: [
    {
      id: "sushi",
      country: "Japon",
      capital: "Tokyo",
      language: "Japonais",
      flag: "/images/ja.png",
      dish: "Sushi",
      image: "/images/sushi.jpg",

      description:
        "Le Sushi est l'une des spécialités les plus célèbres du Japon. Élaboré à partir de riz vinaigré, de poisson frais et d'ingrédients soigneusement sélectionnés, il représente la précision, l'élégance et le raffinement de la gastronomie japonaise."
    }
  ]
},

{
  cuisine: "🥘 Cuisine Espagnole",
  countries: [
    {
      id: "paella",
      country: "Espagne",
      capital: "Madrid",
      language: "Espagnol",
      flag: "/images/sp.png",
      dish: "Paella",
      image: "/images/paella.jpg",

      description:
        "La Paella est le plat emblématique de l'Espagne. Originaire de la région de Valence, elle associe le riz safrané à des fruits de mer, des légumes ou des viandes dans une préparation conviviale et généreuse."
    }
  ]
},

{
  cuisine: "🌮 Cuisine Mexicaine",
  countries: [
    {
      id: "tacos",
      country: "Mexique",
      capital: "Mexico",
      language: "Espagnol",
      flag: "/images/mex.png",
      dish: "Tacos",
      image: "/images/tacos.jpg",

      description:
        "Les Tacos sont le symbole de la cuisine mexicaine. Préparés à base de tortillas garnies de viande, de légumes et de sauces épicées, ils offrent une explosion de saveurs authentiques et colorées qui reflètent la richesse culturelle du Mexique."
    }
  ]
}
  ];
  const navigate = useNavigate();
  const [selectedCuisine, setSelectedCuisine] = useState(cuisines[0]);

  const [selectedCountry, setSelectedCountry] = useState(
    cuisines[0].countries[0],
  );

  const handleCuisine = (cuisine) => {
    setSelectedCuisine(cuisine);
    setSelectedCountry(cuisine.countries[0]);
  };

  return (
  <section className="international-page">

    {/* SIDEBAR */}
    <aside className="sidebar">
      <h2>Cuisine Internationale</h2>

      {cuisines.map((item, index) => (
        <button
          key={index}
          className="cuisine-btn"
          onClick={() => handleCuisine(item)}
        >
          {item.cuisine}
        </button>
      ))}
    </aside>

    {/* CONTENU */}
    <main className="content-area">

      {/* LISTE DES PAYS */}
      <div className="countries-list">

        <h3>{selectedCuisine.cuisine}</h3>

        {selectedCuisine.countries.map((country, index) => (
          <button
            key={index}
            className="country-btn"
            onClick={() => setSelectedCountry(country)}
          >
            <img
              src={country.flag}
              alt={country.country}
              className="country-flag"
            />

            <span>{country.country}</span>
          </button>
        ))}

      </div>

      {/* DETAILS DU PLAT */}
      <div className="dish-details">

        <div className="dish-showcase">

          {/* IMAGE A GAUCHE */}
          <div className="dish-image-container">

            <img
              src={selectedCountry.image}
              alt={selectedCountry.dish}
              className="dish-image"
            />

          </div>

          {/* INFOS A DROITE */}
          <div className="dish-content">

            <div className="dish-header">

              <img
                src={selectedCountry.flag}
                alt={selectedCountry.country}
                className="big-flag"
              />

              <div>
                <h1 className="dish-title">
                  {selectedCountry.dish}
                </h1>

                <h3 className="country-name">
                  {selectedCountry.country}
                </h3>
              </div>

            </div>

            <div className="info-card">

              <p>
                📍 <strong>Capitale :</strong>{" "}
                {selectedCountry.capital}
              </p>

              <p>
                🗣️ <strong>Langue :</strong>{" "}
                {selectedCountry.language}
              </p>

            </div>

            <div className="description-card">

              <h4>
                🍽️ À propos du plat
              </h4>

              <p>
                {selectedCountry.description}
              </p>

            </div>

            <button
              className="recipe-btn"
              onClick={() =>
                navigate(`/recipe/${selectedCountry.id}`)
              }
            >
              Voir la recette
            </button>

          </div>

        </div>

      </div>

    </main>

  </section>
);}