import React from "react";
import  ReactDOM  from "react-dom/client";
// creating react element using react.
const heading = React.createElement("h1",{id: "heading"},"Namste react");

// jsx-creating react element using jsx
const jsxHeading = <h2 id="heading">Namste react</h2>
console.log(jsxHeading);


console.log(heading);

// react component
    //1-> class based component.
        // ye pahle use hota tha.
    //2-> functional component.
        //ab 99% ye use hota hai
    //defn->  it is a javascript function which return jsx code OR return react element,


// React functional component.
const HeadingComponent = () =>{
    return <h1 className="heading">Namste react Baby</h1>
}
// yaha both HeadingComponent and HeadingComponent2 same hi hai bas ye likhne ka tarika hai tum koi sa v use kar sakte ho.
const HeadingComponent2 = () =>(
     <h1 className="heading">Namste react Baby</h1>);


// yaha both f1 and f2 same hi hai bas ye likhne ka tarika hai tum koi sa v use kar sakte ho.
const f1 = () =>{
    return true;
}

const f2 = () => true;


// extra writing skills
//react functional component
//as well as component inside a component->also known as component composition.

//this lower this is a functional component.
// const Title = ()=>(
//     <h1 className="Head" tabIndex="5">
//         fuckumean i got this ice on my neck and u jelousy on ur head yeah
//     </h1>
// );

//this lower this is a java script or can say react element.
const Title = (
    <h1 className="Head" tabIndex="5">
        fuckumean i got this ice on my neck and u jelousy on ur head yeah
    </h1>
);
// const HeadingComponent3 = () =>(
//     <div id="container">
//         <Title /> or
//  this->   <Title></Title> or u can call this as a title function niche dekho.
//          {Title()}
       
//          <h1 className="heading">Namste react Baby by functional Component</h1>
//     </div>
// );

//OR injecting react element by javascript.

const HeadingComponent3 = () =>(
    <div id="container">
        
       {Title}
         <h1 className="heading">Namste react Baby by functional Component</h1>
    </div>
);

//javaScript inside curli Braces {}.
// const HeadingComponent3 = () =>(
//     <div id="container">
//         <h2>{(150+650)}</h2>
//          <h1 className="heading">Namste react Baby by functional Component</h1>
//     </div>
// );
         
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent3 />);