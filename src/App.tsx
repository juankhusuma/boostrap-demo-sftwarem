import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

interface Todo {
  activity: string;
  due: Date;
}

function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState<Todo[]>([
    {
      activity: "Do the dishes",
      due: new Date(),
    },
  ]);
  const [textInput, setTextInput] = useState<string>("");

  return (
    <div className="App">
      <div>
        <Form.Label htmlFor="activity">Activity</Form.Label>
        <Form.Control
          type="text"
          id="activity"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <Button
          onClick={() => {
            setTodo((todo) => [
              ...todo,
              { activity: textInput, due: new Date() },
            ]);
            setTextInput("");
          }}
          variant="primary"
        >
          Add Item
        </Button>
        <Table size="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            {todo.map((item) => (
              <tr>
                <td>{item.activity}</td>
                <td>{item.due.toISOString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
