import { AppRoute } from "../../const";
import { useAppDispatch } from "../../hooks";
import { redirectToRoute } from "../../store/action";

function Header(): JSX.Element {
    const dispatch = useAppDispatch();
    return (
        <header className="forum-header">
            <h1
                onClick={() => dispatch(redirectToRoute(AppRoute.Main))}>
                Forum
            </h1>
        </header>
    );
  };
  
  export default Header;