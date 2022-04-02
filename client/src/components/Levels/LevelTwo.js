import React, {useState,useEffect} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'; //allow us the ability to use this library
import { v4 as uuid } from 'uuid';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

//might need to use command 'npm install react-html-parser'and 'npm install buffer'
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
    },
    [uuid()]: {
      name: 'tester1',
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
    const [answer, setAnswer] = useState([]);
    const [algo, setAlgo] = useState('Merge');
    const [nextCounter, setNC] = useState(0);
    const [mergeCounter, setmergeCounter] = useState(0);
    const [instruct, setInst] = useState('Click next to start');
    const [columns, setColumns] = useState(columnsFromBackend);
    const [contents, setContent] = useState('<div>placehold</div>');
    const [selected, setselect] = useState(0);
    const [subBlocks,setSubBlocks]= useState([])
    

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



//generate the table structure
  useEffect(() => {
    generateRandomArray(len,10)
    addBlocks();
    let a0=blocks
    storeArray(a0,subBlocks[0],0,5)
    
    mergesortArray(a0,0,(len-1));
    
    
    console.log (contents);

}, [len, level, lives, algo])


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
    return <custbutton onClick={()=>selectdest(node.children[0].data)}><ul id = 'horizontal-list'>{subBlocks[j].map(block => (<li key = {block}>{block}</li>))}</ul></custbutton>;
    
  }


 }


  let counter =0;
  let content='<b><button onClick={console.log('+counter+')}>'+counter+'</button></b>';
  addBlocks();
  //generateRandomArray(len);
  //mergesortArray(blocks,0,9);
//an actual merge sort algrithim,used to auto gen an array
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

 //function to store thr randomly generated values into sub arrays to be viwed by the user when needed
 const storeArray= (source, destination, low,high)=>{
  for(let i = 0; i<((high-low)+1);i++)
  {destination[i]= source[low+i]}  
}





  //the template of level 2 

    return (
      <div>
         <div id = 'centered'>
                <p>
                <button onClick={next}>
                    NEXT
                </button>
                </p>
                
                
            </div>
            
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
        <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
          <div>
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
          </div>
        </DragDropContext>
        
       
        
      </div>

      <div>

      <DragDropContext>
              <Droppable droppableId="tester1" >
                {(provided, snapshot) => (
                <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                  //background:'lightblue',
                  padding: 4,
                  width: 250,
                  minHeight: 75,
                  display: 'flex', 
                  flexDirection: 'row'
                }}
              >
                <Draggable draggableId='1'index={0} key = '0'>
                  {(provided) => (
                  <l1 ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    test1
                  </l1>
                  )}
                </Draggable>
                <Draggable draggableId='2' index ={1} key = '1'>
                  {(provided) => (
                  <l1 ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    test2
                  </l1>
                  )}
                </Draggable>
                
                {provided.placeholder}

                </div>
                )}
              </Droppable>
                    seperator
              <Droppable droppableId="tester1" >
                {(provided, snapshot) => (
                <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                  //background:'lightblue',
                  padding: 4,
                  width: 250,
                  minHeight: 75,
                  display: 'flex', 
                  flexDirection: 'row'
                }}
              >
                 {provided.placeholder}

                </div>
                )}
              </Droppable>
        </DragDropContext>


        
        <div id = 'centered2'>hello{ReactHtmlParser(contents,{transform: parserTransform})}</div>
        
      {/*<div id = 'centered' dangerouslySetInnerHTML={{__html: contents}}/>*/}
      
      </div>

      </div>
    )
}

export default LevelTwo
