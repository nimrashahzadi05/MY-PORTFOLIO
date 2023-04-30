import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/Portfolio.jpg' className="profile-img" width={300} height={300} alt="Nimra's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Nimra 👋</h1>
        <p>
          I'm a software developer based in Barcelona, Spain. I specialize in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </p>
        <div className="social-icons">
          <a
            href=""
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/nimrashahzadi05"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nimra-shahzadi-7129351ab/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;