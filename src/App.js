import React from 'react';


class App extends React.Component {


  Vote = (idx) => () => {
   
    this.props.store.dispatch({type: 'VOTE', id:idx})

  }

  addNew = (event)  => {
    event.preventDefault()
    const content=event.target.hint.value
     
    this.props.store.dispatch({type:'ADDNEW', data: content})

    event.target.hint.value = ''
  }

  sortMap = ( mappi ) => {

    var obj = mappi
    return obj.sort((a,b) => b.votes - a.votes);
  
  }


  render() {
    const anecdotes = this.sortMap(this.props.store.getState())
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.Vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addNew}>
          <div><input name="hint"/></div>
          <button>create</button> 
        </form>
      </div>
    )
  }
}

export default App