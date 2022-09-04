import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="footer-bottom">
                        <p>
                            &copy;{new Date().getFullYear()} F1 circuits - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    color: var(--mainWhite);
}
.footer-bottom{
    padding-top: 2rem;
    padding-bottom: 1rem;
}
ul li a{
    color: var(--mainGrey);
}
ul li a:hover{
    color: var(--mainLightGrey);
}
`;