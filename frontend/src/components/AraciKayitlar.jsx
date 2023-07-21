import { useSelector } from "react-redux";
import { dateConvertor } from "../helper/dateCoverter";
import { phaseConverter } from "../helper/phaseConverter";

const AraciKayitlar = ({ record }) => {
  const {
    first_name,
    last_name,
    email: userEmail,
  } = useSelector((state) => state.auth);

  return (
    <section className="min-h-[calc(100vh-8rem)] bg-[#FFF]/[0.05] text-[#FFF]/[0.8] flex flex-col justify-center items-center">
      <h1 className="text-[#000] text-center text-[1.3rem] py-[1rem] lg:text-[2rem] capitalize">
        {`${first_name} ${last_name} Aracı Olduğunuz Kayıtlar Asagıdadır`}
      </h1>
      <table className="mx-auto bg-zinc-900">
        <thead className="text-[#C19461]">
          <tr>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
              S.No:
            </th>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
            İsim
            </th>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
              Soyisim
            </th>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
              Plaka
            </th>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
              Marka
            </th>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
              Model
            </th>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
              Yıl
            </th>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
              Kaza Tarihi
            </th>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
              Aşama
            </th>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
              Aşama Tarihi
            </th>
            <th className="p-2 border-solid border-zinc-400 border-2 text-center font-normal">
              Tahmini Değer Kaybı
            </th>
          </tr>
        </thead>
        <tbody>
          {record
            ?.filter((item) => item.araci.email === userEmail)
            ?.map((item, index) => {
              const {
                arac: { marka, model, plaka, yil },
                user: { first_name, last_name },
                kaza_tarihi,
                asama_tarihi,
                asama,
                tahmini_deger_kaybi,
              } = item;
              return (
                <tr key={index}>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {index + 1}
                  </td>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {first_name}
                  </td>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {last_name}
                  </td>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {plaka}
                  </td>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {marka}
                  </td>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {model}
                  </td>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {yil}
                  </td>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {dateConvertor(kaza_tarihi)}
                  </td>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {phaseConverter(asama)}
                  </td>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {dateConvertor(asama_tarihi)}
                  </td>
                  <td className="p-1 capitalize border-solid border-zinc-400 border-2 font-normal">
                    {tahmini_deger_kaybi}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default AraciKayitlar;
