import _ from "lodash";

export function handleChange({target}){
    this.setState({
        [target.name]: target.value
    })
}
export function handlePaymentModeChange({target}){
    const paymentModes = this.state.paymentModes
    paymentModes[target.name] = !paymentModes[target.name]
    this.setState({
        paymentModes
    });
}

export function handleArrayUpdate({target}){
    const newArray = this.state[target.name];
    newArray[target.dataset.index].isActive = !newArray[target.dataset.index].isActive
    this.setState({
        [target.name]: newArray
    })
}

export function getServiceFromState(){
    const {other, ...service} = this.state;
    service.collectionTypes = _.map(_.filter(this.state.collectionType, ({isActive}) => isActive), '_id');
    service.availableParameters = _.map(_.filter(this.state.parameter, ({isActive}) => isActive), '_id');
    delete service.parameter;
    delete service.collectionType;
    console.log(service);
    return service;
}