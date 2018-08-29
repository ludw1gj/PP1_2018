import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import PfpInput from './PfpInput';

class RegistrationForm1 extends Component {
  state = {
    regions: [],
    locales: []
  };

  async componentDidMount() {
    // this.getRegionsList();
    // this.getLocalesList();
  }

  async getRegionsList() {
    const response = await axios.get('/api/regions');
    this.setState({ regions: response.data });
  }

  async getLocalesList() {
    const response = await axios.get('/api/locales');
    this.setState({ locales: response.data });
  }

  renderRegions() {
    const regionItems = this.state.regions.map(region => {
      return <option value={region.id}>{region.region}</option>;
    });
    return regionItems;
  }

  renderLocales() {
    const localeItems = this.state.locales.map(locale => {
      return <option value={locale.id}>{locale.locale}</option>;
    });
    return localeItems;
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit}>
          <div className="sign">
            <h1>Sign Up</h1>
          </div>
          <div className="Form">
            <Field name="pfp" component={PfpInput} />
            <label>Display Name: </label>
            <Field
              name="displayName"
              component="input"
              placeholder="display name"
            />

            <label>Region: </label>

            <select>{this.renderRegions()}</select>

            <label>Language: </label>

            <select>{this.renderLocales()}</select>

            <label>Age: </label>

            <select>
              <option value="18-20">18-20</option>
              <option value="21-25">21-25</option>
              <option value="26-30">26-30</option>
              <option value="31-35">31-35</option>
              <option value="36+">36+</option>
            </select>
            <div>
              <Field
                name="playstyle"
                component="input"
                type="radio"
                value="casual"
              />
              <label>Casual</label>

              <Field
                name="playstyle"
                component="input"
                type="radio"
                value="competitive"
              />
              <label>Competitive</label>
            </div>

            <label>Bio: </label>

            <Field component="textarea" placeholder="Biography" name="bio" />
            <div className="next">
              <button type="submit">Next page</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

let registrationForm1 = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegistrationForm1);
registrationForm1 = connect(mapStateToProps)(registrationForm1);
export default registrationForm1;