import React, {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoApp()
{
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleAddOrEdit = () => {
        if (input.trim() === ''){
            toast.warn('Task cannot be empty');
            return;
        } 

        if (isEditing) {
            setTodos(todos.map(todo =>
                todo.id === editId ? { ...todo, text: input } : todo
            ));
            toast.success('Task updated!');
            setIsEditing(false);
            setEditId(null);
        } else {
            const newTodo = {
                id: Date.now(),
                text: input
            };
            setTodos([...todos, newTodo]);
            toast.success('Task added!');
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
        toast.error('Task deleted!');
    };

    return(
        <>
        <div style={styles.wrapper}>
           <div style={styles.container}>
            <div style={styles.header}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/126/126472.png"
                    alt="ToDo Logo"
                    style={styles.logo}
                />
                <h1 style={styles.heading}>Taskify</h1>
            </div>
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
                {todos.map((todo,index) => (
                    <li key={todo.id} style={styles.listItem}>
                        <span>{++index}</span>
                        <span style={{ flex: 1 }}>{todo.text}</span>
                        <button onClick={() => handleEdit(todo.id)} style={styles.editButton}>Edit</button>
                        <button onClick={() => handleDelete(todo.id)} style={styles.deleteButton}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        </>
    );
}

// const styles = {
//     container: {
//         maxWidth: '400px',
//         margin: '0 auto',
//         padding: '20px',
//         fontFamily: 'Arial, sans-serif',
//         textAlign: 'center'
//     },
//     inputContainer: {
//         display: 'flex',
//         marginBottom: '20px'
//     },
//     input: {
//         flex: 1,
//         padding: '10px',
//         fontSize: '16px'
//     },
//     addButton: {
//         padding: '10px',
//         fontSize: '16px',
//         marginLeft: '10px'
//     },
//     list: {
//         listStyle: 'none',
//         padding: 0
//     },
//     listItem: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '8px 0',
//         borderBottom: '1px solid #ccc'
//     },
//     editButton: {
//         marginRight: '10px'
//     },
//     deleteButton: {
//         color: 'red'
//     }
// };
// const styles = {
//     wrapper: {
//     minHeight: '100vh',
//     background: '#f5f7fa',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     boxSizing: 'border-box',
//     },
//     container: {
//         backgroundColor: '#ffffff',
//         borderRadius: '12px',
//         padding: '30px',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//         width: '100%',
//         maxWidth: '500px',
//         fontFamily: 'Segoe UI, sans-serif',
//     },
//     heading: {
//         textAlign: 'center',
//         marginBottom: '25px',
//         fontSize: '28px',
//         color: '#333',
//     },
//     inputContainer: {
//         display: 'flex',
//         gap: '10px',
//         marginBottom: '20px',
//     },
//     input: {
//         flex: 1,
//         padding: '12px',
//         fontSize: '16px',
//         borderRadius: '8px',
//         border: '1px solid #ccc',
//         outline: 'none',
//         transition: 'border-color 0.3s',
//     },
//     addButton: {
//         padding: '12px 20px',
//         fontSize: '16px',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '8px',
//         cursor: 'pointer',
//         transition: 'background 0.3s',
//     },
//     list: {
//         listStyle: 'none',
//         padding: 0,
//         margin: 0,
//     },
//     listItem: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         backgroundColor: '#f9f9f9',
//         padding: '12px 15px',
//         borderRadius: '8px',
//         marginBottom: '10px',
//         boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
//     },
//     index: {
//         marginRight: '10px',
//         color: '#555',
//         fontWeight: 'bold',
//     },
//     task: {
//         flex: 1,
//         fontSize: '16px',
//         color: '#333',
//     },
//     actions: {
//         display: 'flex',
//         gap: '10px',
//     },
//     editButton: {
//         backgroundColor: '#ffc107',
//         border: 'none',
//         padding: '6px 12px',
//         borderRadius: '6px',
//         color: '#fff',
//         cursor: 'pointer',
//         fontSize: '14px',
//     },
//     deleteButton: {
//         backgroundColor: '#dc3545',
//         border: 'none',
//         padding: '6px 12px',
//         borderRadius: '6px',
//         color: '#fff',
//         cursor: 'pointer',
//         fontSize: '14px',
//     },
//     logo: {
//         width: '60px',
//         marginBottom: '10px',
//     }
// };
const styles = {
    wrapper: {
        minHeight: '100vh',
        background: '#f5f7fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        boxSizing: 'border-box',
    },
    container: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '500px',
        fontFamily: 'Segoe UI, sans-serif',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '10px',
        marginBottom: '25px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    logo: {
        width: '36px',
        height: '36px',
        objectFit: 'contain',
    },

    heading: {
    margin: 0,
    fontSize: '22px',
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
    },
    inputContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
    },
    input: {
        flex: 1,
        padding: '12px',
        fontSize: '16px',
        borderRadius: '8px',
        border: '1px solid #ccc',
        outline: 'none',
        transition: 'border-color 0.3s',
    },
    addButton: {
        padding: '12px 20px',
        fontSize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background 0.3s',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f9f9f9',
        padding: '12px 15px',
        borderRadius: '8px',
        marginBottom: '10px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    },
    index: {
        marginRight: '10px',
        color: '#555',
        fontWeight: 'bold',
    },
    task: {
        flex: 1,
        fontSize: '16px',
        color: '#333',
    },
    actions: {
        display: 'flex',
        gap: '10px',
    },
    editButton: {
        backgroundColor: '#ffc107',
        border: 'none',
        padding: '6px 12px',
        borderRadius: '6px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        border: 'none',
        padding: '6px 12px',
        borderRadius: '6px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
    }
};


export default TodoApp;