import { useState, useEffect } from "react";
import { ButtonContainer } from "./style";

const ButtonBox = ({ size,onClick, backgroundColor,color, children  }) => {
  const [width, setWidth] = useState("");

  function handleWidth() {
    switch (size) {
      case "large":
        setWidth("100%");
        break;
      case "medium":
        setWidth("fit-content");
        break;
      default:
        setWidth(size);
        break;
    }
  }

  useEffect(() => {
    handleWidth();
  }, [size]);


  return (
    <ButtonContainer onClick={onClick} color={color} backgroundColor={backgroundColor} width={width}>
      {children}
    </ButtonContainer>
  );
};

export default ButtonBox;
