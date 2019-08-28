import React from "react";
import { NewLeadButton } from "../Common";

function BituachHovaPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">ביטוח חובה</h1>
        <h2 className="subtitle">אודות ביטוח זה</h2>
        <p>
          רבים מאיתנו חושבים שאין כמעט הבדלים בתשלום לביטוח חובה לרכב בין חברת
          ביטוח אחת לשנייה. זוהי טעות !! יש הבדלים עד מאות ש"ח בשנה בין חברה
          לחברה. יש חברות שביטוח החובה לצעירים יקר מאוד, ויש כאלו שהוא זול יותר.
          יש חברות שנותנות הנחה לנשים, וכאלו שרואים בהן אולי דווקא סיכון יתר.
        </p>
        <h3 className="subtitle">החוק בישראל </h3>
        <p>
          ביטוח חובה הוא הביטוח היחיד לרכב בו אנו מחויבים לפי חוקי המדינה.
          <br />
          זהו ביטוח המספק כיסוי ביטוחי לנהג, לנוסעים ברכב ולכל עוברי הדרך מפני
          נזקי גוף ונפש.
          <br />
        </p>
        <h4>רוצים לשמוע עוד על ביטוח זה?</h4>
        <NewLeadButton />
      </div>
    </section>
  );
}

export default BituachHovaPage;
