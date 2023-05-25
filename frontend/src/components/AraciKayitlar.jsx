import { useSelector } from "react-redux";

const AraciKayitlar = ({ record }) => {
  const { email: userEmail } = useSelector((state) => state.auth);
  return (
    <section>
      {record
        ?.filter((item) => item.araci.email === userEmail)
        ?.map((item, index) => (
          <div key={index}>
            <p>Araç Plakası: {item.arac.plaka}</p>
            <p>
              Araç Sahibi: {item.user.first_name} {item.user.last_name}
            </p>
          </div>
        ))}
    </section>
  );
};

export default AraciKayitlar;
