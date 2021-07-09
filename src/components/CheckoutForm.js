import React, { useState } from "react";
import useForm from '../hooks/useForm'

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  showSuccessMessage: false
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [values, setValues] = useState(initialValue);

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSuccessMessage(true);
  // };

  const { formData, handleInputChange, handleSubmit } = useForm(
    initialValue,
    (formData) => console.log(formData)
  )

  const { firstName, lastName, address, city, state, zip, showSuccessMessage } = formData

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={firstName}
            data-testid="firstName-input"
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            data-testid='lastName-input'
            type="text"
            value={lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            data-testid="address-input"
            type="text"
            value={address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City:
          <input name="city" data-testid="city-input" type="text" value={city} onChange={handleInputChange} />
        </label>
        <label>
          State:
          <input name="state" data-testid='state-input' type="text" value={state} onChange={handleInputChange} />
        </label>
        <label>
          Zip:
          <input name="zip" data-testid='zip-input' type='text' value={zip} onChange={handleInputChange} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {firstName} {lastName}
          </p>
          <p>{address}</p>
          <p>
            {city}, {state} {zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
