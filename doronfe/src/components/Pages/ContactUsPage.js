import React, { useState } from "react";
import { ContactUsForm } from "../Forms";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { backendHandler } from "../../api/services/backendHandler";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import { SnifComponent } from "../Common";

function ContactUsPage() {
  const [errors, setErrors] = useState({});
  const [isRedirect, setIsRedirect] = useState(false);
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
    if (!formIsValid()) return;
    let [firstName, lastName] = getSplittedNames();
    setUserDetails({
      ...userDetails,
      firstName: firstName,
      lastName: lastName
    });

    backendHandler
      .post({ ...userDetails }, "contactus")
      .then(() => {
        toast.success("פרטיך התקבלו בהצלחה, נחזור אליך בהקדם.");
        setIsRedirect(true);
      })
      .catch(error => {
        toast.error(
          "נראה שקיבלנו שגיאה. פרטיך לא נקלטו. אנא נסה שנית מאוחר יותר."
        );
      });
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">צרו איתנו קשר</h1>
        <h2 className="subtitle is-size-5">
          יש לכם שאלה? רוצים לקבל מידע נוסף?
        </h2>
        <b>צרו איתנו קשר באחת מהדרכים הבאות:</b>
        <SnifComponent
          wayOfContact="בטלפון"
          href="tel: 035052323"
          hrefText="03-505-2323"
          icon={faPhone}
        />
        <SnifComponent
          wayOfContact="במייל"
          href="mailto: 303@5052323.co.il"
          hrefText="303@5052323.co.il"
          dir="ltr"
          icon={faEnvelope}
        />
        <SnifComponent
          wayOfContact="בסניפינו בכתובת"
          href="https://goo.gl/maps/aNWecYx25BwNninQ6"
          hrefText="סוקולוב 94, חולון"
          icon={faMapMarkerAlt}
        />
        <b>או לחלופין, הזינו את פרטיכם ונחזור אליכם בהקדם: </b> <br />
        <br />
        <ContactUsForm
          errors={errors}
          userDetails={userDetails}
          onInputChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
        />
      </div>
      {isRedirect && <Redirect to="/" />}
    </section>
  );
}

export default ContactUsPage;
