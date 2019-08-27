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
    insuranceType: ""
  });

  function handleInputChange({ target }) {
    setUserDetails({ ...userDetails, [target.name]: target.value });
  }

  function formIsValid() {
    const _errors = {};
    if (userDetails.fullName.length < 2) {
      _errors.fullName = "שם זה קצר מידי.";
    }
    if (
      userDetails.phoneNumber.length < 9 ||
      userDetails.phoneNumber.length > 10
    ) {
      _errors.phoneNumber = "נא הזן מספר טלפון בין 9 ל-10 ספרות בלבד.";
    }
    if (userDetails.mailAddress.length < 9) {
      _errors.mailAddress = "נא הזן מייל בעל יותר מ9 תווים.";
    }
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setUserDetails({
      ...userDetails
    });
    toast.success("פרטיך התקבלו בהצלחה, נחזור אליך בהקדם.");
    setIsRedirect(true);
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
          onFormSubmit={handleFormSubmit}
        />
        {isRedirect && <Redirect to="/" />}
      </div>
    </section>
  );
}

export default LeadPage;
