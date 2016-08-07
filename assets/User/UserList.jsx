var UserItem = require('./UserItem');

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {
          this.props.users.map((user, index) => <UserItem callback={this.props.callback} key={index} id={user.id} name={user.name}/>)
        }
      </div>
    );
  }
}

module.exports = UserList;
