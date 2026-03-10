
import './Hero.css';
import baby from '../assets/81yAbiD5k6L._AC_UF894,1000_QL80_.jpg';
import Stats from './Stats';   

function Hero(){
  return(
    <section className="hero">

      <div className="case-badge">
        <span className="star">✦</span>
        FEATURED CASE STUDY
      </div>

      <h1>
        REBRANDING A <br/>
        <span>MOTHERHOOD</span><br/>
        ECOSYSTEM
      </h1>

      <p className="desc">
        From a local tracking app to a pharma-grade premium powerhouse.
        We architected the brand, the tools, and the trust-engine.
      </p>

      <div className="buttons">
        <button className="primary">VIEW LIVE PLATFORM ↗</button>
        <button className="secondary">OUR PROCESS</button>
      </div>

      <Stats />

      <img src={baby} alt="mother and baby" className="hero-img"/>
    </section>
  )
}

export default Hero;