import React from "react";
import { NewLeadButton } from "../Common";

function BituahDiraPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">ביטוח דירה</h1>
        <h2 className="subtitle">אודות ביטוח זה</h2>
        <p>
          הניסיון מוכיח שהחיים מלאי הפתעות וכידוע ביתך הוא מבצרך, ברכישת ביטוח
          דירה תבטיח לעצמך הגנה מפני נזקים שעלולים להתרחש בביתך ותהיה ערוך
          להתמודדות עימם.
          <br />
          בפוליסה המורחבת של דורון ענק הביטוח, ניתן להוסיף נזקים למצלמות, מחשבים
          ניידים, תכשיטים בכל הסיכונים ועוד.
        </p>
        <h3 className="subtitle">החוק בישראל </h3>
        <p>
          ביטוח זה יבטיח לך הגנה מפני: שריפה, פריצה, גניבה, נזקי צנרת, נזקים
          למכשירי חשמל, נזקים לצד ג' ושאר צרות שלא רוצים לחשוב עליהן אך במוקדם
          או במאוחר הן מופיעות ודווקא בזמן הכי פחות מתאים. <br />
        </p>
        <h4>רוצים לשמוע עוד על ביטוח זה?</h4>
        <NewLeadButton />
      </div>
    </section>
  );
}

export default BituahDiraPage;
