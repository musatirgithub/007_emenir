import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useApiCalls from "../hooks/useApiCalls";
import AraciKayitlar from "../components/AraciKayitlar";

const AccidentRecords = () => {
  const { getRecordAndMediator } = useApiCalls();
  const { record, mediator } = useSelector((state) => state.incident);
  const { email, isAdmin } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecordAndMediator();
    setLoading(false);
  }, []);
  console.log(record);
  console.log(mediator);
  console.log(email, isAdmin);
  console.log(record?.araci?.email);
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <main>
      {record == null ? (
        <h1>Kayıt Bulunamadı</h1>
      ) : isAdmin ? (
        <h1>Aracı Olduğunuz Kayıtlar Aşağıdadır</h1>
      ) : (
        <h1>Kayıtlarınız Aşağıdadır</h1>
      )}
      {/* {record?.map((item, index) => (
        <div key={index}>
          <p>Araç Plakası: {item.arac.plaka}</p>
          <p>
            Araç Sahibi: {item.user.first_name} {item.user.last_name}{" "}
            {item.user.username}
          </p>
        </div>
      ))} */}
      {record !== null && isAdmin && <AraciKayitlar record={record} />}
    </main>
  );
};

export default AccidentRecords;
