import {FaTimes} from "react-icons/fa";

function Task ({task , onDelete , onToggle}){
    function toggleReminder (task){
        if (task.reminder === true){
            return 'reminder'
        }
        else {
            return ''
        }
    }
    return (
        <div className={'task ' + toggleReminder(task)} onDoubleClick={() => onToggle(task.id)}>
            <h3 >{task.text} <FaTimes style={{color: "red", cursor: "pointer"}} onClick={function () {onDelete(task.id)}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;