import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./pages/WatchPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />
        },
      ]
    },
  ]);

  return (
    <Provider store={store}>
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
    </Provider>
  );
}
export default App;
