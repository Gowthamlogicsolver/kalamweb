

const Fixtures = () => {
  const eventSchedule = [
    { sport: 'BADMINTON (Singles & Doubles)', TeamCapacity: '1+2', menDates: 'Oct 7 - 8',  womenDates: 'Oct 7 - 8' },
    { sport: 'BALL BADMINTON', TeamCapacity: '5+3', menDates: 'Oct 3 - 4', womenDates: 'Sept 30 – Oct 1' },
    { sport: 'BASKETBALL', TeamCapacity: '5+3', menDates: 'Oct 8 - 9',  womenDates: 'Oct 1 – 3' },
    { sport: 'CARROM', TeamCapacity: '2', menDates: 'Oct 3 - 4', womenDates: 'Oct 3 – 4' },
    { sport: 'CHESS', TeamCapacity: '1', menDates: 'Oct 14 - 15', womenDates: 'Oct 14 - 15' },
    { sport: 'CRICKET', TeamCapacity: '11+4', menDates: 'Oct 14 – 16', womenDates: 'Oct 14 – 16' },
    { sport: 'FOOTBALL', TeamCapacity: '5+3', menDates: 'Oct 7 - 9',  womenDates: '' },
    { sport: '5’s FOOTBALL', TeamCapacity: '5+3', menDates: '', womenDates: 'Oct 14 - 15' },
    { sport: 'HANDBALL', TeamCapacity: '7+3', menDates: 'Oct 14 - 15', womenDates: '' },
    { sport: 'HOCKEY', TeamCapacity: '5+3', menDates: 'Sept 26 – 27', womenDates: '' },
    { sport: 'KABADDI', TeamCapacity: '7+3', menDates: 'Oct 1 – 3', womenDates: '' },
    { sport: 'KHO-KHO', TeamCapacity: '9+3', menDates: 'Oct 8 - 9',womenDates: 'Oct 5 – 7' },
    { sport: 'TABLE TENNIS', TeamCapacity: '1', menDates: 'Sept 26 - 27',  womenDates: 'Oct 1 - 3' },
    { sport: 'TENNIS', TeamCapacity: '1', menDates: 'Sept 30 – Oct 1', womenDates: 'Oct 4 – 5' },
    { sport: 'THROWBALL', TeamCapacity: '9+3', menDates: 'Sept 30 – Oct 1', womenDates: 'Oct 14 – 15' },
    { sport: 'VOLLEYBALL', TeamCapacity: '6+3', menDates: 'Oct 3 - 5', womenDates: 'Sept 30 – Oct 1' },
    { sport: 'ATHLETICS', TeamCapacity: '', menDates: 'Sept 26 - 30', womenDates: 'Sept 26 - 30' }
  ];
  return (
    <div className="FixturesContainer">
      <table className="fixture-table">
        <thead>
          <tr>
            <th>Sport Name</th>
            <th>Team Capacity</th>
            <th>Men Event Date</th>
            <th>Women Event Date</th>
          </tr>
        </thead>
        <tbody>
          {eventSchedule.map((eventdet,index) => (
            <tr key={index}>
              <td>{eventdet.sport}</td>
              <td>{eventdet.TeamCapacity}</td>
              <td>{eventdet.menDates}</td>
              <td>{eventdet.womenDates}</td>
            </tr>
          ))}
        </tbody>
        <tbody className="athletic-body">
          <td>Athletics Events Men</td>
          <td colSpan={3}>100 mts, 400 mts, 1500 mts, 4*100 mts, 4*400 mts, Mixed relay, long jump, Shotput, Discuss Throw</td>
        </tbody>
        <tbody className="athletic-body2">
          <td>Athletics Events Women</td>
          <td colSpan={3}>100 mts, 400 mts, 1500 mts, 4*100 mts, 4*400 mts, Mixed relay, long jump, Shotput, Discuss Throw</td>
        </tbody>
      </table>
    </div>
  )
}

export default Fixtures
