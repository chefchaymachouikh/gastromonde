    import React, { useState } from "react";
    import { Link } from "react-router-dom";

    export default function Recipes() {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const countries = [
        {
        country: "🇹🇳 Tunisie",
        recipes: [
            { id: "couscous", name: "⭐ Couscous Royal", type: "main" },
            { id: "ojja", name: "Ojja Tunisienne", type: "quick" },
            { id: "brik", name: "Brik à l'œuf", type: "quick" }
        ]
        },

        {
        country: "🇩🇿 Algérie",
        recipes: [
            { id: "rechta", name: "⭐ Rechta", type: "main" },
            { id: "chtitha", name: "Chtitha Poulet", type: "quick" },
            { id: "mhajeb", name: "Mhajeb", type: "quick" }
        ]
        },

        {
        country: "🇲🇦 Maroc",
        recipes: [
            { id: "tajine", name: "⭐ Tajine", type: "main" },
            { id: "harira", name: "Harira", type: "quick" },
            { id: "rfissa", name: "Rfissa", type: "quick" }
        ]
        },

        {
        country: "🇮🇹 Italie",
        recipes: [
            { id: "pizza", name: "⭐ Pizza Napolitaine", type: "main" },
            { id: "lasagnes", name: "Lasagnes", type: "quick" },
            { id: "risotto", name: "Risotto", type: "quick" }
        ]
        },

        {
        country: "🇫🇷 France",
        recipes: [
            {
            id: "boeuf-bourguignon",
            name: "⭐ Bœuf Bourguignon",
            type: "main"
            },
            {
            id: "gratin",
            name: "Gratin Dauphinois",
            type: "quick"
            },
            {
            id: "ratatouille",
            name: "Ratatouille",
            type: "quick"
            }
        ]
        },

        {
        country: "🇯🇵 Japon",
        recipes: [
            { id: "sushi", name: "⭐ Sushi", type: "main" },
            { id: "tempura", name: "Tempura", type: "quick" },
            { id: "yakitori", name: "Yakitori", type: "quick" }
        ]
        },

        {
        country: "🇪🇸 Espagne",
        recipes: [
            { id: "paella", name: "⭐ Paella", type: "main" },
            {
            id: "gambas",
            name: "Gambas al Ajillo",
            type: "quick"
            },
            {
            id: "gazpacho",
            name: "Gazpacho",
            type: "quick"
            }
        ]
        },

        {
        country: "🇲🇽 Mexique",
        recipes: [
            { id: "tacos", name: "⭐ Tacos", type: "main" },
            { id: "tamales", name: "Tamales", type: "quick" },
            {
            id: "quesadillas",
            name: "Quesadillas",
            type: "quick"
            }
        ]
        }
    ];

        const quickRecipes = {
            ojja: {
            title: "Ojja Tunisienne",
            description:
                "Plat traditionnel tunisien préparé avec des tomates, de la harissa, des œufs et des merguez.",
            ingredients:
                "Tomates, œufs, harissa, ail, merguez.",
            preparation:
                "Faire revenir les tomates et l'ail. Ajouter la harissa puis les merguez. Casser les œufs directement dans la sauce et servir chaud."
            },

            brik: {
            title: "Brik à l'œuf",
            description:
                "Entrée tunisienne croustillante servie dans toute la Tunisie.",
            ingredients:
                "Malsouka, œuf, thon, persil, câpres.",
            preparation:
                "Déposer la garniture dans la feuille de malsouka, plier puis frire jusqu'à obtenir une couleur dorée."
            },

            harira: {
            title: "Harira",
            description:
                "Soupe marocaine traditionnelle du Ramadan.",
            ingredients:
                "Tomates, pois chiches, lentilles, coriandre.",
            preparation:
                "Cuire les ingrédients ensemble puis laisser mijoter jusqu'à obtention d'une soupe onctueuse."
            }
            , chtitha: {
  title: "Chtitha Poulet",
  description:
    "Plat traditionnel algérien relevé, préparé avec du poulet et une sauce rouge parfumée.",
  ingredients:
    "Poulet, ail, tomate, paprika, piment, huile d'olive.",
  preparation:
    "Faire revenir l'ail dans l'huile. Ajouter les épices puis le poulet. Incorporer la tomate et laisser mijoter jusqu'à obtention d'une sauce épaisse."
},

mhajeb: {
  title: "Mhajeb",
  description:
    "Crêpe feuilletée algérienne farcie d'une préparation à base d'oignons et de tomates.",
  ingredients:
    "Semoule, farine, tomates, oignons, huile, piment.",
  preparation:
    "Préparer une pâte souple. Réaliser une farce aux tomates et aux oignons puis garnir la pâte avant cuisson sur une plaque chaude."
},

rfissa: {
  title: "Rfissa",
  description:
    "Spécialité marocaine composée de msemen émietté servi avec du poulet et une sauce parfumée.",
  ingredients:
    "Poulet, msemen, lentilles, fenugrec, oignons, épices.",
  preparation:
    "Préparer la sauce avec le poulet et les épices. Disposer le msemen dans un plat puis arroser généreusement de sauce."
},

lasagnes: {
  title: "Lasagnes",
  description:
    "Plat italien emblématique composé de couches de pâtes, de sauce bolognaise et de béchamel.",
  ingredients:
    "Feuilles de lasagnes, viande hachée, tomate, béchamel, fromage.",
  preparation:
    "Alterner les couches de pâtes, de sauce bolognaise et de béchamel. Parsemer de fromage puis cuire au four jusqu'à gratinage."
},

risotto: {
  title: "Risotto",
  description:
    "Plat italien crémeux à base de riz Arborio lentement cuit dans un bouillon.",
  ingredients:
    "Riz Arborio, bouillon, parmesan, beurre, oignon.",
  preparation:
    "Faire revenir l'oignon puis ajouter le riz. Incorporer progressivement le bouillon chaud jusqu'à cuisson complète puis terminer avec le parmesan."
},

gratin: {
  title: "Gratin Dauphinois",
  description:
    "Spécialité française réalisée avec des pommes de terre et de la crème.",
  ingredients:
    "Pommes de terre, crème fraîche, lait, ail, noix de muscade.",
  preparation:
    "Disposer les rondelles de pommes de terre dans un plat. Ajouter la crème assaisonnée puis cuire au four jusqu'à obtenir une belle coloration."
},

ratatouille: {
  title: "Ratatouille",
  description:
    "Plat traditionnel provençal à base de légumes mijotés.",
  ingredients:
    "Aubergines, courgettes, tomates, poivrons, oignons.",
  preparation:
    "Faire revenir chaque légume séparément puis les réunir et laisser mijoter longuement."
},

tempura: {
  title: "Tempura",
  description:
    "Spécialité japonaise composée de légumes ou fruits de mer enrobés d'une pâte légère puis frits.",
  ingredients:
    "Crevettes, légumes, farine, œufs, eau glacée.",
  preparation:
    "Préparer une pâte légère, enrober les ingrédients puis les frire rapidement jusqu'à obtenir une texture croustillante."
},

yakitori: {
  title: "Yakitori",
  description:
    "Brochettes de poulet grillées très populaires au Japon.",
  ingredients:
    "Poulet, sauce soja, sucre, mirin, oignons verts.",
  preparation:
    "Monter les brochettes puis les griller en les badigeonnant régulièrement de sauce yakitori."
},

gambas: {
  title: "Gambas al Ajillo",
  description:
    "Tapas espagnole composée de crevettes sautées dans l'huile d'olive parfumée à l'ail.",
  ingredients:
    "Crevettes, ail, huile d'olive, piment, persil.",
  preparation:
    "Faire revenir l'ail dans l'huile chaude puis ajouter les crevettes. Parsemer de persil avant de servir."
},

gazpacho: {
  title: "Gazpacho",
  description:
    "Soupe froide espagnole très rafraîchissante.",
  ingredients:
    "Tomates, concombre, poivron, ail, huile d'olive, vinaigre.",
  preparation:
    "Mixer tous les ingrédients jusqu'à obtenir une texture lisse puis servir très frais."
},

tamales: {
  title: "Tamales",
  description:
    "Spécialité mexicaine à base de pâte de maïs garnie puis cuite dans une feuille de maïs.",
  ingredients:
    "Farine de maïs, viande, sauce tomate, feuilles de maïs.",
  preparation:
    "Garnir la pâte de maïs puis l'envelopper dans une feuille avant cuisson à la vapeur."
},

quesadillas: {
  title: "Quesadillas",
  description:
    "Tortillas mexicaines garnies de fromage fondu.",
  ingredients:
    "Tortillas, fromage, poulet ou légumes, épices.",
  preparation:
    "Garnir la tortilla de fromage puis cuire sur une plaque chaude jusqu'à ce que le fromage fonde."
}
        };

 return (
  <div className="recipes-page">
    <h1> Dictionnaire des Recettes du Monde</h1>

    {countries.map((item, index) => (
      <div key={index} className="country-card">
        <h2>{item.country}</h2>

        <ul>
          {item.recipes.map((recipe, i) => (
            <li key={i}>
              {recipe.type === "main" ? (
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="recipe-link"
                >
                  {recipe.name}
                </Link>
              ) : (
                <button
                  type="button"
                  className="recipe-link quick-btn"
                  onClick={() => setSelectedRecipe(recipe.id)}
                >
                  {recipe.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    ))}


   {selectedRecipe &&
  quickRecipes[selectedRecipe] && (

  <div
    className="recipe-modal-overlay"
    onClick={() => setSelectedRecipe(null)}
  >

    <div
      className="quick-recipe-card"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="close-btn"
        onClick={() => setSelectedRecipe(null)}
      >
        ✖
      </button>

      <h2>
        {quickRecipes[selectedRecipe].title}
      </h2>

      <p>
        <strong>Description :</strong>{" "}
        {quickRecipes[selectedRecipe].description}
      </p>

      <p>
        <strong>Ingrédients :</strong>{" "}
        {quickRecipes[selectedRecipe].ingredients}
      </p>

      <p>
        <strong>Préparation :</strong>{" "}
        {quickRecipes[selectedRecipe].preparation}
      </p>

    </div>

  </div>

)}

  </div>
);
    }