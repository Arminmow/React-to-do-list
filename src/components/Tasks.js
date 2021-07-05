
import Task from "./Task";

function  Tasks ({tasks , onDelete , onToggle}){

    return (
        <>
            {tasks.map((tasks) => (<Task key={tasks.id} task={tasks} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

export default Tasks;