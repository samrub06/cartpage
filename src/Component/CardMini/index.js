import { Icon } from "../../Pages/OrderPage/style";
import { imgDefault } from "../../Utils/constant";
import { statusColor, statusTitle } from "../../Utils/status";
import Box from "../Box";
import { Separator } from "../Card/style";
import StatusBox from "../StatusBox";
import { BoxExtended, ImgBox, Title, TitleGrey } from "./style";
import account_user from "../../icons/account_user.svg";
import {currency} from "../../Utils/currency"
import {formatDate} from "../../Utils/date"
import { useNavigate } from "react-router-dom";

const CardMini = ({ data,status }) => {
  const navigate = useNavigate();

  if (!data?.items) {
    return <>Loading</>;
  }

  return (
    <>
      <BoxExtended onClick={()=> navigate(`/order/${data.orderId}`)}>
        <div>
          <ImgBox src={data?.items[0]?.image || imgDefault} />
        </div>
        <div>
          <Box width={"100%"} justifyContent={"space-between"}>
            <Title>
              <div>{data?.title}</div>
            </Title>
            <StatusBox
              backgroundColor={statusColor(data?.status)}
              color={"white"}
            >
              {statusTitle(data?.status)}
            </StatusBox>
          </Box>
          <Box>
            <TitleGrey color="grey">{Number(data?.totalAmount).toLocaleString()} {currency(data.currency)} | {formatDate(data?.lastModifiedDate)} </TitleGrey>
          </Box>
          <Box>
            <Box alignItems={"center"} gap={"6px"}>
              <div>
                <Icon src={account_user} />
              </div>
              <TitleGrey>{data?.client?.name}</TitleGrey>
            </Box>
          </Box>
        </div>
      </BoxExtended>
      <Separator />
    </>
  );
};
export default CardMini;
