import ProfileCard from "./ProfileCard";
import alexaImage from "./images/alexa.png";
import cortanaImage from "./images/cortana.png";
import siriImage from "./images/siri.png";

console.log(alexaImage)
console.log(cortanaImage);
console.log(siriImage);

function App() {
  return (
    <div>
      <div>Personal Digital Assistant</div>
      <ProfileCard title="Alexa" handle="@alexa99" image={alexaImage} />
      <ProfileCard title="Cortana" handle="@cortana" image={cortanaImage} />
      <ProfileCard title="Siri" handle="@siri01" image={siriImage} />
    </div>
  );
}

export default App;