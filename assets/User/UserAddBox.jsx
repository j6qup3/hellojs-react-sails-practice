class UserAddBox extends React.Component {
  constructor(props) {
    super(props);
    this.rand = this.rand.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.create = this.create.bind(this);
    this.state = {value: this.rand()};
  }
  rand() {
	  return Math.random().toString(36).substring(10);
  }
  create() {
    $.get('/user/create?name=' + this.state.value, this.props.callback);
    this.setState({
      value: Math.random().toString(36).substring(10)
    });
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return (
      <div>
        <input type="text" value={ this.state.value } onChange={ this.handleChange } />
        <br/>
        <br/>
        <button onClick={this.create} className="btn btn-primary">新增一個 87 用戶</button>
      </div>
    );
  }
}

module.exports = UserAddBox;
