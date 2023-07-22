import { style1 } from "../helper/homepageStyles";
import { FaCar } from "react-icons/fa";
import { FaBalanceScaleRight } from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";
import { MdRoofing } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { TbUserQuestion } from "react-icons/tb";

const Home = () => {
  return (
    <main className="min-h-[calc(100vh-8rem)]">

      {/* parallax resim ve hukuk bürosu adi */}

      <div style={style1}>
        <h1 className="text-[#ad8557] text-[1.2rem] font-bold bg-[#000000]/[0.8] p-[1rem] rounded-[2rem] outline outline-offset-[0.4rem] outline-[0.2rem] outline-[#ad8557] lg:text-[2rem]">
          EMENİR <span className="text-[#c79e70]">HUKUK BÜROSU</span>
        </h1>
      </div>

      {/* Çalışma Alanlarımız */}

      <div className="text-justify px-[1.5rem] bg-[#000]/[0.05] flex flex-col justify-center items-center py-[2rem]">
        <h2 className=" text-center  font-[100] pb-[1rem] text-[#E05260] text-[2.2rem] lg:text-[4rem]">
        Çalışma Alanlarımız
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-[90%] md:w-[45%] lg:w-[30%] px-[1rem] lg:px-[2rem] py-[1rem]">
            <FaCar className="text-[2rem] mx-auto" />
            <h2 className="text-center text-[1.2rem] font-[500] py-[0.5rem]">
              Hasar Değer Kaybı
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              quidem. Cumque possimus officiis facere earum et quo, culpa,
              delectus modi voluptatibus, quod molestiae sed harum?
            </p>
          </div>
          <div className="w-[90%] md:w-[45%] lg:w-[30%] px-[1rem] lg:px-[2rem] py-[1rem]">
            <FaBalanceScaleRight className="text-[2rem] mx-auto" />
            <h2 className="text-center text-[1.2rem] font-[500] py-[0.5rem]">
              Ceza Hukuku
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              quidem. Cumque possimus officiis facere earum et quo, culpa,
              delectus modi voluptatibus, quod molestiae sed harum?
            </p>
          </div>
          <div className="w-[90%] md:w-[45%] lg:w-[30%] px-[1rem] lg:px-[2rem] py-[1rem]">
            <TbBuildingBank className="text-[2rem] mx-auto" />
            <h2 className="text-center text-[1.2rem] font-[500] py-[0.5rem]">
            İdare Hukuku
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              quidem. Cumque possimus officiis facere earum et quo, culpa,
              delectus modi voluptatibus, quod molestiae sed harum?
            </p>
          </div>
          <div className="w-[90%] md:w-[45%] lg:w-[30%] px-[1rem] lg:px-[2rem] py-[1rem]">
            <MdRoofing className="text-[2rem] mx-auto" />
            <h2 className="text-center text-[1.2rem] font-[500] py-[0.5rem]">
              Aile Hukuku
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              quidem. Cumque possimus officiis facere earum et quo, culpa,
              delectus modi voluptatibus, quod molestiae sed harum?
            </p>
          </div>
          <div className="w-[90%] md:w-[45%] lg:w-[30%] px-[1rem] lg:px-[2rem] py-[1rem]">
            <BsHouseFill className="text-[2rem] mx-auto" />
            <h2 className="text-center text-[1.2rem] font-[500] py-[0.5rem]">
              Gayrimenkul Hukuku
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              quidem. Cumque possimus officiis facere earum et quo, culpa,
              delectus modi voluptatibus, quod molestiae sed harum?
            </p>
          </div>
          <div className="w-[90%] md:w-[45%] lg:w-[30%] px-[1rem] lg:px-[2rem] py-[1rem]">
            <TbUserQuestion className="text-[2rem] mx-auto" />
            <h2 className="text-center text-[1.2rem] font-[500] py-[0.5rem]">
              Danışmanlık
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              quidem. Cumque possimus officiis facere earum et quo, culpa,
              delectus modi voluptatibus, quod molestiae sed harum?
            </p>
          </div>
        </div>
      </div>

      {/* Ekibimiz */}

    <section className="w-[90%] mx-auto bg-[#000]">
    <h1 className="text-[#FFF] text-center">Ekibimiz</h1>
    <article>
      <div className="border border-[#FFF] w-[10rem] rounded">
        <div>
          <img src="" alt="" />
        </div>
        <h2 className="text-[#FFF] text-center">Pelin Emenir</h2>
        <p className="text-[#FFF] text-center">Kurucu</p>
      </div>
    </article>
    </section>
    </main>
  );
};

export default Home;
