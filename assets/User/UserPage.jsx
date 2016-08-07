require('vendor/bootstrap.scss');
require('User/User.scss');

var UserAddBox = require('./UserAddBox');
var UserList = require('./UserList');

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    $.get('/user', (list) => {
      this.setState({
        users: list
      });
    });
  }
  componentWillMount() {
    this.handleChange();
  }
  render() {
    return (
      <div className="middle">
        <h1>87 User Page</h1>
        <h4>- 記錄你的 87 人生 -</h4>
        <hr/>
        <UserList callback={this.handleChange} users={this.state.users}/>
        <hr/>
        <br/>
        <UserAddBox callback={this.handleChange}/>
      </div>
    );
  }
}

module.exports = UserPage;
