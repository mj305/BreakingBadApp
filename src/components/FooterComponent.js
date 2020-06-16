import React from 'react';

const Footer = () => {

  return (
    <>
      <div>
        <footer class="py-2 bg-dark fixed-bottom" id="contact-footer">
          <div className="footer-flexbox-container" >
            <div class="container">
              <a href="https://breakingbadapi.com/" target="blank" >
                <p class="m-0 text-center text-white">Data Obtained from Breaking Bad API, 2020</p>
              </a>

              <a class="m-0 text-center text-white" href="https://mariabeckles.herokuapp.com/" target="blank" >
                <p className="footer-paragraph" >Created by Maria Beckles</p>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;