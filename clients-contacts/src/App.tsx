import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { RoutesMain } from "./routes";
import { StyledLoading } from "./styles/loading";
import {ImSpinner6} from "react-icons/im"

function App() {
  const {globalLoading } = useContext(UserContext)
  return (
    <>
       {globalLoading ? (
        <StyledLoading>
          <ImSpinner6 className="loading" />
        </StyledLoading>
      ) : (
        <>
            <RoutesMain />
        </>
      )}
    </>
  )
}

export default App
