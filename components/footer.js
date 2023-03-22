import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <footer className="px-5 text-left">
      <h3 className="text-[#ffffffb3] py-8">
        Questions? Call{" "}
        <span className="underline cursor-pointer">1-844-542-4813</span>
      </h3>
      <section className="footer-class text-sm md:flex md:flex-row md:items-start md:justify-center md:space-x-2 xl:space-x-16">
        <div>
          <p className="py-1">FAQ</p>
          <p className="py-1">Gift Card Terms</p>
          <p className="py-1">Help Center</p>
        </div>
        <div>
          <p className="py-1">Account</p>
          <p className="py-1">Media Center</p>
          <p className="py-1">Investor Relations</p>
        </div>
        <div>
          <p className="py-1">Jobs</p>
          <p className="py-1">Netflix Shop</p>
          <p className="py-1">Redeem Gift Cards</p>
        </div>
        <div>
          <p className="py-1">Buy Gift Cards</p>
          <p className="py-1">Ways to Watch</p>
          <p className="py-1">Terms of Use</p>
        </div>
        <div>
          <p className="py-1">Privacy</p>
          <p className="py-1">Cookie Preferences</p>
          <p className="py-1">Corporate Information</p>
        </div>
        <div>
          <p className="py-1">Contact Us</p>
          <p className="py-1">Speed Test</p>
          <p className="py-1">Legal Notices</p>
        </div>
        <div>
          <p className="py-1">Only on Netflix</p>
        </div>
      </section>
      <section className="space-y-3 py-10 no-underline text-white">
        <section className="flex justify-around border items-center no-underline border-white w-32 h-8 rounded-md xl:w-32">
          <GlobeAltIcon className="w-5" />
          English
          <ChevronDownIcon className="w-5" />
        </section>
        <p>Netflix</p>
      </section>
    </footer>
  );
}

export default Footer;
