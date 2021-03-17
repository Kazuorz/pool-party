import { confirmAlert } from "react-confirm-alert";
import {useCallback} from "react";

const useAlert = (deps = []) => {

  const show = useCallback((render) => {
    confirmAlert({
      customUI: render
    });
  }, [])

  return show;
};

export default useAlert;
