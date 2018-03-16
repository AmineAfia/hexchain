import { SET_PRESENTATION_ID, SET_BUFFER_VISIBILITY } from '../actions/environmentAction';

export const initialState = {
  presentationId: null,
  bufferVisibility: false,
};

const changeEnvironment = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRESENTATION_ID:
      return {
        ...state,
        presentationId: action.id,
      };
    case SET_BUFFER_VISIBILITY:
      return {
        ...state,
        bufferVisibility: !initialState.bufferVisibility,
      };
    default:
      console.warn('Unknown action dispatched.');
  }
};

export default changeEnvironment;

