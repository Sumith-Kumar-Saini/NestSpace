const products = [
  {
    id: "1",
    name: "Modular Desk",
    image: "/images/desk.jpg",
    price: 299,
    tags: ["workspace"],
  },
  {
    id: "2",
    name: "Notion Kit",
    image: "/images/notion.jpg",
    price: 49,
    tags: ["productivity"],
  },
];

const getAllProducts = async () => {
  return products;
};

const getProductById = async (id: string) => {
  return products.find((p) => p.id === id);
};

export default {
  getAllProducts,
  getProductById,
};
