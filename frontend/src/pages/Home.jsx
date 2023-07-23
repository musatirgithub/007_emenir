import { style1 } from "../helper/homepageStyles";
import { FaCar } from "react-icons/fa";
import { FaBalanceScaleRight } from "react-icons/fa";
import { TbBuildingBank } from "react-icons/tb";
import { MdRoofing } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { TbUserQuestion } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import k1 from "../pics/k1.jpg"
import k2 from "../pics/k2.jpg"
import k3 from "../pics/k3.jpg"
import e1 from "../pics/e1.jpg"
import e2 from "../pics/e2.jpg"
import e3 from "../pics/e3.jpg"

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

      <section className="text-justify px-[1.5rem] bg-[#000]/[0.05] flex flex-col justify-center items-center py-[2rem]">
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
      </section>

      {/* Ekibimiz */}

    <section className="mx-auto bg-[#000]">
    <h1 className=" text-center  font-[100] pb-[1rem] text-[#E05260] text-[2.2rem] lg:text-[4rem]">Ekibimiz</h1>
    <article className="flex flex-wrap justify-center items-center gap-[1rem] p-[1rem] lg:p-[2rem]">

      <div className="border border-[#FFF] border-[0.1rem] w-[12rem] rounded transition-transform duration-500 hover:scale-[1.01]">
        <div>
          <img src={k1} alt="kurucu" className="object-cover w-[100%] h-[25rem]"/>
        </div>
        <div className="">
        <h2 className="text-[#FFF] text-center">Pelin Emenir</h2>
        <p className="text-[#FFF] text-center">Kurucu</p>
        </div>
      </div>

      <div className="border border-[#FFF] border-[0.1rem] w-[12rem] rounded transition-all duration-500 hover:scale-[1.01]">
        <div>
          <img src={e1} alt="kurucu" className="object-cover w-[100%] h-[25rem]"/>
        </div>
        <h2 className="text-[#FFF] text-center">Hasan Isbilir</h2>
        <p className="text-[#FFF] text-center">Kurucu</p>
      </div>

      <div className="border border-[#FFF] border-[0.1rem] w-[12rem] rounded transition-all duration-500 hover:scale-[1.01]">
        <div>
          <img src={k2} alt="ortak" className="object-cover w-[100%] h-[25rem]"/>
        </div>
        <h2 className="text-[#FFF] text-center">Emine Caliskan</h2>
        <p className="text-[#FFF] text-center">Ortak</p>
      </div>

      <div className="border border-[#FFF] border-[0.1rem] w-[12rem] rounded transition-all duration-500 hover:scale-[1.01]">
        <div>
          <img src={e2} alt="kurucu" className="object-cover w-[100%] h-[25rem]"/>
        </div>
        <h2 className="text-[#FFF] text-center">Mustafa Adaletli</h2>
        <p className="text-[#FFF] text-center">Avukat</p>
      </div>

      <div className="border border-[#FFF] border-[0.1rem] w-[12rem] rounded transition-all duration-500 hover:scale-[1.01]">
        <div>
          <img src={e3} alt="kurucu" className="object-cover w-[100%] h-[25rem]"/>
        </div>
        <h2 className="text-[#FFF] text-center">Emre Atik</h2>
        <p className="text-[#FFF] text-center">Avukat</p>
      </div>

      <div className="border border-[#FFF] border-[0.1rem] w-[12rem] rounded transition-all duration-500 hover:scale-[1.01]">
        <div>
          <img src={k3} alt="kurucu" className="object-cover w-[100%] h-[25rem]"/>
        </div>
        <h2 className="text-[#FFF] text-center">Nese Gulumser</h2>
        <p className="text-[#FFF] text-center">Stajyer</p>
      </div>
    </article>
    </section>
    {/* Iletisim */}
    <section className="text-justify px-[1.5rem] bg-[#000]/[0.05] py-[2rem]">
      <h1 className=" text-center  font-[100] pb-[1rem] text-[#E05260] text-[2.2rem] lg:text-[4rem]">Bize Ulaşın</h1>
      <article>
        <div>
        <FaPhoneAlt />
        <p>0 (312) 433 33 33</p>
        </div>
        <div>
        <ImLocation />
        <p>GMK Bulvari No:105/11</p>
              <p>06440 Cankaya/ANKARA</p>
        </div>
        <div>
        <MdEmail />
        <p>emenirhukuk@gmail.com</p>
        </div>
      </article>
      <article className="flex justify-center align-center my-[0.5rem]">
          <iframe
            title="emenir_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24475.566862696676!2d32.82572829781518!3d39.931415571521846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34efb3d41d359%3A0x466edc101cb7d967!2sAn%C4%B1ttepe%2C%20Gazi%20Mustafa%20Kemal%20Blv.%20No%3A105%2C%2006570%20%C3%87ankaya%2FAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1str!2sde!4v1689516982768!5m2!1str!2sde"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-[30rem] h-[16rem] border-solid border-[#681D24] border-[0.125rem] lg:w-[90%] lg:h-[20rem]"
          ></iframe>
        </article>
    </section>
    </main>
  );
};

export default Home;
