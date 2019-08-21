import React, { useState } from "react";
import { ContactUsForm } from "../Forms";

function ContactUsPage() {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    mailAddress: "",
    requestSubject: ""
  });

  function handleInputChange({ target }) {
    setUserDetails({ ...userDetails, [target.name]: target.value });
  }

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

  function handleFormSubmit(event) {
    event.preventDefault();
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
          userDetails={userDetails}
          onInputChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
        />
      </div>
    </section>
  );
}

export default ContactUsPage;
