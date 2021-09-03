import { Switch, Route } from "react-router-dom";
import { Carrinho } from "./views/Carrinho";
import { Home } from "./views/Home";

export const Routes = () => (
    <main>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/carrinho">
                <Carrinho />
            </Route>
        </Switch>
    </main>
)