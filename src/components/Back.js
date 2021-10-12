import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Back = ({ title }) => {
  const history = useHistory();
  const back = () => {
    history.push('/');
  };

  return (
    <button type="button" onClick={back}>{title}</button>
  );
};

Back.propTypes = ({
  title: PropTypes.string,
}).isRequired;

export default Back;
