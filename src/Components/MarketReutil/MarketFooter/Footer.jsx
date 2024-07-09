//Import library
import { LOCALS_FOOTER } from './locals_footer';

//Destructuring for better read in the code
const { FOOTER, IMAGES } = LOCALS_FOOTER;
function Footer() {
  return (
    <footer>
      <div className="flex-row bg-[#073912] p-10 lg:flex justify-between">
        <div className="">
          <h1 className="text-white font-bold text-2xl mb-5">
            {FOOTER.footerAboutOurApp}
          </h1>
          <p className="text-white font-semibold">
            {FOOTER.footerDescriptionApp}
          </p>
          <div className="flex justify-center gap-10 m-5 lg:justify-start">
            <a href="https://www.apple.com/app-store/">
              <img className="h-[45px]" src={IMAGES.apple} alt="apple" />
            </a>
            <a href="https://play.google.com/store">
              <img className="h-[45px]" src={IMAGES.google} alt="google" />
            </a>
          </div>
        </div>

        <div className="sm:grid grid-cols-2 gap-4 md:flex justify-between">
          <div className="lg:mr-10">
            <h2 className="text-white font-bold text-xl mb-3 mt-10">
              {FOOTER.footerGetConnected}
            </h2>
            <ul>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.footerBlog}</li>
              </a>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.footerPricing}</li>
              </a>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.footerWhyXpressM}?</li>
              </a>
            </ul>
          </div>
          <div className="lg:mr-10">
            <h2 className="text-white font-bold text-xl mb-3 mt-10">{FOOTER.footerSupport}</h2>
            <ul>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.footerStore}</li>
              </a>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.footerCommunity}</li>
              </a>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.footerHelpCenter}</li>
              </a>
            </ul>
          </div>
          <div className="lg:mr-10">
            <h2 className="text-white font-bold text-xl mb-3 mt-10">{FOOTER.footerCompany}</h2>
            <ul>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.Jobs}</li>
              </a>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.Partnerships}</li>
              </a>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.footerPoliticsPrivaci}</li>
              </a>
            </ul>
          </div>
          <div className="lg:mr-10">
            <h2 className="text-white font-bold text-xl mb-3 mt-10">{FOOTER.footerSocialMedia}</h2>
            <ul>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.footerSocialMediaX}</li>
              </a>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.footerSocialMediaFacebook}</li>
              </a>
              <a
                className="text-white font-semibold hover:text-zinc-400"
                href="#"
              >
                <li>{FOOTER.footerSocialMediaInstagram}</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-500"></div>
      <div className=" bg-[#073912] p-5 lg:flex items-center justify-around">
        <p className="text-white font-semibold">
        {FOOTER.footerReservedRight}
        </p>

        <div className="flex-row sm:flex justify-center gap-5">
          <img
            className="h-[60px] mt-5 my-5"
            src={IMAGES.masterCard}
            alt="IMAGES.masterCard"
          />
          <img
            className="h-[60px] mt-5 my-5"
            src={IMAGES.masterCard}
            alt="IMAGES.masterCard"
          />
          <img
            className="h-[60px] mt-5 my-5"
            src={IMAGES.masterCard}
            alt="IMAGES.masterCard"
          />
          <img
            className="h-[60px] mt-5 my-5"
            src={IMAGES.masterCard}
            alt="IMAGES.masterCard"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
