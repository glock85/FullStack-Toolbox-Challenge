import Spinner from "react-bootstrap/Spinner";

export const Loading = () => {
  return (
    <div className="d-flex flex-column justify-content-center vh-100">
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="secondary" />
      </div>
      <div className="text-center mt-3">
        <h5>Loading...</h5>
      </div>
    </div>
  );
};
