import React from "react";
const answerForm = ({handleSubmit,renderrightMessage,renderwrongMessage, answer, setAns}) => {




    const preHandleSubmit =(event)=>{
        event.preventDefault();
        //setAns(document.forms[0]); 
        var { answer } = document.forms[0];
        let a=answer.value
        console.log(a)
        handleSubmit(a+'');
        }





return(

<div className="login">
      <div className="login-form">
      <div className="form">
      <form onSubmit={preHandleSubmit}>
        <div className="input-container">
          <input type="text" name="answer" required />
          {renderwrongMessage("wrong")}
          {renderrightMessage("right")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
    </div>
</div>


)

}
export default answerForm