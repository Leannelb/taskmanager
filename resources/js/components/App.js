import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">React Component</div>

                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <textarea className="formControl" rows="5" placeholder="Create a task" required/>
                                    </div>
                                    <button type="button" className="btn btn-primary">Create a Task</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;