import React, { useState } from "react";
import { LeadForm } from "../Forms";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

function LeadPage() {
  const [errors, setErrors] = useState({});
  const [isRedirect, setIsRedirect] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    mailAddress: "",
    selectedInsurances: []
  });

  function handleInputChange({ target }) {
    setUserDetails({ ...userDetails, [target.name]: target.value });
  }

  // Created this function because the React-Select package does deliver "normal" event object to handleChange
  // So we need to treat it properly.
  function handleMultiSelectChange(event) {
    if (event === null) return;
    let selectedInsurances = [];
    for (let index = 0; index < event.length; index++) {
      let item = event[index];
      selectedInsurances = selectedInsurances.concat(item.value);
    }
    setUserDetails({
      ...userDetails,
      selectedInsurances: selectedInsurances
    });
  }

  function formIsValid() {
    const _errors = {};

    if (userDetails.firstName.length < 2) {
      _errors.firstName = "שם זה קצר מידי.";
    }

    if (userDetails.lastName.length < 2) {
      _errors.lastName = "שם זה קצר מידי.";
    }

    if (
      userDetails.phoneNumber.length < 9 ||
      userDetails.phoneNumber.length > 10
    ) {
      _errors.phoneNumber = "נא הזן מספר טלפון בין 9 ל-10 ספרות בלבד.";
    }

    if (userDetails.mailAddress.length < 9) {
      _errors.mailAddress = "מייל זה קצר מידי.";
    }

    if (userDetails.selectedInsurances.length < 1) {
      _errors.selectedInsurances = "נא הוסף לפחות סוג ביטוח אחד.";
    }

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    console.log(userDetails);
    toast.success("פרטיך התקבלו בהצלחה, נחזור אליך בהקדם.");
    // setIsRedirect(true);
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">קבלת הצעת מחיר</h1>
        <p>הזינו את פרטיכם ונחזור אליכם בהקדם: </p>
        <LeadForm
          errors={errors}
          userDetails={userDetails}
          onInputChange={handleInputChange}
          onMultiSelectChange={handleMultiSelectChange}
          onFormSubmit={handleFormSubmit}
        />
      </div>
      {isRedirect && <Redirect to="/" />}
    </section>
  );
}

export default LeadPage;
