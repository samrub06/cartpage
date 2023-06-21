import React, { useEffect, useState } from "react";
import Card from "../../Component/Card";
import MainLayout from "../../Component/Layout";
import wechatpay from "../../icons/wechatpay.svg";
import aliPay from "../../icons/alipay.svg";
import StatusBox from "../../Component/StatusBox";
import { statusColor, statusTitle } from "../../Utils/status";
import account_user from "../../icons/account_user.svg";
import ButtonBox from "../../Component/ButtonBox";
import SnackBar from "../../Component/SnackBar";
import { currency } from "../../Utils/currency";
import {
  Icon,
  IconBox,
  IconPayment,
  TextBolded,
  TopSection,
  TotalSection,
} from "./style";
import Box from "../../Component/Box";
import {  useParams } from "react-router-dom";

const OrderPage = ({data}) => {
const {orderId}= useParams()
const [order, setOrder] = useState({})


useEffect(() => {
  setOrder(data.find((item) => item.orderId === orderId))
}, [orderId])



  if (!order) {
    return <>..Loading</>;
  }

  const renderCardList = () => {
    return order?.items?.map((element, i) => (
      <Card globalData={data} data={element} key={i} />
    ));
  };

  return (
    <MainLayout data={order}>
      <TopSection>
        <div>{order?.count} items</div>
        <Icon src={account_user} />
        <div>{order?.client?.name}</div>
        <div>
          <StatusBox color={"white"} backgroundColor={statusColor(order?.status)}>
            {statusTitle(order?.status)}
          </StatusBox>
        </div>
      </TopSection>

      {renderCardList()}
      <TotalSection>
        <Box justifyContent={"space-between"}>
          <TextBolded>Total {order?.count} Items : </TextBolded>
          <TextBolded>
            {order?.totalAmount} {currency(order?.currency)}
          </TextBolded>
        </Box>
        <Box justifyContent={"space-between"}>
          <IconBox>
            {" "}
            <IconPayment src={aliPay}></IconPayment> AliPay
          </IconBox>
          <StatusBox size="small" color={"white"} backgroundColor={"green"}>
            PAID
          </StatusBox>
        </Box>
        <Box justifyContent={"space-between"}>
          <IconBox>
            <IconPayment src={wechatpay}></IconPayment>WeChat Pay
          </IconBox>
          <StatusBox size="small" color={"white"} backgroundColor={"yellow"}>
            IN PENDING
          </StatusBox>
        </Box>
      </TotalSection>
      <div style={{ display: "flex", gap: "10px" }}>
        <ButtonBox color={"black"} size={"large"} backgroundColor={"grey"}>
          Cancel
        </ButtonBox>
        <ButtonBox color={"white"} size={"large"} backgroundColor={"blue"}>
          Continue
        </ButtonBox>
      </div>
      <SnackBar backgroundColor={"greyTransparent"}>
        Your Basket is in Progress, continue or cancel it
      </SnackBar>
    </MainLayout>
  );
};

export default OrderPage;
