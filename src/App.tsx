import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Loader } from "./components/Loader";
import ErrorComponent from "./components/ErrorComponent";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

interface AppState {
  questions: any[];
  status: "loading" | "ready" | "error" | "active";
}

interface DataReceivedAction {
  type: "dataReceived";
  payload: any[];
}

interface DataFailedAction {
  type: "dataFailed";
}
interface StartAction {
  type: "start";
}

type Action = DataReceivedAction | DataFailedAction | StartAction;

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
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Action unknown");
  }
};

function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

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
        {status === "loading" && <Loader />}
        {status === "error" && <ErrorComponent />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question />}
      </Main>
    </div>
  );
}

export default App;
