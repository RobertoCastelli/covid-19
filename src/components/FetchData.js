import React from "react";
import useFetch from "./useFetch";
import TemplateData from "./TemplateData";
import CountUp from "react-countup";
import { FaSkullCrossbones } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { RiVirusFill } from "react-icons/ri";

const FetchData = () => {
  //--> MIT License 2020, mathdroid
  const url = `https://covid19.mathdro.id/api/`;
  const { confirmed, deaths, recovered, isLoading, error } = useFetch(url);

  return (
    <div>
      <ul>
        <li className="confirmed-wrapper">
          <TemplateData
            title="CONFIRMED"
            icon={<RiVirusFill size={20} />}
            type={
              confirmed && (
                <div>
                  <CountUp
                    start={0}
                    end={confirmed}
                    duration={2}
                    separator={","}
                  />
                </div>
              )
            }
            isLoading={isLoading && <p>is loading...</p>}
            error={error && <p>Something went wrong...</p>}
          />
        </li>
        <li className="deaths-wrapper">
          <TemplateData
            title="DEATHS"
            icon={<FaSkullCrossbones size={20} />}
            type={
              deaths && (
                <div>
                  <CountUp
                    start={0}
                    end={deaths}
                    duration={2}
                    separator={","}
                  />
                </div>
              )
            }
            isLoading={isLoading && <p>is loading...</p>}
            error={error && <p>Something went wrong...</p>}
          />
        </li>
        <li className="recovered-wrapper">
          <TemplateData
            title="RECOVERED"
            icon={<RiMentalHealthLine size={20} />}
            type={
              recovered && (
                <div>
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={2}
                    separator={","}
                  />
                </div>
              )
            }
            isLoading={isLoading && <p>is loading...</p>}
            error={error && <p>Something went wrong...</p>}
          />
        </li>
      </ul>
    </div>
  );
};

export default FetchData;
