import Box from "../components/Box";
import Container from "../components/Container";
import Text from "../components/Text";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <Box as='footer' className="footer__container">
      <Container className="footer__wrapp aling-center m-t pad">
        <div className="footer__socialmedia d-flex aling-center">
          <a href="https://www.facebook.com" className="footer__socialmedia-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} /> <span>Facebook</span>
          </a>
          <a href="https://www.instagram.com" className="footer__socialmedia-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span>
          </a>
          <a href="https://www.twitter.com" className="footer__socialmedia-link" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} /> <span>Twitter</span>
          </a>
        </div>
      </Container>
    </Box>
  );
}

export default Footer;
