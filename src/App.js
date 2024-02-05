// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India", streetAddress: "", city: "", state: "", postalCode: "", comments: false, candidates: false, offers: false, pushNotification: "",
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("Printing the value of form data")
    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>

        <label htmlFor="firstName"> First Name</label>
        <br />
        <input type="text" name="firstName" id='firstName' placeholder='Vaibhav' value={formData.firstName} onChange={changeHandler} />
        <br /> <br />

        <label htmlFor="lasttName"> Last Name</label>
        <br />
        <input type="text" name="lastName" id='lastName' placeholder='rathore' value={formData.lastName} onChange={changeHandler} />
        <br /> <br />

        <label htmlFor="email"> email</label>
        <br />
        <input type="text" name="email" id='email' placeholder='email' value={formData.email} onChange={changeHandler} />
        <br /> <br />

        <label htmlFor="country">Country</label>
        <select name="country" id="country" value={formData.country} onChange={changeHandler}>
          <option>India</option>
          <option>Canada</option>
          <option>USA</option>
          <option>Mexico</option>
        </select>

        <br /><br />

        <label htmlFor="streetAddress"> Street Address</label>
        <br />
        <input type="text" name="streetAddress" id='streetAddress' placeholder='streetAddress' value={formData.streetAddress} onChange={changeHandler} />
        <br /> <br />

        <label htmlFor="city"> city</label>
        <br />
        <input type="text" name="city" id='janjgir' placeholder='city' value={formData.city} onChange={changeHandler} />
        <br /> <br />

        <label htmlFor="state"> state</label>
        <br />
        <input type="text" name="state" id='state' placeholder='Chhattisgarh' value={formData.state} onChange={changeHandler} />
        <br /> <br />

        <label htmlFor="postalCode"> postalCode</label>
        <br />
        <input type="text" name="postalCode" id='postalCode' placeholder='495668' value={formData.postalCode} onChange={changeHandler} />
        <br /> <br />

        <fieldset>
          <legend>By Email</legend>

          <div>
            <input type="checkbox" id='comments' name='comments' checked={formData.comments} onChange={changeHandler} />

            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get Notification</p>
            </div>
          </div>

          <div>
            <input type="checkbox" id='offers' name='offers' checked={formData.offers} onChange={changeHandler} />

            <div>
              <label htmlFor="offers">offers</label>
              <p>Get Notification</p>
            </div>
          </div>

          <div>
            <input type="checkbox" id='candidates' name='candidates' checked={formData.candidates} onChange={changeHandler} />

            <div>
              <label htmlFor="candidates">candidates</label>
              <p>Get Notification</p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notification</legend>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, dolorum.</p>

          <input type="radio" name="pushNotification" id="pushEverything" value="Everything" onChange={changeHandler} />
          <label htmlFor="pushEverything">Everything</label>
          <br />
          <input type="radio" name="pushNotification" id="pushEmail" value="Same as email" onChange={changeHandler} />
          <label htmlFor="pushEverything">Same as email</label>
          <br />
          <input type="radio" name="pushNotification" id="pushNothing" value="No push notification" onChange={changeHandler} />
          <label htmlFor="pushEverything">No push notification</label>

          <button>Save</button>
        </fieldset>

        










      </form>
    </div>
  );
}

export default App;
