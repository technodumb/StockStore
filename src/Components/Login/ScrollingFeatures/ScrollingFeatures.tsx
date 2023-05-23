import React, { useEffect } from "react";
import "./ScrollingFeatures.scss";

export default function ScrollingFeatures() {
  const [scroll, setScroll] = React.useState(0);
  //   update scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => setScroll((scroll + 1) % 4), 4000);
    return () => clearInterval(interval);
  }, [scroll]);

  let featureStrings = [
    "Stock trading made simplified and localised.",
    "Be a stakeholder in your local market today.",
    "Investments starting from just ₹2/p.m.",
    "Save up today for a better tomorrow.",
  ];
  return (
    <div className="ScrollingFeatures">
      <div className="feature">{featureStrings[scroll]}</div>
      <FeatureScrollBar scroll={scroll} />
    </div>
  );
}

function FeatureScrollBar(props: { scroll: number }) {
  return (
    <div className="featureScrollBar">
      <div
        className={
          "featureScrollCircle green" + (props.scroll == 0 ? "Filled" : "")
        }
      />
      <div
        className={
          "featureScrollCircle white" + (props.scroll == 1 ? "Filled" : "")
        }
      />
      <div
        className={
          "featureScrollCircle green" + (props.scroll == 2 ? "Filled" : "")
        }
      />
      <div
        className={
          "featureScrollCircle white" + (props.scroll == 3 ? "Filled" : "")
        }
      />
    </div>
  );
}
