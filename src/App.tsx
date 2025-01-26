import { BrowserRouter } from "react-router"
import { Router } from "./Router"
import "./styles/globals.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ReactQueryDevtools  initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
