import React, {Component} from 'react';
import _ from "lodash"
import {domainUrl} from "../../../config/configuration";
import * as HttpStatus from "http-status-codes";
import EditCartForm from "./EditCartForm";
import ConfirmModal from "../../ConfirmModal";

class Service extends Component {
    constructor(){
        super();
        this.state = {
            isModalOpen: false
        }
    }

    openConfirmationModal = () => {
        this.setState({
            isModalOpen: true
        })
    };

    closeConfirmationModal = () => {
        this.setState({
            isModalOpen: false
        })
    };

    onYes = (index) => {
        this.props.deleteOrder(index);
        this.closeConfirmationModal();
    };

    render() {
        const order = this.props.order;
        const service = order.service;
        const paramters = order.parameters;
        return (
            <tr>
                <td data-th="Product">
                    <div className="row">
                        <div className="col-sm-10">
                            <h4 className="nomargin">{service.name}</h4>
                            <div><strong>Comment: </strong>{order.comment}</div>
                        </div>
                    </div>
                </td>
                <td data-th="Parameters">{_.map(paramters, 'name').join(", ")}</td>
                <td data-th="Price">{order.serviceCost}</td>
                <td data-th="Quantity" className="text-center">{order.unitsRequested}</td>
                <td data-th="Service Cost" className="text-center">{`₹ ${order.serviceCost}`}</td>
                <td data-th="Parameter Cost" className="text-center">{`₹ ${order.parameterCost}`}</td>
                <td data-th="Subtotal" className="text-center">{`₹ ${order.totalCost}`}</td>
                <td className="actions" data-th="">
                    <button type="button" className="btn btn-light" data-toggle="modal"
                            data-target={"#myModal" + order._id}>
                        <i className="fa fa-pencil"
                           style={{"fontSize": "24px", "color": "black"}}></i>
                    </button>
                    <EditCartForm id={order._id}
                                  service={service}
                                  parameter={paramters}
                                  units={order.unitsRequested}
                                  comment={order.comment}
                                  index={this.props.index}
                                  updateOrder={this.props.updateOrder}/>
                    <button className="btn btn-danger btn-sm ml-2"
                            onClick={this.openConfirmationModal}
                            style={{"fontSize": "20px", "color": "black"}}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <ConfirmModal open={this.state.isModalOpen}
                                  onYes={() => this.onYes(this.props.index)}
                                  close={this.closeConfirmationModal}/>
                </td>
            </tr>
        );
    }
}

export default Service;