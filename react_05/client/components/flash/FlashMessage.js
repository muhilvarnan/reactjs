import React from "react";
import classnames from "classnames";

class FlashMessage extends React.Component {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    this.props.deleteFlashMessage(this.props.message.id);
  }
  render() {
    const { id, type, text }  = this.props.message;

    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        {text}
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
      </div>
    )
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
}
export default FlashMessage;
