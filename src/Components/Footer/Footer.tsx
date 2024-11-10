import { Link } from "react-router-dom"
import { screenList } from "../../Routing/RoutingList"
import { contactData } from "../../Screens/Contact/ContactData"

function Footer(): JSX.Element {
   return (
      <footer className="bg-primaryLightGrey">
         <div className="flex justify-start px-9 py-4 gap-9 items-start">
            <img src="./mainIcon.svg" alt="M" className="w-[60px] mt-1" />
            <div className="flex flex-col">
               <h4 className="font-semibold mb-3">Contact</h4>
               <div>{contactData.telephone}</div>
               <div>{contactData.email}</div>
            </div>
            <div className="flex flex-col ml-[60px]">
               <h4 className="font-semibold mb-3">Pages</h4>
               <Link
                  to={screenList.home.path}
                  className="hover:opacity-70 transition-opacity duration-200"
               >
                  Home
               </Link>
               <Link
                  to={screenList.about.path}
                  className="hover:opacity-70 transition-opacity duration-200"
               >
                  About
               </Link>
               <Link
                  to={screenList.catalog.path}
                  className="hover:opacity-70 transition-opacity duration-200"
               >
                  Catalog
               </Link>
            </div>
            <div className="flex flex-col ml-[60px]">
               <h4 className="font-semibold mb-3">Production</h4>
               <a
                  href="https://github.com/Gafum"
                  className="hover:opacity-70 transition-opacity duration-200"
                  target="_blank"
               >
                  GitHub
               </a>
               <a
                  href="https://www.youtube.com/@gafum"
                  className="hover:opacity-70 transition-opacity duration-200"
                  target="_blank"
               >
                  YouTube
               </a>
            </div>
         </div>
      </footer>
   )
}

export default Footer
