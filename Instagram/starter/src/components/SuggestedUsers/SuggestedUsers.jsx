import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";

const SuggestedUsers = () => {
  return (
    <>
      <SuggestedHeader />
      <SuggestedUser
        img="/img4.png"
        username="burakorkmezz"
        avatar="/img4.png"
        followers="1359"
      />
      <SuggestedUser username="jenny" avatar="/img3.png" followers=" 1456" />
      <SuggestedUser username="quiboloy" avatar="/img2.png" followers="2512" />
      <SuggestedUser
        username="totoy bato"
        avatar="/img1.png"
        followers="6452"
      />
    </>
  );
};

export default SuggestedUsers;
