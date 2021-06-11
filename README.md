

# Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Publishing to package manager was done using instructions [here](https://www.codementor.io/@peterodekwo/create-a-simple-react-npm-package-in-simple-steps-using-cra-w966okagi)


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

## Installing this component

In the project directory, you can run:

### `npm install react-quotes-slider`