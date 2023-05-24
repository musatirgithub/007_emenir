import { useEffect } from "react";
import { useSelector } from "react-redux";
import useApiCalls from "../hooks/useApiCalls";

const AccidentRecords = () => {
  const { getRecordAndMediator } = useApiCalls();
  const { record, mediator } = useSelector((state) => state.incident);
  const { email, isAdmin } = useSelector((state) => state.auth);
  useEffect(() => {
    getRecordAndMediator();
  }, []);
  console.log(record);
  console.log(mediator);
  console.log(email, isAdmin);
  return (
    <main>
      {record == null ? (
        <h1>Kayıt Bulunamadı</h1>
      ) : isAdmin ? (
        <h1>Aracı Olduğunuz Kayıtlar Aşağıdadır</h1>
      ) : (
        <h1>Kayıtlarınız Aşağıdadır</h1>
      )}
    </main>
  );
};

export default AccidentRecords;
