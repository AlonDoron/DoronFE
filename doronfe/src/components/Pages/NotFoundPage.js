import React from "react";
import { Link } from "react-router-dom";
import { NewLeadButton } from "../Common";

function NotFoundPage() {
  return (
    <div>
      <h1 className="title">נראה שהגעתם לדף הזה בטעות!</h1>
      <h2>
        <Link to="/">אולי כדאי לכם לחזור לדף הבית</Link>
      </h2>
      <p>
        <h4> או שאתם מעוניינים לשמוע על הביטוחים הזולים בשיראל?</h4>
        <NewLeadButton />
      </p>
    </div>
  );
}

export default NotFoundPage;
