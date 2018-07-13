import React, { Component } from 'react'
import TodoItem from './TodoItem'

// 이 컴포넌트는 3가지의 props 를 받게됩니다.
// todos: todo 객체들이 들어있는 배열
// onToggle: 체크박스를 키고 끄는 함수
// onRemove: 아이템을 삭제시키는 함수
class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            //  함수의 파라미터 부분에서 비구조화 할당을 하여 객체 내부의 값들을 따로 레퍼런스를 만들어주었습니다.
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    //배열을 렌더링 할 때에는 key 값이 꼭 있어야해요. 
                    // (없는 경우엔 map 함수의 두번째 파라미터는 index 인데, 그것을 사용하시면 됩니다. 
                    // index 를 key 를 사용하는것은 정말 필요한 상황이 아니라면 권장하지 않습니다) 
                    // key 값이 있어야만, 컴포넌트가 리렌더링 될 때 더욱 효율적으로 작동 할 수 있습니다.
                    key={id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;