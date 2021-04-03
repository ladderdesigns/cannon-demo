import { useEffect } from "react";
/**
 * useKeyPress
 * @param {string} key - the name of the key to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */
export default function useKeyPress(
  key: String,
  action: Function,
  data: Object
) {
  useEffect(() => {
    function onKeyup(e: any) {
      if (e.key === key) action(data);
    }
    window.addEventListener("keyup", onKeyup);
    return () => window.removeEventListener("keyup", onKeyup);
  }, []);
}
