
import PropTypes from 'prop-types';
import React from 'react';
import './Task.css';

const Task = (props) => {
  // // const Task = ({ id, title, isComplete }) => {
  // // const [complete, setComplete] = useState(isComplete);
  // const [complete, setComplete] = useState(props.isComplete);
  // const buttonClass = complete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => setComplete(!complete)}
      >
        {props.title}
        {/* {title} */}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;
