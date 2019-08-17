import React from "react";
import { NavLink } from "react-router-dom";
import "./AboutPage.css";
import p2p from "../../assets/p2p.png";

function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">אודותינו</h1>
        <h2 className="subtitle">דורון ורוזן ענק הביטוח </h2>
        <p>
          ענק הביטוח הוקמה בשנת 1970 כרשת כסוכנויות ביטוח הפעילות בביטוח חיים,
          אלמנטארי ובריאות. הרשת מייצגת את כל חברות הביטוח בישראל ובעזרת תוכנת
          ביטוח ייחודית אנו סוקרים עבור הלקוח את הצעת הביטוח הרלוונטית ON-LINE
          מול חברות הביטוח ומעניקים ללקוח את העסקה המשתלמת ביותר
        </p>
        <h2 className="subtitle">החזון שלנו</h2>
        <p>
          יצירת יתרונות ומימושם בתוך פעילות מובנת ושיטתית תוך מתן שירות מקצועי
          ואדיב.
        </p>
        <h4>מקצוענות + שיטתיות = תמורה</h4>
        <NavLink to="/leadform">
          <img
            className="p2pImage image is-three-quarters"
            src={p2p}
            alt="p2p"
          />
        </NavLink>
      </div>
    </section>
  );
}

export default AboutPage;
