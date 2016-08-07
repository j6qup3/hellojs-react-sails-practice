class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {value: this.props.name};
  }
  update() {
    $.get('/user/update/' + this.props.id + '?name=' + this.state.value, this.props.callback);
  }
  delete() {
    $.get('/user/destroy?id=' + this.props.id, this.props.callback);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  render() {
    return (
      <div>
        <span>No.{this.props.id}</span> {this.props.name} <input type="text" value={this.state.value} onChange={ this.handleChange } />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.update} className="btn btn-success">更新</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={this.delete} className="btn btn-danger">刪除</button>
      </div>
    );
  }
}

module.exports = UserItem;
