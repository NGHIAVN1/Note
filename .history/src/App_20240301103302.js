

const Pet = () => {
    return React.createElement("div",{}, [
        React.createElement("h1", {}, "Lunar"),
        React.createElement("h2", {}< "Dog"),
        React.createElement("h3", {}< "Cat"),
    ]),[

    ]
}
const App = () =>{
    return React.createElement(
        "div",
        {},[
            React.createElement("h1",{}, "Adopt Me"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet),
        ]
   
    )
};
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));