import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./_app";


function Dashboard() {
  const { } = useContext(AuthContext);
  const [btn1State, setBtn1State] = useState(true);
  const [btn2State, setBtn2State] = useState(true);

  const handleBtn1Click = () => {
    setBtn1State(!btn1State);
  }

  const handleBtn2Click = () => {
    setBtn2State(!btn2State);
  }

  useEffect(()=>{
    
    if(btn1State && btn2State){
      document.querySelector('.msg:nth-of-type(1)').style.display = "block";

      document.querySelector('.msg:nth-of-type(2)').style.display = "none";

      document.querySelector('.msg:nth-of-type(3)').style.display = "none";
    }else if(btn1State || btn2State){
        document.querySelector('.msg:nth-of-type(1)').style.display = "none";

        document.querySelector('.msg:nth-of-type(2)').style.display = "block";

        document.querySelector('.msg:nth-of-type(3)').style.display = 'none';
    }else {
      document.querySelector('.msg:nth-of-type(1)').style.display = "none";

      document.querySelector(".msg:nth-of-type(2)").style.display = "none";

      document.querySelector(".msg:nth-of-type(3)").style.display = "block";
    }
  }, [btn1State, btn2State]);



  return (
    <div id="dashboardPage">
      <button id="btn1" onClick={handleBtn1Click} >Button 1</button>
      <button id="btn2" onClick={handleBtn2Click}>Button 2</button>
      <div className="msg" style={{display: 'none'}}>Both are true</div>
      <div className="msg" style={{display: 'none'}}>One on them is false</div>
      <div className="msg" style={{display: 'none'}}>Both are false</div>

    </div>
  );
}
export default Dashboard;
