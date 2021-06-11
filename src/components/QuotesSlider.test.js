import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import QuotesSlider from "./QuotesSlider";


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("example json prop", async () => {
    const fakeResponse = [{ "author": "John Doe", "quote":"blah"}, {"author":"foo", "quote": "bar" }];

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse)
      };
      return Promise.resolve(fetchResponse);
    });
    await act(async () => {
        render(<QuotesSlider />, container);
      });
      
    expect(window.fetch).toHaveBeenCalledTimes(1);

    const carousel = container.querySelectorAll(`[class*="quoteSlider"]`);
    expect(carousel.length).toBe(1);

    const quotes = container.querySelectorAll('blockquote');
    expect(quotes.length).toBe(4); // each item is contained once as selected and once as not selected

    expect(container.textContent).toContain("John Doe");
  });
  
  
test("no json", async () => {

    jest.spyOn(window, "fetch").mockImplementation(() => {
      return undefined;
    });
    await act(async () => {
        render(<QuotesSlider />, container);
      });
      
    expect(window.fetch).toHaveBeenCalledTimes(1);

    const carousel = container.querySelectorAll(`[class*="quoteSlider"]`);
    expect(carousel.length).toBe(0);
  });
  
  