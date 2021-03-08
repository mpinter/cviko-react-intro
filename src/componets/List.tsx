import React from 'react';

type ListProps = {
    todos: string[];
    removeTodo: (i: number) => void;
};

const List: React.FC<ListProps> = ({ todos, removeTodo }) => {
    const todoJsx = (
        <>
            {todos.map((text, i) => (
                <>
                    {/* eslint-disable-next-line */}
                    <div key={i}>
                        <span>{text}</span>
                        <button type="button" onClick={() => removeTodo(i)}>
                            Remove
                        </button>
                    </div>
                </>
            ))}
        </>
    );

    return <div>{todoJsx}</div>;
};

export default List;
