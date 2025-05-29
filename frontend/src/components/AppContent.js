import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { TableData } from "./TableData";

export const AppContent = ({ handleSubmit, inputValue, setInputValue }) => {
  return (
    <div className="w-75 mx-auto">
      <Form className="d-flex w-25 mb-2" onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="Enter file.csv"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="me-2"
        />
        <Button
          type="submit"
          style={{ background: "#7434eb" }}
          className="border-0"
        >
          Submit
        </Button>
      </Form>
      <TableData />
    </div>
  );
};
