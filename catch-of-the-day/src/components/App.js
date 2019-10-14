import React from "react";
import Header from "./Header.js";
import Order from "./Order.js";
import Inventory from "./Inventory.js";
import sampleFishes from "../sample-fishes"
import Fish from "./Fish.js"

class App extends React.Component {
    //initialize empty state
    state = {
        fishes: {},
        order: {}
    };
    // method to update state
    addFish = fish => {
        // take a copy of current state
        const fishes = {...this.state.fishes};
        // add new fish
        fishes[`fish${Date.now()}`] = fish;
        //set the new fishes object to state
        this.setState({
            fishes: fishes
        })
    };
    // another state method;
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes }) 
    };
    addToOrder =(key) => {
        // take a copy of state
        const order = {...this.state.order };
        // Either add to the order, or update the nummber in our order
        order[key] = order[key] + 1 || 1;
        // call setState to update our state
        this.setState({ order });
    };


    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                    {Object.keys(this.state.fishes).map(key => (
                    <Fish 
                    key={key} 
                    index={key}
                    details={this.state.fishes[key]} 
                    addToOrder = {this.addToOrder}
                    />
                    ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                addFish={this.addFish}
                loadSampleFishes={this.loadSampleFishes}
                />
            </div>
        );
    }
}

export default App;