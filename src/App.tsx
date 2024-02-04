import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

interface AppState {
  questions: any[];
  status: "loading" | "ready" | "error";
}

interface DataReceivedAction {
  type: "dataReceived";
  payload: any[];
}

interface DataFailedAction {
  type: "dataFailed";
}

type Action = DataReceivedAction | DataFailedAction;

const initialState: AppState = {
  questions: [],
  status: "loading",
};

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
