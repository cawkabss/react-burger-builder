import React from 'react';

import './Input.css';

const input = (props) => {

    let inputElement = null;

    switch(props.elementType){
        case 'input':
            inputElement = <input
                className={`input-element ${(props.invalid && props.shouldValidate && props.touched) ? 'invalid' : ''}`}
                {...props.elementConfig}
                value={ props.value }
                onChange={props.change}/>;
            break;

        case 'textarea':
            inputElement = <textarea
                className={`input-element ${(props.invalid && props.shouldValidate && props.touched) ? 'invalid' : ''}`}
                {...props.elementConfig}
                value={ props.value }
                onChange={props.change}/>;
            break;

        case 'select':
            inputElement = (
                <select className={`input-element ${(props.invalid && props.shouldValidate && props.touched) ? 'invalid' : ''}`}
                        value={props.value} onChange={ props.change }>
                    {
                        props.elementConfig.options.map( option => (
                            <option key={option.value}
                                    value={ option.value }>
                                { option.displayValue }
                            </option>
                        ) )
                    }
                </select>
            );
            break;

        default:
            inputElement = <input
                className={`input-element ${(props.invalid && props.shouldValidate && props.touched) ? 'invalid' : ''}`}
                {...props.elementConfig}
                value={ props.value }
                onChange={props.change}/>;
    }

    return (
        <div className="input-wrapper">
            <label className="input-label">{ props.label }</label>
            { inputElement }
        </div>
    )
};

export default input;