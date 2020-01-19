import React from "react";

const Finish = (props) => {

    const { onPrevious, currentStep, onNext } = props;
    
    return (
            <div className="d-flex jusify-content-center">
              <div className="margin-auto">
                <button 
                  type="button" 
                  className="btn btn-light mr-4" 
                  onClick={onPrevious}
                  disabled={currentStep === 0 ? true : false}
                  >
                  Previous
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={onNext}>
                  Next
                </button>
              </div>
            </div>
    )
}

export default Finish;