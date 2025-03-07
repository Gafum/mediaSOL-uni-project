import { useNavigate } from "react-router-dom";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { screenList } from "../../Routing/RoutingList";

interface ISimpleErrorProps {
   title?: string;
   btnText?: string;
   navigateTo?: string;
}

export const SimpleError = ({
   title = "Keine Seite gefunden...",
   btnText = "Zur " + screenList.home.name,
   navigateTo = import.meta.env.BASE_URL,
}: ISimpleErrorProps): JSX.Element => {
   let navigate = useNavigate();

   return (
      <div className="flex justify-center items-center gap-9 flex-col mt-36">
         <h1 className="font-semibold text-4xl">{title}</h1>
         <CustomBtn
            btnText={btnText}
            onClick={() => navigate(navigateTo)}
            className="max-w-[400px] min-w-[200px] w-full"
         />
      </div>
   );
};
