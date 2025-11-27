import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, wrapperId = "portal-root" }) => {
  const [wrapperElement, setWrapperElement] = useState(null);

  useEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      element = document.createElement("div");
      element.setAttribute("id", wrapperId);
      document.body.appendChild(element);
      systemCreated = true;
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default Portal;
