import React, { Component } from 'react'
import { InfoConsumer } from '../context'
import styled from 'styled-components'

class Details extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        title,
                        maps,
                        description
                    } = data.detailInfo;

                    return (
                        <React.Fragment>
                            <HeaderDetails className="conteiner-fluid.align-items-center">
                                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                                <h4 className="display-5">{headerSubTitle}</h4>
                                <p>{headerText}</p>
                            </HeaderDetails>
                            <div className="container">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">About place</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Map</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h2 className="mb-3">{title}</h2>
                                        <p>{description}</p>
                                        <img src={img} alt={title} className="img-thumbnail img-fluid"/>
                                    </div>
                                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <iframe src={maps} style={{border: '0', height: '28.125rem', width: '100%', frameborder: '0'}}></iframe>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )

                }}
            </InfoConsumer>
        )
    }
}



export default Details;


const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: 100vh;
text-transform: uppercase;
color: var(--mainWhite);
text-align: center;
h1{
    padding-top: 10%;
    color: var(--mainDark);
}
h4{
    color: var(--mainDark);
}
p{
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
}
.nav-item{
    height: 18.75rem;
}
@media(max-width: 760px){
    h1,h4{
        color: var(--mainWhite);
    }
}
`;