import React from "react";
import { NewLeadButton } from "../Common";

function BituahDiraPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">ביטוח עסק</h1>
        <h2 className="subtitle">אודות ביטוח זה</h2>
        <p>
          להיות בעל עסק זה לא דבר פשוט, זו אחריות גדולה - מי כמוך יודע.
          <br />
          אנחנו כאן כדי לעזור לך להקטין את הסיכונים השונים.
          <br />
          אנו בדורון ענק הביטוח מומחים להתאים לך את הביטוח הנכון ודואגים לך בעל
          העסק שתהיה לך הגנה מלאה שמותאמת לצרכיך.
        </p>
        <h2 className="subtitle">מה ביטוח זה כולל?</h2>
        <p>
          הכיסויים הנפוצים בביטוחי העסק הינם ביטוח מבנה העסק אש,פריצה , ביטוח
          תכולת העסק הכולל אש, פריצה, ביטוח צד ג', ביטוח חבות מעבידים, ביטוח
          אחריות מקצועית, ביטוח אחריות המוצר, ביטוח אובדן רווחים ועוד
        </p>
        <h4>רוצים לשמוע עוד על ביטוח זה?</h4>
        <NewLeadButton />
      </div>
    </section>
  );
}

export default BituahDiraPage;
