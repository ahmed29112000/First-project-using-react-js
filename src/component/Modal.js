import "./css/modal.css";

export default function Modal({ isVisible, error = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-cont">
          <h1>The Form Has Been Submitted Successfully</h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
