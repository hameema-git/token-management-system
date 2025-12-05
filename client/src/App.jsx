// client/src/App.jsx
import { Switch, Route } from "wouter";
import PlaceOrder from "./pages/home.jsx";
import StaffDashboard from "./pages/staff.jsx";
import TokenStatus from "./pages/status.jsx";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={PlaceOrder} />
      <Route path="/staff" component={StaffDashboard} />
      <Route path="/mytoken" component={TokenStatus} />
      <Route>404 Page Not Found</Route>
    </Switch>
  );
}
