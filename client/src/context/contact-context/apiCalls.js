import axios from 'axios';
import { contactFailure, contactStart, contactSuccess } from './contactAction';

const sendMessage = async (userInput, dispatch) => {
  dispatch(contactStart());
  try {
    const res = await axios.post('/api/portfolio/email', { userInput });
    dispatch(contactSuccess(res));
  } catch (error) {
    console.log(
      'error test',
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
    dispatch(contactFailure(error));
  }
};
export { sendMessage };
