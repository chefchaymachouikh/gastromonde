import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function Discover() {
 const events = [
  {
    title: "Salon du Chocolat",
    country: "France 🇫🇷",
    date: "Octobre",
    description:
      "Le plus grand événement mondial consacré au chocolat et à la pâtisserie.",

    images: [
      "/images/chocolat1.jpg",
      "/images/chocolat2.jpg",
      "/images/chocolat3.jpg",
    ],
    link: "https://www.salon-du-chocolat.com/fr-FR/"
  },

  {
    title: "Oktoberfest",
    country: "Allemagne 🇩🇪",
    date: "Septembre - Octobre",
    description:
      "Le célèbre festival bavarois mettant à l'honneur la gastronomie allemande.",

    images: [
      "/images/oktoberfest1.jpg",
      "/images/oktoberfest2.jpg",
      "/images/oktoberfest3.jpg",
    ],
    link :"https://www.oktoberfest.de/en/magazine/oktoberfest-news"
  },

  {
    title: "Taste of Chicago",
    country: "États-Unis 🇺🇸",
    date: "Juillet",
    description:
      "L'un des plus grands festivals culinaires du monde.",

    images: [
      "/images/chicago1.jpg",
      "/images/chicago2.jpg",
      "/images/chicago3.jpg",
    ],
    link:"https://www.choosechicago.com/articles/festivals-special-events/taste-of-chicago-overview/"
  },


  {
    title: "Festival International de la Harissa",
    country: "Tunisie 🇹🇳",
    date: "Octobre",
    description:
      "Festival célébrant la célèbre harissa tunisienne avec dégustations et concours culinaires.",

    images: [
      "/images/harissa1.jpg",
      "/images/harissa2.jpg",
      "/images/harissa3.jpg",
    ],

    link : "https://letemps.news/2026/11/01/quand-lart-millenaire-de-la-pierre-rencontre-le-feu-du-terroir-au-festival-de-lharissa-de-nabeul/"
  },
];

  return (
  <section className="discover-page">
    <h1> Découverte Gastronomique Mondiale</h1>

    <p className="discover-intro">
      Explorez les plus célèbres festivals culinaires à travers le monde et
      découvrez des saveurs uniques.
    </p>

    <div className="discover-grid">
      {events.map((event, index) => (
        <div key={index} className="festival-card">
          
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="festival-swiper"
          >
            {event.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={event.title}
                  className="festival-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="festival-content">
            <h2>{event.title}</h2>

            <p className="country">
              📍 {event.country}
            </p>

            <span className="festival-date">
              📅 {event.date}
            </span>

            <p className="festival-description">
              {event.description}
            </p>

           <a
  href={event.link}
  target="_blank"
  rel="noopener noreferrer"
  className="festival-btn"
>
  En savoir plus
</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
}