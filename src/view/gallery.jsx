import Footer1 from "../footer/footer";
export default function Gallery() {
    return (
        <div>
            <div  className="gallery-div1">
                <div className="gallery-child1 team2">
                    <h2>fresh, fast <br/>
                      & handmade</h2>
                      <p>All of Rozzis food is prepared daily at our <br/> 
                      restaurants to ensure the highest quality, <br/>
                      freshest meals are delivered to our customers.</p>
                      <p>This means that each Rozzi’s store will have <br/>
                       different dishes focused on seasonal produce,<br/>
                        market availablility and of course, our regular’s <br/>
                         favourites!</p>
                </div>
                <div className="gallery-child2 team1">
                    <div className="overlay">
                        <h1>pizza</h1>
                    </div>
                </div>
            </div>
            <div  className="gallery-div1">
                <div className="gallery-child3 team1">
                    <div className="overlay">
                            <h1>desserts</h1>
                    </div>
                </div>
                <div className="gallery-child4 team2">
                <div className="overlay">
                    <h1>solads</h1>
                    </div>
                </div>
            </div>
            <div  className="gallery-div1">
                <div className="gallery-child5 team2">
                    <div className="overlay">
                            <h1>break fast</h1>
                    </div>
                </div>
                <div className="gallery-child6 team1">
                <div className="overlay">
                    <h1>paste</h1>
                    </div>
                </div>
            </div>
            <div className="gallery-div2">
                <div className="overlay">
                        <h1>paste</h1>
                </div>
            </div>
            <span className="angle gallery-angle"><li className="fa fa-angle-right "></li></span>
        <Footer1/>
        </div>
        );  
}