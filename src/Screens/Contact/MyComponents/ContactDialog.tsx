import { Dispatch, SetStateAction } from "react";
import { CustomDialog } from "../../../UI/CustomDialog/CustomDialog";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { IContactForm } from "./ContactForm";

interface IContactDialogProps {
   modalOpen: boolean;
   setModalOpen: Dispatch<SetStateAction<boolean>>;
   formData: IContactForm;
}

export const ContactDialog = ({
   modalOpen,
   setModalOpen,
   formData,
}: IContactDialogProps): JSX.Element => {
   return (
      <CustomDialog open={modalOpen} setOpen={setModalOpen}>
         <div className="p-5 min-h-44 flex flex-col justify-between gap-5 text-center items-center overflow-hidden">
            <h2 className="font-semibold text-2xl">Warten auf Antwort</h2>

            <p className="break-words break-all text-wrap max-w-full w-full">
               <span className="capitalize">{formData?.name}</span>, Sie werden
               die Daten per E-Mail{" "}
               <span className="font-medium">{formData?.email}</span> erhalten
            </p>
            <CustomBtn
               btnText={"Okay"}
               className="w-3/4 mt-4 bg-primaryPink"
               onClick={() => setModalOpen(false)}
            />
         </div>
      </CustomDialog>
   );
};
