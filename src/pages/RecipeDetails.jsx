import React from "react";
import { Link, useParams } from "react-router-dom";
export default function RecipeDetails() {
  const { dish } = useParams();

  const recipes = {
    couscous: {
      title: "Couscous Royal Tunisien",
      image: "/images/couscous.jpg",
      persons: 6,
      prepTime: "45 min",
      cuisson: "1 h 30",
      difficulty: "Moyen",

      ingredients: [
        "500 g de semoule moyenne",
        "600 g d'agneau",
        "2 cuisses de poulet",
        "2 carottes",
        "2 courgettes",
        "1 navet",
        "200 g de pois chiches trempés",
        "1 gros oignon",
        "2 tomates",
        "2 cuillères à soupe de concentré de tomate",
        "1 cuillère à café de harissa",
        "1 cuillère à café de paprika",
        "1 cuillère à café de curcuma",
        "3 cuillères à soupe d'huile d'olive",
        "Sel et poivre"
      ],

      steps: [
        "Éplucher et couper les légumes en gros morceaux.",
        "Faire chauffer l'huile d'olive dans le couscoussier.",
        "Faire revenir l'oignon émincé.",
        "Ajouter l'agneau et le poulet puis faire dorer.",
        "Ajouter le concentré de tomate, la harissa et les épices.",
        "Verser 2 litres d'eau chaude.",
        "Ajouter les pois chiches et cuire 40 minutes.",
        "Ajouter les carottes et le navet.",
        "Ajouter ensuite les courgettes.",
        "Humidifier la semoule avec un peu d'eau salée.",
        "Cuire la semoule à la vapeur trois fois.",
        "Beurrer légèrement la semoule.",
        "Dresser le couscous puis servir avec les légumes, les viandes et le bouillon."
      ]
    },

    rechta: {
      title: "Rechta Algérienne",
      image: "/images/rechta.jpg",
      persons: 4,
      prepTime: "40 min",
      cuisson: "1 h",
      difficulty: "Moyen",

      ingredients: [
        "500 g de rechta",
        "1 poulet fermier découpé",
        "1 gros oignon",
        "2 navets",
        "2 courgettes",
        "150 g de pois chiches",
        "50 g de beurre",
        "1 cuillère à café de cannelle",
        "1 cuillère à café de gingembre",
        "1 litre d'eau",
        "Sel et poivre"
      ],

      steps: [
        "Faire fondre le beurre dans une marmite.",
        "Ajouter l'oignon haché puis le faire revenir.",
        "Ajouter le poulet et le faire dorer légèrement.",
        "Incorporer la cannelle, le gingembre, le sel et le poivre.",
        "Ajouter les pois chiches et l'eau.",
        "Cuire pendant 30 minutes.",
        "Ajouter les navets et les courgettes.",
        "Poursuivre la cuisson jusqu'à tendreté des légumes.",
        "Cuire la rechta à la vapeur dans un couscoussier.",
        "Beurrer légèrement les pâtes.",
        "Dresser la rechta dans un plat.",
        "Ajouter le poulet, les légumes puis napper de sauce."
      ]
    },

    tajine: {
      title: "Tajine Marocain au Poulet",
      image: "/images/tajine.jpg",
      persons: 5,
      prepTime: "30 min",
      cuisson: "2 h",
      difficulty: "Moyen",

      ingredients: [
        "1 poulet entier découpé",
        "2 oignons",
        "2 carottes",
        "2 pommes de terre",
        "100 g d'olives vertes",
        "1 citron confit",
        "2 gousses d'ail",
        "1 cuillère à café de gingembre",
        "1 cuillère à café de curcuma",
        "1 pincée de safran",
        "4 cuillères à soupe d'huile d'olive",
        "Sel et poivre"
      ],

      steps: [
        "Mélanger les épices avec l'huile d'olive.",
        "Badigeonner le poulet avec la marinade.",
        "Déposer les oignons au fond du tajine.",
        "Ajouter le poulet puis les légumes.",
        "Verser un verre d'eau.",
        "Couvrir et cuire à feu doux pendant 1 h 30.",
        "Ajouter les olives et le citron confit.",
        "Poursuivre la cuisson 20 minutes.",
        "Rectifier l'assaisonnement.",
        "Servir directement dans le tajine."
      ]
    },

    pizza: {
      title: "Pizza Napolitaine",
      image: "/images/pizza.jpg",
      persons: 4,
      prepTime: "2 h 30",
      cuisson: "12 min",
      difficulty: "Moyen",

      ingredients: [
        "500 g de farine type 00",
        "325 ml d'eau tiède",
        "3 g de levure boulangère",
        "10 g de sel",
        "300 g de tomates pelées",
        "250 g de mozzarella",
        "Quelques feuilles de basilic",
        "2 cuillères à soupe d'huile d'olive"
      ],

      steps: [
        "Mélanger l'eau, la levure et la farine.",
        "Ajouter le sel puis pétrir pendant 10 minutes.",
        "Former une boule et laisser lever 2 heures.",
        "Diviser la pâte en 4 pâtons.",
        "Étaler les disques de pâte à la main.",
        "Ajouter les tomates écrasées.",
        "Répartir la mozzarella.",
        "Arroser d'un filet d'huile d'olive.",
        "Cuire dans un four très chaud à 250°C pendant 10 à 12 minutes.",
        "Ajouter le basilic frais avant de servir."
      ]
    },

    paella: {
      title: "Paella Valencienne",
      image: "/images/paella.jpg",
      persons: 6,
      prepTime: "30 min",
      cuisson: "45 min",
      difficulty: "Moyen",

      ingredients: [
        "500 g de riz rond",
        "400 g de blanc de poulet",
        "300 g de crevettes",
        "300 g de moules",
        "1 poivron rouge",
        "150 g de petits pois",
        "2 tomates",
        "1 litre de bouillon de volaille",
        "1 dose de safran",
        "2 gousses d'ail",
        "3 cuillères à soupe d'huile d'olive",
        "Sel et poivre"
      ],

      steps: [
        "Nettoyer les moules et préparer les crevettes.",
        "Faire chauffer l'huile dans une poêle à paella.",
        "Faire revenir les morceaux de poulet.",
        "Ajouter l'ail haché et le poivron.",
        "Incorporer les tomates concassées.",
        "Ajouter le riz et bien mélanger.",
        "Verser le bouillon chaud parfumé au safran.",
        "Ajouter les petits pois.",
        "Répartir les crevettes et les moules.",
        "Cuire sans remuer pendant environ 20 minutes.",
        "Laisser reposer 5 minutes.",
        "Servir avec des quartiers de citron."
      ]
    }
    , "boeuf-bourguignon": {
  title: "Bœuf Bourguignon",
  image: "/images/boeuf.jpg",
  persons: 6,
  prepTime: "30 min",
  cuisson: "3 h",
  difficulty: "Moyen",

  ingredients: [
    "1 kg de bœuf à braiser",
    "150 g de lardons",
    "750 ml de vin rouge",
    "250 g de champignons de Paris",
    "2 carottes",
    "1 gros oignon",
    "2 gousses d'ail",
    "1 bouquet garni",
    "2 cuillères à soupe de farine",
    "30 g de beurre",
    "Sel",
    "Poivre"
  ],

  steps: [
    "Couper le bœuf en gros cubes.",
    "Faire revenir les lardons dans une cocotte.",
    "Ajouter le bœuf et le saisir sur toutes les faces.",
    "Ajouter les carottes et l'oignon.",
    "Saupoudrer de farine.",
    "Verser le vin rouge.",
    "Ajouter l'ail et le bouquet garni.",
    "Laisser mijoter pendant 2 h 30.",
    "Faire revenir les champignons séparément.",
    "Ajouter les champignons en fin de cuisson.",
    "Servir chaud avec pommes de terre ou pâtes fraîches."
  ]
},sushi: {
  title: "Sushi Japonais",
  image: "/images/sushi.jpg",
  persons: 4,
  prepTime: "45 min",
  cuisson: "20 min",
  difficulty: "Difficile",

  ingredients: [
    "300 g de riz à sushi",
    "400 g de saumon frais",
    "5 feuilles de nori",
    "5 cuillères à soupe de vinaigre de riz",
    "Wasabi",
    "Sauce soja",
    "Gingembre mariné"
  ],

  steps: [
    "Rincer soigneusement le riz.",
    "Cuire le riz selon les instructions.",
    "Assaisonner avec le vinaigre de riz.",
    "Laisser refroidir.",
    "Découper le saumon en fines tranches.",
    "Étaler le riz sur les feuilles de nori.",
    "Ajouter le poisson.",
    "Rouler délicatement.",
    "Découper en morceaux réguliers.",
    "Servir avec sauce soja, wasabi et gingembre."
  ]
},
tacos: {
  title: "Tacos Mexicains",
  image: "/images/tacos.jpg",
  persons: 4,
  prepTime: "20 min",
  cuisson: "15 min",
  difficulty: "Facile",

  ingredients: [
    "8 tortillas de maïs",
    "400 g de viande hachée",
    "2 tomates",
    "1 oignon rouge",
    "Salade verte",
    "100 g de fromage râpé",
    "Sauce salsa",
    "1 avocat"
  ],

  steps: [
    "Faire cuire la viande hachée dans une poêle.",
    "Assaisonner avec du sel et du poivre.",
    "Couper les tomates et l'oignon en petits dés.",
    "Préparer la salade.",
    "Chauffer les tortillas.",
    "Garnir chaque tortilla avec la viande.",
    "Ajouter légumes et fromage.",
    "Terminer par la sauce salsa.",
    "Servir immédiatement."
  ]
}
  };

  

  const recipe = recipes[dish];

  if (!recipe) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>❌ Recette non trouvée</h1>
      </div>
    );
  }

  const printRecipe = () => {
  const printContent = document.getElementById("print-area").innerHTML;

  const printWindow = window.open("", "", "width=900,height=700");

  printWindow.document.write(`
    <html>
      <head>
        <title>${recipe.title}</title>

        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 30px;
            color: #333;
          }

          h1 {
            color: #c1121f;
            text-align: center;
          }

          img {
            width: 100%;
            max-width: 600px;
            display: block;
            margin: 20px auto;
            border-radius: 10px;
          }

          h2 {
            color: #c1121f;
            border-bottom: 2px solid #c1121f;
            padding-bottom: 5px;
          }

          ul li,
          ol li {
            margin-bottom: 8px;
          }

          .infos {
            text-align: center;
            margin-bottom: 20px;
          }
        </style>

      </head>

      <body>
        ${printContent}
      </body>

    </html>
  `);

  printWindow.document.close();
  printWindow.print();
  printWindow.onafterprint = () => {
  printWindow.close();
};
};

return (
  <div className="recipe-page">

 <div id="print-area" style={{ display: "none" }}>

  <h1>{recipe.title}</h1>

  <div className="infos">
    👥 {recipe.persons} personnes |
    ⏱️ {recipe.prepTime} |
    🔥 {recipe.cuisson} |
    ⭐ {recipe.difficulty}
  </div>

 <img
  src={window.location.origin + recipe.image}
  alt={recipe.title}
/>

  <h2>Ingrédients</h2>

  <ul>
    {recipe.ingredients.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

  <h2>Préparation</h2>

  <ol>
    {recipe.steps.map((step, index) => (
      <li key={index}>{step}</li>
    ))}
  </ol>

</div>

   
      
   

    <div className="recipe-layout">

      {/* INGREDIENTS */}
      <div className="ingredients-card">
        <h2>🛒 Ingrédients</h2>

        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>
              ✅ {item}
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE */}
      <div className="image-card">
         <div className="recipe-header">

  <h1 className="recipe-title">
    {recipe.title}
  </h1>

  <div className="recipe-info">
    <span className="info-badge">
      👥 {recipe.persons} personnes
    </span>

    <span className="info-badge">
      ⏱️ {recipe.prepTime}
    </span>

    <span className="info-badge">
      🔥 {recipe.cuisson}
    </span>

    <span className="info-badge">
      ⭐ {recipe.difficulty}
    </span>
  </div>

</div>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-image"
        />
            {/* BOUTONS EN DESSOUS */}
    <div className="top-buttons">

      <Link
        to="/countries"
        className="back-btn"
      >
        ← Retour aux cuisines
      </Link>

      

      <Link
        to="/recipes"
        className="recipes-btn"
      >
         Voir toutes les recettes
      </Link>

      <button
        className="print-btn"
        onClick={printRecipe}
      >
        🖨️ Imprimer la recette
      </button>

    </div>
      </div>

      {/* PREPARATION */}
      <div className="steps-card">
        <h2>👨‍🍳 Préparation</h2>

        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>
              {step}
            </li>
          ))}
        </ol>
      </div>

    </div>



  </div>
);
}