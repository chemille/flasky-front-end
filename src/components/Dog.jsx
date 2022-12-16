// You don't have to import react when you're in a jsx file //
import { useState } from "react";
import PropTypes from "prop-types";

const Dog = (props) => {
  // petCount is the getter, setPetCount is the setter
  const [petCount, setPetCount] = useState(0);

  // Event handler that is an arrow fx
  const handleOnClickPets = () => {
    setPetCount((petCount) => petCount + 1);
  };

  // props.key => value
  return (
    <div>
      <ul>
        {props.name}
        <li>age: {props.age}</li>
        <li>breed: {props.breed}</li>
        <li>cuteness level: {props.cuteness}</li>
        <li>pet count: {petCount}</li>
      </ul>
      <button onClick={handleOnClickPets}>Pet {props.name}</button>
    </div>
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
