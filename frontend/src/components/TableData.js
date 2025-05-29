import Table from "react-bootstrap/Table";
import { TableItem } from "./TableItem";
import { useSelector } from "react-redux";
import { rowsFromFiles } from "../utils/rowsFromFiles";

export const TableData = () => {
  const files = useSelector((state) => state.files.data);
  const rows = rowsFromFiles(files);
  return (
    <Table responsive striped bordered>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 && (
          <tr>
            <td colSpan="4" className="text-center">
              No data available
            </td>
          </tr>
        )}
        {rows.map((row) => (
          <TableItem
            key={row.tex + row.number + row.hex}
            file={row.file}
            text={row.text}
            number={row.number}
            hex={row.hex}
          />
        ))}
      </tbody>
    </Table>
  );
};
