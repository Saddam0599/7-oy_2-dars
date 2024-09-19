import { useReducer, useEffect } from 'react';
import ProductList from './components/ProductList';

const initialState = {
  loading: true,
  error: '',
  products: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: 'Ma\'lumotlarni yuklashda xatolik',
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
      .catch(() => dispatch({ type: 'FETCH_ERROR' }));
  }, []);

  const { loading, error, products } = state;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default App;
