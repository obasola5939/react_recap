

    // A component is a custom HTML tag you create yourself. It is Javascript function that returns JSX.

    /*

    * Imperative (The old way)
    You handle the steps: Create elements -> add text -> append to body
    const div = document.createElement(`div`);
    div.textContent = `Hello World`;
    document.body.appendChild(div)


    * Declarative (The React way)
    You handle the description: "I want a div with text."

    function app(){
    return <div>Hello World</div>
    }

    * A React component is just a Javascript function that return JSX. JSX looks like HTML, but it allows you to use Javascript logic directly inside it using curly braces {}.
    */

    // Defining the "shape" of data to ensure our components receive exectly what they expect.
  interface WelcomeProps{
    name: string;
  }
function Welcome(props: WelcomeProps) {
  
  return (
    <div>
    <h3>Welcome, {props.name}</h3>
    </div>
  )
}


export default Welcome;