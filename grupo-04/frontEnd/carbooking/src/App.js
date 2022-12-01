import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/home/home';
import ProductDetails from './pages/Product/ProductDetails';
import Administracion from './pages/Administracion/Administracion';
import Error from './components/Error/Error';
import AppContext from './Context/AppContext';
import useInitialState from './hooks/useInitialState';
import Booking from './pages/Bookings/Booking';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import ProtectedAdmin from './components/ProtectedRoutes/ProtectedAdmin';


function App() {

  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails/>} />
            <Route path="*" element={<Error />} />            
            <Route element={<ProtectedRoutes />}>
            <Route path="/reserva/:id" element={<Booking />} />
            </Route>
            <Route element={<ProtectedAdmin/>}>
            <Route path="/administrador" element={<Administracion/>} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
