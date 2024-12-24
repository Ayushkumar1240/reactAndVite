const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};
const Profile = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75"
          alt="Google Image"
        />
        <div className="text-container">
          <h1>{person.name}</h1>
          <p>Theme Color: {person.theme.color}</p>
          <p>Background Color: {person.theme.backgroundColor}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
