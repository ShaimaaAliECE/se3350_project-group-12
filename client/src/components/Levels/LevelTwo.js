import React, {useState,useEffect} from 'react'
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
  useEffect(() => {
    generateRandomArray(len)
    let a0=blocks
    mergesortArray(a0,0,9);
    /*
    setContent(`<b>flag
    <custom>
      
      <b>
      flag2
        <custom>
          <b>flag3</b>

          <b>flag4</b>  
        </custom>
      </b>
      
      <b>
      flag5
        <custom>
          <b>flag6</b>

          <b>flag7</b>  
        </custom>
      </b>  
      
    </custom>
    
   
    </b>`);
    */
    
    console.log (contents);

}, [len, level, lives, algo])


  let content='';
  let counter =0;
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
  content+= counter//'<div>'+counter+'</div>'
  let split = Math.floor((start+end)/2)
  mergesortArray(arrayph, start, split)
  content+= '</b>'
  
  
  
  content+= '<b>'
  counter++
  content+=counter//'<div>'+counter+'</div>'
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
  generateRandomArray(len);
  let a0=blocks
  mergesortArray(a0,0,9);
  console.log (contents);
  
  
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


        
      
      <div id = 'centered' dangerouslySetInnerHTML={{__html: contents}}/>
      </div>

      </div>
    )
}

export default LevelTwo
