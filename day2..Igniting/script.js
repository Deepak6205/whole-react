import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement("div",{ id:"parent" },[React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I'Am your daddy"),
        React.createElement("h2",{},"I'Am a h2 tag"),
        React.createElement("h3",{},"I'Am a h3 tag")]
        ),
        React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"I'Am a h1 tag"),
        React.createElement("h2",{},"I'Am a h2 tag"),
        React.createElement("h3",{},"I'Am a h3 tag")])
    ]);
        console.log(parent);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
        
         