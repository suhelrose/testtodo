import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import Tform from './TForm';
import Tlist from './TList';
import useTS from './useTS';
import './styles.css';


const App = () => {
  const { todos, addTodo, deleteTodo } = useTS([]);
  return (
    <div className="App">
      
      <Typography component="h1" variant="h2">
        Suhel's Todos 
      </Typography>
      <Tform
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <Tlist todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
