import React, {useState} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'; //allow us the ability to use this library
import { v4 as uuid } from 'uuid';

//might need to use command "npm add uuid react-beautiful-dnd" or "npm install react-beautiful-dnd --save" to download library locally

const itemsFromBackend = [
  { id: uuid(), content: '1' },
  { id: uuid(), content: '2' },
  { id: uuid(), content: '3' },
  { id: uuid(), content: '4' },
  { id: uuid(), content: '5' },
  { id: uuid(), content: '6' },
  { id: uuid(), content: '7' },
  { id: uuid(), content: '8' },
  { id: uuid(), content: '9' },
  { id: uuid(), content: '10' }
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

const LevelThree = () => { 
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

    //generate the random array for the user to work with
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
  //the template of level 3 
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
                            width: 450,
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
}

export default LevelThree
