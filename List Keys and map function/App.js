import React from 'react';
// rendering of the list in the react ?
// how map function works

function App(){
    const Movies = ["Dune", "Minority Report", "Intersteller"]
    const result = Movies.map((movie, index) => <h1 key={index}>{movie}
    index is {index}</h1>)

    const list1 = [
        {
            id : "1",
            name : "Evans"
        },
        {
            id : "2",
            name : "Alan"
        },
    ]
    return(
        <div className='app'>
            {result }
        </div>
    )
}

export default App;