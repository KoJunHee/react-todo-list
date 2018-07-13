import React, { Component } from 'react'
import './TodoItem.css'

// text: todo 내용
// checked: 체크박스 상태
// id: todo 의 고유 아이디
// onToggle: 체크박스를 키고 끄는 함수
// onRemove: 아이템을 삭제시키는 함수

// 해당 컴포넌트의 최상위 DOM 의 클릭 이벤트에는 onToggle 을 넣어주고, 
// × 가 있는 부분에선 onRemove 를 넣어주었습니다.
class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;
        console.log(id);
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    // 이벤트의 “확산” 을 멈춰줍니다. 
                    // 즉, 삭제부분에 들어간 이벤트가 해당 부모의 이벤트까지 전달되지 않도록 해줍니다. 
                    // 따라서, onToggle 은 실행되지 않고 onRemove 만 실행되죠.
                    e.stopPropagation(); 
                    onRemove(id)
                }
                }>&times;</div>
                
                {/* 
                // template literal
                // `todo-text ${checked && 'checked'}`
                // 아래와 동일합니다.
                // "todo-text " + checked && 'checked'
                */}
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark"></div>)
                }
            </div>
        );
    }
}

export default TodoItem;