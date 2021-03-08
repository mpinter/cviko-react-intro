import React, { useState } from 'react';
import Input from './componets/Input';
import List from './componets/List';

const App: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = (text: string) => {
        const newTodos = todos.concat(text);
        setTodos(newTodos);
    };

    const removeTodo = (i: number) => {
        const newTodos = todos.filter((_, index) => i !== index);
        setTodos(newTodos);
    };

    return (
        <>
            <Input submit={addTodo} />
            <List todos={todos} removeTodo={removeTodo} />
        </>
    );
};

export default App;
