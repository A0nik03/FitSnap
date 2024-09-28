import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const formData = [
    { placeHolder: "Name Of GYM" },
    { placeHolder: "Location" },
    { placeHolder: "Your Name" },
    { placeHolder: "Contact" },
    { placeHolder: "Email" },
  ];

  const company = {
    name: "FitSnap",
    description:
      "Be the first to test the first AI personal trainer, ever! Keep up to date with the launch, new workouts and further details by joining our mailing list.",
  };

  const contact = {
    address: "Etiam consequat sem ullamcorper, euismodmetus sit",
    phone: "+91 0000000000",
  };

  const links = [
    { text: "About us", url: "#" },
    { text: "Terms & Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
    { text: "Community Guidelines", url: "#" },
  ];

  const socialMedia = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedin />, link: "#" },
  ];

  const downloadLinks = {
    android: "#",
    ios: "#",
  };

  return (
    <div className="w-full min-h-screen bg-black px-10">
      {/* Contact Section */}
      <div className="Contact w-full h-auto mt-20 flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] flex flex-col justify-center p-8">
          <h1 className="font-semibold text-[40px] leading-[48.74px] text-white">
            WANT TO INSTALL FITSNAP AI CAMERA IN YOUR GYM? PLEASE SUBMIT YOUR
            DETAILS BELOW.
          </h1>
          <p className="w-[80%] font-semibold text-2xl text-white mt-10">
            Want to install FitSnap AI Camera in your GYM? Please submit your
            details below.
          </p>
        </div>

        {/* Form Section */}
        <div className="Form w-full md:w-[50%] p-8">
          <form>
            {formData.map((element, index) => (
              <div key={index} className="mb-8">
                <input
                  className="w-full text-white text-2xl font-medium bg-black placeholder-white p-2 focus:border-none focus:outline-none"
                  type="text"
                  placeholder={element.placeHolder}
                  aria-label={element.placeHolder} // Accessibility improvement
                />
                <hr className="bg-white h-[1px] w-full my-10" />
              </div>
            ))}
            <button className="rounded-full px-4 py-3 bg-white text-black font-medium text-xl hover:bg-gray-200 transition duration-300">
              Contact Us
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-black text-white py-10 px-5 mt-20 mb-28">
        <div className="flex items-center justify-between gap-10">
          <div className="flex flex-col items-start gap-6">
            <div className="w-[201.38px] h-10">
              <img
                src="/logo.png"
                className="object-cover w-full h-full"
                alt=""
              />
            </div>
            <div className="h-[148px] w-[492px]">
              <h2 className="text-5xl font-semibold">{`Get ${company.name}`}</h2>
              <p className="my-4 text-[16px] font-normal">
                {company.description}
              </p>
            </div>
            <div className="flex space-x-4">
              {socialMedia.map((media, index) => (
                <a
                  key={index}
                  href={media.link}
                  className="text-white text-2xl hover:text-gray-400"
                >
                  {media.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-16 mt-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-semibold">Download the app</h3>
              <p>
                <a
                  href={downloadLinks.android}
                  className="text-2xl font-normal text-white"
                >
                  Android - Google Play Store
                </a>
              </p>
              <p>
                <a
                  href={downloadLinks.ios}
                  className="text-2xl font-normal text-white"
                >
                  iOS - Apple App Store
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">Contact</h3>
              <p className="text-2xl font-normal">{contact.address}</p>
              <p className="text-2xl font-normal">{contact.phone}</p>
            </div>
          </div>
          <div className="mb-28">
            <h3 className="text-2xl font-semibold mb-4">Company</h3>
            {links.map((link, index) => (
              <p key={index}>
                <a href={link.url} className="text-white text-2xl font-normal">
                  {link.text}
                </a>
              </p>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
