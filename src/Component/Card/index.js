import React from "react";
import {
  Author,
  CardContainer,
  Color,
  ColorPastille,
  ColorSection,
  HeaderCard,
  ImageCard,
  LeftSide,
  MainCard,
  MoneySection,
  Price,
  Quantity,
  Reference,
  RightSide,
  RightSideSecondRow,
  SecondRowBox,
  Separator,
  Title,
} from "./style";
import { imgDefault } from "../../Utils/constant";
import { currency } from "../../Utils/currency";

const Card = ({ data, globalData }) => {
  if (!data) {
    return <>Loading....</>;
  }

  return (
    <CardContainer>
      <MainCard>
        <LeftSide>
          <ImageCard src={data?.image || imgDefault} alt="img" />
        </LeftSide>
        <RightSide>
          <Title>{data?.titre}</Title>
          <Reference>{data?.reference_style}</Reference>
          <ColorSection>
          <ColorPastille color={"black" /* `${data?.color_name}` */} />
          <Color>{data?.color_name}</Color>
          </ColorSection>
          <Author>
            SA: <p>{/* {data?.sa} */} Amandine</p>
          </Author>
        </RightSide>
      </MainCard>
      <SecondRowBox>
        <RightSideSecondRow>
          <MoneySection>Quantity:<p>{data?.quantity}</p></MoneySection>
          <MoneySection>Price:<p>{data?.amount} {currency(globalData?.currency)}</p></MoneySection>
        </RightSideSecondRow>
      </SecondRowBox>
      <Separator />
    </CardContainer>
  );
};

export default Card;
