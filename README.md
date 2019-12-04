## Requirements:

- Project should be documented
   - Niet gedaan omdat naar mijn mening de leesbaarheid van de code de documentatie moet zijn.
- Project should run with one command
   - Done, (zie scripts).
- Project should be deployable from CI
  - Niet gedaan omdat ik er geen ervaring mee heb en mijn handen al vol had met graphql
- Project should have tests
  - Partly done, sommige tests staan uit (zie notes)
- Server should be written in Node.js
  - Server is geschreven in Javascript, het draait wel op Node ;-)
- Front-end should use React.js
  - Done
- User interface should be responsive
  - Done
- User should be able to filter through at least 3 properties
  - Done, al moet ik toegeven dat het niet bug-vrij is
  
## Notes:
### Graphql
Ik heb weinig ervaring met Graphql, dus ik ga ervan uit dat er best practices zijn die ik niet ken.
Verder heb ik gebruik gemaakt van `https://swapi.graph.cool/` omdat de andere resource mij een `405 error` gaf.

### Unit tests
Server heeft geen unit tests door een complicatie met create-react-app. Ook staan er een paar tests uit omdat ik geen ervaring heb met het testen van react hooks en fetch.

### Bugginess
Planets en Species worden niet gefilterd. Mijn idee was om data uit de `people` en `residents` te halen maar dit is niet meer gelukt. Verder werkt de applicatie niet vlekkeloos. Dit door een combinatie van nieuwe technieken en tijdgebrek.

## Scripts

Start the whole app

### `yarn app:start`

Start the client app

### `yarn start`

Start server app

### `yarn server:start`

