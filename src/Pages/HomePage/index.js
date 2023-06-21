import CardMini from "../../Component/CardMini"
import MainLayout from "../../Component/Layout"
import Tabs, { TabContent } from "../../Component/Tabs"

const HomePage = ({data}) => {
  console.log('data',data);
  
  return (
    <MainLayout title={"In-Store History"}>
        <Tabs 
        title1={"Sales (DSW)"}
        title2={"Till"}
  
        >
      <TabContent title="Tab 1" >
      <div>
        {data
        .filter((element) => element.status !== "SENT_TO_POS")
        .map((element, i)=>{
            return <CardMini status={"sales"} data={element} key={i} />
        })}
        </div>
      </TabContent>
      <TabContent title="Tab 2">
      <div>
        {data
        .filter((element) => element.status === "SENT_TO_POS")
        .map((element, i)=>{
            return <CardMini status={"Till"} data={element} key={i} />
        })}
        </div>
      </TabContent>
        </Tabs>
       
    </MainLayout>
  )
}
export default HomePage