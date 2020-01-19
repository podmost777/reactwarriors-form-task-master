import React from 'react';

const Steps = (props) => {

    const { name, active, completedBasic, completedContacts, completedAvatar, completedFinish } = props;

    return (
        <div className="steps mb-4">
            <div className={name === 'Basic' ? active ? 'step active' : (completedBasic ? 'completed step' : 'step') : (completedBasic ? 'completed step' : 'step')}>
              <div className="step__index">1</div>
              <div className="step__title mt-1">Basic</div>
            </div>
            <div className={name === 'Contacts' ? active ? 'step active' : (completedContacts ? 'completed step' : 'step') : (completedContacts ? 'completed step' : 'step')}>
            <div className="step__index">2</div>
              <div className="step__title mt-1">Contacts</div>
            </div>
            <div className={name === 'Avatar' ? active ? 'step active' : (completedAvatar ? 'completed step' : 'step') : (completedAvatar ? 'completed step' : 'step')}>
            <div className="step__index">3</div>
              <div className="step__title mt-1">Avatar</div>
            </div>
            <div className={name === 'Finish' ? active ? 'step active' : (completedFinish ? 'completed step' : 'step') : (completedFinish ? 'completed step' : 'step')}>
            <div className="step__index">4</div>
              <div className="step__title mt-1">Finish</div>
            </div>
        </div>
    )
}

export default Steps;