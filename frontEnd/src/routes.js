import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";
import Eshopper from './Eshopper'
import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductDetails from "./pages/ProductDetailPage/ProductDetails";
import { loadProductById } from "./routes/product";


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
          loader: loadProductById,
          element:<ProductDetails/>
        },
        {
          path:"/ofertas",
          element:<ProductListPage categoryType={'OFERTAS'} />
        }            
      ]
    }
  ]);