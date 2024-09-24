import { useState } from 'react';

const Teams = () => {
  const[IsModalOpen,setIsModalOpen] = useState(false);
  const[TeamMem,setUser] = useState();
  const TeamArray = [{id:1,name:"Vipers",captain:"Dhiran K S"},
                    {id:2,name:"Falcons",captain:"Dinesh Arun M"},
                    {id:3,name:"Groupers",captain:"Shiny Shalom J"},
                    {id:4,name:"Alligator",captain:"Hashwic V Vincent"},
                    {id:5,name:"Hawks",captain:"Aditya S M"},
                    {id:6,name:"Eagles",captain:"Subbiah"},
                    {id:7,name:"Lions",captain:"Haridha"},
                    {id:8,name:"Tigers",captain:"Lakshitha"}
                    ]
  const TeamDetails=[{id:1,TeamName:"Vipers",captain:"Dhiran K S",phno:"82200 11252",Mvicecap:"Sanjay S",Wvicecap:"Divya S",description:"The Vipers symbolize stealth, agility, and tenacity. A team named after vipers embodies a fierce competitive edge, often characterized by quick thinking and strategic moves. They are known for their ability to adapt to any situation, striking with precision and confidence when the opportunity arises.	For a precise colour, a striking venom green paired with a dark charcoal would be ideal. The venom green represents energy and intensity, while the charcoal adds a sense of strength and sophistication. Together, these colours reflect the dynamic and powerful nature of the Vipers as a team!",downloadUrl:"http://localhost:5173/vipers.xlsx"},
    {id:2,TeamName:"Falcons",captain:"Dinesh Arun M",phno:"90955 57788",Mvicecap:"Lourd Alwin",Wvicecap:"Saranya",description:"The Falcons symbolize speed, precision, and keen vision. A team named after falcons embodies agility and sharp focus, often soaring above challenges and quickly adapting to changing circumstances. They are known for their strategic thinking and teamwork, working together to achieve their goals with grace and determination.For a precise colour, a sleek navy blue paired with a striking silver would be fitting. The navy blue represents trust and confidence, while the silver adds a modern touch, reflecting the falcon's swift, aerodynamic nature. This combination captures both the elegance and power of the falcon as a team!",downloadUrl:"http://localhost:5173/falcons.xlsx"},
    {id:3,TeamName:"Groupers",captain:"Shiny Shalom",phno:"99444 10675",Mvicecap:"Niyas",Wvicecap:"Soundarya",description:"The Groupers symbolize teamwork, adaptability, and resilience. A team named after groupers embodies the strength found in collaboration and unity, thriving in diverse environments. Known for their strategic approach and ability to navigate challenges together, they emphasize the importance of cooperation and support.For a precise colour, a vibrant teal paired with a soft coral would be fitting. The teal represents harmony and balance, while the coral adds a touch of warmth and enthusiasm. Together, these colours reflect the vibrant, cohesive spirit of the Groupers as a team!",downloadUrl:"http://localhost:5173/groupers.xlsx"},
    {id:4,TeamName:"Alligator",captain:"Hashwic V Vincent",phno:"63831 68413",Mvicecap:"Abishek R",Wvicecap:"Rithika M",description:"The Alligators embody strength, adaptability, and resilience. A team named after alligators represents a powerful presence, capable of navigating both land and water with ease. Known for their tenacity and strategic approach, they tackle challenges head-on and exhibit a fierce loyalty to one another.For a precise colour, a deep forest green paired with a warm golden yellow would be ideal. The forest green symbolizes strength and stability, while the golden yellow adds a touch of energy and optimism. Together, these colours capture the formidable and dynamic essence of the Alligators as a team!",downloadUrl:"http://localhost:5173/alligators.xlsx"},
    {id:5,TeamName:"Hawks",captain:"Aditya S M",phno:"73975 50762",Mvicecap:"Harish M",Wvicecap:"Nithya T",description:"The Falcons represent agility, speed, and keen perception. A team named after falcons embodies a fierce competitive spirit, characterized by strategic thinking and swift execution. Known for their teamwork and determination, they rise to challenges and soar above their competition, always aiming for new heights.For a precise colour, a bold royal blue paired with a bright gold would be ideal. The royal blue conveys trust and strength, while the gold symbolizes achievement and excellence. Together, they reflect the dynamic and soaring nature of the falcon!",downloadUrl:"http://localhost:5173/hawks.xlsx"},
    {id:6,TeamName:"Eagles",captain:"Subbiah",phno:"97906 34166",Mvicecap:"Sanjay M",Wvicecap:"Prathumna",description:"The Eagles embody strength, freedom, and leadership. A team named after eagles represents high aspirations, resilience, and a keen ability to navigate challenges. Known for their sharp vision and strategic prowess, eagles inspire confidence and determination, often soaring above obstacles to achieve their goals.For a precise colour, a deep emerald green paired with a crisp white would be fitting. The emerald green symbolizes growth and ambition, while the white represents clarity and purity of purpose. Together, they capture the majestic spirit of the eagle and the values of a strong, united team!",downloadUrl:"http://localhost:5173/eagles.xlsx"},
    {id:7,TeamName:"Lions",captain:"Haridha",phno:"99653 77030",Mvicecap:"Vimal",Wvicecap:"Ametha",description:"The Lions are often associated with strength, courage, and leadership, making them a powerful symbol for any team. They typically embody traits like teamwork, resilience, and determination, often striving for excellence in their pursuits.As for a colour, a rich gold or deep royal blue would be fitting. Gold represents excellence and success, while royal blue adds a sense of trust and loyalty—perfect for a team that embodies the spirit of the lion!",downloadUrl:"http://localhost:5173/lions.xlsx"},
    {id:8,TeamName:"Tigers",captain:"Lakshitha",phno:"90807 66092",Mvicecap:"Chandheesh",Wvicecap:"Sriswetha",description:"The Tigers represent agility, power, and fierce competitiveness. Known for their sharp instincts and adaptability, a team named after tigers embodies a relentless drive to succeed and a bold, fearless attitude. They thrive in challenging situations and often display a strong sense of unity and pride.For a precise colour, a vibrant orange with black accents would be ideal. The orange symbolizes energy and enthusiasm, while the black adds a touch of strength and sophistication, perfectly capturing the essence of a tiger-themed team!",downloadUrl:"http://localhost:5173/tigers.xlsx"},
  ]
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUser();
  }
  const HandleOpenModal = (id) => {
    const teamData = TeamDetails.find(team => team.id === id)
    setUser(teamData);
    setIsModalOpen(true);
  }
  const HandledownloadSheet = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
  return (
    <>
      {IsModalOpen && (
        <div className="modal">
          <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <div className="modal-content-area">
                <label htmlFor="">
                  <h1>Team Name : </h1>
                  <h1> {TeamMem.TeamName}</h1>
                </label>
                <label htmlFor="">
                  <h1>Captain Name :</h1>
                  <h1>{TeamMem.captain}</h1>
                </label>
                <label htmlFor="">
                  <h1>Phone Number :</h1>
                  <h1>{TeamMem.phno}</h1>
                </label>
                <label htmlFor="">
                  <h1>Vice Captain men :</h1>
                  <h1>{TeamMem.Mvicecap}</h1>
                </label>
                <label htmlFor="">
                  <h1>Vice Captain women :</h1>
                  <h1>{TeamMem.Wvicecap}</h1>
                </label>
                  <h1>Team description</h1>
                  <p>{TeamMem.description}</p>
              </div>
              <button className='download-btn'onClick={() => HandledownloadSheet(TeamMem.downloadUrl)}>Click here to download the team sheet</button>
          </div>
        </div>
      )}
      <div className="TeamContainer">
        <h1>Team Details </h1>
        <table className="table" >
          <thead>
            <tr>
                <th>Team Name</th>
                <th>Team Captain</th>
                <th>Team Details</th>
            </tr>
          </thead>
          <tbody>
            {TeamArray.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.captain}</td>
                <td><button onClick={() => HandleOpenModal(user.id)} >Tap to view team details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Teams
