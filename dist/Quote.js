import React from "react";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.quote = props.quote;
    this.author = props.author;
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      key: Math.random(),
      align: "center"
    }, /*#__PURE__*/React.createElement("blockquote", null, /*#__PURE__*/React.createElement("p", null, this.quote), /*#__PURE__*/React.createElement("p", null, "-- ", this.author)));
  }

}

export default Quote;