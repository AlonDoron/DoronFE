import React from "react";
import { NewLeadButton } from "../Common";

function BituachMakifPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">ביטוח מקיף</h1>
        <h2 className="subtitle">אודות ביטוח זה</h2>
        <p>
          בין אם גרמת נזק לרכבך או לרכב אחר, הביטוח המקיף מכסה נזק תאונתי חלקי
          או מלא כגון: התנגשות, התהפכות, גניבה, אש ונזק בזדון.
        </p>
        <h3 className="subtitle">החוק בישראל </h3>
        <p>
          ביטוח זה מיועד לכיסוי נזקים שנגרמו לרכב המבוטח במקרי פריצה או כתוצאה
          מתאונה, הביטוח המקיף כולל בתוכו גם ביטוח צד שלישי
        </p>
        <h4>רוצים לשמוע עוד על ביטוח זה?</h4>
        <NewLeadButton />
      </div>
    </section>
  );
}

export default BituachMakifPage;
