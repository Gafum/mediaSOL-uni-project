import { screenList } from "../../Routing/RoutingList";
import { useCartStore } from "../../Store/CartStore";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { useNavigate } from "react-router-dom";
import { ProductsList } from "./MyComponents/ProductsList";

export const Cart = (): JSX.Element => {
   const cartListIDs = Object.keys(useCartStore((state) => state.cartList));

   const navigate = useNavigate();

   if (!cartListIDs.length) {
      return (
         <div className="text-center w-full">
            <h1 className="font-medium text-2xl mt-[140px]">Korb ist leer</h1>
            <CustomBtn
               btnText={"Etwas kaufen"}
               className="w-1/3 mt-7"
               onClick={() => navigate(screenList.catalog.path)}
            />
         </div>
      );
   }

   return <ProductsList />;
};
