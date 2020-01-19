import React from "react";



const Finish = (props) => {

    const { avatar, firstname, lastname, email, mobile, country, city, onReset} = props;

        return (
            <div className="container-fluid">
                    <div className="row mb-4">
                    <div className="col-4">
                        <img width="100%" src={avatar} alt="Avatar"></img>
                    </div>
                    <div className="col-8 d-flex align-items-center">
                        <h4>
                        {firstname} {lastname}
                        </h4>
                    </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-12">
                        <p>
                            <strong>Email: </strong>
                            {email}
                        </p>
                        <p>
                            <strong>Mobile: </strong>
                            {mobile}
                        </p>
                        <p>
                            <strong>Location: </strong>
                            {country}, {city}
                        </p>
                        </div>
                    </div>
                <div className="d-flex justify-content-center">
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    onClick={onReset}>
                    Reset
                    </button>
                </div>
                </div>
        )
}


export default Finish;