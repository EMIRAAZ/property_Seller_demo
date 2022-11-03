import React from 'react';
import Items from './items/Items';
import MainComponent from '../maincomponent';
import './agentList.scss';
import { useEffect, useState } from 'react';
import Confirm from '../../components/Confirm';

function PropertyList(props) {
  useEffect(() => {
    props.listAgencyAgent();
  }, []);

  const [isOpen, setOpen] = useState(false);
  const [{ id, cb }, setIdCb] = useState({});

  const onDeleteAgency = (id, cb) => {
    setOpen(true);
    setIdCb({ id, cb });
  };

  return (
    <MainComponent>
      <div className="agent-list-div">
        <div className="heading-div">
          <h1>List of Agents</h1>
          <svg
            width="28"
            height="6"
            viewBox="0 0 28 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 3C22 1.34314 23.3431 0 25 0C26.6569 0 28 1.34314 28 3C28 4.65686 26.6569 6 25 6C23.3431 6 22 4.65686 22 3ZM11 3C11 1.34314 12.3431 0 14 0C15.6569 0 17 1.34314 17 3C17 4.65686 15.6569 6 14 6C12.3431 6 11 4.65686 11 3ZM0 3C0 1.34314 1.34314 0 3 0C4.65686 0 6 1.34314 6 3C6 4.65686 4.65686 6 3 6C1.34314 6 0 4.65686 0 3Z"
              fill="#99B2C6"
            />
          </svg>
        </div>
        <div className="titles-div">
          <div className="col1"></div>
          <div className="col2">
            <h1>Agent Name</h1>
          </div>
          <div className="col3">
            <h1>Agent ID</h1>
          </div>
          <div className="col4">
            <h1>Status</h1>
          </div>
          <div className="col5">
            <h1>Options</h1>
          </div>
        </div>
        <Confirm
          open={isOpen}
          handleOpen={setOpen}
          question="Do you want to delete this Agent ?"
          description="By confirming the agent will be deleted. You cannot undo the process after confirming."
          callback={() => props.deleteAgencyAgent(id, cb)}
        />
        {props.agentList &&
          props.agentList.map(item => (
            <Items
              {...item}
              onDelete={onDeleteAgency}
              getAgent={props.listAgencyAgent}
            />
          ))}
      </div>
    </MainComponent>
  );
}

export default PropertyList;
