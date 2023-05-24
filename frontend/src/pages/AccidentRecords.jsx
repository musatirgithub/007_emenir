import { useEffect } from "react";
import { useSelector } from "react-redux";
import useApiCalls from "../hooks/useApiCalls";

const AccidentRecords = () => {
  const { getRecordAndMediator } = useApiCalls();
  const { record, mediator } = useSelector((state) => state.incident);
  useEffect(() => {
    getRecordAndMediator();
  }, []);
  console.log(record);
  console.log(mediator);
  return <div>AccidentRecords</div>;
};

export default AccidentRecords;
