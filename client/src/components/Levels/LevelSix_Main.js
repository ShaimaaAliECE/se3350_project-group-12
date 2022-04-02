import React, {useState, useEffect} from 'react'
import "../Login.css";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

//you will need to use command 'npm install react-html-parser'and 'npm install buffer' to install additional packages

const LevelSix_Main = () => {

  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [len, setLength] = useState(10);
  const [numRange, setnumRange] = useState(10);

  const [blocks, setBlocks] = useState([]);
  const [algo, setAlgo] = useState('Merge');
  const [nextCounter,setNC]=useState(0);
  const [mergeCounter, setmergeCounter] = useState(0);
  const [instruct, setInst]=useState('');
  const [answer, setAns]=useState('');
  const [done, setDone]=useState('');
  const [brief]=useState('Select a sub array and enter the segment you expect to be placed in the next step below');
  const [Messages, setErrorMessages] = useState({});

  const [database] = useState({
      "k1": "start"
    });
  const [errors] = useState({
      wrong: "wrong answer :(",
      right: "correct!"
    });

  const [contents, setContent] = useState('<div>placehold</div>');
  const [selected, setselect] = useState(-1);
  const [subBlocks,setSubBlocks]= useState([])
    







  

  useEffect(() => {
    //generateRandomArray(len)
    generateRandomArray(len,numRange)
    let a0=blocks
    mergesortArray(a0,0,(len-1));
    
    console.log (contents);
  
  }, [len, level, lives, algo])

  /*
  const next = ()=>{//wip
      
  setNC(nextCounter+1)
  storesubblocks(blocks, nextCounter)
      
  }
  */

  var time, timeSite;
    window.onload = function(){
        time = new Date();
    }
    window.onbeforeunload = function(){
        timeSite = new Date()-time;
        window.localStorage['timeSite'] = timeSite;
    }


  

  //--------------------------------------------------------------------------------------------------------------------------------------------------------
  //extra copy of merge sort
  //addapted to increment through the steps of merge sort and fill out the subblocks arrays
  /*
    //function to store thr randomly generated values into sub arrays to be viwed by the user when needed
    const storeArray= (source, destination, low,high)=>{
        for(let i = 0; i<((high-low)+1);i++)
        {destination[i]= source[low+i]}
    }
    */
    

    
    let splitcounter=0
    let stepcounter=0
//an actual merge sort algrithim, im stuck trying to get it to translate properly to a graphic so this will not be included in this release
    const  answerArray= (arrayOrigin, start, end, arrayAt) => {//wip
        if (start==end )
        {
        return
        }
        let split = Math.floor((start+end)/2)
        if(stepcounter<nextCounter){
        stepcounter++;
        splitcounter++;
        storeArray(arrayOrigin,subBlocks[splitcounter],start,split)
        answerArray(arrayOrigin, start, split,subBlocks[splitcounter])
        }

        if(stepcounter<nextCounter){
        stepcounter++;
        splitcounter++;
        storeArray(arrayOrigin,subBlocks[splitcounter],split+1,end)
        answerArray(arrayOrigin, split+1,end,subBlocks[splitcounter])
        }

        if(stepcounter<nextCounter){
        stepcounter++;
        merge(arrayOrigin,start,split,end,arrayAt)
        }
        
    }
    

    
   const merge= (arrayph, start,split,end,store) =>{//wip
    let l1= split-start+1
    let l2= end- split
    let l3= end-start+1
    const a1=[];
    const a2=[];
    for(let i = 0; i<l1;i++)
    {a1[i]= arrayph[start+i]}
    for(let i = 0; i<l2;i++)
    {a2[i]= arrayph[split+1+i]}
    let i = 0;
    let j = 0;
    let k = start;
    while (i < l1 && j < l2) {
        if (a1[i] <= a2[j]) {
            arrayph[k] = a1[i];
            i++;
        } else {
            arrayph[k] = a2[j];
            j++;
        }
        k++;
    }
  
    while (i < l1) {
        arrayph[k] = a1[i];
        i++;
        k++;
    }
  
    while (j < l2) {
        arrayph[k] = a2[j];
        j++;
        k++;
    }
    for(let i = 0; i<l3;i++)
    {store[i]= arrayph[start+i]}
    
  
  }
    
   //-----------------------------------------------------------------------------------------------------------------------
   //form code

  const handleSubmit = (event) => {
    event.preventDefault();
    let a0=blocks
    storeArray(a0,subBlocks[0],0,len-1)

    answerArray(a0,0,len-1,subBlocks[0]);
    //console.log(subBlocks[selected].toString());
    if(!(selected==-1)){
      database.k1 = (subBlocks[selected].toString());
    }
    var { answer } = document.forms[0];
    answerArray(a0,0,len-1,subBlocks[0]);
    console.log(nextCounter);
    if (database.k1 !== answer.value) {
      setErrorMessages({ name: "wrong", message: errors.wrong });
      //stepBack1();
      //stepBack2();
    } 
    else {
      setErrorMessages({ name: "right", message: errors.right });
      setNC(nextCounter+1);
      //answerArray(a0,0,len-1,subBlocks[0]);
      //console.log(subBlocks[selected].toString());
      next();
    };
  };

  const renderwrongMessage = (name) =>
    name === Messages.name && (
      <div className="wrong">{Messages.message}</div>
    );
  const renderrightMessage = (name) =>
    name === Messages.name && (
      <div className="right">{Messages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
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
  );

  const renderrender =(
    <div className="login">
      <div className="login-form">
          {renderForm}
        </div>
    </div>
  );

  //size change form code
  const handleSizeChange= (event)=>{
    event.preventDefault();
    var { size,range } = document.forms[0];
    
    //
    
    let a= size.value;
    let b= range.value;
    console.log(parseInt(a,10));
    setLength(parseInt(a,10));
    setnumRange(parseInt(a,10));

    generateRandomArray(len,numRange)
    let a0=blocks
    mergesortArray(a0,0,(len-1));
    
}

  const sizeChange=(
   
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
    

  );
  
    


//--------------------------------------------------------------------------------------------------------
//code for procedural generation

//the last button presed us stored in the use state "selected", 
//the contents of the table comes from the sub arrays stored in "subBlocks", starting from index 0 going to whatever the size of the table is
//you can click a table and "selected" will be set to the index of its coresponding table
//all thats left is to set up the function that determines the content of each table based on the step and read from the tables and selected in the form

//function to add arrays into subblocks to be accesed systematicaly
const addBlocks=(namenumber)=>{

  subBlocks.push(window['name'+namenumber]= []);
  
  
  }
  
  //button handelling
  const selectdest=(num)=> {
    console.log ('flaga')
    console.log (num);
    setselect(num);
    console.log (selected);
   }
   //checks if a number is an int so i can use the text element of my buttons so select positions in arrays
    const checkparseint=(num)=>{
      const parsed = parseInt(num, 10);
      if (isNaN(parsed)) { return 0; }
      return parsed ;
    }
  
   //seting the event on the auto gened buttons cause react html parser is mean to me
   function parserTransform(node){
     
    if (node.type === 'tag' && node.name === 'button') {
      let i = node.children[0].data
      let j= checkparseint(i);
      return <custbutton onClick={()=>selectdest(j)}><ul id = 'horizontal-list'>{subBlocks[j].map(block => (<li key = {block}>{block}</li>))}</ul></custbutton>; 
    }
   }
  
  
    
    

  //a mergesort styled algorythim,used to auto generate an array in the desired shape 
  //counter counts the index of the created button and content stores the html string to be used.
  let counter =0;
    let content='<b><button onClick={console.log('+counter+')}>'+counter+'</button></b>';
    addBlocks();
  const mergesortArray= (arrayph, start, end) => {//wip
    
    if (start==end)
    {
    
    return
    }
    content+= '<custom>'
    
    content+= '<b>'
    counter ++;
    addBlocks();
    content+= '<button onClick={console.log('+counter+')}>'+counter+'</button>'
    
    let split = Math.floor((start+end)/2)
    mergesortArray(arrayph, start, split)
    content+= '</b>'
   
    content+= '<b>'
    counter++
    addBlocks();
    content+='<button onClick={selectdest('+counter+')}>'+counter+'</button>'
    
    mergesortArray(arrayph, split+1,end)
    content+= '</b>'
    content+='</custom>'
    
    //merge(arrayph, start,split,end)
    setContent(content);
    
  }
  
  

  //function that runs when nex is pressed, used for testing here
const next = ()=>{
  //generateRandomArray(len);
  
  //mergesortArray(a0,0,9);
  //console.log (contents);
  //console.log (selected);
    //setNC(nextCounter+1);
    let a0=blocks
    answerArray(a0,0,len-1,subBlocks[0]);
    //generateRandomArray(len,numRange)
    //addBlocks();
    


  console.log (nextCounter);
  console.log (blocks);
  //storeArray(a0,subBlocks[0],0,5)
  console.log (subBlocks);
}

 
 //function to store the randomly generated values into sub arrays to be viewed by the user when needed
 const storeArray= (source, destination, low,high)=>{
  for(let i = 0; i<((high-low)+1);i++)
  {destination[i]= source[low+i]}  
}

//generate the random arrya for the user to work with
    //edited so that it also takes a max numberfor an size len array with numbers from 1-max
    const generateRandomArray = (len, max) => {
      //fills array with every number from 1 to array length
    const largeArray = Array.from(Array(max + 1).keys()).slice(1)
		const randomArray =[]
    //randomly swaps numbers in large array
		for (let i = max-1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i - 1))
			const temp = largeArray[i]

			largeArray[i] = largeArray[randomIndex]
			largeArray[randomIndex] = temp
		}
    //console.log(largeArray);
    //selects the first 10 numbers form large array to put into a smaller one
    for(let i=0;i<len;i++){
      randomArray[i]=largeArray[i]
    }
    //console.log(randomArray);
		//set the blocks to the generated random array
		setBlocks(randomArray)
	}






//---------------------------------------------------------------------------------------------------------

    return (
    <div>

      <b>
          <div id = 'centered'><p>{sizeChange}</p></div>
        <div> <h2>Enter 'start' to Start</h2> </div>
        <h2>{brief}</h2>
      </b>

      <div id = 'centered'>
            <p>
            {renderrender}
            </p>
      </div>

      <div>

          <div className = 'question' id = 'centered'>
          {answer}
          </div>

          <div className = 'question' id = 'centered'>
          {done}
          </div>
          
          
          
          <div id = 'centered2'>click a subarray to select it as the input destination {ReactHtmlParser(contents,{transform: parserTransform})}</div>
          
      </div>
    </div>
    )
  }

export default LevelSix_Main