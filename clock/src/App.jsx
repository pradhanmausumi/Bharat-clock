import ClockHeading from "./components/clockheading";
import ClockSlogan from "./components/clockslogan";
import CurrentTime from "./components/currenttime";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

function App() {


  return  (<center>
<ClockHeading></ClockHeading>
<ClockSlogan></ClockSlogan>
<CurrentTime/>
  </center>
  );
}
export default App;
