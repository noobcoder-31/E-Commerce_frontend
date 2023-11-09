import callImage from "./../../images/call.png";
import mailImage from "./../../images/mail.png";
import bagImage from "./../../images/shopping.jpg";
import facebookImage from "./../../images/facebook.png";
import twitterImage from "./../../images/twitter.png";
import instaImage from "./../../images/insta.png";
import facebook2Image from "./../../images/facebook2.png";
import twitter2Image from "./../../images/twitter2.png";
import insta2Image from "./../../images/insta2.png";
import linkedinImage from "./../../images/linkedin.png";
import linkedin2Image from "./../../images/linkedin2.png";

export default function Footer() {
  return (
    <>
      <div className="border p-4 rounded-lg mt-40">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mx-4 md:mx-20 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
              Contact us for Any Queries
            </h1>
            <div className="w-20 h-1 bg-black my-4 mx-auto md:mx-0" />
            <p className="text-sm sm:text-base md:text-lg mt-4">
              If you have any questions or need assistance, feel free to reach
              out to us. Our dedicated support team is available to help you
              with any queries you may have. Contact us now and experience
              unmatched customer service.
            </p>
            <div className="mt-6 md:mt-10">
              <div className="flex items-center">
                <img
                  src={callImage}
                  alt="Call"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                />
                <span className="ml-2 sm:ml-4 md:ml-6 text-base sm:text-lg">
                  +91 70000 91234
                </span>
              </div>
              <div className="flex items-center mt-2 sm:mt-4 md:mt-6">
                <img
                  src={mailImage}
                  alt="Mail"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                />
                <span className="ml-2 sm:ml-4 md:ml-6 text-base sm:text-lg">
                  karan301910@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-1/2 mx-4 md:mx-20">
            <img
              src={bagImage}
              alt="Bag"
              className="w-full h-auto md:w-80 md:h-80"
            />
          </div>
        </div>
      </div>
      <div className="bg-black mx-auto md:my-20 my-10 h-px w-2/3"></div>
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-lg md:text-xl">Follow Us On</h1>
        <div className="flex justify-center items-center space-x-4 my-4">
          <div>
            <a href="https://instagram.com">
              <img
                src={instaImage}
                className="hidden md:block transition-opacity hover:opacity-70"
                alt="Insta for larger screens"
              />
              <img
                src={insta2Image}
                className="md:hidden transition-opacity hover:opacity-70"
                alt="Insta2 for smaller screens"
              />
            </a>
          </div>
          <div>
            <a href="https://twitter.com">
              <img
                src={twitterImage}
                className="hidden md:block transition-opacity hover:opacity-70"
                alt="Twitter for larger screens"
              />
              <img
                src={twitter2Image}
                className="md:hidden transition-opacity hover:opacity-70"
                alt="Twitter2 for smaller screens"
              />
            </a>
          </div>
          <div>
            <a href="https://facebook.com">
              <img
                src={facebookImage}
                className="hidden md:block transition-opacity hover:opacity-70"
                alt="Facebook for larger screens"
              />
              <img
                src={facebook2Image}
                className="md:hidden transition-opacity hover:opacity-70"
                alt="Facebook2 for smaller screens"
              />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/raj-karan-singh-tomar-a2a376236/">
              <img
                src={linkedinImage}
                className="hidden md:block transition-opacity hover:opacity-70"
                alt="Facebook for larger screens"
              />
              <img
                src={linkedin2Image}
                className="md:hidden transition-opacity hover:opacity-70"
                alt="Facebook2 for smaller screens"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black text-white flex flex-col  justify-center">
        <h2 className="text-xl sm:text-3xl md:text-4xl pt-10 font-medium">
          SHOPIFY
        </h2>
        <p className="text-xs sm:text-base md:text-lg mt-4 px-5 py-5">
          We are a leading online store offering a wide range of products. Shop
          with us to enjoy a seamless and convenient shopping experience.
          Discover the best deals, get fast and reliable delivery, and
          experience excellent customer service.{" "}
        </p>
        <span className="text-gray-500 pb-10">Shopify.io</span>
      </div>
    </>
  );
}
