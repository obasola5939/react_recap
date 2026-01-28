/*
    * if...else (outsiden JSX)
    * Ternary operator (condition ? A : B)
    * Logical AND (condition && <Component />)
*/ 

type GreetingsProps = {
    isLoggedIn: boolean;
}

function Greetings({isLoggedIn} : GreetingsProps) {
    let message;

    if(isLoggedIn){
        message = (
            <div>
                <h2>Welcome back, developer!</h2>
                <p>You have full access to the dashboard.</p>
            </div>
        );
    } else{
        message = (
            <div>
                <h2>Hello, Guest!</h2>
                <p>Please log in to continue.</p>
            </div>
        )
    }
  return <> </>
}

export default Greetings