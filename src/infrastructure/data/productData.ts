import { Product } from '../../core/models/Product';

export const productData: Product = {
  id: "razor-blade-1",
  name: "Razor Blade",
  tagline: "La mejor máquina para tu cuidado personal",
  description: "Diseñada con precisión para ofrecer el corte más limpio y suave.",
  features: [
    {
      id: "f1",
      title: "Alta Precisión",
      description: "Cuchillas de acero inoxidable autoafilables."
    },
    {
      id: "f2",
      title: "Batería de larga duración",
      description: "Hasta 120 minutos de uso continuo con una sola carga."
    },
    {
      id: "f3",
      title: "Diseño Ergonómico",
      description: "Se adapta perfectamente a tu mano para un control total."
    }
  ],
  images: [
    // Aquí pondremos las imágenes de assets más adelante
    "/assets/img/product-main.jpg"
  ]
};
