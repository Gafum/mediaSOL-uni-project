import { Heart, ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { IGadget } from "../../../MainTypes/Gadget";
import { PriceShower } from "../../PriceShower/PriceShower";
import { CustomImg } from "../../../UI/CustomImg/CustomImg";
import { useCustomImg } from "../../../UI/CustomImg/useCustomImg";

interface SmallItemProps extends IGadget {
   toggleToFavorites: () => void;
   isOnFavorites: boolean;
   className?: string;
}

export const SmallItem = ({
   id,
   name,
   type: mytype,
   price,
   action,
   img,
   isOnFavorites,
   toggleToFavorites,
   className,
}: SmallItemProps): JSX.Element => {
   const { imgState, setImgState } = useCustomImg();

   return (
      <div
         className={
            "w-[300px] bg-[#f8f9fe] text-left p-5 flex flex-col justify-between relative gap-1 shadow-sm hover:shadow-lg transition-all duration-300 origin-top rounded-md " +
            className
         }
      >
         <Link to={"/item/" + id}>
            {action && (
               <span className="text-base w-1/4 top-2 left-2 rounded-md bg-primaryPink absolute text-white text-center">
                  - {action}%
               </span>
            )}
            {
               <button
                  className="text-base w-1/8 top-2 right-2 absolute text-white text-center cursor-pointer "
                  onClick={(event) => {
                     event.stopPropagation();
                     event.preventDefault();
                     toggleToFavorites();
                  }}
               >
                  <Heart
                     size={24}
                     fill={isOnFavorites ? "#E32F70" : "#f8f9fe"}
                     color={isOnFavorites ? "#E32F70" : "#666"}
                     className="hover:drop-shadow-md transition-all duration-300"
                  />
               </button>
            }

            <CustomImg
               imgState={imgState}
               setImgState={setImgState}
               imgSrc={img}
               className="bg-contain rounded-md h-[200px] w-full"
               NotFoundComponent={
                  <ImageOff
                     width={100}
                     height={100}
                     strokeWidth={1.4}
                     color="#222"
                  />
               }
            />
            <div>
               <h4 className="text-base font-bold overflow-clip text-ellipsis whitespace-nowrap">
                  {name}
               </h4>
               <h6 className="text-sm">{mytype}</h6>
               <h4 className="font-semibold">
                  <PriceShower price={price} action={action} />
               </h4>
            </div>
         </Link>
      </div>
   );
};
