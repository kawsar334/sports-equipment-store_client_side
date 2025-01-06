import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageTitle from './components/PageTitle';
import Details from './pages/Details';
import Dashboard from './pages/Dashboard';
import CartPage from './pages/CartPage';
import Layout from './pages/Layouts/Layout';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import About from './pages/About';
import Statistics from './pages/Statistics';
import NotFound from './pages/Notfound';
import CartContext from './context/CartStorage';
import RegisterPage from './pages/Layouts/Register';
import AddEquipmentPage from './pages/AddEquipment.JSX';
import AllSportsEquipmentPage from './pages/AllEquepment';
import UpdateEquipment from './pages/UpdateEqu';
import ProtectedRoute from './ProtectedRoute';
import EquepDetails from './pages/EquepDetails';
import MyEquepment from './pages/MyEquepment';
import UpdateEquep from './pages/UpdateEquep';
import { RedirectRoute } from './pages/RedirectRoute';
import { CategoryPage } from './pages/CategoryPage';
import Profile from './pages/Profile';
import AboutUs from './pages/About';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: (
            <PageTitle title="Home">
              <Home />
            </PageTitle>
          ),
        },
        {
          path: "details/:id",
          element: (
            // <ProtectedRoute>
              <Details />
            // </ProtectedRoute>
          ),
        },
        {
          path: "equipment",
          element: (
            <PageTitle title="AllSports products">
                <AllSportsEquipmentPage />
            </PageTitle>
          ),
        },
        {
          path: "myequipment",
          element: (
            <PageTitle title="AllSports products">
              <ProtectedRoute>
                <MyEquepment />
              </ProtectedRoute>
            </PageTitle>
          ),
        },
        {
          path: "equipment/:id",
          element: (
            // <ProtectedRoute>
              <EquepDetails />
            // </ProtectedRoute>
          ),
        },

        {
          path: "create",
          element: (
            <PageTitle title="Add Equipment">
              <ProtectedRoute>
                <AddEquipmentPage />
              </ProtectedRoute>
            </PageTitle>
          ),
        },
        {
          path: "update/:id",
          element: (
            <ProtectedRoute>
              <UpdateEquipment />
            </ProtectedRoute>

          ),
        },
        {
          path: "sport/:cat",
          element: (
            
              <CategoryPage />
           

          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "profile",
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: "about",
          element: (
              <AboutUs />
          ),
        },
        {
          path: "/login",
          element: (<PageTitle title="Login">
            <RedirectRoute>
              <Login />
              </RedirectRoute>
            </PageTitle>),
        },
        {
          path: "/register",
          element: (<PageTitle title="Register"><RegisterPage /></PageTitle>),
        },
        
        

      ],
    },



    {
      path: "*",
      element: (
        <PageTitle title="404 Not Found">
          <NotFound />
        </PageTitle>
      ),
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
