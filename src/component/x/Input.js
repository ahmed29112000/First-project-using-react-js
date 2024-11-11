// import "./css/input.css"
// import { useState } from "react";

// export default function Input(props) {
//     const [inputs, setInputs] = useState({
//       name: "",
//       number: "",
//       age: "",
//     });
//   return (
//     <div className="group">
//       <input
//         required
//         type={props.type}
//         id={props.id}
//         name={props.name}
//         value={props.value}
//         onChange={(e) => {
//           setInputs({ ...inputs, name: e.target.value });
//         }}
//         className="input"
//       />
//       <span className="highlight" />
//       <span className="bar" />
//       {props.children}
//     </div>
//   );
// }