import React from "react";
import { NewLeadButton } from "../Common";

function HealthPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">אודותינו</h1>
        <h2 className="subtitle">דורון ענק הביטוח </h2>
        <p>
          כל תושבי ישראל זכאים לסל שירותים בסיסי כמוגדר ב"חוק ביטוח בריאות
          ממלכתי". סל זה ניתן לכלל הציבור באמצעות קופות החולים, והוא ממומן בחלקו
          מתקציב המדינה, ובחלקו - מדמי ביטוח בריאות אותם גובה המוסד לביטוח
          לאומי.
        </p>
        <h4>רוצים לשמוע עוד על ביטוח זה?</h4>
        <NewLeadButton />
      </div>
    </section>
  );
}

export default HealthPage;
