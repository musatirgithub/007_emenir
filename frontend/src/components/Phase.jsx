import { dateConvertor } from "../helper/dateCoverter";
import { phaseConverter } from "../helper/phaseConverter";

const Phase = ({ asama }) => {
  return (
    <section className="flex py-[1rem]">
      <div className="flex items-center">
        <div
          className={`${
            asama >= 1
              ? "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#C19461] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem]"
              : "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#000]/[0.3] rounded-full text-center lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem]"
          }`}
        >
          1
          <span
            className={`${
              asama == 1
                ? "absolute top-[2rem] left-[2rem] text-[1rem] w-[10rem] translate-x-[-50%] leading-[1.2rem] lg:top-[3rem] lg:left-[1rem]"
                : "hidden"
            }`}
          >
            {phaseConverter(asama)}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className={`${
            asama >= 2
              ? "w-[2.5rem] h-[0.3rem] bg-[#C19461] lg:w-[10rem]"
              : "w-[2.5rem] h-[0.3rem] bg-[#000]/[0.3] lg:w-[10rem]"
          }`}
        ></div>
        <div
          className={`${
            asama >= 2
              ? "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#C19461] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem]"
              : "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#000]/[0.3] rounded-full text-center lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem]"
          }`}
        >
          2
          <span
            className={`${
              asama == 2
                ? "absolute top-[2rem] left-[1rem] text-[1rem] w-[10rem] translate-x-[-50%] leading-[1.2rem] lg:top-[3rem] lg:left-[1rem]"
                : "hidden"
            }`}
          >
            {phaseConverter(asama)}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className={`${
            asama >= 3
              ? "w-[2.5rem] h-[0.3rem] bg-[#C19461] lg:w-[10rem]"
              : "w-[2.5rem] h-[0.3rem] bg-[#000]/[0.3] lg:w-[10rem]"
          }`}
        ></div>
        <div
          className={`${
            asama >= 3
              ? "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#C19461] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem]"
              : "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#000]/[0.3] rounded-full text-center lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem]"
          }`}
        >
          3
          <span
            className={`${
              asama == 3
                ? "absolute top-[2rem] left-[1rem] text-[1rem] w-[10rem] translate-x-[-50%] leading-[1.2rem] lg:top-[3rem] lg:left-[1rem]"
                : "hidden"
            }`}
          >
            {phaseConverter(asama)}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className={`${
            asama >= 4
              ? "w-[2.5rem] h-[0.3rem] bg-[#C19461] lg:w-[10rem]"
              : "w-[2.5rem] h-[0.3rem] bg-[#000]/[0.3] lg:w-[10rem]"
          }`}
        ></div>
        <div
          className={`${
            asama >= 4
              ? "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#C19461] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem]"
              : "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#000]/[0.3] rounded-full text-center lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem]"
          }`}
        >
          4
          <span
            className={`${
              asama == 4
                ? "absolute top-[2rem] left-[1rem] text-[1rem] w-[10rem] translate-x-[-50%] leading-[1.2rem] lg:top-[3rem] lg:left-[1rem]"
                : "hidden"
            }`}
          >
            {phaseConverter(asama)}
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className={`${
            asama >= 5
              ? "w-[2.5rem] h-[0.3rem] bg-[#C19461] lg:w-[10rem]"
              : "w-[2.5rem] h-[0.3rem] bg-[#000]/[0.3] lg:w-[10rem]"
          }`}
        ></div>
        <div
          className={`${
            asama >= 5
              ? "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#C19461] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem]"
              : "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#000]/[0.3] rounded-full text-center lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem]"
          }`}
        >
          5
          <span
            className={`${
              asama == 5
                ? "absolute top-[2rem] left-[0.8rem] text-[1rem] w-[8rem] translate-x-[-50%] leading-[1.2rem] lg:top-[3rem] lg:left-[1rem]"
                : "hidden"
            }`}
          >
            {phaseConverter(asama)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Phase;
