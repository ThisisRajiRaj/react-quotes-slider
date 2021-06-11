import React from "react";
import QuotesSliderImpl from "./QuotesSliderImpl";

function QuotesSlider(props) {
  return (
    <React.Fragment>
      <QuotesSliderImpl
          interval={props.interval}
          quotesfileurl={props.quotesfileurl}
        />
    </React.Fragment>
  );
}

export default QuotesSlider;
