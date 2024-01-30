import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { getClient } from "./queryClient.ts";
import "./scss/index.scss";
import Gnb from "./components/gnb.tsx";

const queryClient = getClient();

async function enableMocking() {
  const { worker } = await import("./mock/browser");

  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Gnb />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
    // </React.StrictMode>
  );
});
