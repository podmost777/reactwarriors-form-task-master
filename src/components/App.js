import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";
import Steps from "./Steps";
import Field from "./Field";
import Avatar from "./Avatar";
import Finish from "./Finish";
import Buttons from "./Buttons";
import defaultAvatar from "../img/default-avatar.png";


export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      firstname : "",
      lastname : "",
      password : "",
      repeatPassword : "",
      country : "1",
      city : "",
      gender : "male",
      agree : true,
      avatar : "",
      age : 16,
      email : "",
      mobile : "",
      currentStep : 0,
      errors : {
        // firstname : "",
        // password : "",
        // repeatPassword : "",
        // city : "",
        // email : "",
        // mobile : "",
        // avatar : ""
      },
      steps : [
        { active : true,
          completed : false,
          name : 'Basic'
        },
        { active : false,
          completed : false,
          name : 'Contacts' 
        },
        { active : false,
          completed : false,
          name : 'Avatar' 
        },
        { active : false,
          completed : false,
          name : 'Finish' 
        }
      ]
    };
  };

  onChange = (event) => {
    const errors = this.state.errors;
    errors[event.target.name] = "";
    this.setState({
      [event.target.name] : event.target.value,
      errors : errors
    })
  };

  onChangeAvatar = (event) => {
    const reader = new FileReader();
    const errors = this.state.errors;
    errors.avatar = "";
    reader.onload = event => {
      this.setState({
        avatar : event.target.result,
        errors : errors
      });
    };

    reader.readAsDataURL(event.target.files[0]);
    
  };

  setAvatar = () => {

    if (this.state.avatar) {
      return this.state.avatar;
    }
    return defaultAvatar;
  }
  
  onNext = () => {

    const errors = {};
    const steps = this.state.steps;

    if (this.state.firstname.length < 5) {
      errors.firstname = "Must be 5 characters or more";
    } 
    if (this.state.lastname.length < 5) {
      errors.lastname = "Must be 5 characters or more";
    } 
    
    if (this.state.password.length < 6) {
      errors.password = "Must be 6 characters or more";
    }

    if (this.state.password !== this.state.repeatPassword) {
      errors.repeatPassword = "Must be equal password";
    }

    if (this.state.currentStep === 1) {
      if (this.state.city === "" ||
          this.state.city === "Select city") {

        errors.city = "Required";
      }

      if (!this.state.email ||
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)) {
        
          errors.email = "Invalid email address";
      }

      if (this.state.mobile.length !== 10 ||
          (isNaN(this.state.mobile / 1))) {

        errors.mobile = "Invalid mobile";
      }
    }

    if (this.state.currentStep === 2 && 
        !this.state.avatar) {
      errors.avatar = "Required";
    }

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors : errors
      });
    } else {

      const current = this.state.currentStep;
      steps[current].completed = true;
      steps[current].active = false;
      steps[current + 1].active = true;
      

      this.setState((state) => ({
        errors : {},
        currentStep : state.currentStep + 1,
        steps : steps
        
      }), () => {
        console.log("state", this.state);

      });
    }

  };

  onPrevious = () => {
    const steps = this.state.steps;
    const current = this.state.currentStep;

    steps[current].active = false;
    steps[current].completed = false;
    steps[current - 1].active = true;
    steps[current - 1].completed = false;

    this.setState((state) => ({
      currentStep : state.currentStep - 1,
      steps : steps
    }),() => {
      console.log("state", this.state);
    }
  )};
  
  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

   getCities = items => {
    const city = [];
    for (let key in items) {
    
       if (items[key].country === +this.state.country) {
         city.push(
         <option key={+key} value={items[key].name}>
           {items[key].name}
         </option>)
     }
    }
    return city;
  }

  onReset = () => {
    console.log("State", this.state);
    
  }

  getLocation = items => {
    for (const item in items) {
      if (items[item].id === +this.state.country) {
        return items[item].name;
      }
    }
  }
 
  render() {
    return (
      <div className="form-container card">    
        <form className="form card-body">
            <Steps 
             name={this.state.steps[this.state.currentStep].name}
             active={this.state.steps[this.state.currentStep].active} 
             completedBasic={this.state.steps[0].completed}
             completedContacts={this.state.steps[1].completed}
             completedAvatar={this.state.steps[2].completed}
             completedFinish={this.state.steps[3].completed}
            />
          {this.state.currentStep === 0 ? (
          <div>
            <Field 
              id="firstname"
              LabelText="Firstname"
              type="text"
              placeholder="Enter firstname"
              name="firstname"
              value={this.state.firstname}
              onChange={this.onChange}
              error={this.state.errors.firstname}
            />
            <Field 
              id="lastname"
              LabelText="Lastname"
              type="text"
              placeholder="Enter lastname"
              name="lastname"
              value={this.state.lastname}
              onChange={this.onChange}
              error={this.state.errors.lastname}
            />
            <Field 
              id="password"
              LabelText="Password"
              type="password"
              placeholder="Enter password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
              error={this.state.errors.password}
            />
            <Field 
              id="repeatPassword"
              LabelText="Repeat password"
              type="password"
              placeholder="Enter repeat password"
              name="repeatPassword"
              value={this.state.repeatPassword}
              onChange={this.onChange}
              error={this.state.errors.repeatPassword}
            /> 
            <fieldset className="form-group">
              <div>Gender</div>
              <div className="form-check">
                <input 
                  className="form-check-input"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={this.state.gender === "male"}
                  onChange={this.onChange}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={this.state.gender === "female"}
                  onChange={this.onChange}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </fieldset>
          </div>) : null }
          <div>
            {this.state.currentStep === 1 ? (
              <div>
              <Field 
                id="email"
                LabelText="Email"
                type="text"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                error={this.state.errors.email}
              />
              <Field 
                id="mobile"
                LabelText="Mobile"
                type="text"
                placeholder="Enter mobile"
                name="mobile"
                value={this.state.mobile}
                onChange={this.onChange}
                error={this.state.errors.mobile}
              />
              <div className="form-group"> 
                <label htmlFor="country">Country</label>
                <select 
                className="form-control" 
                id="country"
                name="country"
                value={this.state.country}
                onChange={this.onChange}
                >
                {this.getOptionsItems(countries)}
                </select>
              </div>
              <div className="form-group"> 
                <label htmlFor="city">City</label>
                <select 
                  className={this.state.errors.city ? "form-control invalid" : "form-control"} 
                  id="city"
                  name="city"
                  value={this.state.city}
                  onChange={this.onChange}
                >
                <option>
                  Select city
                </option>
                {this.getCities(cities)}
                </select>
                {this.state.errors.city ? (
              <div className="invalid-feedback">
                {this.state.errors.city}
              </div>
              ) : null}
              </div>
          </div>
              ) : null }
          </div>
          <div>
            {this.state.currentStep === 2 ? (
              <Avatar 
                setAvatar={this.setAvatar()}
                onChangeAvatar={this.onChangeAvatar}
                error={this.state.errors.avatar}
              />
            ) : null}
         </div> 
         {this.state.currentStep === 3 ? (
          <Finish 
            avatar={this.state.avatar}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            email={this.state.email}
            mobile={this.state.mobile}
            country={this.getLocation(countries)}
            city={this.state.city}
            onReset={this.onReset}
          />
         ) : (
          <Buttons 
            onPrevious={this.onPrevious}
            currentStep={this.state.currentStep}
            onNext={this.onNext}
          />
          )}
        </form>
      </div>
    );
  }
}
