import React from "react"
import { Provider } from "mobx-react"
import Store from "./src/services/store"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <Provider store={Store}>{element}</Provider>
