import React from "react";
import GoogleSuggest from "./Locationsearch";
//import { Field, reduxForm } from "redux-form";

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehiclename: "",
      numberofseats: 0,
      gender: "male",
      startingFrom: "",
      destination: "",
      dateandtime: ""
    };
  }
  sendData() {
    this.setState({
      vehiclename: this.state.vehiclename,
      numberofseats: this.state.numberofseats,
      dateandtime: this.state.dateandtime,
      startingFrom: this.state.startingFrom,
      destination: this.state.destination
    });

    let resultdata = {
      vehiclename: this.state.vehiclename
    };
    fetch("google.com", {
      method: "POST",
      body: JSON.stringify(resultdata)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      });
  }

  render() {
    //const { handleSubmit, pristine, reset, submitting } = props;
    return (
      <div>
        <h1>register</h1>
        <form className="myregistration">
          <div className="form-details">
            <label>Vehicle Name</label>
            <div>
              <input
                name="vehicleName"
                component="input"
                type="text"
                value={this.state.vehiclename}
                placeholder="Vehicle Name"
              />
            </div>
          </div>
          <div>
            <label>No Of Seats</label>
            <div>
              <input
                name="noOfSeats"
                component="input"
                min="1"
                max="4"
                type="number"
                value={this.state.numberofseats}
                placeholder="number of Seats"
              />
            </div>
          </div>

          <div>
            <label>Gender</label>
            <div>
              <label>
                <input name="sex" component="input" type="radio" value="male" />
                Male
              </label>
              <label>
                <input
                  name="sex"
                  component="input"
                  type="radio"
                  value="female"
                />{" "}
                Female
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="">Starting from</label>
            <div>
              <GoogleSuggest />
            </div>
          </div>

          <div>
            <label htmlFor="employed">Destination</label>
            <div>
              <GoogleSuggest />
            </div>
          </div>
          <div>
            <label htmlFor="employed">Date and Time</label>
            <div>
              <input
                type="datetime-local"
                id="party-time"
                name="date-time"
                min="2018-06-07T00:00"
                max="2018-06-14T00:00"
                value={this.state.dateandtime}
              />
            </div>
          </div>

          <div>
            <label>Additional information</label>
            <div>
              <textarea name="notes" component="textarea" />
            </div>
          </div>
          <input
            type="submit"
            value="submit"
            className="reg-submit"
            onClick={() => this.sendData()}
          />
        </form>
      </div>
    );
  }
}

export default RegisterComponent;
