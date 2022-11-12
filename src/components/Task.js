export const Task = (props) => {
    return (<div className='task' style={{backgroundColor : props.completed ? "green":"white"}}>
    <h1 className='text-xl mb-1'>{props.taskName}</h1>
    <button onClick={() => props.updateTask(props.id)} className="rounded-xl border-2 border-black px-1 bg-white shadow-xl text-sm mr-2" >Complete</button>   
    
    <button onClick={() => props.deleteTask(props.id)} className="rounded-xl border-2 border-black px-1 bg-white shadow-xl text-sm">X</button>
    </div>);
}