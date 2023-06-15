function App() {
  return (
    <>
      <h1>Props Demo</h1>

      {/** Calling the MessageDemo(1, 'abcd') */}
      <MessageDemo name="shubham" />
      <MessageDemo name="ajju" />
      <MessageDemo name="omkar" />
      <MessageDemo name="deva" />
    </>
  );
}

// Reusable
// how to make this "dynmaic"
function MessageDemo(props) {
  // console.log("I am inside messagedemo", props);

  return (
    <>
      <h1>Hello {props.name}</h1>
    </>
  );
}

export default App;
