import woman from "../../assets/images/young-woman-posing.png";
import mobile from "../../assets/images/mobile.png";
import mobi from "../../assets/images/mobi.PNG";
import useCountDown from "../../common/CountDown";

const TopProducts = () => {
  const time = useCountDown("Aug 9, 2024 23:00:00");

  return (
    <div className="md:px-20 pb-20 bg-white">
      <h1 className="py-20 text-2xl md:text-6xl font-bold text-center">
        Our top products
      </h1>
      <div className="gap-2 grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-3 bg-[rgb(229,145,160)] rounded-xl">
          <div className="flex py-4">
            <div>
              <img src={woman} alt="woman" className="max-h-[558px]" />
            </div>
            <div className="flex flex-col justify-center items-center gap-y-5">
              <p className="text-2xl md:text-4xl font-bold text-white">Video</p>
              <p className="text-2xl md:text-4xl  text-white">Feel of sound</p>
              <button className="bg-white py-4  px-4 rounded-lg">
                Browse Products
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-[#67a1d2] rounded-xl">
          <div className="flex flex-col items-center justify-between h-[556px] pt-8">
            <div className="flex flex-col justify-center items-center gap-y-5">
              <p className="text-2xl md:text-4xl font-bold text-white">
                Denos T12
              </p>
              <p className="text-2xl md:text-4xl  text-white">
                Small and powerfull
              </p>
              <button className="bg-gray-900 text-white py-2 px-4 rounded-lg">
                Browse Products
              </button>
            </div>
            <div>
              <img src={mobile} alt="mobile" className="max-h-[558px]" />
            </div>
          </div>
        </div>
        <div className="col-span-4 rounded-xl bg-cover"
          style={{ backgroundImage: ` url(${mobi})` }}
        >
          <div className="flex flex-col justify-end h-[450px] items-center gap-y-5">
            <p className="text-2xl md:text-4xl font-bold ">Denos T12</p>
            <p className="text-2xl md:text-4xl">Small and powerfull</p>
            <button className="bg-gray-900 text-white py-2 px-4 rounded-lg">
              Browse Products
            </button>
          </div>
        </div>
        <div className="col-span-2 bg-black text-white rounded-xl py-20 px-4">
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-3xl md:text-6xl font-bold text-white text-center">
              Ending soon
            </h1>
            <h3 className="text-xl text-white text-center">
              Remaining time for special deal products. Hurry up!
            </h3>
            <p className="text-3xl lg:text-6xl font-bold text-blue-400 text-center">
              {time}
            </p>
            <button className="bg-gray-100 text-slate-800 py-2 px-4 rounded-lg">
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
