// this is the class based componenet code
//this is child
import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           // count: 0,
           // count2: 2, 
            userInfo: {
                name: "lingo",
                location: "dingo",
                
            },
        };
    }
    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json =await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){
         //const {name,location} = this.props;
        // const {count} = this.state;
        const {name,location,avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
                {/* <h1>Count : {count}</h1>
                <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                    count2: this.state.count2+1,
                })    
                }}>Count Increased</button> */}
                <img src={avatar_url}/>
                <h2>Nmae: {name}</h2>
                <h3>location : {location}</h3>
                <h4>contact: @daddyNnigga</h4>
            </div>  
        );
    };
};
export default UserClass;