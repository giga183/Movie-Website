import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Home from "./pages/Home"
import { Routes, BrowserRouter, Route } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
