import FooterItems from "./FooterItems";
import foot1 from "../../assets/images/foot1.webp";
import foot2 from "../../assets/images/foot-2.webp";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-20">
      <div className="grid md:grid-cols-4 sm:grid-cols-2">
        <FooterItems
          title={"Useful links"}
          items={[
            "Contact us",
            "Help & About us",
            "Shipping & Returns",
            "Refund Policy",
            "Press Room",
            "Privacy Policy",
          ]}
        />

        <FooterItems
          title={"Customer service"}
          items={[
            "Dashboard",
            "Orders",
            "Downloads",
            "Addresses",
            "Account details",
            "Lost password",
          ]}
        />

        <FooterItems
          title={"BUSINESS"}
          items={[
            "Sell on Shopio",
            "Advertise on Shopio",
            "Media Enquiries",
            "Be an Afflliate",
            "Deal of the Day",
          ]}
        />

        <div className="mt-5">
          <h3 className="font-bold text-lg mb-3">Payment methods</h3>
          <p className="text-gray-400 text-base">
            Curabitur interdum. Proin consectetuer ut, more information.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <img src={foot1} alt="" />
            <img src={foot2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
