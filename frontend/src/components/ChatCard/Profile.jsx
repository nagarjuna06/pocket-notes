const Profile = ({ color, profile }) => {
  return (
    <div
      className="chat__card__profile"
      style={{ "--chat-profile-color": color }}
    >
      {profile}
    </div>
  );
};

export default Profile;
