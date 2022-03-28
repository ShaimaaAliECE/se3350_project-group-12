import React from 'react'
//level 2 and 3 were suposed to be doen for release 1 but due to our negligence we have fallen behind on these, we intend
//to make up for this over the next 2 weeks and hopefully be on schedule for sprint 4

const LevelThree = () => {
    //return (
      //  <div>
            
        //    This is a template for LevelThree yet to be written.
      //  </div>
    //)
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

	    const randomArray = Array.from({length: 10}, () => Math.floor(Math.random()*21));
		
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
                            width: 700,
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
