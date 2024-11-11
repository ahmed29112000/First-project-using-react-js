import "./css/Submit.css";

export default function Submit() {
  return <button className="button type1 " onClick={addActive}></button>;
}
let addActive = (e) => {
  let test = 0;
  if (test === 0) {
    e.target.classList.add("active");
    test = 1;
  }
  setTimeout(() => {
    e.target.classList.remove("active");
  }, 1000);
};
