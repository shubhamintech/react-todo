import React, {useState} from 'react';

function TodoApp()
{
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleAddOrEdit = () => {
        if (input.trim() === '') return;

        if (isEditing) {
            setTodos(todos.map(todo =>
                todo.id === editId ? { ...todo, text: input } : todo
            ));
            setIsEditing(false);
            setEditId(null);
        } else {
            const newTodo = {
                id: Date.now(),
                text: input
            };
            setTodos([...todos, newTodo]);
        }
        console.log(todos);
        setInput('');
    };

    const handleEdit = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        setInput(todoToEdit.text);
        setIsEditing(true);
        setEditId(id);
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return(
        <>
           <div style={styles.container}>
            <h1>Todo App</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a task"
                    style={styles.input}
                />
                <button onClick={handleAddOrEdit} style={styles.addButton}>
                    {isEditing ? 'Update' : 'Add'}
                </button>
            </div>

            <ul style={styles.list}>
                {todos.map(todo => (
                    <li key={todo.id} style={styles.listItem}>
                        <span style={{ flex: 1 }}>{todo.text}</span>
                        <button onClick={() => handleEdit(todo.id)} style={styles.editButton}>Edit</button>
                        <button onClick={() => handleDelete(todo.id)} style={styles.deleteButton}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
    },
    inputContainer: {
        display: 'flex',
        marginBottom: '20px'
    },
    input: {
        flex: 1,
        padding: '10px',
        fontSize: '16px'
    },
    addButton: {
        padding: '10px',
        fontSize: '16px',
        marginLeft: '10px'
    },
    list: {
        listStyle: 'none',
        padding: 0
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 0',
        borderBottom: '1px solid #ccc'
    },
    editButton: {
        marginRight: '10px'
    },
    deleteButton: {
        color: 'red'
    }
};

export default TodoApp;