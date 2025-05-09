import { Link } from "react-router-dom";
import { screenList } from "../../Routing/RoutingList";
import { contactData, followUsData } from "../../Screens/Contact/ContactData";
import { useCopyToClipboard } from "../../Hooks/useCopyToClipboard";
import { twMerge } from "tailwind-merge";

export const Footer = (): JSX.Element => {
   const { ToastContainer, copyToClipboard } = useCopyToClipboard();

   return (
      <footer className="bg-primaryLightGrey">
         <div
            className={twMerge(
               "container",
               "flex justify-start px-2 sm300:px-5 sm:px-9 py-4 gap-6 items-start"
            )}
         >
            <img
               src={import.meta.env.VITE_BASE_URL + "/mainIcon.svg"}
               alt="M"
               className="w-[54px] mt-1 hidden sm300:block"
            />
            <div
               className="flex gap-4 flex-col sm500:grid sm500:gap-x-10 md:flex md:flex-row md:justify-start md:gap-x-20 mx-auto sm300:mx-0"
               style={{ gridTemplateColumns: "repeat(2, auto)" }}
            >
               <div className="flex-col hidden sm500:flex">
                  <h4 className="font-semibold mb-2">Kontact</h4>
                  <div
                     onClick={() => copyToClipboard(contactData[1].text)}
                     className="hover:opacity-70 transition-opacity duration-200"
                  >
                     {contactData[1].text}
                  </div>
                  <div
                     onClick={() => copyToClipboard(contactData[2].text)}
                     className="hover:opacity-70 transition-opacity duration-200"
                  >
                     {contactData[2].text}
                  </div>
               </div>
               <div className="flex-col hidden sm500:flex">
                  <h4 className="font-semibold mb-2">Entwikeler</h4>
                  {followUsData.map((elem) => (
                     <a
                        key={elem.link}
                        href={elem.link}
                        className="hover:opacity-70 transition-opacity duration-200"
                        target="_blank"
                     >
                        {elem.title}
                     </a>
                  ))}
               </div>
               <div className="flex-col flex items-center mx-auto sm300:items-start sm500:mx-0 text-sm sm300:text-base">
                  <h4 className="font-semibold mb-2">Seiten</h4>
                  <Link
                     to={screenList.home.path}
                     className="hover:opacity-70 transition-opacity duration-200"
                  >
                     {screenList.home.name}
                  </Link>
                  <Link
                     to={screenList.contact.path}
                     className="hover:opacity-70 transition-opacity duration-200"
                  >
                     {screenList.contact.name}
                  </Link>
                  <Link
                     to={screenList.about.path}
                     className="hover:opacity-70 transition-opacity duration-200"
                  >
                     {screenList.about.name}
                  </Link>
                  <Link
                     to={screenList.catalog.path}
                     className="hover:opacity-70 transition-opacity duration-200"
                  >
                     {screenList.catalog.name}
                  </Link>
               </div>
            </div>
         </div>
         <ToastContainer />
      </footer>
   );
};
