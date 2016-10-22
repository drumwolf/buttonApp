const Button = React.createClass({
  render() {
    return (<div className="button" data-index={this.props.index}></div>);
  }
});

const ButtonGrid = React.createClass({
  getSize() {
    var size = 0;
    if (this.props.count === 4) {
      size = 2;
    } else if (this.props.count > 4 && this.props.count <= 9) {
      size = 3;
    } else {
      size = 4;
    }
    console.log(size)
    return "size-" + size;
  },
  render() {
    var buttons = [];
    for (var i = 0; i < this.props.count; i++) {
       buttons.push(<Button key={i} index={i} />);
    }
    return (<div className={"button-grid " + this.getSize()}>{buttons}</div>);
  }
});

const ButtonsApp = React.createClass({
  getInitialState() {
    return { input: 0, count: 0 }
  },
  onFormChange(event) {
    var input = event.target.value;
    if (isNaN(input) || input > 20) {
      event.target.value = this.state.input;
    } else {
      this.setState({ input: input });
    }
  },
  onFormSubmit() {
    if (this.state.input > 20 || this.state.input < 4) {
      alert("You must enter an integer between 4 and 20.");
    } else {
      this.onFormProcess();
    }
  },
  onFormProcess() {
    this.setState({ count: parseInt(this.state.input) });
  },
  render() {
    return (
      <div>
        <input className="form-count" onChange={this.onFormChange} type="text" placeholder="count" />
        <button className="form-submit" onClick={this.onFormSubmit}>Go!</button>
        <ButtonGrid count={this.state.count} />
      </div>
    );
  }
});

ReactDOM.render(<ButtonsApp />, document.getElementById("button-app"));
