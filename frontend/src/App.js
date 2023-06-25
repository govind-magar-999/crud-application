import { Form } from "./components/Form";
import { UserList } from "./components/UserList";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Form />
      <UserList />
      <Toaster />
    </div>
  );
}

export default App;
