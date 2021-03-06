import React from 'react';
import Modal from 'react-bootstrap4-modal';

class ConfirmModal extends React.Component {
    render() {
        return (
            <Modal visible={this.props.open}>
                <div className="modal-header">
                    <h5 className="modal-title">Just confirming...</h5>
                </div>
                <div className="modal-body">
                    <h5 style={{"fontStyle": "italic"}}>{this.props.message ? this.props.message : "Are you sure?"}</h5>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={this.props.close}>
                        No
                    </button>
                    <button type="button" className="btn btn-primary" onClick={this.props.onYes}>
                        Yes
                    </button>
                </div>
            </Modal>
        );
    }
}

export default ConfirmModal;
