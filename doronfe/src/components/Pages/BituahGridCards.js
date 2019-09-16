import React from "react";
import { BituahInfoCard } from "../Common";
import driverHova from "../../assets/images/driverHova.jpg";
import driverMakif from "../../assets/images/driverMakif.jpg";
import driverZadGimel from "../../assets/images/driverZadGimel.jpg";
import dira from "../../assets/images/dira.jpg";
import airplane from "../../assets/images/airplane.jpg";
import elders from "../../assets/images/elders.jpg";
import health from "../../assets/images/health.jpg";
import esek from "../../assets/images/esek.jpg";
import mashkanta from "../../assets/images/mashkanta.jpg";

function BituahGridCards() {
  return (
    <div className="columns is-multiline">
      <BituahInfoCard
        title="ביטוח חובה"
        textContent="ביטוח חובה המשתלם ביותר"
        image={driverHova}
        to="/bituahHova"
      />
      <BituahInfoCard
        title="ביטוח מקיף"
        textContent="ביטוח מקיף שייכסה נזקים שנגרמו לרכב שלך"
        image={driverMakif}
        to="/bituahMakif"
      />
      <BituahInfoCard
        title="ביטוח צד ג'"
        textContent="ביטוח צד ג' בעל כיסוי הנזקים הטוב ביותר לרכושו של אדם אחר"
        image={driverZadGimel}
        to="/bituahZadGimel"
      />
      <BituahInfoCard
        title="ביטוח דירה"
        textContent="ביטוח דירה המקיף והזול ביותר"
        image={dira}
        to="/bituahDira"
      />
      <BituahInfoCard
        title="ביטוח נסיעות"
        textContent="ביטוח נסיעות כדי שתוכל להינות מהחופשה שלך"
        image={airplane}
        to="/bituahNesiot"
      />
      <BituahInfoCard
        title="ביטוח פנסיה"
        textContent="ביטוח פנסיה כדי שנזדקן בכבוד"
        image={elders}
        to="/bituahPensia"
      />
      <BituahInfoCard
        title="ביטוח בריאות"
        textContent="ביטוח בריאות כדי שהחיים יהיו במסלול תקין"
        image={health}
        to="/bituahBriut"
      />
      <BituahInfoCard
        title="ביטוח עסק"
        textContent="ביטוח עסק כי לעסק שלך מגיע בטחון"
        image={esek}
        to="/BituahEsek"
      />
      <BituahInfoCard
        title="ביטוח משכנתא"
        textContent="ביטוח משכנתא הזול והאמין ביותר בשבילך"
        image={mashkanta}
        to="/bituahMashkanta"
      />
    </div>
  );
}

export default BituahGridCards;
