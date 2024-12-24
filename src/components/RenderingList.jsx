import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

const RenderingList = () => {
  const listItems = people.map((person) => (
    <li key={people.id}>
      <div className="container">
        <img
          className="image-container"
          src={getImageUrl()}
          alt={person.name}
        />
        <p>
          <b>{person.name}: </b>
          {" " + person.profession + " "} known for {person.accomplishment}
        </p>
      </div>
    </li>
  ));
  return (
    <div>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

export default RenderingList;
