import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { connect } from 'react-redux';

import { getViewUser } from '../redux/actions/viewUser';

import DocumentTitle from '../components/DocumentTitle';
import ProfileCard from '../components/ProfileCard';

class Profile extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const { getViewUser, viewUser, user } = this.props;
    if (viewUser === null) {
      await getViewUser(user.id);
    }
    this.setState({ loading: false });
  }

  render = () => {
    return (
      <div>
        <DocumentTitle>Profile</DocumentTitle>
        <div className="banner">
          <h1 className="text-center">Your Profile</h1>
          <p>
            View your profile details and your answers to our questionnaire.
          </p>
        </div>

        {this.state.loading ? (
          <div className="d-flex justify-content-center">
            <ReactLoading type={'bubbles'} color="yellow" />
          </div>
        ) : (
          <div className="Profile container">
            <div className="profile-details">
              <ProfileCard user={this.props.viewUser} />
            </div>
          </div>
        )}
      </div>
    );
  };
}

const mapStateToProps = ({ user, viewUser }) => ({ user, viewUser });
export default connect(
  mapStateToProps,
  { getViewUser }
)(Profile);
