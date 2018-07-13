import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form'
import TodoItemList from './components/TodoItemList';

class App extends Component {

  // 이미 0, 1, 2 가 존재하므로 3으로 설정
  // 초기 state 에는 input 의 값과, todos 배열의 기본 아이템 3개를 넣어주었습니다.
  // todo 객체들을 구분하기 위하여 우리는 id 값을 지정해줄건데요, 
  // 데이터가 추가 될 때마다 this.id 값이 1씩 올라가도록 설정하겠습니다.
  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: ' 리엑트 복습', checked: false },
      { id: 1, text: ' 알고리즘', checked: true },
      { id: 2, text: ' 구현', checked: false },
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    })
  }

  // concat 을 사용하여 배열안에 데이터를 추가했습니다
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', //input 비우고
      todos: todos.concat({ // concat 을 사용하여 배열에 추가
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  // 눌려진 키가 Enter 면 handleCreate 호출
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; //선택한 객체
    const nextTodos = [...todos]; //배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  //파라미터로 받아온 id 를 갖고있지 않는 배열을 새로 생성해낸것이죠. 
  //이를 통하여 우리가 지정한 id 를 배제한 배열이 재탄생합니다.
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }

  render() {

    const { input, todos } = this.state;

    // 이렇게 비구조화 할당을 했습니다. 
    // 이렇게 함으로서, 
    // this.handleChange, this.handleCreate, this.handleKeyPress 
    // 이런식으로 계속 this 를 붙여줘야하는 작업을 생략 할 수 있습니다. 
    // 이 작업은 만약에 원치 않으시면 생략하고 this 를 직접 붙여주어도 무방합니다.
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return (
      <TodoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
      
        {/* todos 안에 있는 객체들을 화면에 보여주기 위해선, 
      todos 배열을 컴포넌트 배열로 변환해주어야 합니다 */}
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove} />
      </TodoListTemplate >
    );
  }
}

export default App;