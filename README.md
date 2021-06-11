

# Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Publishing to package manager was done using instructions [here](https://medium.com/@revanth0212/how-to-create-and-publish-react-components-using-the-create-react-app-9d60583c2161)


## To use this component

**Prerequisites:** You need to have Node + NPM installed.

```jsx
import React from "react";
import QuotesSlider from "react-quotes-slider";

export default function MyQuotesSlider() {
  return (
    <QuotesSlider
      interval=ANIMATION_INTERVAL_IN_MSECS
      quotesfileurl="PATH_TO_JSON_WITH_QUOTES"
    />
  );
}
```

quotesfileurl is a mandatory property. Default for interval is 5000.

quotesfileurl is a json file in a publicly accessible location (http path). An example is below.
```json
[ 
    {
        "quote": "I can shake off everything as I write; my sorrows disappear, my courage is reborn.",
        "author": "Anne Frank"
    },
     {
        "quote": "Attention is the rarest and purest form of generosity.",
        "author": "Simone Weil"
    }
]
```

To style the slider, update the following styles in your app similar to the example shown below:

```
.carousel .control-prev.control-arrow {
  left: 0; }
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid #000; }
.carousel .control-next.control-arrow {
  right: 0; }
  .carousel .control-next.control-arrow:before {
    border-left: 8px solid #000; }

div.quoteSlider {  
  background-color: #fff;
  border-bottom-width: thin;
  border-bottom-color: black;
  border-style: solid;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  font-weight: bold;
  color: black;
}
```

## Installing this component

In the project directory, you can run:

### `npm install react-quotes-slider`