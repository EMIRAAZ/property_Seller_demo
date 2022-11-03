import axios from '../../../utils/axios';
import {
  LIST_AGENCY_AGENT,
  LIST_AGENCY_AGENT_STARTED,
  LIST_AGENCY_AGENT_ERROR,
} from '../../constants';

const listAgencyAgentStarted = () => {
  return {
    type: LIST_AGENCY_AGENT_STARTED,
  };
};

const listAgencyAgentError = () => {
  return {
    type: LIST_AGENCY_AGENT_ERROR,
  };
};

export const listAgencyAgent = id => async dispatch => {
  try {
    dispatch(listAgencyAgentStarted());
    const res = await axios.get(
      `/api/agent/agency/${localStorage.getItem('agency_id')}`,
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('authToken'),
        },
      }
    );
    dispatch({
      type: LIST_AGENCY_AGENT,
      payload: res.data?.data,
    });
  } catch (e) {
    dispatch(listAgencyAgentError());
  }
};
