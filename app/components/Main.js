var React = require("react");

var Results = require("./children/Results");
var Saved = require("./children/Saved");
var Search = require("./children/Search");
var helpers = require("./utils/helpers");

var Main = React.createClass({

  getInitialState: function() {
    return { searchTerm: "", results: "", saved: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getHistory().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    // Run the query for the address
    helpers.runQuery(this.state.searchTerm).then(function(data) {
      if (data !== this.state.results) {
        console.log("Address", data);
        this.setState({ results: data });

        // // After we've received the result... then post the search term to our history.
        // helpers.postHistory(this.state.searchTerm).then(function() {
        //   console.log("Updated!");

        //   // After we've done the post... then get the updated history
        //   helpers.getHistory().then(function(response) {
        //     console.log("Current History", response.data);

        //     console.log("History", response.data);

        //     this.setState({ saved: response.data });

        //   }.bind(this));
        // }.bind(this));
      }
    }.bind(this));
  },
  // This function allows childrens to update the parent.
  setTerm: function(term, startDate, endDate) {
    this.setState({ searchTerm: term,
                    startDate: startDate,
                    endDate: endDate
                  });
  },
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Scrubber</h2>
            <p className="text-center">
              <em>Search through the New York Times' archives of articles, and save the ones you want!</em>
            </p>
          </div>

          <div className="col-md-6">

            <Search setTerm={this.setTerm} />

          </div>

          <div className="col-md-6">

            <Results address={this.state.results} />

          </div>

        </div>

        <div className="row">

          <Saved saved={this.state.saved} />

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
