        // const heading = React.createElement("h1", {}, "Hello world from React!");
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);

        //Q.-----> aisa create karo using react
        // <div id="parent">
        //     <div id="child">
        //         <h1>I'Am a h1 Tag</h1>
        //     </div>
        // </div>
                    // ans
        // const parent = React.createElement("div",{ id:"parent" },React.createElement("div",{id:"child"},React.createElement("h1",{},"I'Am a h1 tag")));
        // console.log(parent);
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(parent);

            //Q2--creating siblings inside child div

        // <div id="parent">
        //     <div id="child">
        //         <h1>I'Am a h1 Tag</h1>
        //         <h2>I'Am a h2 Tag</h2>
        //         <h3>I'Am a h3 Tag</h3>
        //     </div>
        // </div>

                        //ans
        // const parent = React.createElement("div",{ id:"parent" },React.createElement("div",{id:"child"},
        // [React.createElement("h1",{},"I'Am a h1 tag"),
        // React.createElement("h2",{},"I'Am a h2 tag"),
        // React.createElement("h3",{},"I'Am a h3 tag")]
        // ));
        // console.log(parent);
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(parent);
        
        
        //Q2--creating siblings child div inside parent div

        // <div id="parent">
        //     <div id="child1">
        //         <h1>I'Am a h1 Tag</h1>
        //         <h2>I'Am a h2 Tag</h2>
        //         <h3>I'Am a h3 Tag</h3>
        //     </div>
        //     <div id="child2">
        //         <h1>I'Am a h1 Tag</h1>
        //         <h2>I'Am a h2 Tag</h2>
        //         <h3>I'Am a h3 Tag</h3>
        //     </div>
        // </div>

                    //ans
        const parent = React.createElement("div",{ id:"parent" },[React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I'Am a h1 tag"),
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
        
         