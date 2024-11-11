import "./css/select.css";
export default function Select(props) {
  return (
    <div className="wrapper">
      <input type="checkbox" id="toogle" className="hidden-trigger" />
      <label htmlFor="toogle" className="circle">
        salary
      </label>
      <div className="subs">
        <button className="sub-circle">
          <input
            value="1"
            name="sub-circle"
            type="radio"
            id="sub1"
            className="hidden-sub-trigger"
          />
          <label htmlFor="sub1">Less than 500$</label>
        </button>
        <button className="sub-circle">
          <input
            value="1"
            name="sub-circle"
            type="radio"
            id="sub2"
            className="hidden-sub-trigger"
          />
          <label htmlFor="sub2">Between 500$ and 2000$</label>
        </button>
        <button className="sub-circle">
          <input
            value="1"
            name="sub-circle"
            type="radio"
            id="sub3"
            className="hidden-sub-trigger"
          />
          <label htmlFor="sub3">Above 2000$</label>
        </button>
      </div>
    </div>
  );
}
