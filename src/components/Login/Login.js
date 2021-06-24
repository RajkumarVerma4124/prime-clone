import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <BgImage />
            <BgImage1 />
            <BgImage2 />
            <BgImage3 />
            <BgImage4 />
            <Footer>
              <Logo>
                <img src="/images/primebluelogo.png" alt="Disney+" />
              </Logo>
              <DetainMain>
                <Detail>
                  <h5>Terms and Privacy Notice Send us feedback </h5>
                  <h5>Send us feedback</h5>
                  <h5>Help</h5>
                </Detail>
                <Detail1>
                  <h5>© 1996-2021, Amazon.com, Inc. or its affiliates </h5>
                </Detail1>
              </DetainMain>
              
            </Footer>
          </Container>
    );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: auto;
  width: auto;
  
`;


const BgImage = styled.div`
  height: 90%;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/Capture.JPG");
  position: absolute;
  top: 70px;
  right: 0;
  left: 0;
  z-index: -1;

`;

const BgImage1 = styled.div`
  height: 90%;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/Capture1.JPG");
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  z-index: -1;
`;

const BgImage2 = styled.div`
  height: 90%;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/Capture3.JPG");
  position: absolute;
  top: 190%;
  right: 0;
  left: 0;
  z-index: -1;
`;

const BgImage3 = styled.div`
  height: 90%;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/Capture4.JPG");
  position: absolute;
  top: 285%;
  right: 0;
  left: 0;
  z-index: -1;
`;

const BgImage4 = styled.div`
  height: 80%;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/Capture5.JPG");
  position: absolute;
  top: 375%;
  right: 0;
  left: 0;
  z-index: -1;
`;

const Footer = styled.div`
  top: 454%;
  left: 0;
  right: 0;
  height: 120px;
  background-color: #0f171e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: -1
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 10px;
  margin-bottom: 5px;
  max-height: 80px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 150%;
    height: 120%;
  }
`;

const DetainMain = styled.a`
display: flex;
flex-direction: row;
font-size: 15px;

@media (max-width: 768px) {
  flex-direction: column;
    font-size: 6px;

}

`;

const Detail= styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #0063e5;
  letter-spacing: 1.42px;
  line-height: 1.08;
  white-space: nowrap;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: space-between;
  margin-right: 15px;
`;

const Detail1= styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: lightgray;
  letter-spacing: 1.42px;
  line-height: 1.08;
  white-space: nowrap;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;

`;





export default Login;
