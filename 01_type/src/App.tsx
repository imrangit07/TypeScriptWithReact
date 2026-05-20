import Greet from "./Greet";

const App = () => {
  return (
    <>
      <Greet
        title="String Example"
        name="Imran"
      />

      <Greet
        title="Number Example"
        age={24}
      />

      <Greet
        title="Boolean Example"
        isLoggedin={true}
      />

      <Greet
        title="Object Example"
        user={{
          first: "Imran",
          last: "Hussain",
        }}
      />

      <Greet
        title="Array Example"
        skills={["React", "Node", "MongoDB"]}
      />

      <Greet
        title="Union Example"
        id="abc123"
      />

      <Greet
        title="Optional Example"
        message="Welcome"
      />

      <Greet
        title="Tuple Example"
        tupleData={["Imran", 24]}
      />

     <Greet
        title="Loading Example"
        status="loading"
      />

      <Greet
        title="Success Example"
        status="success"
      />

      <Greet
        title="Error Example"
        status="error"
      />
    </>
  );
};

export default App;