import { useState } from 'react';

function AddTask ({onAdd}){
    const [text , setText] = useState('');
    const [day , setDay] = useState('');
    const [reminder , setReminder] = useState(false);

    function changeText (e){
        return setText(e.target.value)
    }
    function changeDay (e){
        return setDay(e.target.value)
    }
    function changeReminder (e){
        return setReminder(e.currentTarget.checked)
    }

    function onSubmit (e){
        e.preventDefault();

        if ( !text){
            alert('Please Add Task')
            return
        }

        onAdd({text , day , reminder})

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={text} onChange={changeText}/>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time' value={day} onChange={changeDay}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder}  value={reminder} onChange={changeReminder}/>
            </div>
            <input className='btn btn-block' type='submit' value='save task'/>
        </form>
    )
}

export default AddTask;