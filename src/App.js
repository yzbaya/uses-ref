import React,{component} from 'react';

  class App extends component {

triggerHandler=()=>{
  console.log('Hello')
}
    render (){
      return(
        <>
        <h1>From:</h1>
          <input type="text"/>
          <button onClick={this.triggerHandler}>Trigger</button>
        </>
      )
    }
  }
  export default App;