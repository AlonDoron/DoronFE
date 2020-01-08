import React from "react";
import { NewLeadButton } from "../Common";

function BituahMashkanta() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">אודותינו</h1>
        <h2 className="subtitle">דורון ענק הביטוח </h2>
        <p>
          אם נטלתם משכנתא, הבנק יחייב אתכם גם ברכישת ביטוח משכנתא וזאת למקרה שלא
          תוכלו לעמוד בהחזרי התשלום אליהם התחייבתם. ביטוח משכנתא נועד בראש
          ובראשונה לשרת את הבנק המלווה, אך הוא מבטיח גם אתכם, למקרה שתקלעו לצרה.
        </p>
        <h4>רוצים לשמוע עוד על ביטוח זה?</h4>
        <NewLeadButton />
      </div>
    </section>
  );
}

export default BituahMashkanta;
