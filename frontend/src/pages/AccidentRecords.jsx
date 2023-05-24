import { useEffect } from "react";
import { useSelector } from "react-redux";
import useApiCalls from "../hooks/useApiCalls";

const AccidentRecords = () => {
  const { getRecordAndMediator } = useApiCalls();
  const { record, mediator } = useSelector((state) => state.incident);
  const { email, is_staff } = useSelector((state) => state.auth);
  useEffect(() => {
    getRecordAndMediator();
  }, []);
  console.log(record);
  console.log(mediator);
  console.log(email, is_staff);
  return <div>AccidentRecords</div>;
};

export default AccidentRecords;
