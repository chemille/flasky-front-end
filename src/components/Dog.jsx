// You don't have to import react when you're in a jsx file //
import PropTypes from "prop-types";

const Dog = (props) => {
  // props.key => value
  return (
    <ul>
      {props.name}
      <ul>
        <li>age: {props.age}</li>
        <li>breed: {props.breed}</li>
        <li>cuteness level: {props.cuteness}</li>
      </ul>
    </ul>
  );
};

// create Dog.propTypes and assign it an object
// key refers to prop names and
// values represents the validator of the prop
// Some can have isRequired while some do not
Dog.propTypes = {
  breed: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  cuteness: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Dog;