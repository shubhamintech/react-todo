// PascalCasing

function Message(){
    // JSX: JavaScript XML
    const name = "Shubham Kumar";
    if(name)
    return (
        <div>
            <h1>Hello {name}</h1>
        </div>
    );
    return <h1>Hello World!</h1>
}

export default Message;