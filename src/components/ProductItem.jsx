const ProductItem = ({ product }) => {
  return (
    <li className="border rounded-lg shadow-md p-4 bg-white">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4 transition-transform duration-300 transform hover:scale-110" />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">Price: <span className="text-green-500 font-bold">${product.price}</span></p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600   focus:outline-none focus:ring-2 focus:ring-blue-700 transition duration-300">
        Add to cart
      </button>
    </li>
  );
};

export default ProductItem;
