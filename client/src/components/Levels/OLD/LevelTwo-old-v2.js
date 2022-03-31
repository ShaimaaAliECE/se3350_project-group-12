import React, {useState, useEffect} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'; //allow us the ability to use this library
import { v4 as uuid } from 'uuid';

//might need to use command "npm add uuid react-beautiful-dnd" to download library locally

const itemsFromBackend = [
    { id: uuid(), content: 'First task' },
    { id: uuid(), content: 'Second task' },
];
  
const columnsFromBackend = {
    [uuid()]: {
      name: 'Todo',
      items: itemsFromBackend
    },
    [uuid()]: {
      name: 'In progress',
      items: []
    }
  
};


//allow for the user to drag and drop the numbers to be sorted into place 
const onDragEnd = (result, columns, setColumns) => {
  //default statement; if there is no specified destination for the result or the matched destination of the result is not correct, then return nothing
    if (!result.destination) return;
    const { source, destination } = result;
    //if the dragged source has not been dropped on to a destination yet
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      console.log(sourceColumn.name);
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({ 
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      })
  
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      })
    }
};

const LevelTwo = () => { 
    //states 
    const [level, setLevel] = useState(2);
    const [lives, setLives] = useState(3);
    const [len, setLength] = useState(10);
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
    const [subblocks11, setBlocks11] = useState([]);
    const [subblocks12, setBlocks12] = useState([]);
    const [subblocks13, setBlocks13] = useState([]);
    const [subblocks14, setBlocks14] = useState([]);
    const [subblocks15, setBlocks15] = useState([]);
    const [subblocks16, setBlocks16] = useState([]);
    const [subblocks17, setBlocks17] = useState([]);
    const [subblocks18, setBlocks19] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [algo, setAlgo] = useState('Merge');
    const [nextCounter, setNC] = useState(0);
    const [mergeCounter, setmergeCounter] = useState(0);
    const [instruct, setInst] = useState('Click next to start');
    const [columns, setColumns] = useState(columnsFromBackend);

    //these functions will allow for us to track the amount of time spent after a new page is loaded
    var time, timeSite;
    window.onload = function(){
        time = new Date();
    }
    window.onbeforeunload = function(){
        timeSite = new Date()-time;
        window.localStorage['timeSite'] = timeSite;
    }

    const handleAnswerChange = (evenT) =>{
      setAnswer(evenT.target.value);
    }

    //generate the random arrya for the user to work with
    const generateRandomArray = (len) => {

		const randomArray = Array.from(Array(len + 1).keys()).slice(1)
		
		for (let i = randomArray.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i - 1))
			const temp = randomArray[i]

			randomArray[i] = randomArray[randomIndex]
			randomArray[randomIndex] = temp
		}
		//set the blocks to the generated random array
		setBlocks(randomArray)
	}
  //---------------------------------------------------------------
  
  
  const LevelOne = () => {
  
      //states 
      const [level, setLevel] = useState(1);
      const [lives, setLives] = useState(3);
      const [len, setLength] = useState(10);
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
      const [subblocks11, setBlocks11]= useState([])
      const [subblocks12, setBlocks12]= useState([])
      const [subblocks13, setBlocks13]= useState([])
      const [subblocks14, setBlocks14]= useState([])
      const [subblocks15, setBlocks15]= useState([])
      const [subblocks16, setBlocks16]= useState([])
      const [subblocks17, setBlocks17]= useState([])
      const [subblocks18, setBlocks18]= useState([])
      const [answer, setAnswer] = useState([]);
      const [algo, setAlgo] = useState('Merge');
      const [nextCounter,setNC]=useState(0);
      const [mergeCounter, setmergeCounter] = useState(0);
      const [instruct, setInst]=useState('Click next to start');
      
       
  
      //this function should return true or false and will be used for level one
      const handleAnswer = () => {
          
          //if the solution is true 
          if (answer) {
              
              
          }
          
  
          //actually first need to grab the current array values and the answer values 
          //then check if the response is true 
          //if the answer is true then change level state to next level
          //if the answer is false then change the lives state
          //if lives < 1 then display losing message and reset the game 
          
  
      }
  
      const handleAnswerChange = (event) => {   
             
          setAnswer(event.target.value)
      }
      //used to create a random array of numbers
      const generateRandomArray = (len) => {
  
      const randomArray = Array.from(Array(len + 1).keys()).slice(1)
      
      for (let i = randomArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i - 1))
        const temp = randomArray[i]
  
        randomArray[i] = randomArray[randomIndex]
        randomArray[randomIndex] = temp
      }
      
      setBlocks(randomArray)
    }
  
      useEffect(() => {
          generateRandomArray(len)
         
      }, [len, level, lives, algo])
  
      const next = ()=>{//wip
          
      setNC(nextCounter+1)
      storesubblocks(blocks, nextCounter)
          
      }
  
      //a later itteration of this could use the merger sort alogrithm below,
      // everytime merge sort is called, it could runn a store array segment, and everytime merge is called it will merger as bellow
      //the only problem iv encountered is getting it to work with the step counter
      const storesubblocks= (a1, nextCounter)=>{
          //let a0= blocks
          //let a1=[]
          //storeArray(a0,a1,0,9);
          let a2=[];
          let a3=[];
          let a4=[];
          let a8=[]; 
          let a11=[];
          let a12=[];
          let a13=[];
          let a17=[];
      //unfortunately i have to brute force the step counter. il try and find a way to automate or streamline this.
      let inst = '';
      if(nextCounter==1){
          inst='first the first half of the array is copied into a sub array'
          setInst(inst);  
          storeArray(a1,a2,0,4);
          setBlocksa(a2);  
      }
      else 
      if(nextCounter==2){  
          inst='this array is then split in half until the resulting array is length 1'
          setInst(inst); 
          storeArray(a1,a3,0,2);
          setBlocksb(a3);    
      }
      if(nextCounter==3){
          
          storeArray(a1,a4,0,1);
          setBlocksc(a4);   
      }
      if(nextCounter==4){
          inst='this array is then split in half until the resulting array is length 1'
          setInst(inst); 
          let a5=[];
          storeArray(a1,a5,0,0);
          setBlocksd(a5);
          
      }
      if(nextCounter==5){
          inst='the other half of the array is then put into a sub array'
          setInst(inst); 
         let a6=[];
          storeArray(a1,a6,1,1);
          setBlockse(a6);
          
      }
      if(nextCounter==6){
          inst='these 2 sub arrays are then sorted and merged into the previous array, this array is now sorted'
          setInst(inst);
          //first merge
          merge(a1,0,0,1);
          storeArray(a1,a4,0,1);
          
          //merge(a4,0,0,1);
          setBlocksc(a4);
          
      }
      if(nextCounter==7){
          inst='After merging one sub array the other half of the newest unsorted array is then put into a sub array, the length of this array is one so its finnished'
          setInst(inst);
      let a7=[];
      storeArray(a1,a7,2,2);
      setBlocksf(a7);
          
      }
      if(nextCounter==8){
          //second merge
          inst='these 2 sub arrays are then sorted and merged into the previous array'
          setInst(inst);
          merge(a1,0,1,2);
          storeArray(a1,a3,0,2);    
          setBlocksb(a3);
              
      }
      if(nextCounter==9){
          inst='After merging one sub array the other half of the newest unsorted array is then put into a sub array'
          setInst(inst);
  
          storeArray(a1,a8,3,4);
          setBlocksg(a8);
              
      }
      if(nextCounter==10){
          inst='this array is then split in half until the resulting array is length 1'
          setInst(inst); 
          let a9=[];
          storeArray(a1,a9,3,3);
          setBlocksh(a9);
              
      }
      if(nextCounter==11){
          inst='the other half of the  array is then put into a sub array'
          setInst(inst);
          let a10=[];
          storeArray(a1,a10,4,4);
          setBlocksi(a10);
              
      }
      if(nextCounter==12){
          inst='these 2 sub arrays are then sorted and merged into the previous array, this array is now sorted'
          setInst(inst);
          merge(a1,3,3,4);
          storeArray(a1,a8,3,4);  
          //merge(a8,3,3,4);
          
          setBlocksg(a8);
              
      }
      if(nextCounter==13){
          inst='these 2 sorted arrays are merged into their parent array and sorted'
          setInst(inst);
          merge(a1,0,2,4);
          storeArray(a1,a2,0,4);
          //merge(a2,0,2,4);
          
          setBlocksa(a2);
              
      }
      if(nextCounter==14){
          inst='The original array is now the olldest unsorted array so its unsorted half is taken and put into a sub array'
          setInst(inst);
  
          storeArray(a1,a11,5,9);
          setBlocksj(a11);
  
      }
      if(nextCounter==15){
          inst='this array is then split in half until the resulting array is length 1'
          setInst(inst);
      storeArray(a1,a12,5,7);
      setBlocks11(a12);
  
  
      }
      if(nextCounter==16){
          
          storeArray(a1,a13,5,6);
          setBlocks12(a13); 
  
      }
      if(nextCounter==17){
          let a14=[];
          storeArray(a1,a14,5,5);
          setBlocks13(a14);
      }
      if(nextCounter==18){  
          inst='the other half of the array is then put into a sub array'
          setInst(inst);
          let a15=[];
          storeArray(a1,a15,6,6);
          setBlocks14(a15);
      }
      if(nextCounter==19){
          inst='these 2 sub arrays are then sorted and merged into the previous array, this array is now sorted'
          setInst(inst);
          merge(a1,5,5,6);
          storeArray(a1,a13,5,6);
          //merge(a13,5,5,6);
          
          setBlocks12(a13); 
  
  
      }
      if(nextCounter==20){
          inst='After merging one sub array the other half of the newest unsorted array is then put into a sub array, the length of this array is one so its finnished'
          setInst(inst);
          let a16=[];
          storeArray(a1,a16,7,7);
          setBlocks15(a16); 
          
  
  
      }
  
      if(nextCounter==21){
          inst='these 2 sub arrays are then sorted and merged into the previous array'
          setInst(inst);
          merge(a1,5,6,7);
          storeArray(a1,a12,5,7);
          
          //merge(a12,5,6,7);
          
          setBlocks11(a12);
  
  
      }
      if(nextCounter==22){
          inst='After merging one sub array the other half of the newest unsorted array is then put into a sub array'
          setInst(inst);
  
          storeArray(a1,a17,8,9);
          setBlocks16(a17); 
  
  
      }
      if(nextCounter==23){
          inst='this array is then split in half until the resulting array is length 1'
          setInst(inst);
          let a18=[];
          storeArray(a1,a18,8,8);
          setBlocks17(a18); 
  
  
      }
      if(nextCounter==24){
          inst='the other half of the array is then put into a sub array'
          setInst(inst);
          let a19=[];
          storeArray(a1,a19,9,9);
          setBlocks18(a19); 
  
  
  
      }
      if(nextCounter==25){
          inst='these 2 sub arrays are then sorted and merged into the previous array, this array is now sorted'
          setInst(inst);
          merge(a1,8,8,9);
          storeArray(a1,a17,8,9);
         
          //merge(a17,8,8,9);
          
          setBlocks16(a17); 
  
  
      }
      if(nextCounter==26){
          inst='these 2 sorted arrays are merged into their parent array and sorted'
          setInst(inst);
          merge(a1,5,7,9);
          storeArray(a1,a11,5,9);
          
          //merge(a11,5,7,9);
          
          setBlocksj(a11);
  
  
      }
      if(nextCounter==27){
          inst='finaly the parent array is the only unsorted array, the 2 sub arrays are merged and sored resulting in the final array'
          setInst(inst);
  
          merge(a1,0,4,9);
          setBlocks(a1);
  
  
      }
      if(nextCounter==28){
          inst='This level is now finished, click next level to proced to the next or reload the page to replay this level'
          setInst(inst);
  
          
  
  
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
  //------------------------------------------------------------------------------------

  //the template of level 2 
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([id, column]) => {
            return (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>{column.name}</h2>
                <div style={{ margin: 8 }}>
                  <Droppable droppableId={id} key={id}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                            padding: 4,
                            width: 250,
                            minHeight: 75,
                            display: 'flex', 
                            flexDirection: 'row'
                          }}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: 'none',
                                        padding: 16,
                                        margin: '0 4px 4px 0',
                                        minHeight: '30px',
                                        backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                                        color: 'white',
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      {item.content}
                                    </div>
                                  )
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
  
                        </div>
                      )
                    }}
                  </Droppable>
                </div>
              </div>
            )
          })}
        </DragDropContext>
      </div>
    )
}}

export default LevelTwo
