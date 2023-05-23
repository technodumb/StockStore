import { useRef, useState } from "react";
import "./SellStocks.scss";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface pillitem {
  name: string;
  price: number;
  count: number;
  val: number;
  rev: number;
  img: string;
}

export default function SellStocks() {
  const pillValues = [
    {
      name: "Alisha Bakers",
      price: 100,
      count: 50,
      val: 50000,
      rev: 5000,
      img: "https://www.shutterstock.com/image-photo/kuala-lumpur-malaysia-august-25-260nw-1165039456.jpg",
    },
    {
      name: "Bijith Wear",
      price: 25,
      count: 400,
      val: 70000,
      rev: 3000,
      img: "https://i.pinimg.com/736x/eb/aa/ad/ebaaadfa07a06538eb6ae43e29764b2d.jpg",
    },
    {
      name: "Royal Knight Tea Shop",
      price: 40,
      count: 100,
      val: 100000,
      rev: 9000,
      img: "https://qph.cf2.quoracdn.net/main-qimg-b1fa5144f3529e7038b75d03e5505ee1-lq",
    },
  ];
  return (
    <div className="SellStocks">
      {pillValues.map((item) => (
        <SellStockPills {...item} />
      ))}
    </div>
  );
}

function SellStockPills(props: pillitem) {
  let [isExpanded, setExpanded] = useState(false);
  const [stckno, setStckno] = useState(props.count);
  return (
    <div className="SellStockPills">
      {/* {!isExpanded && <SchmallPill />} */}
      {isExpanded ? (
        <BigBoiPill stckno={stckno} setStckno={setStckno} {...props} />
      ) : (
        <SchmallPill stckno={stckno} {...props} />
      )}
      {/* <div>info</div> */}
      {/* <div>Sell</div> */}
      <div className="PillExpandButtonDiv">
        <div
          className="PillExpandButton"
          onClick={() => setExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <BsChevronUp size="1.5rem" />
          ) : (
            <BsChevronDown size="1.5rem" />
          )}
        </div>
      </div>
    </div>
  );
}

function SchmallPill(props: any) {
  return (
    <div className="SchmallPill">
      <div className="row">
        <div className="rowelem CompanyName">{props.name}</div>
        <div className="rowelem LastUpdated">
          {"Last Updated: " + new Date().toLocaleDateString()}
        </div>
      </div>
      <div className="row">
        <div className="rowelem StockPrice">Stock Price:{props.price} </div>
        <div className="rowelem StocksLeft">No of Stocks:{props.stckno}</div>
      </div>
    </div>
  );
}

function BigBoiPill(props: any) {
  const handleChange = (e: any) => {
    const temp = parseInt((e.target as HTMLInputElement).value);
    setStcknoRef(temp ? temp : 0);
  };
  const handleSubmit = () => {
    props.setStckno(props.stckno - stcknoRef);
    setStcknoRef(0);
  };

  const [stcknoRef, setStcknoRef] = useState(0);

  return (
    <div className="BigBoiPill">
      <div className="heading">
        <div className="rowelem CompanyName">Company Name</div>
        <div className="rowelem LastUpdated">
          {"Last Updated: " + new Date().toLocaleDateString()}
        </div>
      </div>
      <div className="row">
        <img
          className="CompanyImage"
          src="https://www.livemint.com/lm-img/img/2023/03/28/600x338/kalyan_jewellers_1679978032083_1679978032261_1679978032261.JPG"
          alt="Just an image bruh"
        />
        <div className="col">
          <div className="colelem">Stock Price:{props.price} </div>
          <div className="colelem">Owned Stocks:{props.stckno} </div>
          <div className="colelem">Company Valuation:{props.val} </div>
          <div className="colelem">Company Revenue:{props.rev} </div>
        </div>
        {/* <div className="col"> */}
        <div className="col last">
          <div className="colelem">How many stocks to Sell?</div>
          <div className="row">
            <input
              type="text"
              className="ShareInput colelem"
              value={stcknoRef}
              onChange={handleChange}
              style={stcknoRef > props.stckno ? { color: "red" } : {}}
            />
            <button
              className="colelem SellButton"
              onClick={handleSubmit}
              disabled={stcknoRef > props.stckno}
            >
              Sell
            </button>
          </div>
          {/* <div className="colelem">Sell</div> */}
        </div>
      </div>
    </div>
    // </div>
  );
}
