function App() {
  return (
    <>
      <h1>Props Demo</h1>

      {/** Calling the MessageDemo(1, 'abcd') */}
      <MessageDemo />
      <MessageDemo name="ajju" />
      <MessageDemo name="dhananjay" email="777@gmail.com" />
      <MessageDemo name="shivam" email="s@gmail.com" />
      <MessageDemo name="pritz" email="pritzphotography@gmail.com" />
      <MessageDemo name="cdac" email="cdac@gmail.com" />
    </>
  );
}

// Reusable
// how to make this "dynmaic"
// props :: destructrued,
function MessageDemo({ email, name }) {
  return (
    <>
      <h1>
        Hello {name} {email}
      </h1>
    </>
  );
}

export default App;
