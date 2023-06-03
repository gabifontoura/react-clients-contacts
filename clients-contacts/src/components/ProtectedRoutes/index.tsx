import { useContext } from "react";
import { UserContext} from "../../providers/UserContext";
import { Outlet } from "react-router-dom";
import { ImSpinner6 } from "react-icons/im";
import { StyledLoading } from "../../styles/loading";


const ProtectedRoutes = () => {
  const { globalLoading } = useContext(UserContext);

  if (globalLoading) {
    return <div>Carregando...</div>
  }

  return <Outlet />;
};

export default ProtectedRoutes;