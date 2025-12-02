function Planner() {
  return (
    <div>
      <h2>🗓️ Weekly Planner</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Day</th>
            <th style={{ border: '1px solid #ccc', padding: '0.5rem' }}>Plan</th>
          </tr>
        </thead>
        <tbody>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
            <tr key={day}>
              <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>{day}</td>
              <td style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
                <input type="text" placeholder={`Enter plan for ${day}`} style={{ width: '100%' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Planner;