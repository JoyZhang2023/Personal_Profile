import picture from "./image.jpg";

function Profile() {
    return (
      <div className="Profile">
          <img src={picture} className="Profile-image" alt="" />
          <p>
            "Hello! My name is Xinran Zhang."
          </p>
      </div>
    );
  }

  export default Profile;