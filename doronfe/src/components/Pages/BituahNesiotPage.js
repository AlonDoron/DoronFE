import React from "react";
import { NewLeadButton } from "../Common";

function BituahNesiotPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">ביטוח נסיעות לחו"ל</h1>
        <h2 className="subtitle">אודות ביטוח זה</h2>
        <p>
          נסיעה לחו"ל אינה דבר זול במיוחד, בין אם אנו נוסעים למטרות עסק לזמן קצר
          ובין אם מדובר בטיול שתכננו ובנינו עליו הרבה ציפיות. ביטוח הנסיעות
          לחו"ל מבטיח שאם יקרה משהו בלתי צפוי – תוכלו לפחות לטפל בו בצורה הטובה
          ביותר ובמינימום נטל כספי.
          <br />
        </p>
        <h2 className="subtitle">מה ביטוח זה כולל?</h2>
        <p>
          צורך בחילוץ או פינוי לבית חולים ובטיפול רפואי במקרה תאונה, הוצאות
          אשפוז במקרה מחלה בחו"ל , ופינוי אוירי לישראל בעת הצורך.
        </p>
        <h4>רוצים לשמוע עוד על ביטוח זה?</h4>
        <NewLeadButton />
      </div>
    </section>
  );
}

export default BituahNesiotPage;
