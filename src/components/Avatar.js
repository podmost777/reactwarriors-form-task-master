import React from "react";

const Avatar = (props) => {

    const { setAvatar, onChangeAvatar, error } = props;
    return (
        <div className="form-group">
            <img className="mb-4" width="100%" 
              src={setAvatar}
              alt="Default Avatar">
            </img>
            <div className="mb-4">
              <div className="custom-file">
              <input 
                type="file"
                className="custom-file-input"
                id="inputAvatar"
                name="avatar"
                onChange={onChangeAvatar}
              />
              <label 
                className={error ? "custom-file-label invalid" : "custom-file-label"} 
                htmlFor="inputAvatar">
                  Choose avatar
              </label>
              </div>
              {error ? (
              <div className="invalid-feedback">
                {error}
              </div>
              ) : null}
            </div>
        </div>
    )
}

export default Avatar;