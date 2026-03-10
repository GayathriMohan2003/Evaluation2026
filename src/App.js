import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      {/* Challenge Section */}
      <section className="challenge">
        <div className="challenge-container">
          
          {/* LEFT SIDE */}
          <div className="challenge-left">
            <p className="challenge-label">THE VISUAL CHALLENGE</p>
            
            <h2 className="challenge-title">
              FRAGMEN <br />
              TED CARE <br />
              <span>IN A GLOBAL</span> <br />
              CONTEXT.
          </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="challenge-right">
            <p className="challenge-quote">
              "From a local service to a tech-enabled premium powerhouse.
              We built the brand, the tools, and the growth engine."
            </p>

            <ul className="challenge-list">
              <li>DECENTRALIZED DONOR HUBS</li>
              <li>NON-STANDARDIZED VERIFICATION</li>
              <li>TRUST DEFICIT IN DIGITAL CARE</li>
              <li>COMPLEX INTERNATIONAL OPS</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;
