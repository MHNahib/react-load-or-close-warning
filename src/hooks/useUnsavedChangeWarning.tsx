import { useEffect } from "react";

const handleUnsavedEvent = (e: BeforeUnloadEvent, condition: boolean) => {
  if (condition) {
    e.preventDefault();
    e.returnValue = true;
  }
};

export const useUnsavedChangeWarning = (isUnsaved: boolean) => {
  useEffect(() => {
    window.addEventListener("beforeunload", (e) =>
      handleUnsavedEvent(e, isUnsaved)
    );
    return () =>
      window.removeEventListener("beforeunload", (e) =>
        handleUnsavedEvent(e, isUnsaved)
      );
  }, [isUnsaved]);
};
