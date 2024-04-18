import React from 'react';

function FooterContent() {
  return (
    <>
      <p>2024 Eco-Challenge | Nawal Dhabar, Aanyk Mann, Alexis Nguyen, Michelle Odnert, Jorey Papritz</p>
      <p>Environment icon by <a href="https://icons8.com">Icons8</a></p>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <FooterContent />
    </footer>
  );
}

export default Footer;