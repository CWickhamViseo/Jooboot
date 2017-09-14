import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            jsonResponse: "",
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    JSON response be here
                    {/*{this.state.jsonResponse.map((elem) => elem.toString())}*/}
                </p>
            </div>
        );
    }

    // componentDidMount(){
    //     this.setState({
    //         jsonResponse: axios.get('https://jobs.github.com/positions.json?location=Heidelberg').json(),
    //     })
    // }

    async componentDidMount() {
        const {jsonResponse} = this.state;
        const githubUrl = `https://jobs.github.com/positions.json?location=new+jersey`;
        const data = await this.callGithubAPI(githubUrl);
        this.setState({ jsonResponse: data });
        for(let elem of jsonResponse){
            for(let param in elem) {
                console.log(param);
            }
        }
    }
    callGithubAPI(url) {
        return new Promise(resolve => {
            axios
                .get(url)
                .then(function(response) {
                    console.log(response.data);
                    resolve(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                    return url;
                });
        });
    }

}

export default App;
