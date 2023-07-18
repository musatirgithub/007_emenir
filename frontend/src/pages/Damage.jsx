import React from "react";
import car_crash from "../pics/car_crash.jpg";
import warning_triangle from "../pics/warning_triangle.jpg";
import woman_money from "../pics/woman_money.jpg";
import report from "../pics/report.jpg";
import law_office from "../pics/law_office.jpg";

const Damage = () => {
  return (
    <main className="bg-[#000000]/[0.8] p-[1rem] text-[#FFF]/[0.7] text-[1.3rem]">
      <section>
        <div className="lg:flex lg:justify-evenly lg:items-center lg:gap-[1rem]">
          <div className="my-[1rem] lg:w-[45%]">
            <h1 className="font-playfair text-center text-[#C19461]">
              Araç Değer Kaybı Nedir?
            </h1>
          </div>
          <div className="my-[1rem] lg:w-[45%]">
            <img src={car_crash} alt="car crash" className="mx-auto" />
          </div>
        </div>
        <div className="my-[1rem] lg:flex lg:flex-row-reverse lg:justify-evenly lg:items-center lg:gap-[1rem]">
          <div className="lg:w-[45%]">
            <p className="my-[1rem] mx-auto max-w-[40rem]">
              Araç değer kaybı, kazalı aracın (parçaları daha yenisi veya
              orjinali ile değişse dahi) kazadan önceki değerine nazaran mali
              bir kayıp yaşanması nedeniyle ortaya çıkan bir tazminat türüdür.
            </p>
            <p className="my-[1rem] mx-auto max-w-[40rem]">
              Buna göre, daha az kusurlu veya kusursuz taraf, bir zararın
              tazmini talebini yöneltmektedir.
            </p>
          </div>
          <img
            src={warning_triangle}
            alt="warning sign"
            className="my-[1rem] mx-auto"
          />
        </div>
      </section>
      <section>
        <h1 className="font-playfair text-center text-[#C19461] my-[1rem]">
          Hangi Durumlarda Talep Edilebilir?
        </h1>
        <div className="lg:flex lg:flex-row-reverse lg:justify-evenly lg:items-center">
          <img
            src={report}
            alt="request"
            className="my-[1rem] mx-auto lg:w-[45%]"
          />

          <div className="my-[1rem] lg:w-[45%]">
            <ul className="list-disc list-inside my-[1rem] mx-auto max-w-[40rem]">
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
        </div>
      </section>
      <section>
        <h1 className="font-playfair text-center text-[#C19461] my-[1rem]">
          Tazminat Süreci Aşamaları Nelerdir?
        </h1>
        <div className="lg:flex lg:justify-evenly lg:items-center">
          <img
            src={woman_money}
            alt="compansation"
            className="my-[1rem] mx-auto lg:w-[45%]"
          />

          <div className="lg:w-[45%]">
            <ul className="list-disc list-inside my-[1rem] mx-auto max-w-[40rem]">
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
        </div>
      </section>
      <section>
        <h1 className="font-playfair text-center text-[#C19461] my-[1rem]">
          Neden Emenir Hukuk Bürosu?
        </h1>
        <div className="lg:flex lg:flex-row-reverse lg:justify-evenly lg:items-center">
          <img
            src={law_office}
            alt="law office"
            className="my-[1rem] mx-auto lg:w-[45%]"
          />

          <div className="lg:w-[45%]">
            <ul className="list-disc list-inside my-[1rem] mx-auto max-w-[40rem]">
              <p className="my-[1rem] mx-auto">Çünkü;</p>
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
        </div>
      </section>
    </main>
  );
};

export default Damage;
