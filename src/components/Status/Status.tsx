import "./Status.css";

interface StatusProps {
  status: "Alive" | "Dead" | "unknown";
}

const Status = (props: StatusProps) => {
  const { status } = props;

  return (
    <>
      <span className={`status ${status.toLowerCase()}`}></span>
      {status}
    </>
  );
};

export default Status;
