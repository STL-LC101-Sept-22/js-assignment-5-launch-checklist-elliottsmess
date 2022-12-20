// Write your JavaScript code here!
<body>
<h1>Launch Checklist Form</h1>
<div id="missionTarget" data-testid="missionTarget">
    <h2>Mission Destination</h2>
    <ol>
        <li>
            ::marker
            "Name: Tatooine"
        </li>
        <li>
            ::marker
            "Diameter: 10465 km"
        </li>
        <li>
            ::marker
            "Star: Tatoo I & Tatoo II"
        </li>
        <li>
            ::marker
            "Distance: 43000 light years from galactic core"
        </li>
        <li>
            ::marker
            "Number of Moons: 3"
        </li>
        </ol>
        <img src="https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg"
</div>

</body>
window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
   
});