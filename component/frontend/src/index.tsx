import React from "react"
import ReactDOM from "react-dom"
import MyComponent from "./MyComponent"
import { StreamlitProvider } from "./hook"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <MyComponent />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)