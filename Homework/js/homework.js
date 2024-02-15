// Listen for the form submission event
document.getElementById('f1Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Retrieve user inputs for season and round from the form
    const season = document.getElementById('season').value;
    const round = document.getElementById('round').value;
    // Construct the API URL using the season and round values
    const apiUrl = `https://ergast.com/api/f1/${season}/${round}/driverStandings.json`;
  
    // Use Axios to fetch data from the F1 API
    axios.get(apiUrl)
      .then(response => {
        // Extract the standings data from the response
        const standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        // Call the function to populate the table with the fetched data
        populateTable(standings);
      })
      .catch(error => console.error('Error fetching F1 data:', error)); // Log any errors that occur during the fetch
  });
// Clear form
clearButton.addEventListener('click', function() {
    document.querySelector('#f1Table tbody').innerHTML = '';
});
  // Function to populate the table with F1 standings data
  function populateTable(standings) {
    // Find the table body in the DOM
    const tableBody = document.getElementById('f1Table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear existing table data
  
    // Iterate over each standing and add a row to the table for each
    standings.forEach(standing => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${standing.position}</td>
        <td>${standing.Driver.givenName} ${standing.Driver.familyName}</td>
        <td>${standing.Driver.nationality}</td>
        <td>${standing.Constructors[0].name}</td>
        <td>${standing.points}</td>
      `;
      // Append the new row to the table body
      tableBody.appendChild(row);
    });
  }
  