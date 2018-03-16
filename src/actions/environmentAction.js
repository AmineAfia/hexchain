export const SET_PRESENTATION_ID = 'SET_PRESENTATION_ID';
export const SET_BUFFER_VISIBILITY = 'SET_BUFFER_VISIBILITY';

export const setPresentationId = id => ({ type: SET_PRESENTATION_ID, id });

export const setBufferVisibility = () => ({ type: SET_BUFFER_VISIBILITY });
