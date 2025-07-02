import { useState } from "react";
import "../assets/app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/loader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-8">
      <Loader className="p-10" />
      <div className="card">
        <Button onClick={() => setCount((c) => c + 1)}>count is {count}</Button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
