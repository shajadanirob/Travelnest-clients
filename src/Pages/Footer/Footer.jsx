

const Footer = () => {
    return (
      <footer className="footer  p-10 bg-[#111111]  opacity-90 text-base-content">
  <aside>
  <img className="h-[50px] lg:h-[80px] lg:w-[180px] md:ml-56 lg:ml-20 " src= 'https://i.ibb.co/gR4g7Hj/download-7.jpg' alt="Logo" />
      
    <p className="text-white">TravelNest Ltd.<br/>Your trusted partner for exceptional services, <br /> adventures, and experiences. Explore, book, <br /> and enjoy the best of what we have to offer.</p>
  </aside> 
  <nav>
    <header className="footer-title text-white">Services</header> 
    <a className="link link-hover text-white">Toure guiedline</a> 
    <a className="link link-hover text-white">Toure place</a> 
    <a className="link link-hover text-white">Hotel booking</a> 
    <a className="link link-hover text-white">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title text-white">Company</header> 
    <a className="link link-hover text-white">About us</a> 
    <a className="link link-hover text-white">Contact</a> 
    <a className="link link-hover text-white">Jobs</a> 
    <a className="link link-hover text-white">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title text-white">Legal</header> 
    <a className="link link-hover text-white">Terms of use</a> 
    <a className="link link-hover text-white">Privacy policy</a> 
    <a className="link link-hover text-white">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;