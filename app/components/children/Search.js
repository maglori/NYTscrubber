var React = require("react");
var Search = React.createClass({
  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "",
             startDate: "",
             endDate: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({ term: event.target.value });

  },

handleStart: function(event){
  this.setState({  startDate: event.target.value });
},

handleEnd: function(event){
  this.setState({  endDate: event.target.value});
},

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term, this.state.startDate, this.state.endDate);
    this.setState({ term: "",
                    startDate: "",
                    endDate: "" 
                  });
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Search Term</strong>
              </h4>
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                onChange={this.handleChange}
                required
              />
              <br />
              <h4 className="">
                <strong>Start Date</strong>
              </h4>
              <input
                value={this.state.startDate}
                type="text"
                className="form-control text-center"
                id="startDate"
                onChange={this.handleStart}
                required
              />
              <br />
              <h4 className="">
                <strong>End Date</strong>
              </h4>
              <input
                value={this.state.endDate}
                type="text"
                className="form-control text-center"
                id="endDate"
                onChange={this.handleEnd}
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Search;