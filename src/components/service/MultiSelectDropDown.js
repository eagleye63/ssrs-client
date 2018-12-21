import React, {Component} from 'react';
import _ from "lodash";
import $ from 'jquery';
var chk = document.getElementsByTagName('input');
class MultiSelectDropDown extends Component {
    state = {
        ck: 0,
        parameters: ''

    }
   

   
    xyz = (props) => {
    console.log(props);
    var chklength = chk.length; 
    chk[props].checked=true;
    console.log(chk[props].checked);
    for(var k=0;k< chklength;k++){
        if(chk[k].id != props){
            chk[k].checked =false;
        }
    }
    
    
    console.log(chk[props].value);
    
    }
    componentDidUpdate () {
        var chklength = chk.length; 
        for(var k=0;k< chklength;k++){
            if( chk[k].checked === true){
                break;
            }
            alert('pp');
        }
    }
    render() {
        var xc=0;
        console.log(chk);
        
        return (
           
            <div className="form-group">
             
                <label>{this.props.label}</label>
                <div className="dropdown">
                    <div className="btn dropdown-toggle form-control" type="button"
                            data-toggle="dropdown">{this.props.btnLabel + " "}
                        <span className="caret"></span></div>
                    <ul className="dropdown-menu col-sm-12">
                        <form>
                            {
                                _.map(this.props.options, (o, index) => {
                                    return (
                                        <li key={o._id}
                                            className="dropdown-item checkbox p-0 ">
                                            <label data-toggle="tooltip"
                                                   title={o.description}
                                                   className={'checkbox-cstm pl-4 pt-2 pb-2'}
                                                   style={{"width": '100%', "minHeight": '26px'}}>
                                                   
                                                <input onClick={() => this.xyz(index+1)}
                                                       data-index={index}
                                                       type="checkbox"
                                                       id={index+1}
                                                       value={o.name}
                                                      
                                                       />
                                
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

export default MultiSelectDropDown;
