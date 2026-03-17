import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getProfileByPath } from "../data/profiles.js";

export default function useActiveProfile() {
  const { pathname } = useLocation();

  return useMemo(() => getProfileByPath(pathname), [pathname]);
}
