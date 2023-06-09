import { Navigate } from "react-router-dom";
import Base from "./pages/base";
import Atom from "./pages/atom";
import OriginalContext from "./pages/original-context";
import ShallowEqual from "./pages/shallow-equal";
import Middleware from "./pages/middleware";
import type { RouteObject } from "react-router-dom";

type EnhancedRouteObject = RouteObject & {
  label: string;
};

export default [
  {
    path: "/base",
    label: "Base",
    element: <Base />,
  },
  {
    path: "/atom",
    label: "Atom",
    element: <Atom />,
  },
  {
    path: "/context",
    label: "Original Context",
    element: <OriginalContext />,
  },
  {
    path: "/shallowEqual",
    label: "Shallow Equal",
    element: <ShallowEqual />,
  },
  {
    path: "/middleware",
    label: "Middleware",
    element: <Middleware />,
  },
  {
    path: "*",
    element: <Navigate to="/base" replace />,
  },
] as EnhancedRouteObject[];

export type { EnhancedRouteObject };
