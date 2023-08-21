import Image from "next/image";
import UsefulLink from "./UsefulLink";
import { logo } from "@/public/assets";
export const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-800 text-white">
      <div className="mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="logo  flex flex-col xl:items-center xl:text-center  text-white p-10">
        <Image src={logo} width={150} height={150} />
         <h1 className="text-3xl font-bold"> BESTESSAYWRITER </h1>
        </div>

        <div className="items-start xl:items-center flex flex-col text-white p-10">
          <div className="font-bold">Quick Links</div>
          <ul className="useful-list">
            <UsefulLink name="Home" href="/" />
            <UsefulLink name="Blogs" href="/blogs" />
            <UsefulLink name="About" href="/about" />
            <UsefulLink name="Reviews" href="/reviews" />
            <UsefulLink name="Contact" href="/contact" />
          </ul>
        </div>

        <div className="items-start xl:items-center flex flex-col text-white p-10">
        <div className="font-bold">All Essays</div>
          <ul className="useful-list">
            <UsefulLink name="Custom Essay Help" href="#" />
            <UsefulLink name="Admission Essay Help" href="#" />
            <UsefulLink name="Exploratory Essay Help" href="#" />
            <UsefulLink name="Law Essay Help" href="#" />
            <UsefulLink name="Deductive Essay Help" href="#" />
            <UsefulLink name="Scholarship Essays Help" href="#" />
            <UsefulLink name="Argumentive Essay Help" href="#" />
            <UsefulLink name="Urgent Essay Help" href="#" />
            <UsefulLink name="Student Essay Writing" href="#" />
            <UsefulLink name="Plagiarism Free Essays" href="#" />
            <UsefulLink name="Essay Help Online" href="#" />
            <UsefulLink name="Essay Homework Help" href="#" />
            <UsefulLink name="Need Help Writing Essay" href="#" />
            <UsefulLink name="Cheap Essay Writer" href="#" />
            <UsefulLink name="Perfect Essay Help" href="#" />
            <UsefulLink name="MBA Essay Writing Service" href="#" />
            <UsefulLink name="Professional Essay Writer" href="#" />
            <UsefulLink name="Cheap Essay Writing Services" href="#" />
            <UsefulLink name="Essay Writers Online" href="#" />
          </ul>
        </div>
        <div className="items-start xl:items-center flex flex-col  text-white p-10">
        <div className="font-bold">Other Services</div>
          <ul className="useful-list">
          <UsefulLink name="Assignment Writing" href="#"/>
            <UsefulLink name="Cookery" href="#"/>
            <UsefulLink name="Property Law" href="#"/>
            <UsefulLink name="Constitutional Law" href="#"/>
            <UsefulLink name="Administrative Law" href="#"/>
            <UsefulLink name="Criminal Law" href="#"/>
            <UsefulLink name="Human Rights Law" href="#"/>
            <UsefulLink name="Civil Law" href="#"/>
            <UsefulLink name="Tort Law" href="#"/>
            <UsefulLink name="Management" href="#"/>
            <UsefulLink name="Managerial Economics" href="#"/>
            <UsefulLink name="Managerial Accounting" href="#"/>
            <UsefulLink name="Case Study Writing" href="#"/>
            <UsefulLink name="Coursework Writing" href="#"/>
            <UsefulLink name="Best Dissertation Writing" href="#"/>
            <UsefulLink name="Best Report Writing" href="#"/>
         
          </ul>
        </div>
      </div>
    </footer>
  );
};
