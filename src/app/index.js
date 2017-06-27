alert("it worksss!!!");

var React=require("react");
var ReactDom=require("react-dom");

var TodoComponent=React.createClass({
    render:function(){
        return(
            <h1>Hi there, this is the first react component!!</h1>
        );
    }
});

ReactDom.render(<TodoComponent/>, document.getElementById("todo-wrapper"));