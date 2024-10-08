import EshopperApplicationWrapper from "./pages/ProductListPage/EshopperApplicationWrapper";
import Eshopper from './Eshopper'
import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage/ProductListPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <EshopperApplicationWrapper/>,
      children:[
        {
          path:"/",
          element:<Eshopper />
        },
        {
          path:"/feminino",
          element:<ProductListPage />
        }
        
      ]
    }
  ]);