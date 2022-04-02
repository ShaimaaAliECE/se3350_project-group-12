import React, {useState, useEffect} from 'react'
import "../Login.css";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

//you will need to use command 'npm install react-html-parser'and 'npm install buffer' to install additional packages

const LevelFive_Main = () => {

  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [len, setLength] = useState(10);
  const [blocks, setBlocks] = useState([]);
  const [algo, setAlgo] = useState('Merge');
  const [nextCounter,setNC]=useState(0);
  const [mergeCounter, setmergeCounter] = useState(0);
  const [instruct, setInst]=useState('');
  const [answer, setAns]=useState('');
  const [done, setDone]=useState('');
  const [brief]=useState('Enter the segment of the array you expect to occur in the next step below: ');
  const [Messages, setErrorMessages] = useState({});

  const [database] = useState({
      "k1": "start"
    });
  const [errors] = useState({
      wrong: "wrong answer :(",
      right: "correct!"
    });

  const [contents, setContent] = useState('<div>placehold</div>');
  const [selected, setselect] = useState(0);
  const [subBlocks,setSubBlocks]= useState([])
    







  

  useEffect(() => {
    //generateRandomArray(len)
    generateRandomArray(len,10)
    addBlocks();
    let a0=blocks
    storeArray(a0,subBlocks[0],0,len-1)
    
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
  /*
    //function to store thr randomly generated values into sub arrays to be viwed by the user when needed
    const storeArray= (source, destination, low,high)=>{
        for(let i = 0; i<((high-low)+1);i++)
        {destination[i]= source[low+i]}
    }
    */

    /*
//an actual merge sort algrithim, im stuck trying to get it to translate properly to a graphic so this will not be included in this release
    const mergesortArray= (arrayph, start, end) => {//wip
        if (!start<end )
        {
        return
        }
        setmergeCounter(mergeCounter+1)

        let split = Math.floor((start+end)/2)
        mergesortArray(arrayph, start, split)

        mergesortArray(arrayph, split+1,end)

        merge(arrayph, start,split,end)
        
    }
    */

    /*
    const merge= (arrayph, start,split,end) =>{//wip
        let l1= split-start+1
        let l2= end- split
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
    }
    */
   //-----------------------------------------------------------------------------------------------------------------------
   //form code

  const handleSubmit = (event) => {
    event.preventDefault();

    var { answer } = document.forms[0];

    if (database.k1 !== answer.value) {
      setErrorMessages({ name: "wrong", message: errors.wrong });
    } 
    else {
      setErrorMessages({ name: "right", message: errors.right });
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

//--------------------------------------------------------------------------------------------------------
//code for procedural generation

//the last button presed us stored in the use state "selected", 
//the contents of the table comes from the sub arrays stored in "subBlocks", starting from index 0 going to whatever the size of the table is
//you can click a table and "selected" will be set to the index of its coresponding table
//all thats left is to set up the function that determines the content of each table based on the step and read from the tables and selected in the form

//function to add arrays into subblocks to be accesed systematicaly
const addBlocks=(namenumber)=>{

  subBlocks.push(window['name'+namenumber]= [1,2,3]);
  
  
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
  
  
    
    //generateRandomArray(len);
    //mergesortArray(blocks,0,9);

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
  
  const merge= (arrayph, start,split,end) =>{//wip
    let l1= split-start+1
    let l2= end- split
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
    
  
  }

  //function that runs when nex is pressed, used for testing here
const next = ()=>{
  //generateRandomArray(len);
  let a0=blocks
  //mergesortArray(a0,0,9);
  //console.log (contents);
  //console.log (selected);
  addBlocks();
  
  console.log (subBlocks);
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

      <div id='centered'>
        <h2>{brief}</h2>
      </div>

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
          
          <div id = 'centered'>
                <p>
                <button onClick={next}>
                    NEXT
                </button>
                </p>
                
                
            </div>
          
          <div id = 'centered2'>hello{ReactHtmlParser(contents,{transform: parserTransform})}</div>
          
      </div>
    </div>
    )
  }

export default LevelFive_Main
