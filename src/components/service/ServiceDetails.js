import React, {Component} from "react";
import _ from 'lodash'

function capitalize(x) {
    return x.charAt(0).toUpperCase() + x.slice(1);
}

function filterName(x) {
    return _.map(x, o => o.name).join(", ")
}

class ServiceDetails extends Component {
    render() {
        const {service} = this.props;
        return (
            <div>
                <h5><strong>Description: </strong>
                    {service.description}</h5>
                <h5><strong>Base Charge: </strong>
                    {"₹ " + service.baseCharge}</h5>
                <h5><strong>Maximum Units: </strong>
                    {service.maxUnits}</h5>
                <h5><strong>Payment Modes: </strong>
                    {_.map(service.availablePaymentModes, (x) => capitalize(x)).join(", ")} </h5>
                <h5><strong>Collection Type: </strong>
                    {service.collectionTypes.length>0?filterName(service.collectionTypes):'None'} </h5>
                <h5><strong>Available Parameters: </strong>
                    {service.availableParameters.length>0?filterName(service.availableParameters):'None'} </h5>
            </div>
        )
    }
}

export default ServiceDetails
