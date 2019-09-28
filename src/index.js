import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
    render() {
        constructor() {
            super();
            this.state = {
                generation: 0
            }
        }
        return (
            <div>
                <h1>The Game Of Life</h1>
                <Grid
                />
                <h2>
                    Generation: {this.state.generation}
                </h2>
            </div>
        );
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));


