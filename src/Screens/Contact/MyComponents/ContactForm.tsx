import { useForm } from "react-hook-form";

interface IContactForm {
   name: string;
   email: string;
   message: string;
}

export const ContactForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<IContactForm>();

   const onSubmit = async (data: IContactForm) => {
      console.log("Form Data:", data);
      alert("Your will get the data in email " + data.email);
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <h2 className="font-semibold">Kontakt-Formular</h2>
         <div className="inputes mt-4">
            <input
               required={true}
               type="text"
               {...register("name", { required: "Name ist erforderlich" })}
               className={errors.name && "incorrect"}
            />
            <label>Ihr Name</label>
            {errors.name && (
               <p className="text-red-500 text-sm pl-1">
                  {errors.name.message}
               </p>
            )}
         </div>

         {/* Email */}
         <div className="inputes">
            <input
               required={true}
               type="text"
               className={errors.email && "incorrect"}
               {...register("email", {
                  required: "E-Mail ist erforderlich",
                  pattern: {
                     value: /^\S+@\S+\.\S+$/,
                     message: "Geben Sie eine gültige E-Mail-Adresse ein",
                  },
               })}
            />
            <label className="block font-medium">E-Mail</label>
            {errors.email && (
               <p className="text-red-500 text-sm pl-1">
                  {errors.email.message}
               </p>
            )}
         </div>

         {/* Повідомлення */}
         <div className="inputes">
            <textarea
               required={true}
               rows={5}
               {...register("message", {
                  required: "Nachricht ist erforderlich",
               })}
               className={errors.message && "incorrect"}
            ></textarea>
            <label className="block font-medium">Ihre Nachricht</label>
            {errors.message && (
               <p className="text-red-500 text-sm pl-1">
                  {errors.message.message}
               </p>
            )}
         </div>

         <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 bg-primaryBlue text-white py-2 rounded-lg hover:opacity-85 transition-opacity duration-200 disabled:opacity-50 mt-2 w-full"
         >
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
         </button>
      </form>
   );
};
