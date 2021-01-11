import './App.css';

function SecretComponent() {
  return (
    <h1>This info is a secret.</h1>
  );
}

function RegularComponent() {
  return (
    <h1>This info is a open for public.</h1>
  );
}

//We passed properties in the App function and used authorized identifier
function App({authorized}) {
  return (
    <>
      {authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

export default App;
