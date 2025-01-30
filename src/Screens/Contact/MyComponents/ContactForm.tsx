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
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
         <div className="inputes">
            <input
               required={true}
               type="text"
               {...register("name", { required: "Name ist erforderlich" })}
            />
            <label>Ihr Name</label>
            {errors.name && (
               <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
         </div>

         {/* Email */}
         <div className="inputes">
            <input
               required={true}
               type="text"
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
               <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
         </div>

         {/* Повідомлення */}
         <div className="inputes">
            <textarea
               required={true}
               {...register("message", {
                  required: "Nachricht ist erforderlich",
               })}
            ></textarea>
            <label className="block font-medium">Ihre Nachricht...</label>
            {errors.message && (
               <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
         </div>

         <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primaryBlue text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
         >
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
         </button>
      </form>
   );
};
