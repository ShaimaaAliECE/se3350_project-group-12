import React from "react";
const SizeEdit = ({formnum, setform,setsizes}) => {

    

     //size change form code
     
     const  handleSizeChange= (event)=>{
        event.preventDefault();
        var { size,range } = document.forms[0];
        let a= size.value;
        let b= range.value;
        setform(2);
        console.log(formnum)
        setsizes(a,b);
        
    }




    
        return (

            <div className="form">
            <form onSubmit={handleSizeChange}>
              <div className="input-container">
                  Enter the size of your array
                <input type="text" name="size" required />
                  Enter the max range of the numbers in your array
                <input type="text" name="range" required />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
            </form>
          </div> 

        )
    

}
export default SizeEdit
