import * as React from "react";

type ReactInput = React.ComponentPropsWithoutRef<"input">;

const KeyDown = {
  EnterCode: "Enter",
} as const;

export const useFilterSelect = (Init: string) => {
  const [Selected, setSelected] = React.useState<Set<string>>(
    Init ? new Set(Init.split(",")) : new Set()
  );

  const onChangeSize: ReactInput["onChange"] = (event) => {
    if (event.target.checked) {
      setSelected((currentVal) => new Set([...currentVal, event.target.value]));
    } else {
      setSelected((currentVal) => {
        currentVal.delete(event.target.value);
        return new Set(currentVal);
      });
    }
  };

  const onKeyDown: ReactInput["onKeyDown"] = (event) => {
    if (event.key === KeyDown.EnterCode) {
      const value = event.currentTarget.value;
      if (!event.currentTarget.checked) {
        setSelected((currentVal) => new Set([...currentVal, value]));
      } else {
        setSelected((currentVal) => {
          currentVal.delete(value);
          return new Set(currentVal);
        });
      }
    }
  };

  return {
    Selected,
    setSelected,
    onChangeSize,
    onKeyDown,
  };
};
