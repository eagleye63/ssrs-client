import React, {Component} from 'react';
import _ from "lodash";

class MultiSelectDropDownControled extends Component {
    render() {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <div className="dropdown">
                    <button className="btn dropdown-toggle form-control" type="button"
                            data-toggle="dropdown">{this.props.btnLabel + " "}
                        <span className="caret"></span></button>
                    <ul className="dropdown-menu col-sm-12">
                        <form>
                            {
                                _.map(this.props.options, (o, index) => {
                                    return (
                                        <li key={o._id}
                                            className="dropdown-item checkbox pl-4 pt-2 pb-2">
                                            <label data-toggle="tooltip"
                                                   title={o.description}
                                                   className={'checkbox-cstm'}
                                                   style={{"width": '100%', "minHeight": '26px'}}>
                                                <input onClick={this.props.handleOptionChange}
                                                       data-index={index}
                                                       type="checkbox"
                                                       name={this.props.name}
                                                       checked={o.isActive}/>
                                                {o.name + " (₹" + o.baseCharge + ")"}
                                            </label>
                                        </li>)
                                })
                            }
                        </form>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MultiSelectDropDownControled;