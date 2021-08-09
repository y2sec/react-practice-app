import React, {useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const onChange = (event) => {
        const nextForm = {
            ...form,
            [event.target.name]: event.target.value
        }
        setForm(nextForm);
    }

    const onClick = () => {
        alert(form.username + ': ' + form.message);
        setForm({
            username: '',
            message: ''
        });
    }

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={form.username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요."
                value={form.message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;
