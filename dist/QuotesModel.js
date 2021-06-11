class QuotesModel {
  constructor() {
    this.quotes = [];
  } // Main entry point


  async parse(url) {
    let response = await fetch(url);

    if (response !== undefined) {
      this.quotes = await response.json();
    }
  }

}

export default QuotesModel;