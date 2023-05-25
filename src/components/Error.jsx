import { useRouteError } from "react-router-dom";

const Error = () => {
    //useRouteError is hook which helps so get more details about the error
    const err = useRouteError();
    console.log(err)
    
    return (
        
        <div>
            <h1>
                Something went wrong...
            </h1>
            <h2>
                Please try again later.
            </h2>
            <h2>
                {
                    err.status + ": " + err.statusText
                }
            </h2>
        </div>
    );
};

export default Error;