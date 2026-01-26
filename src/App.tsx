import { Badge } from "./components/Badge"
import Welcome from "./components/Welcome"
import WelcomeMessage from "./components/WelcomeMessage"


function App() {
  

  return (
    <>

    { /* props */}
    {/* Components are useless if they always display the same things. Pro allow us to pass data down into component to customize, it just like passing arguments to a function */}

    <Welcome name="Sola"/>
    <WelcomeMessage />
    <Badge label="New" color="red" /> 
    <Badge label="Old" color="green" />

    </>
  )
}

export default App
