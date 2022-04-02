import React, {useState, useEffect} from 'react'
import "../Login.css";
import Timer from './Timer'
import WinnerLoser from './WinnerLoser'

const LevelTemplate = ({lives, setLives, level, setLevel}) => {

  const [len, setLength] = useState(10);
  const [numRange, setnumRange] = useState(20);
  const [blocks, setBlocks] = useState([]);
  const [subblocksa, setBlocksa] = useState([]);
  const [subblocksb, setBlocksb] = useState([]);
  const [subblocksc, setBlocksc] = useState([]);
  const [subblocksd, setBlocksd] = useState([]);
  const [subblockse, setBlockse] = useState([]);
  const [subblocksf, setBlocksf] = useState([]);
  const [subblocksg, setBlocksg] = useState([]);
  const [subblocksh, setBlocksh] = useState([]);
  const [subblocksi, setBlocksi] = useState([]);
  const [subblocksj, setBlocksj] = useState([]);
  const [subblocks11, setBlocks11]= useState([]);
  const [subblocks12, setBlocks12]= useState([]);
  const [subblocks13, setBlocks13]= useState([]);
  const [subblocks14, setBlocks14]= useState([]);
  const [subblocks15, setBlocks15]= useState([]);
  const [subblocks16, setBlocks16]= useState([]);
  const [subblocks17, setBlocks17]= useState([]);
  const [subblocks18, setBlocks18]= useState([]);
  const [algo, setAlgo] = useState('Merge');
  const [nextCounter,setNC]=useState(0);
  const [mergeCounter, setmergeCounter] = useState(0);
  const [instruct, setInst]=useState('');
  const [answer, setAns]=useState('');
  const [startmsg, setStartMsg] = useState('enter "start" in the field above first, and then the first segment of the array!');
  const [done, setDone]=useState('');
  const [brief]=useState('Enter the segment of the array you expect to occur in the next step in the format "1,2,3,4,5": ');
  const [Messages, setErrorMessages] = useState({});
  const [database] = useState({
    "k1": "start"
    });
    const [errors] = useState({
      wrong: "wrong answer :(",
      right: "correct!"
    });
    
    const generateRandomArray = (len, max=20) => {
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

  useEffect(() => {generateRandomArray(len,numRange)}, [len, level, lives, algo])

  const next = ()=>{//wip
      
  setNC(nextCounter+1)
  storesubblocks(blocks, nextCounter)
      
  }

  var time, timeSite;
    window.onload = function(){
        time = new Date();
    }
    window.onbeforeunload = function(){
        timeSite = new Date()-time;
        window.localStorage['timeSite'] = timeSite;
    }

  const storesubblocks= (a1, nextCounter)=>{
      let a2=[];
      let a3=[];
      let a4=[];
      let a8=[]; 
      let a11=[];
      let a12=[];
      let a13=[];
      let a17=[];

    let inst = '';


  storeArray(a1,a2,0,4);
  database.k1 = (a2.toString());
  setAns(database.k1);

  if(nextCounter==1){
    inst='first the first half of the array is copied into a sub array'
    setInst(inst); 
    storeArray(a1,a2,0,4);
    setBlocksa(a2);  

    storeArray(a1,a3,0,2);
    database.k1 = (a3.toString());
    setAns(database.k1);
  } 
  else
  if(nextCounter==2){  
    inst='this array is then split in half until the resulting array is length 1'
    setInst(inst); 
    storeArray(a1,a3,0,2);
    setBlocksb(a3);  

    storeArray(a1,a4,0,1);
    database.k1 = (a4.toString());
    setAns(database.k1);
  }
  if(nextCounter==3){
    storeArray(a1,a4,0,1);
    setBlocksc(a4);  

    let a5=[];
    storeArray(a1,a5,0,0);
    database.k1 = (a5.toString());
    setAns(database.k1);
  }
  if(nextCounter==4){
    inst='this array is then split in half until the resulting array is length 1'
    setInst(inst); 
    let a5=[];
    storeArray(a1,a5,0,0);
    setBlocksd(a5);

    let a6=[];
    storeArray(a1,a6,1,1);
    database.k1 = (a6.toString());
    setAns(database.k1);
  }
  if(nextCounter==5){
    inst='the other half of the array is then put into a sub array'
    setInst(inst); 
    let a6=[];
    storeArray(a1,a6,1,1);
    setBlockse(a6);

    merge(a1,0,0,1);
    storeArray(a1,a4,0,1);
    database.k1 = (a4.toString());
    setAns(database.k1);
  }
  if(nextCounter==6){
    inst='these 2 sub arrays are then sorted and merged into the previous array, this array is now sorted'
    setInst(inst);
    //first merge
    merge(a1,0,0,1);
    storeArray(a1,a4,0,1);
    setBlocksc(a4);

    let a7=[];
    storeArray(a1,a7,2,2);
    database.k1 = (a7.toString());
    setAns(database.k1);
  }
  if(nextCounter==7){
    inst='After merging one sub array the other half of the newest unsorted array is then put into a sub array, the length of this array is one so its finished'
    setInst(inst);
    let a7=[];
    storeArray(a1,a7,2,2);
    setBlocksf(a7);

    merge(a1,0,1,2);
    storeArray(a1,a3,0,2);
    database.k1 = (a3.toString());
    setAns(database.k1);
  }
  if(nextCounter==8){
    //second merge
    inst='these 2 sub arrays are then sorted and merged into the previous array'
    setInst(inst);
    merge(a1,0,1,2);
    storeArray(a1,a3,0,2);    
    setBlocksb(a3);  

    storeArray(a1,a8,3,4);
    database.k1 = (a8.toString());
    setAns(database.k1);
  }
  if(nextCounter==9){
    inst='After merging one sub array the other half of the newest unsorted array is then put into a sub array'
    setInst(inst);
    storeArray(a1,a8,3,4);
    setBlocksg(a8); 

    let a9=[];
    storeArray(a1,a9,3,3);
    database.k1 = (a9.toString());
    setAns(database.k1);
  }
  if(nextCounter==10){
    inst='this array is then split in half until the resulting array is length 1'
    setInst(inst); 
    let a9=[];
    storeArray(a1,a9,3,3);
    setBlocksh(a9);

    let a10=[];
    storeArray(a1,a10,4,4); 
    database.k1 = (a10.toString());  
    setAns(database.k1);
  }
  if(nextCounter==11){
    inst='the other half of the  array is then put into a sub array'
    setInst(inst);
    let a10=[];
    storeArray(a1,a10,4,4);
    setBlocksi(a10);

    merge(a1,3,3,4);
    storeArray(a1,a8,3,4); 
    database.k1 = (a8.toString()); 
    setAns(database.k1);
  }
  if(nextCounter==12){
    inst='these 2 sub arrays are then sorted and merged into the previous array, this array is now sorted'
    setInst(inst);
    merge(a1,3,3,4);
    storeArray(a1,a8,3,4);  
    setBlocksg(a8); 

    merge(a1,0,2,4);
    storeArray(a1,a2,0,4);
    database.k1 = (a2.toString());
    setAns(database.k1);
  }
  if(nextCounter==13){
    inst='these 2 sorted arrays are merged into their parent array and sorted'
    setInst(inst);
    merge(a1,0,2,4);
    storeArray(a1,a2,0,4);
    setBlocksa(a2);

    storeArray(a1,a11,5,9);
    database.k1 = (a11.toString());
    setAns(database.k1);
  }
  if(nextCounter==14){
    inst='The original array is now the olldest unsorted array so its unsorted half is taken and put into a sub array'
    setInst(inst);
    storeArray(a1,a11,5,9);
    setBlocksj(a11);

    storeArray(a1,a12,5,7);
    database.k1 = (a12.toString());
    setAns(database.k1);
  }
  if(nextCounter==15){
    inst='this array is then split in half until the resulting array is length 1'
    setInst(inst);
    storeArray(a1,a12,5,7);
    setBlocks11(a12);

    storeArray(a1,a13,5,6);
    database.k1 = (a13.toString());
    setAns(database.k1);
  }
  if(nextCounter==16){
    storeArray(a1,a13,5,6);
    setBlocks12(a13); 

    let a14=[];
    storeArray(a1,a14,5,5);
    database.k1 = (a14.toString());
    setAns(database.k1);
  }
  if(nextCounter==17){
    let a14=[];
    storeArray(a1,a14,5,5);
    setBlocks13(a14);

    let a15=[];
    storeArray(a1,a15,6,6);
    database.k1 = (a15.toString());
    setAns(database.k1);
  }
  if(nextCounter==18){  
    inst='the other half of the array is then put into a sub array'
    setInst(inst);
    let a15=[];
    storeArray(a1,a15,6,6);
    setBlocks14(a15);

    merge(a1,5,5,6);
    storeArray(a1,a13,5,6);
    database.k1 = (a13.toString());
    setAns(database.k1);
  }
  if(nextCounter==19){
    inst='these 2 sub arrays are then sorted and merged into the previous array, this array is now sorted'
    setInst(inst);
    merge(a1,5,5,6);
    storeArray(a1,a13,5,6);
    setBlocks12(a13);

    let a16=[];
    storeArray(a1,a16,7,7);
    database.k1 = (a16.toString());
    setAns(database.k1);
  }
  if(nextCounter==20){
    inst='After merging one sub array the other half of the newest unsorted array is then put into a sub array, the length of this array is one so its finnished'
    setInst(inst);
    let a16=[];
    storeArray(a1,a16,7,7);
    setBlocks15(a16); 

    merge(a1,5,6,7);
    storeArray(a1,a12,5,7);
    database.k1 = (a12.toString());
    setAns(database.k1);
  }
  if(nextCounter==21){
    inst='these 2 sub arrays are then sorted and merged into the previous array'
    setInst(inst);
    merge(a1,5,6,7);
    storeArray(a1,a12,5,7);
    setBlocks11(a12);

    storeArray(a1,a17,8,9);
    database.k1 = (a17.toString());
    setAns(database.k1);
  }
  if(nextCounter==22){
    inst='After merging one sub array the other half of the newest unsorted array is then put into a sub array'
    setInst(inst);
    storeArray(a1,a17,8,9);
    setBlocks16(a17); 

    let a18=[];
    storeArray(a1,a18,8,8);
    database.k1 = (a18.toString());
    setAns(database.k1);
  }
  if(nextCounter==23){
    inst='this array is then split in half until the resulting array is length 1'
    setInst(inst);
    let a18=[];
    storeArray(a1,a18,8,8);
    setBlocks17(a18); 

    let a19=[];
    storeArray(a1,a19,9,9);
    database.k1 = (a19.toString());
    setAns(database.k1);
  }
  if(nextCounter==24){
    inst='the other half of the array is then put into a sub array'
    setInst(inst);
    let a19=[];
    storeArray(a1,a19,9,9);
    setBlocks18(a19); 

    merge(a1,8,8,9);
    storeArray(a1,a17,8,9);
    database.k1 = (a17.toString());
    setAns(database.k1);
  }
  if(nextCounter==25){
    inst='these 2 sub arrays are then sorted and merged into the previous array, this array is now sorted'
    setInst(inst);
    merge(a1,8,8,9);
    storeArray(a1,a17,8,9);
    setBlocks16(a17); 

    merge(a1,5,7,9);
    storeArray(a1,a11,5,9);
    database.k1 = (a11.toString());
    setAns(database.k1);
  }
  if(nextCounter==26){
    inst='these 2 sorted arrays are merged into their parent array and sorted'
    setInst(inst);
    merge(a1,5,7,9);
    storeArray(a1,a11,5,9);
    setBlocksj(a11);

    merge(a1,0,4,9);
    database.k1 = (a1.toString());
    setAns(database.k1);
  }
  if(nextCounter==27){
    inst='finally the parent array is the only unsorted array, the 2 sub arrays are merged and sored resulting in the final array'
    setInst(inst);
    merge(a1,0,4,9);
    setBlocks(a1);

    done='This level is now finished, click next level to proced to the next or reload the page to replay this level'
    setDone(done);
  }
  }

    //function to store thr randomly generated values into sub arrays to be viwed by the user when needed
    const storeArray= (source, destination, low,high)=>{
        for(let i = 0; i<((high-low)+1);i++)
        {destination[i]= source[low+i]}
    }

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

  const handleSubmit = (event) => {
    event.preventDefault();

    var { answer } = document.forms[0];

    if (database.k1 !== answer.value) {
      event.preventDefault();
      
      setErrorMessages({ name: "wrong", message: errors.wrong });
      if(!(lives==0)){setLives(lives-1)};
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

  const handleResetToStart = () => {
    setLives(3);
    setLevel(1);
  }
  const handleReset = () => {
      setLives(3);
      setLevel(6);
  }

//--------------------------------------------------------------------------------------------------------

    return (
    
    <div>

    <p>

      <div className = "progressBar">
        
        <div>
            Time:
            {(() => {
        		switch (1) {
         			case 1:
                return <Timer/>        
        		}
      		})()}
        </div>

        {
          lives === 0 && <WinnerLoser lives = {lives} handleReset={() => handleReset()} handleResetToStart={() => handleResetToStart()}/>
        }
        
      </div>
      </p>

      <div id='centered'>
        <h2>{brief}</h2>
      </div>

      <div id = 'centered'>
            <p>
            {renderrender}
            </p>
      </div>

      <div id='centered'>
        <h2>{startmsg}</h2>
      </div>

      <div>

          <div className = 'question' id = 'centered'>
          {answer}
          {done}
          </div>

          <div className = 'question' id = 'centered'>
          {instruct}
          </div>
          
          <div className = 'table'>
              <ul id = 'horizontal-list'>{blocks.map(block => (<li key = {block}>{block}</li>))}
              </ul>
          </div>

          <table  id = 'centered' >
              
                  <td>
                  <div id = 'centered'><ul id = 'horizontal-list'>{subblocksa.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                  
                  <tr>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocksb.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                          <tr>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocksc.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                          <tr>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocksd.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                      </td>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblockse.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                      </td>
                  </tr>
                      </td>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocksf.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                      </td>
                  </tr>
                      </td>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocksg.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                          <tr>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocksh.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                      </td>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocksi.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                      </td>
                  </tr>
                      </td>
                  </tr>
                  </td>

                  <td>
                  <div id = 'centered'>
                    <ul id = 'horizontal-list'>{subblocksj.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                  <tr>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocks11.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                          <tr>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocks12.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                          <tr>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocks13.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                      </td>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocks14.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                      </td>
                  </tr>
                      </td>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocks15.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                      </td>
                  </tr>
                      </td>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocks16.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                          <tr>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocks17.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                      </td>
                      <td>
                      <div id = 'centered'>
                      <ul id = 'horizontal-list'>{subblocks18.map(block => (<li key = {block}>{block}</li>))}
                  </ul></div>
                      </td>
                  </tr>
                      </td>
                  </tr>
                  </td>

              
          </table>
      </div>
    </div>
    )
  }

export default LevelTemplate
