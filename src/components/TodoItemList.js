import React, { Component } from 'react'
import TodoItem from './TodoItem'

// 이 컴포넌트는 3가지의 props 를 받게됩니다.
// todos: todo 객체들이 들어있는 배열
// onToggle: 체크박스를 키고 끄는 함수
// onRemove: 아이템을 삭제시키는 함수
class TodoItemList extends Component {

    // 컴포넌트 라이프 사이클 메소드중 shouldComponentUpdate 는 컴포넌트가 리렌더링을 할 지 말지 정해줍니다. 
    // 이게 따로 구현되지 않으면 언제나 true 를 반환하는데요, 
    // 이를 구현하는 경우에는 업데이트에 영향을 끼치는 조건을 return 해주시면 됩니다.
    // 우리의 경우에는 todos 값이 바뀔 때 리렌더링 하면 되니까 
    // this.props.todos 와 nextProps.todos 를 비교해서 이 값이 다를때만 리렌더링하게 설정하면 끝나요!
    // 컴포넌트를 저장하고 다시 텍스트를 입력해보세요. 컴포넌트가 가장 처음 렌더링 할 때만 id 가 프린트 되지요?
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            //  함수의 파라미터 부분에서 비구조화 할당을 하여 객체 내부의 값들을 따로 레퍼런스를 만들어주었습니다.
            ({ id, text, checked, color }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    color={color}
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