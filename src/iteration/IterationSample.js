import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {
            id: 1,
            name: '눈사람'
        },
        {
            id: 2,
            name: '얼음'
        },
        {
            id: 3,
            name: '눈'
        },
        {
            id: 4,
            name: '바람'
        }
    ]);
    const [nextId, setNextId] = useState(5);
    const [inputText, setInputText] = useState('');

    const onChange = (event) => {
        setInputText(event.target.value);
    }

    const onClick = () => {
        setNames(names.concat({id: nextId, name: inputText}));
        setNextId(nextId + 1);
        setInputText('');
    }

    const remove = (id) => {
        setNames(names.filter(name => name.id !== id));
    }

    const nameList = names.map((name) => <li key={name.id} onDoubleClick={() => remove(name.id)}>{name.name}</li>)
    return (
        <>
            <input
                type="text"
                value={inputText}
                onChange={onChange}
            />
            <button onClick={onClick}>입력</button>
            <ul>{nameList}</ul>
        </>
    );
};

export default IterationSample;