import { Badge } from "./components/Badge"
import Welcome from "./components/Welcome"
import WelcomeMessage from "./components/WelcomeMessage"
import Greetings from "./components/Greetings"
import UserStatus from "./components/UserStatus"
import UserList from "./components/UserList"
import Notification from "./components/Notification"


function App() {
  

  return (
    <>

    { /* props
    {/* Components are useless if they always display the same things. Pro allow us to pass data down into component to customize, it just like passing arguments to a function */}

    {/* <Welcome name="Sola"/>
    <WelcomeMessage />
    <Badge label="New" color="red" /> 
    <Badge label="Old" color="green" /> */}


      {/* Props */}
    {/* Components are useless if they always display the same things. Prop allow us to pass data down into a component to customize, it just like passing arguments to function */}
    {/* <Welcome name="Sola"/>
    <WelcomeMessage />
    {/* <Badge label="New" color="red" */}
    {/* <Badge label="New" color="red"  /> 
    <Badge label="Old" color="green"  /> 
    <UserList /> */} 

    <div style={{padding: "20px", maxWidth: "600px", margin: "0 auto"}}>
      <h1>React Conditional Rendering Examples</h1>

      <Greetings isLoggedIn={isLoggedIn} />
      <UserStatus isActive={userIsActive} />
      <Notification hasUnreadMessage={hasUnreadMessage} />
    </div>
    </>
    </> 
  )
}

export default App
