import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError(); //it will give more info about the error!
    return(
        <div>
            <h1>Oops!!!</h1>
            <h2>Somthing went wrong!!</h2>
            <h3>
                {err.status}: {err.statusText}
            </h3>
        </div>
    );
};
export default Error;