import React, {useState} from 'react';

const AddPost = (props) => {
    const [text, setText] = useState("");

    const updateText = (event) => {
        setText(event.target.value);
        console.log('Text of Input is ', text);
    };

    return (
        <div className='post-container'>
            <textArea onChange={updateText} type='text' value={text} />
            <br/>
            <button onClick={() => props.onAdd(text)}>Add</button>
        </div>
    );
};

export default AddPost;