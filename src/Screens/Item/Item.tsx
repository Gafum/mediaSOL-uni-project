import { useParams } from "react-router-dom"
import { IGadget } from "../../MainTypes/Gadget"
import { CatalogContent } from "../../DevData/CatalogContent"
import CustomBtn from "../../UI/CustomBtn/CustomBtn"
import { OneGoodsList } from "../Catalog/MyComponents/OneGoodsList"

export const Item = (): JSX.Element => {
   const { itemId } = useParams()
   const elementData: IGadget | undefined = CatalogContent.find((elem) => {
      return elem.id == itemId
   })

   if (!elementData) {
      return <div>error</div>
   }

   return (
      <div>
         <div className="grid grid-cols-2 gap-2">
            <div
               className="rounded-md bg-center bg-contain h-[300px] bg-no-repeat"
               style={{ backgroundImage: `url(${elementData.img})` }}
            />

            <div className="p-4 rounded-md bg-primaryLightGrey flex flex-col shadow-sm">
               <h2 className="font-semibold text-xl">{elementData.name}</h2>
               <p className="mt-3">{elementData.description}</p>
               <div className="flex-1" />
               <CustomBtn
                  btnText={"$" + elementData.price}
                  onClick={() => "sad-"}
                  className="w-full"
               />
            </div>
         </div>

         <OneGoodsList
            name="Änlich"
            list={CatalogContent.filter((elem) => {
               return (
                  elem.type == elementData.type && elem.id !== elementData.id
               )
            })}
         />
      </div>
   )
}
