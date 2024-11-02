function Message() {
    // JSX: JavaScript XML
    const name = 'Tim';
    if (name)
    return <h1>Hello, I'm {name}. Send me a message.</h1>;
    return <h1>Hello World</h1>;
}

export default Message;