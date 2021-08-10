import React, {useState, useEffect, useReducer} from 'react';


const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    };
}

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [state, dispatch] = useReducer(reducer, {name: '', nickname: ''});


    useEffect(() => {
        console.log('렌더링이 완료되었습니다.');
    }, [name, nickname]);

    const onChange = e => {
        dispatch(e.target);
    }

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickName = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickName}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
            <div>
                <input name="name" value={state.name} onChange={onChange}/>
                <input name="nickname" value={state.nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {state.name}
                </div>
                <div>
                    <b>닉네임:</b> {state.nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;