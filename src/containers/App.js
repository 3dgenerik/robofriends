import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component{
    constructor(){
        super()

        this.state = {
            robots:[],
            searchField: '',

        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots:users});
            // {};
        })
    }


    onSearchRobots = (event) =>{
        this.setState({searchField:event.target.value});
    }

    render(){
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter((robot) => {
            return robot.username.toLowerCase().trim().includes(searchField.toLowerCase().trim());
        });

        return !robots.length ?
            <h1>loading...</h1>
            :
            (
                <div className = 'tc'>
                    <h1>Robot friends</h1>
                    <SearchBox searchRobots = {this.onSearchRobots}/>
                    <Scroll scrollHeight = {800}>
                        <CardList robots = {filterRobots}/>
                    </Scroll>
                </div>
            )
    }
}

export default App;