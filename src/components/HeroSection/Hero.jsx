import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full py-12 grid grid-cols-1  md:grid-cols-2 items-center gap-4 max-w-6xl mx-auto lg:gap-8">
      <div className="">
        <span className="block mb-4 text-xs font-bold md:text-lg text-white font-medium">
          <em> LES ESSENTIELS DE NOTRE SITE WEB </em>
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-white">
          Conception Pas à Pas de Notre Site Web
        </h3>
        <p className="text-base font-bold md:text-lg text-white my-4 md:my-6">
          Notre plateforme révolutionne le monde du gaming en offrant une
          expérience unique aux passionnés. Avec une équipe dévouée, nous avons
          créé une application de mise en relation des joueurs, où ils explorent
          des jeux captivants, interagissent dans une communauté dynamique,
          partagent leur passion et repoussent les limites de l'interaction
          virtuelle.
        </p>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1633545495735-25df17fb9f31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXNwb3J0fGVufDB8fDB8fHww",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNwb3J0fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    src: "https://plus.unsplash.com/premium_photo-1661540865559-56bc639e539e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVzcG9ydHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1618193139062-2c5bf4f935b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 5,
    src: "https://as2.ftcdn.net/v2/jpg/06/32/81/11/1000_F_632811123_FMJNigM0S1R09IvsJYGBCwoD1Oqf16bZ.jpg",
  },
  {
    id: 6,
    src: "https://t4.ftcdn.net/jpg/02/63/93/09/240_F_263930951_3UycTJFz7UkZ9jdMNScB6vNE3xEIs9hl.jpg",
  },
  {
    id: 7,
    src: "https://t4.ftcdn.net/jpg/06/37/54/63/240_F_637546337_v6FqSFImk9uPAXSKebXbhiSpgKvScZPg.jpg",
  },
  {
    id: 8,
    src: "https://t4.ftcdn.net/jpg/06/54/65/87/240_F_654658735_eI9rQiXJlJrfCx2DBrHeLWrrVzROygoN.jpg",
  },
  {
    id: 9,
    src: "https://t4.ftcdn.net/jpg/04/62/52/53/240_F_462525327_0f3COXe3DBjhLA2GN9y9VuImZbXdF3CD.jpg",
  },
  {
    id: 10,
    src: "https://t3.ftcdn.net/jpg/06/34/75/00/240_F_634750000_NTZ5ARIjJXsAEL0dsmDfN4oYs2mDjoC9.jpg",
  },
  {
    id: 11,
    src: "https://t4.ftcdn.net/jpg/06/10/17/13/240_F_610171381_Bsj0nA7ypMvm4gXlMIblSrmIPW4xmScj.jpg",
  },
  {
    id: 12,
    src: "https://as1.ftcdn.net/v2/jpg/06/13/70/54/1000_F_613705447_Tm1h3VCJjMfGjKkn11PzLOWkl2Nhco6p.jpg",
  },
  {
    id: 13,
    src: "https://as2.ftcdn.net/v2/jpg/06/10/15/81/1000_F_610158150_I52VLp4x8Jf6GI1uTijSoIW3fCmOQmY7.jpg",
  },
  {
    id: 14,
    src: "https://www.cowcotland.com/images/news/2022/03/jeuvideo-eldenring-3.jpg",
  },
  {
    id: 15,
    src: "https://t3.ftcdn.net/jpg/06/52/61/58/240_F_652615887_3s7oWiVQOxt2E7r6zjuY8NQojqyVOZ9a.jpg",
  },
  {
    id: 16,
    src: "https://t4.ftcdn.net/jpg/06/83/69/17/240_F_683691740_sFbNeIRAd6C9ybc0uHvzRXbEkU4MUJtJ.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full min-[320px]:w-32 h-[100px] lg:h-28
      "
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className=" grid grid-cols-2 grid-flow-row gap-6 md:grid-cols-4 h-[450px] md:gap-4 xl:grid-cols-4 h-[450px] gap-1 max-[640px]:h-[800px] ">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
