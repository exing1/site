function Popup(props) {

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="close" onClick={props.toggle}>&times;</div>
        {props.message}
      </div>
    </div>
  );
}

export default Popup;