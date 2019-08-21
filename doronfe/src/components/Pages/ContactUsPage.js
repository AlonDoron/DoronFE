import React, { useState } from "react";
import { ContactUsForm } from "../Forms";

function ContactUsPage() {
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    mailAddress: "",
    requestSubject: ""
  });

  function getSplittedNames() {
    let splittedFirstName = userDetails.fullName
      .split(" ")
      .slice(0, 1)
      .join(" ");
    let splittedLastName = userDetails.fullName
      .split(" ")
      .slice(1)
      .join(" ");
    return [splittedFirstName, splittedLastName];
  }

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
    if (userDetails.requestSubject.length < 3) {
      _errors.requestSubject = "נא פרט יותר לגבי נושא פניה זה.";
    }
    if (userDetails.mailAddress.length < 9) {
      _errors.mailAddress = "נא הזן מייל בעל יותר מ9 תווים.";
    }
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    debugger;
    if (!formIsValid()) return;
    let [firstName, lastName] = getSplittedNames();
    setUserDetails({
      ...userDetails,
      firstName: firstName,
      lastName: lastName
    });
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">צרו איתנו קשר</h1>
        <h2 className="subtitle is-size-5">
          יש לכם שאלה? רוצים לקבל מידע נוסף?
        </h2>
        <p>הזינו את פרטיכם ונחזור אליכם בהקדם: </p>
        <ContactUsForm
          errors={errors}
          userDetails={userDetails}
          onInputChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
        />
      </div>
    </section>
  );
}

export default ContactUsPage;
