import { dateConvertor } from "../helper/dateCoverter";
import { phaseConverter } from "../helper/phaseConverter";

const Phase = ({ asama }) => {
  return (
    <section className="flex pt-[1rem] pb-[3rem]">
      <div className="flex items-center">
        <div
          className={`${
            asama >= 1
              ? "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#C19461] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem] group"
              : "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#000]/[0.3] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem] group"
          }`}
        >
          1
          <span
            className={`${
              asama == 1
                ? "absolute top-[2rem] left-[2rem] p-[0.2rem] text-[1rem] w-[10rem] translate-x-[-50%] leading-[1.2rem] lg:top-[3rem] lg:left-[1rem]"
                : "hidden p-[0.2rem] group-hover:absolute group-hover:top-[2rem] group-hover:left-[2rem] group-hover:text-[1rem] group-hover:z-10 group-hover:bg-[#F2F2F2] group-hover:bg-opacity-100  group-hover:w-[10rem] group-hover:translate-x-[-50%] group-hover:leading-[1.2rem] group-hover:block group-hover:lg:top-[3rem] group-hover:lg:left-[1rem]"
            }`}
          >
            {phaseConverter(1)}
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
              ? "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#C19461] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem] group"
              : "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#000]/[0.3] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem] group"
          }`}
        >
          2
          <span
            className={`${
              asama == 2
              ? "absolute top-[2rem] left-[2rem] p-[0.2rem] text-[1rem] w-[10rem] translate-x-[-50%] leading-[1.2rem] lg:top-[3rem] lg:left-[1rem]"
              : "hidden p-[0.2rem] group-hover:absolute group-hover:top-[2rem] group-hover:left-[2rem] group-hover:text-[1rem] group-hover:z-10 group-hover:bg-[#F2F2F2] group-hover:bg-opacity-100  group-hover:w-[10rem] group-hover:translate-x-[-50%] group-hover:leading-[1.2rem] group-hover:block group-hover:lg:top-[3rem] group-hover:lg:left-[1rem]"
            }`}
          >
            {phaseConverter(2)}
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
              ? "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#C19461] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem] group"
              : "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#000]/[0.3] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem] group"
          }`}
        >
          3
          <span
            className={`${
              asama == 3
              ? "absolute top-[2rem] left-[2rem] p-[0.2rem] text-[1rem] w-[10rem] translate-x-[-50%] leading-[1.2rem] lg:top-[3rem] lg:left-[1rem]"
              : "hidden p-[0.2rem] group-hover:absolute group-hover:top-[2rem] group-hover:left-[2rem] group-hover:text-[1rem] group-hover:z-10 group-hover:bg-[#F2F2F2] group-hover:bg-opacity-100  group-hover:w-[10rem] group-hover:translate-x-[-50%] group-hover:leading-[1.2rem] group-hover:block group-hover:lg:top-[3rem] group-hover:lg:left-[1rem]"
            }`}
          >
            {phaseConverter(3)}
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
              ? "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#C19461] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem] group"
              : "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#000]/[0.3] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem] group"
          }`}
        >
          4
          <span
            className={`${
              asama == 4
              ? "absolute top-[2rem] left-[2rem] p-[0.2rem] text-[1rem] w-[10rem] translate-x-[-50%] leading-[1.2rem] lg:top-[3rem] lg:left-[1rem]"
              : "hidden p-[0.2rem] group-hover:absolute group-hover:top-[2rem] group-hover:left-[2rem] group-hover:text-[1rem] group-hover:z-10 group-hover:bg-[#F2F2F2] group-hover:bg-opacity-100  group-hover:w-[10rem] group-hover:translate-x-[-50%] group-hover:leading-[1.2rem] group-hover:block group-hover:lg:top-[3rem] group-hover:lg:left-[1rem]"
            }`}
          >
            {phaseConverter(4)}
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
              ? "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#C19461] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem] group"
              : "w-[1.5rem] h-[1.5rem] leading-[1.5rem] bg-[#000]/[0.3] rounded-full text-center relative lg:w-[3rem] lg:h-[3rem] lg:leading-[3rem] group"
          }`}
        >
          5
          <span
            className={`${
              asama == 5
              ? "absolute top-[2rem] left-[2rem] p-[0.2rem] text-[1rem] w-[10rem] translate-x-[-50%] leading-[1.2rem] lg:top-[3rem] lg:left-[1rem]"
              : "hidden p-[0.2rem] group-hover:absolute group-hover:top-[2rem] group-hover:left-[2rem] group-hover:text-[1rem] group-hover:z-10 group-hover:bg-[#F2F2F2] group-hover:bg-opacity-100  group-hover:w-[10rem] group-hover:translate-x-[-50%] group-hover:leading-[1.2rem] group-hover:block group-hover:lg:top-[3rem] group-hover:lg:left-[1rem]"
            }`}
          >
            {phaseConverter(5)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Phase;
