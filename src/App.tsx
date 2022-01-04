import { BrowserView, MobileView } from "react-device-detect";
import { MobileRoot } from "./mobile";
import { WebRoot } from "./web";

function App() {
  return (
    <>
      <BrowserView>
        <WebRoot/>
      </BrowserView>
      <MobileView>
       <MobileRoot/>
      </MobileView>
    </>
  );
}

export default App;
