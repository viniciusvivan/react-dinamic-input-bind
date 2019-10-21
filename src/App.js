import React, { Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            desc: '',
            age: ''
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        const { target } = event;
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        return this.setState({
            /* O couchetes faz com que o valor seja
            *  atribuido ao index do name. Isso pode ser feito
            *  devido ao fato dos atributos name dos inputs serem
            *  exatamente iguais aos elementos de state
            */
            [name]: value
        });
    }

    render() {
        console.log(this.state);
        return (
            <div className="App">
                <div>
                    <input type="text" name="name" onChange={this.handleInput} />
                    <input type="text" name="desc" onChange={this.handleInput} />
                    <input type="number" name="age" onChange={this.handleInput} />
                </div>
            </div>
        );
    }
}

export default App;
