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
    let inst = '';
	//step counter is brute forced, will have to solve later on
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
