import { useRef } from 'react';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Teams from './Components/Teams'
import Fixtures from './Components/Fixtures'
function App() {
  const HomeRef= useRef(null);
  const AboutRef = useRef(null);
  const TeamsRef = useRef(null);
  const FixturesRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Navbar scrollToSection={scrollToSection} HomeRef={HomeRef} AboutRef={AboutRef} TeamsRef={TeamsRef} FixturesRef={FixturesRef}/>
      <div  className='Body-content'>
        <section ref={HomeRef}>
            <Home/>
        </section>
        <section ref={AboutRef}>
          <About/>
        </section>
        <section ref={TeamsRef}>
          <Teams/>
        </section>
        <section ref={FixturesRef}>
          <Fixtures/>
        </section>
        <div className="rule-and-regulationContainer">
            <h1>Rules & Regulations</h1>
            <div className="rules-area">
              {/* <h3>General guidelines:</h3> */}
              <p>
                <ul>
                  <li>Each house can submit 2 teams per game. First Priority will be given to the non-sports Person.</li> <br />
                  <li>Participants must come with Proper Sports attire & ID Card.</li><br />
                  <li>Sports quota students, and those who have represented at international, national, or university 
                  levels, cannot participate in their respective games.</li><br />
                  <li>On all the Indoor & Outdoor Event days, the team will be accompanied by the House staff In-
                  charge, Captain, and Vice captains only. (House members are not allowed on the competition 
                  area)</li><br />
                  <li>Match Umpire / Referee will be appointed by the Intramural Committee, the referee’s decision 
                  is final.</li><br />
                  <li>All the matches will be conducted on Knock-out basis only & fixtures will be drawn on the 
                  spot.</li><br />
                  <li>The Intramural Committee holds the position to change the venue and match schedule.</li><br />
                  <li>xInterchange of house by students (house members) Strictly Prohibited, If the issue is found, 
                  serious action will be taken by the Intramural committee.</li><br />
                  <li>All the Indoor & Outdoor games will be conducted post-Lunch from 2:00pm to 4:30pm.</li><br />
                  <li>In all Events, first, second and Third position will be honored by medals and certificates.</li><br /> 
                  <li>A student can utmost participate in 3 major games (Indoor & Outdoor).</li><br />
                  <li>A student can utmost participate in 2 field and 1 track Vice-Versa [exception of Relay]</li><br />
                  <li>Each House can only represent one team each, for Relay.</li><br /> 
                  <li>Relay points will be included in the overall athletics championship.</li><br />
                  <li>In team Events, first three Position will be honored with certificates & In all Athletic events, 
                  first three Position will be honored with Medals and Certificates.</li><br />
                  <li>Mini Marathon: Top 8 will be felicitated – top 3 will be honored with certificated & Medals,4th – 8h Position, merit certificate will be provided, participation certificate(e-certificate) for all the Participants.</li><br />
                  <li>Team should report the venue 30 Minutes prior to the Event.</li><br />
                  <li>Team registration will be closed by noon.</li>
                  </ul>
              </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
