import React from "react";
import BituahGridCards from "./BituahGridCards";

function HomePage() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="title">דורון ענק הביטוח</h1>
          <h3>חברת סוכנות הביטוח הזולה בישראל, כבר למעלה מ20 שנה.</h3>
          <div>
            <h4>הביטוחים שלנו: </h4>
            <BituahGridCards />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
