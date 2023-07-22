import React from "react";
import car_crash from "../pics/car_crash.jpg";
import warning_triangle from "../pics/warning_triangle.jpg";
import woman_money from "../pics/woman_money.jpg";
import report from "../pics/report.jpg";
import law_office from "../pics/law_office.jpg";

const Damage = () => {
  return (
    <main className="m-0 p-0 box-border bg-[#000]/[0.05] p-[1rem] text-[#000]/[0.8] text-[1rem] lg:text-[1.3rem]">
      <section>
        <div className="lg:flex lg:justify-evenly lg:items-center">
          <div className="lg:w-[50%]">
            <h1 className="text-center font-[100] text-[#E05260] text-[1.5rem] py-[0.8rem] lg:text-[3rem] lg:py-[0rem]">
              Araç Değer Kaybı Nedir?
            </h1>
          </div>
          <div className="px-[0.5rem] lg:w-[50%] lg:px-[0rem]">
            <img src={car_crash} alt="car crash" className="w-full lg:object-cover grayscale" />
          </div>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:justify-evenly lg:items-center">
          <div className="lg:w-[50%]">
            <p className="py-[1rem] px-[1rem] lg:px-[2rem]">
              Araç değer kaybı, kazalı aracın (parçaları daha yenisi veya
              orjinali ile değişse dahi) kazadan önceki değerine nazaran mali
              bir kayıp yaşanması nedeniyle ortaya çıkan bir tazminat türüdür.
            </p>
            <p className="py-[1rem] px-[1rem] lg:px-[2rem]">
              Buna göre, daha az kusurlu veya kusursuz taraf, bir zararın
              tazmini talebini yöneltmektedir.
            </p>
          </div>
          <div className="px-[0.5rem] lg:w-[50%] lg:px-[0rem]">
          <img
            src={warning_triangle}
            alt="warning sign"
            className="w-full lg:object-cover grayscale"
          />
          </div>
        </div>
      </section>
      <section>
        <div className="lg:flex lg:flex-row lg:justify-evenly lg:items-center">
        <div className="lg:w-[50%]">
          <h1 className="text-center font-[100] text-[#E05260] text-[1.5rem] px-[1rem] py-[0.8rem] lg:text-[3rem] lg:px-[2rem] lg:py-[0rem]">
          Hangi Durumlarda Talep Edilebilir?
        </h1>
            <ul className="list-disc list-inside py-[1rem] px-[1rem] lg:px-[2rem]">
              <li>Talepte bulunan sürücünün %100 kusurlu olmaması gerekir.</li>
              <li>
                Değer kaybı tazminatı kaza tarihinden itibaren 2 yıl içerisinde
                talep edilmelidir.
              </li>
              <li>
                Onarımı yapılan parçaların başka bir trafik kazasından sonra
                değiştirilmemiş veya daha önce onarımının yapılmamış olması
                gerekmektedir.
              </li>
              <li>
                Kaza sonrası aracın el değiştirmemiş olması gerekmektedir.
              </li>
            </ul>
          </div>
          <div className="px-[0.5rem] lg:w-[50%] lg:px-[0rem]">
          <img
            src={report}
            alt="request"
            className="w-full lg:object-cover grayscale"
          />
          </div>
        </div>
      </section>
      <section>
        <div className="lg:flex lg:flex-row-reverse lg:justify-evenly lg:items-center">
          <div className="lg:w-[50%]">
          <h1 className="text-center font-[100] text-[#E05260] text-[1.5rem] px-[1rem] py-[0.8rem] lg:text-[3rem] lg:px-[2rem] lg:py-[0rem]">
          Tazminat Süreci Aşamaları Nelerdir?
        </h1>
            <ul className="list-disc list-inside py-[1rem] px-[1rem] lg:px-[2rem]">
              <li>
                Büromuzun eksperleri tarafından değer kaybının belirlenmesi,
              </li>
              <li>
                Belirlenen değer kaybının ilgili sigorta şirketinden talep
                edilmesi,
              </li>
              <li>
                Sigorta şirketinin ödeme yapmaması veya gerçek değer kaybından
                düşük tazminat önermesi durumunda dosyanın Tahkim Komisyonuna
                taşınması,
              </li>
              <li>Tahkim Komisyonunda dosyanın ön incelemesinin yapılması,</li>
              <li>
                Dosyanın Tahkim Komisyonuna sevk edilmesi ve karar verilmesi.
              </li>
            </ul>
          </div>
          <div className="px-[0.5rem] lg:w-[50%] lg:px-[0rem]">
          <img
            src={woman_money}
            alt="compansation"
            className="w-full lg:object-cover grayscale"
          />
          </div>
        </div>
      </section>
      <section>
        <div className="lg:flex lg:justify-evenly lg:items-center">
          <div className="lg:w-[50%]">
          <h1 className="text-center font-[100] text-[#E05260] text-[1.5rem] px-[1rem] py-[0.8rem] lg:text-[3rem] lg:px-[2rem] lg:py-[0rem]">
          Neden Emenir Hukuk Bürosu?
        </h1>
            <ul className="list-disc list-inside py-[1rem] px-[1rem] lg:px-[2rem]">
              <p className="">Çünkü;</p>
              <li>
                Deneyimli eksperlerimiz sayesinde değer kaybını gerçekçi tespit
                ediyoruz,
              </li>
              <li>
                Müşterilerimizin en kısa sürede tazminatını alabilmesi için
                deneyimli bir ekiple hız odaklı çalışıyoruz,
              </li>
              <li>
                Müşterilerimizi dosyanın durumundaki her gelişmeden haberdar
                ediyoruz,
              </li>
              <li>
                Müşteri memnuniyetini büromuzun en önemli hedefi olarak
                görüyoruz.
              </li>
            </ul>
          </div>
          <div className="px-[0.5rem] lg:w-[50%] lg:px-[0rem]">
          <img
            src={law_office}
            alt="law office"
            className="w-full lg:object-cover grayscale"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Damage;
