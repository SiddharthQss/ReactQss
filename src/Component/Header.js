import React, { Component } from 'react';

export default class Header extends Component {
    render(){
        var divStyle = {backgroundImage: "url('https://i.pinimg.com/originals/c1/af/8b/c1af8b69ba1e29c714718ac30d5d4353.jpg')" }
        return(
            <header>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox" >
                      {/*  <!-- Slide One - Set the background image for this slide in the line below -->*/}
                        <div class="carousel-item active" style={divStyle}>
                            <div class="carousel-caption d-none d-md-block">
                                <h3>First Slide</h3>
                                <p>This is a description for the first slide.</p>
                            </div>
                        </div>

                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </header>
        )
    }

}





