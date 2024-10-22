import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import Eshopper from './Eshopper'
import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <ShopApplicationWrapper/>,
      children:[
        {
          path:"/",
          element:<Eshopper />
        },
        {
          path:"/feminino",
          element:<ProductListPage categoryType={'WOMEN'} />
        },
        {
          path:"/masculino",
          element:<ProductListPage categoryType={'MEN'} />
        },
        {
          path:"/product/:productId",
          element:<ProductDetails/>
        },
        {
          path:"/ofertas",
          element:<ProductListPage categoryType={'OFERTAS'} />
        }            
      ]
    }
  ]);