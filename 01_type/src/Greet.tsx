type Status =
  | "loading"
  | "success"
  | "error";

type GreetProps = {
  title: string;

  name?: string;

  age?: number;

  isLoggedin?: boolean;

  user?: {
    first: string;
    last: string;
  };

  skills?: string[];

  id?: string | number;

  message?: string;

  tupleData?: [string, number];

  status?: Status;
};

const Greet = (props: GreetProps) => {

  const statusStyle = {
    background: props.isLoggedin ? "green" : "red",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    marginBottom: "10px",
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "20px",
      }}
    >

      <h2>{props.title}</h2>

      {/* STRING */}
      {props.name && (
        <h3>Name: {props.name}</h3>
      )}

      {/* NUMBER */}
      {props.age && (
        <h3>Age: {props.age}</h3>
      )}

      {/* BOOLEAN */}
      {props.isLoggedin !== undefined && (
        <>
          <div style={statusStyle}></div>

          <h3>
            {props.isLoggedin
              ? "User Logged In"
              : "User Offline"}
          </h3>
        </>
      )}

      {/* OBJECT */}
      {props.user && (
        <h3>
          Full Name:
          {" "}
          {props.user.first}
          {" "}
          {props.user.last}
        </h3>
      )}

      {/* ARRAY */}
      {props.skills && (
        <>
          <h3>Skills:</h3>

          {props.skills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </>
      )}

      {/* UNION */}
      {props.id && (
        <h3>ID: {props.id}</h3>
      )}

      {/* OPTIONAL */}
      {props.message && (
        <h3>Message: {props.message}</h3>
      )}

      {/* TUPLE */}
      {props.tupleData && (
        <h3>
          Tuple:
          {" "}
          {props.tupleData[0]}
          {" - "}
          {props.tupleData[1]}
        </h3>
      )}

     
      {props.status === "loading" && (
        <h2>Loading...</h2>
      )}

      {props.status === "success" && (
        <h2>Success...</h2>
      )}

      {props.status === "error" && (
        <h2>Error...</h2>
      )}

    </div>
  );
};

export default Greet;