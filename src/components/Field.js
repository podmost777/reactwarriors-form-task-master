import React from "react";

const Field = (props) => {
    const { id, LabelText, type , placeholder, name, value, onChange, error } = props;
    
    return (
        <div className="form-group">
            <label htmlFor={id}>{LabelText}</label>
            <input
              id={id}
              type={type}
              className={error ? "form-control invalid" : "form-control"}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
            />
            {error ? (
              <div className="invalid-feedback">
                {error}
              </div>
              ) : null}
          </div>
    );
};
        
export default Field;