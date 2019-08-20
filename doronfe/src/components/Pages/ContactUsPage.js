import React, { useState } from "react";
import { ContactUsForm } from "../Forms";

function ContactUsPage() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    mailAddress: "",
    otherDetails: ""
  });

  function handleInputChange({ target }) {
    setUserDetails({ ...userDetails, [target.name]: target.value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
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
