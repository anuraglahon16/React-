import React from "react";
import ReactDOM from "react-dom/client";

const styleCard = {
    backgroundColor : "lightblue"
};

const RestaurantCard =() =>{
    return (
    <div className="res-card" style={styleCard}>
        <img 
        className="res-logo"
        alt="res-logo"
        src="https://tb-static.uber.com/prod/image-proc/processed_images/41e448619de9527990482249b90f154c/30be7d11a3ed6f6183354d1933fbb6c7.jpeg"/>
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indian,Asian</h4>
        <h4>4.5 stars</h4>
        <h4>38 mins</h4>
       
    </div>
    );
};
const Header =() =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
            </div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li className="Home">Home</li>
                    <li className="About US">About US</li>
                    <li className="Contact US">Contact US</li>
                    <li className="Cart">Cart</li>
                </ul>

            </div>
        </div>
    );
};


const Body =() =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                
            </div>
        </div>
    )
}


const Applayout =() =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
            

        </div>
    )
}
const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);