import React from "react";
import useFetch from "./useFetch";
import TemplateData from "./TemplateData";
import CountUp from "react-countup";

const FetchData = () => {
  //--> MIT License 2020, mathdroid
  const url = "https://covid19.mathdro.id/api";
  const { confirmed, deaths, recovered, isLoading, error } = useFetch(url);

  return (
    <div>
      <TemplateData
        title="CONFIRMED"
        type={
          confirmed && (
            <p>
              <CountUp start={0} end={confirmed} duration={2} separator={","} />
            </p>
          )
        }
        isLoading={isLoading && <p>is loading...</p>}
        error={error && <p>Something went wrong...</p>}
      />
      <TemplateData
        title="DEATHS"
        type={
          deaths && (
            <p>
              <CountUp start={0} end={deaths} duration={2} separator={","} />
            </p>
          )
        }
        isLoading={isLoading && <p>is loading...</p>}
        error={error && <p>Something went wrong...</p>}
      />
      <TemplateData
        title="RECOVERED"
        type={
          recovered && (
            <p>
              <CountUp start={0} end={recovered} duration={2} separator={","} />
            </p>
          )
        }
        isLoading={isLoading && <p>is loading...</p>}
        error={error && <p>Something went wrong...</p>}
      />
    </div>
  );
};

export default FetchData;
