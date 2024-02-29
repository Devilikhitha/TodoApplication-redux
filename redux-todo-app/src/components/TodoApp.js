// // // src/components/TodoApp.js
// // import React, { useState } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import {
// //   addTodo,
// //   toggleTodo,
// //   deleteTodo,
// //   setVisibilityFilter,
// //   startEditing,
// //   finishEditing,
// //   updateTodoText,
// // } from './todoActions';

// // const TodoApp = () => {
// //   const dispatch = useDispatch();
// //   const todos = useSelector((state) => state.todos.todos);
// //   const visibilityFilter = useSelector((state) => state.todos.visibilityFilter);
// //   const editingTodoId = useSelector((state) => state.todos.editingTodoId);
// //   const [newTodo, setNewTodo] = useState('');

// //   const handleAddTodo = () => {
// //     dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
// //     setNewTodo('');
// //   };

// //   const handleToggleTodo = (id) => {
// //     dispatch(toggleTodo(id));
// //   };

// //   const handleDeleteTodo = (id) => {
// //     dispatch(deleteTodo(id));
// //   };

// //   const handleFilterChange = (filter) => {
// //     dispatch(setVisibilityFilter(filter));
// //   };

// //   const handleStartEditing = (id) => {
// //     dispatch(startEditing(id));
// //   };

// //   const handleFinishEditing = () => {
// //     dispatch(finishEditing());
// //   };

// //   const handleUpdateTodoText = (id, newText) => {
// //     dispatch(updateTodoText(id, newText)); // Dispatch an action to update the text
// //     dispatch(finishEditing()); // Finish editing after updating the text
// //   };

// //   const filteredTodos = () => {
// //     switch (visibilityFilter) {
// //       case 'completed':
// //         return todos.filter((todo) => todo.completed);
// //       case 'not-completed':
// //         return todos.filter((todo) => !todo.completed);
// //       default:
// //         return todos;
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Todo App</h1>
// //       <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
// //       <button onClick={handleAddTodo}>Add Todo</button>
// //       <div>
// //         <label>
// //           <input
// //             type="radio"
// //             name="filter"
// //             value="all"
// //             checked={visibilityFilter === 'all'}
// //             onChange={() => handleFilterChange('all')}
// //           />
// //           All
// //         </label>
// //         <label>
// //           <input
// //             type="radio"
// //             name="filter"
// //             value="completed"
// //             checked={visibilityFilter === 'completed'}
// //             onChange={() => handleFilterChange('completed')}
// //           />
// //           Completed
// //         </label>
// //         <label>
// //           <input
// //             type="radio"
// //             name="filter"
// //             value="not-completed"
// //             checked={visibilityFilter === 'not-completed'}
// //             onChange={() => handleFilterChange('not-completed')}
// //           />
// //           Not Completed
// //         </label>
// //       </div>
// //       <ul>
// //         {filteredTodos().map((todo) => (
// //           <li key={todo.id}>
// //             <input
// //               type="checkbox"
// //               checked={todo.completed}
// //               onChange={() => handleToggleTodo(todo.id)}
// //             />
// //             {editingTodoId === todo.id ? (
// //               <div>
// //                 <input
// //                   type="text"
// //                   value={todo.text}
// //                   onChange={(e) => handleUpdateTodoText(todo.id, e.target.value)}
// //                 />
// //                 <button onClick={handleFinishEditing}>Finish Editing</button>
// //               </div>
// //             ) : (
// //               <span>{todo.text}</span>
// //             )}
// //             <button onClick={() => handleStartEditing(todo.id)}>Edit</button>
// //             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default TodoApp;




// // src/components/TodoApp.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   addTodo,
//   toggleTodo,
//   deleteTodo,
//   setVisibilityFilter,
//   startEditing,
//   finishEditing,
//   updateTodoText,
// } from './todoActions';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.todos);
//   const visibilityFilter = useSelector((state) => state.todos.visibilityFilter);
//   const editingTodoId = useSelector((state) => state.todos.editingTodoId);
//   const [newTodo, setNewTodo] = useState('');
//   const [editedText, setEditedText] = useState('');

//   const handleAddTodo = () => {
//     dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
//     setNewTodo('');
//   };

//   const handleToggleTodo = (id) => {
//     dispatch(toggleTodo(id));
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleFilterChange = (filter) => {
//     dispatch(setVisibilityFilter(filter));
//   };

//   const handleStartEditing = (id) => {
//     dispatch(startEditing(id));
//     // Set the edited text to the current todo's text when starting to edit
//     setEditedText(todos.find((todo) => todo.id === id)?.text || '');
//   };

//   const handleFinishEditing = () => {
//     dispatch(updateTodoText(editingTodoId, editedText));
//     dispatch(finishEditing());
//   };

//   const filteredTodos = () => {
//     switch (visibilityFilter) {
//       case 'completed':
//         return todos.filter((todo) => todo.completed);
//       case 'not-completed':
//         return todos.filter((todo) => !todo.completed);
//       default:
//         return todos;
//     }
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="all"
//             checked={visibilityFilter === 'all'}
//             onChange={() => handleFilterChange('all')}
//           />
//           All
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="completed"
//             checked={visibilityFilter === 'completed'}
//             onChange={() => handleFilterChange('completed')}
//           />
//           Completed
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="not-completed"
//             checked={visibilityFilter === 'not-completed'}
//             onChange={() => handleFilterChange('not-completed')}
//           />
//           Not Completed
//         </label>
//       </div>
//       <ul>
//         {filteredTodos().map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggleTodo(todo.id)}
//             />
//             {editingTodoId === todo.id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={editedText}
//                   onChange={(e) => setEditedText(e.target.value)}
//                 />
//                 <button onClick={handleFinishEditing}>Finish Editing</button>
//               </div>
//             ) : (
//               <span>{todo.text}</span>
//             )}
//             <button onClick={() => handleStartEditing(todo.id)}>Edit</button>
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;  




// filters are working in this taskk

// src/components/TodoApp.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   addTodo,
//   toggleTodo,
//   deleteTodo,
//   setVisibilityFilter,
//   startEditing,
//   finishEditing,
//   updateTodoText,
// } from './todoActions';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.todos);
//   const visibilityFilter = useSelector((state) => state.todos.visibilityFilter);
//   const editingTodoId = useSelector((state) => state.todos.editingTodoId);
//   // const [newTodo, setNewTodo] = useState('');
//   const [mainInputValue, setMainInputValue] = useState('');
//   const [buttonLabel, setButtonLabel] = useState('Add Todo');

//   const handleAddTodo = () => {
//     if (editingTodoId !== null) {
//       // If in editing mode, update the todo
//       dispatch(updateTodoText(editingTodoId, mainInputValue));
//       dispatch(finishEditing());
//       setButtonLabel('Add Todo');
//     } else {
//       // If in add mode, add a new todo
//       dispatch(addTodo({ id: Date.now(), text: mainInputValue, completed: false }));
//     }

//     // Reset the main input field
//     setMainInputValue('');
//   };

//   const handleToggleTodo = (id) => {
//     dispatch(toggleTodo(id));
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//   };

//   const handleFilterChange = (filter) => {
//     dispatch(setVisibilityFilter(filter));
//   };

//   const handleStartEditing = (id, text) => {
//     dispatch(startEditing(id));
//     setMainInputValue(text);
//     setButtonLabel('Save Todo');
//   };

//   // const handleFinishEditing = () => {
//   //   dispatch(finishEditing());
//   //   setMainInputValue('');
//   //   setButtonLabel('Add Todo');
//   // };

//   const filteredTodos = () => {
//     switch (visibilityFilter) {
//       case 'completed':
//         return todos.filter((todo) => todo.completed);
//       case 'not-completed':
//         return todos.filter((todo) => !todo.completed);
//       default:
//         return todos;
//     }
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <input type="text" value={mainInputValue} onChange={(e) => setMainInputValue(e.target.value)} />
//       <button onClick={handleAddTodo}>{buttonLabel}</button>
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="all"
//             checked={visibilityFilter === 'all'}
//             onChange={() => handleFilterChange('all')}
//           />
//           All
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="completed"
//             checked={visibilityFilter === 'completed'}
//             onChange={() => handleFilterChange('completed')}
//           />
//           Completed
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="not-completed"
//             checked={visibilityFilter === 'not-completed'}
//             onChange={() => handleFilterChange('not-completed')}
//           />
//           Not Completed
//         </label>
//       </div>
//       <ul>
//         {filteredTodos().map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggleTodo(todo.id)}
//             />
//             <span>{todo.text}</span>
//             <button onClick={() => handleStartEditing(todo.id, todo.text)}>Edit</button>
//             <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;


// delete functionality is not working

// src/components/TodoApp.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   addTodo,
//   toggleTodo,
//   deleteTodo,
//   setVisibilityFilter,
//   startEditing,
//   finishEditing,
//   updateTodoText,
// } from './todoActions';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.todos);
//   const visibilityFilter = useSelector((state) => state.todos.visibilityFilter);
//   const editingTodoId = useSelector((state) => state.todos.editingTodoId);
//   const [newTodo, setNewTodo] = useState('');

//   const handleAddTodo = () => {
//     if (editingTodoId !== null) {
//       dispatch(updateTodoText(editingTodoId, newTodo));
//       dispatch(finishEditing());
//       setNewTodo('');
//     } else {
//       dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
//       setNewTodo('');
//     }
//   };

//   const handleToggleTodo = (id, completed) => {
//     dispatch(toggleTodo(id));
//     if (completed && editingTodoId === id) {
//       dispatch(finishEditing());
//     }
//   };
//    // eslint-disable-next-line 
//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//     if (editingTodoId === id) {
//       dispatch(finishEditing());
//     }
//   };

//   const handleFilterChange = (filter) => {
//     dispatch(setVisibilityFilter(filter));
//   };

//   const handleStartEditing = (id, text) => {
//     dispatch(startEditing(id));
//     setNewTodo(text);
//   };

//   const handleFinishEditing = () => {
//     dispatch(finishEditing());
//     setNewTodo('');
//   };

//   const filteredTodos = () => {
//     switch (visibilityFilter) {
//       case 'completed':
//         return todos.filter((todo) => todo.completed);
//       case 'not-completed':
//         return todos.filter((todo) => !todo.completed);
//       default:
//         return todos;
//     }
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//       <button onClick={handleAddTodo}>{editingTodoId !== null ? 'Save Todo' : 'Add Todo'}</button>
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="all"
//             checked={visibilityFilter === 'all'}
//             onChange={() => handleFilterChange('all')}
//           />
//           All
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="completed"
//             checked={visibilityFilter === 'completed'}
//             onChange={() => handleFilterChange('completed')}
//           />
//           Completed
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="not-completed"
//             checked={visibilityFilter === 'not-completed'}
//             onChange={() => handleFilterChange('not-completed')}
//           />
//           Not Completed
//         </label>
//       </div>
//       <ul>
//         {filteredTodos().map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggleTodo(todo.id, todo.completed)}
//             />
//             <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//               {todo.text}
//             </span>
//             {editingTodoId === todo.id ? (
//               <div>
//                 <button onClick={handleFinishEditing}>Finish Editing</button>
//               </div>
//             ) : (
//               <>
//                 <button onClick={() => handleToggleTodo(todo.id, todo.completed)}>
//                   {todo.completed ? 'Undo' : 'Done'}
//                 </button>
//                 <button onClick={() => handleStartEditing(todo.id, todo.text)}>
//                   {todo.completed ? 'Delete' : 'Edit'}
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;



// all are functioning well but by default save todo is coming
// // src/components/TodoApp.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   addTodo,
//   toggleTodo,
//   deleteTodo,
//   setVisibilityFilter,
//   startEditing,
//   finishEditing,
//   updateTodoText,
// } from './todoActions';

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const [newTodo, setNewTodo] = useState('');
//   const [inputWarning, setInputWarning] = useState(false);

//   const todos = useSelector((state) => state.todos.todos);
//   const visibilityFilter = useSelector((state) => state.todos.visibilityFilter);
//   const editingTodoId = useSelector((state) => state.todos.editingTodoId);
 
//   // const handleAddTodo = () => {
//   //   if (editingTodoId !== null) {
//   //     dispatch(updateTodoText(editingTodoId, newTodo));
//   //     dispatch(finishEditing());
//   //     setNewTodo('');
//   //   } else {
//   //     dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
//   //     setNewTodo('');
//   //   }
//   // };   


//   const handleAddTodo = () => {
//     if (newTodo.trim() === '') {
//       setInputWarning(true);
//       return;
//     }

//     if (editingTodoId !== null) {
//       dispatch(updateTodoText(editingTodoId, newTodo));
//       dispatch(finishEditing());
//     } else {
//       dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
//     }

//     setNewTodo('');
//     setInputWarning(false);
//   };

//   const handleToggleTodo = (id, completed) => {
//     dispatch(toggleTodo(id));
//     if (completed && editingTodoId === id) {
//       dispatch(finishEditing());
//     }
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//     if (editingTodoId === id) {
//       dispatch(finishEditing());
//     }
//   };

//   const handleFilterChange = (filter) => {
//     dispatch(setVisibilityFilter(filter));
//   };

//   const handleStartEditing = (id, text) => {
//     dispatch(startEditing(id));
//     setNewTodo(text);
//   };

//   const handleFinishEditing = () => {
//     dispatch(finishEditing());
//     setNewTodo('');
//   };

//   const filteredTodos = () => {
//     switch (visibilityFilter) {
//       case 'completed':
//         return todos.filter((todo) => todo.completed);
//       case 'not-completed':
//         return todos.filter((todo) => !todo.completed);
//       default:
//         return todos;
//     }
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       {/* <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} /> */}
//       {/* <button onClick={handleAddTodo}>
//         {editingTodoId !== null ? 'Save Todo' : 'Add Todo'}
//       </button> */} 
//        {/* <button onClick={handleAddTodo}>
//         {editingTodoId !== null ? 'Save Todo' : 'Add Todo'}
//       </button> */}  

// <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//       <button onClick={handleAddTodo}>
//         {editingTodoId !== null ? 'Save Todo' : 'Add Todo'}
//       </button>
//       {inputWarning && <p style={{ color: 'red' }}>Please enter a valid todo.</p>}
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="all"
//             checked={visibilityFilter === 'all'}
//             onChange={() => handleFilterChange('all')}
//           />
//           All
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="completed"
//             checked={visibilityFilter === 'completed'}
//             onChange={() => handleFilterChange('completed')}
//           />
//           Completed
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="not-completed"
//             checked={visibilityFilter === 'not-completed'}
//             onChange={() => handleFilterChange('not-completed')}
//           />
//           Not Completed
//         </label>
//       </div>
//       <ul>
//         {filteredTodos().map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggleTodo(todo.id, todo.completed)}
//             />
//             <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//               {todo.text}
//             </span>
//             {editingTodoId === todo.id ? (
//               <div>
//                 <button onClick={handleFinishEditing}>Finish Editing</button>
//               </div>
//             ) : (
//               <> 
//                 <button onClick={() => handleToggleTodo(todo.id, todo.completed)}>
//                   {todo.completed ? 'Undo' : 'Done'}
//                 </button>
//                 <button onClick={() => (todo.completed ? handleDeleteTodo(todo.id) : handleStartEditing(todo.id, todo.text))}>
//                   {todo.completed ? 'Delete' : 'Edit'}
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;




// full code without css
// // src/components/TodoApp.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   addTodo,
//   toggleTodo,
//   deleteTodo,
//   setVisibilityFilter,
//   startEditing,
//   finishEditing,
//   updateTodoText,
// } from './todoActions';

//  import './TodoApp.css'; 

// const TodoApp = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos.todos);
//   const visibilityFilter = useSelector((state) => state.todos.visibilityFilter);
//   const editingTodoId = useSelector((state) => state.todos.editingTodoId);
//   const [newTodo, setNewTodo] = useState('');
//   const [inputWarning, setInputWarning] = useState(false);

//   // const handleAddTodo = () => {
//   //   if (newTodo.trim() === '') {
//   //     setInputWarning(true);
//   //     return;
//   //   }

//   //   if (editingTodoId !== null) {
//   //     dispatch(updateTodoText(editingTodoId, newTodo));
//   //     dispatch(finishEditing());
//   //   } else {
//   //     dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
//   //   }

//   //   setNewTodo('');
//   //   setInputWarning(false);
//   // };
 

//   const handleAddTodo = () => {
//     if (newTodo.trim() === '') {
//       setInputWarning(true);
//       return;
//     }

//     if (editingTodoId !== null) {
//       dispatch(updateTodoText(editingTodoId, newTodo));
//       dispatch(finishEditing());
//     } else {
//       dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
//     }

//     setNewTodo('');
//     setInputWarning(false);
//   };


//   const handleToggleTodo = (id, completed) => {
//     dispatch(toggleTodo(id));
//     if (completed && editingTodoId === id) {
//       dispatch(finishEditing());
//     }
//   };

//   const handleDeleteTodo = (id) => {
//     dispatch(deleteTodo(id));
//     if (editingTodoId === id) {
//       dispatch(finishEditing());
//     }
//   };

//   const handleFilterChange = (filter) => {
//     dispatch(setVisibilityFilter(filter));
//   };

//   const handleStartEditing = (id, text) => {
//     dispatch(startEditing(id));
//     setNewTodo(text);
//   };

//   // const handleFinishEditing = () => {
//   //   dispatch(finishEditing());
//   //   setNewTodo('');
//   // };

//   const filteredTodos = () => {
//     switch (visibilityFilter) {
//       case 'completed':
//         return todos.filter((todo) => todo.completed);
//       case 'not-completed':
//         return todos.filter((todo) => !todo.completed);
//       default:
//         return todos;
//     }
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       {/* <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//       <button onClick={handleAddTodo}>
//         {editingTodoId !== null ? 'Add Todo' :    'Save Todo'}
//       </button> */}
//        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
//       <button onClick={handleAddTodo}>
//         {editingTodoId !== null ? 'Save Todo' : 'Add Todo'}
//       </button>
//       {inputWarning && <p style={{ color: 'red' }}>Please enter a valid todo.</p>}
//       <div>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="all"
//             checked={visibilityFilter === 'all'}
//             onChange={() => handleFilterChange('all')}
//           />
//           All
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="completed"
//             checked={visibilityFilter === 'completed'}
//             onChange={() => handleFilterChange('completed')}
//           />
//           Completed
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="filter"
//             value="not-completed"
//             checked={visibilityFilter === 'not-completed'}
//             onChange={() => handleFilterChange('not-completed')}
//           />
//           Not Completed
//         </label>
//       </div>
//       <ul>
//         {filteredTodos().map((todo) => (
//           <li key={todo.id}>
//             <input
//               type="checkbox"
//               checked={todo.completed}
//               onChange={() => handleToggleTodo(todo.id, todo.completed)}
//             />
//             <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//               {todo.text}
//             </span>
//             {editingTodoId === todo.id ? (
//               <div>
//                 {/* <button onClick={handleFinishEditing}>Finish Editing</button> */}
//               </div>
//             ) : (
//               <>
//                 <button onClick={() => handleToggleTodo(todo.id, todo.completed)}>
//                   {todo.completed ? 'Undo' : 'Done'}
//                 </button>
//                 <button onClick={() => (todo.completed ? handleDeleteTodo(todo.id) : handleStartEditing(todo.id, todo.text))}>
//                   {todo.completed ? 'Delete' : 'Edit'}
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoApp;







// src/components/TodoApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  setVisibilityFilter,
  startEditing,
  finishEditing,
  updateTodoText,
} from './todoActions';

import './TodoApp.css'; // Import the CSS file

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const visibilityFilter = useSelector((state) => state.todos.visibilityFilter);
  const editingTodoId = useSelector((state) => state.todos.editingTodoId);
  const [newTodo, setNewTodo] = useState('');
  const [inputWarning, setInputWarning] = useState(false);

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      setInputWarning(true);
      return;
    }

    if (editingTodoId !== null) {
      dispatch(updateTodoText(editingTodoId, newTodo));
      dispatch(finishEditing());
    } else {
      dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
    }

    setNewTodo('');
    setInputWarning(false);
  };

  const handleToggleTodo = (id, completed) => {
    dispatch(toggleTodo(id));
    if (completed && editingTodoId === id) {
      dispatch(finishEditing());
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    if (editingTodoId === id) {
      dispatch(finishEditing());
    }
  };

  const handleFilterChange = (filter) => {
    dispatch(setVisibilityFilter(filter));
  };

  const handleStartEditing = (id, text) => {
    dispatch(startEditing(id));
    setNewTodo(text);
  };

  const filteredTodos = () => {
    switch (visibilityFilter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'not-completed':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="input-container">
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo} >
          {editingTodoId !== null ? 'Save Todo' : 'Add Todo'}
        </button>
      </div>
      {inputWarning && <p className="warning-message">Please enter a valid todo.</p>}
      <div className="filter-container">
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            checked={visibilityFilter === 'all'}
            onChange={() => handleFilterChange('all')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="completed"
            checked={visibilityFilter === 'completed'}
            onChange={() => handleFilterChange('completed')}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="not-completed"
            checked={visibilityFilter === 'not-completed'}
            onChange={() => handleFilterChange('not-completed')}
          />
          Not Completed
        </label>
      </div>
      <ul>
        {filteredTodos().map((todo) => (
          <li key={todo.id}>
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id, todo.completed)}
              />
            </div>
            <span className={`task-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
            {editingTodoId === todo.id ? (
              <div className="edit-buttons">
                {/* <button onClick={handleFinishEditing}>Finish Editing</button> */}
              </div>
            ) : (
              <div className="edit-buttons">
                <button onClick={() => handleToggleTodo(todo.id, todo.completed)}>
                  {todo.completed ? 'Undo' : 'Done'}
                </button>
                <button
                  onClick={() =>
                    todo.completed
                      ? handleDeleteTodo(todo.id)
                      : handleStartEditing(todo.id, todo.text)
                  }
                >
                  {todo.completed ? 'Delete' : 'Edit'}
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
