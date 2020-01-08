import React from "react";
import { NewLeadButton } from "../Common";

function PensionPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">אודותינו</h1>
        <h2 className="subtitle">דורון ענק הביטוח </h2>
        <p>
          ​קרן פנסיה היא נכס חשוב לעתידו הכלכלי של כל אדם ומשפחתו. היא מיועדת הן
          לשכירים והן לעצמאים, לעת פרישה מעבודה ולמקרים של אובדן כושר עבודה
          ופטירה.
        </p>
        <h4>רוצים לשמוע עוד על ביטוח זה?</h4>
        <NewLeadButton />
      </div>
    </section>
  );
}

export default PensionPage;
