import { useEffect } from "react";
import { useSelector } from "react-redux";
import useApiCalls from "../hooks/useApiCalls";
import AraciKayitlar from "../components/AraciKayitlar";
import MusteriKayitlar from "../components/MusteriKayitlar";
import PatronKayitlar from "../components/PatronKayitlar";

const AccidentRecords = () => {
  const { getRecordAndMediator } = useApiCalls();
  const { record, loading } = useSelector((state) => state.incident);
  const { email, isAdmin, isSuperUser} = useSelector((state) => state.auth);

  useEffect(() => {
    getRecordAndMediator();
  }, []);

  if (loading) {
    return <section className="min-h-[calc(100vh-8rem)] text-[2rem] flex justify-center items-center "><div>...Yükleniyor</div></section>;
  }
  if (record?.length === 0 || record === null) {
    if (isAdmin) {
      return (
        <article className="min-h-[calc(100vh-8rem)] bg-[#000]/[0.05] flex justify-center items-center">
          <h1 className="text-[#000]/[0.8] text-center text-[1.3rem] lg:text-[2rem]">
            Aracı Olduğunuz Kayıt Bulunmamaktadir.
          </h1>
        </article>
      );
    } else {
      return (
        <article className="min-h-[calc(100vh-8rem)] bg-[#000]/[0.05] flex justify-center items-center">
          <h1 className="text-[#000]/[0.8] text-center text-[1.3rem] lg:text-[2rem]">
            Adınıza Açılan Kaza Kaydı Bulunmamaktadır.
          </h1>
        </article>
      );
    }
  }
  if(isSuperUser){
    return <PatronKayitlar record={record}/> 
  }
  if (isAdmin || record[0]?.user.email !== email) {
    return <AraciKayitlar record={record} />;
  }
  if (!isAdmin) {
    return <MusteriKayitlar record={record} />;
  }
};

export default AccidentRecords;
