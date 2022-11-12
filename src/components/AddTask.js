export const AddTask = (props) => {
   return( <div className='addTask mt-10'>
        <input onChange={props.handleChange} className="rounded-xl border-2 border-black mr-1 shadow-xl pl-2"/>
        <button onClick = {props.handleClick} className="rounded-xl border-2 px-2 border-black shadow-xl bg-gray-white">Add Task</button>
        
    </div>);
}