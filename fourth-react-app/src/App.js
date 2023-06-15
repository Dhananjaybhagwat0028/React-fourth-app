
function App() {
  return(
  <>
   <h1> good morning</h1>
{/**calling the Messagedemo  */}
   <MessageDemo />
   <MessageDemo />
   <MessageDemo />
  </>
   );
}
// Reusable + but returns static output
function MessageDemo(){
 //  console.log("hello Ajinkya");
  return(
   <>
    <h1> hello</h1>
   </>
  );
}
export default App;
