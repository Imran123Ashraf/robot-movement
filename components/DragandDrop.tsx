import React,{useState} from 'react'


function DragandDrop() {
   const [widgets, setWidgets] = useState<string[]>([]);

   function handleOnDrag(e: React.DragEvent, widgetType: string) {
    e.dataTransfer.setData("widgetType", widgetType);
   }

   function handleOnDrop(e: React.DragEvent) {
    const widgetType= e.dataTransfer.getData("widgetType") as string;
    console.log("widgetType", widgetType);
    setWidgets([...widgets, widgetType]);
   }

   function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
   }

  return (
    <div>
    <div className='widgets flex my-20 mx-6'>
        <div className='widget' 
        draggable 
        onDragStart={(e) => handleOnDrag(e, "⏪")}> 
        ⏪ 
        </div>
        <div className='widget px-2' 
        draggable 
        onDragStart={(e) => handleOnDrag(e, "⏩")}>
            ⏩
        </div>
        <div className='widget' 
        draggable 
        onDragStart={(e) => handleOnDrag(e, " ⏫")}>
            ⏫
        </div>
        <div className='widget px-2' 
        draggable 
        onDragStart={(e) => handleOnDrag(e, "⏬")}>
            ⏬
        </div>
     
    </div>

    <div className=' bg-gray-600 -my-44 h-11 mx-10' onDrop={handleOnDrop} onDragOver={handleDragOver}>
    
       {widgets.map((widget, index) => (
        <div className='dropped-widget h-96 w-96' key={index} >
            {widget}
        </div>
       ))}
       </div>
    
    </div>
  )
}

export default DragandDrop;


