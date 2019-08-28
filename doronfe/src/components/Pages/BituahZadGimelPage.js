import React from "react";
import { NewLeadButton } from "../Common";

function BituahZadGimelPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">ביטוח צד ג'</h1>
        <h2 className="subtitle">אודות ביטוח זה</h2>
        <p>
          ביטוח צד ג' מבטיח את הכיסוי לנזקי רכוש שיגרמו לצד ג' ( צד שלישי ) בלבד
          עקב פגיעת הרכב המבוטח. <br /> ניתן לרכוש ביטוח צד ג' לרכבים בכל שנות
          היצור הכוללים כיסויים נרחבים באמצעות גשר איכות ביטוחים ד.פ אשר לא ניתן
          למצוא באף מקום
        </p>
        <h3 className="subtitle">החוק בישראל </h3>
        <p>
          ביטוח צד ג' מהווה כיסוי לנזקים שנגרמו לרכושו של אדם אחר.
          <br />
          בעלי כלי רכב ישן או בעל ערך נמוך בוחרים לעיתים לרכוש גם ביטוח צד ג׳
          בנוסף לחובה.
          <br />
        </p>
        <h4>רוצים לשמוע עוד על ביטוח זה?</h4>
        <NewLeadButton />
      </div>
    </section>
  );
}

export default BituahZadGimelPage;
