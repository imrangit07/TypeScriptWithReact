import Greet from "./Greet";

const App = () => {
  return (
    <>
      {/* STRING */}
      <Greet
        title="String Example"
        name="Imran"
      />

      {/* NUMBER */}
      <Greet
        title="Number Example"
        age={24}
      />

      {/* BOOLEAN */}
      <Greet
        title="Boolean Example"
        isLoggedin={true}
      />

      {/* OBJECT */}
      <Greet
        title="Object Example"
        user={{
          first: "Imran",
          last: "Hussain",
        }}
      />

      {/* ARRAY */}
      <Greet
        title="Array Example"
        skills={["React", "Node", "MongoDB"]}
      />

      {/* UNION TYPE */}
      <Greet
        title="Union Example"
        id="abc123"
      />

      {/* OPTIONAL PROP */}
      <Greet
        title="Optional Example"
        message="Welcome"
      />

      {/* TUPLE */}
      <Greet
        title="Tuple Example"
        tupleData={["Imran", 24]}
      />
    </>
  );
};

export default App;