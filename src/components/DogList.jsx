import Dog from "./Dog";

const DogList = (props) => {
  // We're accessing the on props object to get dogData
  // using map() fx, and it makes a reference to each.
  // Then we will return an instance of each dogData in the array
  const dogs = props.dogData.map((dog, i) => {
    // i is a reference to the index of each dog which will be assigned a key.prop
    // key here is a unique identifier
    return (
      <Dog
        key={i}
        name={dog.name}
        age={dog.age}
        breed={dog.breed}
        cuteness={dog.cuteness}
      />
    );
  });
  return (
    <div>
      {/* <Dog />
      <Dog />
      <Dog /> */}
      {dogs}
    </div>
  );
};

export default DogList;
