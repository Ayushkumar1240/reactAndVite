import Card from "./Card";
import Avatar from "./Avatar";

const Profile1 = () => {
  return (
    <div>
      <Card>
        <Avatar
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        ></Avatar>
      </Card>
    </div>
  );
};

export default Profile1;
