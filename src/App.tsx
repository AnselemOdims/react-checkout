import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Checkout from './pages/Checkout';
import Product from './pages/Product';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
    </>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
