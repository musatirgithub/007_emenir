import { useSelector } from "react-redux";
import { dateConvertor } from "../helper/dateCoverter";
import { phaseConverter } from "../helper/phaseConverter";
import Phase from "./Phase";

const MusteriKayitlar = ({ record }) => {
  const { email: userEmail } = useSelector((state) => state.auth);
  const {
    arac: { marka, model, plaka, yil },
    user: { first_name, last_name },
    kaza_tarihi,
    asama_tarihi,
    asama,
    tahmini_deger_kaybi,
  } = record[0];
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-[#000]/[0.05] flex flex-col justify-center items-center text-[1rem] lg:text-[1.5rem] font-semibold">
      <h1 className="text-[#000]/[0.9] text-center text-[1.3rem] py-[1rem] lg:text-[2rem] ">
        Aracınıza Ait Hasar Kaydı Asağıdadır
      </h1>
      <article className="px-2 bg-zinc-900 py-[1rem] text-[#FFF]/[0.7] font-normal w-[22rem] lg:w-[55rem] lg:px-6">
        <div className="flex">
          <h2 className="w-[40%] text-[#C19461]">Arac Sahibi</h2>
          <h2 className=" capitalize">{`: ${first_name} ${last_name}`}</h2>
        </div>
        <div className="flex">
          <h2 className="w-[40%] text-[#C19461]">Arac Plakasi</h2>
          <h2 className=" capitalize">{`: ${plaka}`}</h2>
        </div>
        <div className="flex">
          <h2 className="w-[40%] text-[#C19461]">Marka Model</h2>
          <h2 className=" capitalize">{`: ${yil} model, ${marka} ${model}`}</h2>
        </div>
        <div className="flex">
          <h2 className="w-[40%] text-[#C19461]">Kaza Tarihi</h2>
          <h2 className=" capitalize">{`: ${dateConvertor(kaza_tarihi)}`}</h2>
        </div>
        <div className="flex">
          <h2 className="w-[40%] text-[#C19461]">Tahmini Deger Kaybi</h2>
          <h2 className=" capitalize">: {tahmini_deger_kaybi}</h2>
        </div>
        <div className="flex">
          <h2 className="w-[40%] text-[#C19461]">Asama Tarihi</h2>
          <h2 className=" capitalize">: {dateConvertor(asama_tarihi)}</h2>
        </div>
      </article>
      <h2 className="pt-[0.5rem]">Mevcut Asama</h2>
      <Phase asama={asama} />
    </section>
  );
};

export default MusteriKayitlar;
