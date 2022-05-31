Take-home assignment: Aviation Frequency Propagation Simulator
Most aircraft have transponders that emit signals on frequencies 1090 MHz or 868 MHz. These transponders are used to send highly accurate positional information to ground controllers and to other aircraft. Our customer has developed receivers for these signals that they install all around the world, on buildings or telecommunication antennas.

In order to see if there are any blind spots when they deploy their antennas, the customer would like to have a web-based tool that can simulate the coverage of their receivers. The tool will consist of:

1. A front-end that will display an area of interest and an additional layer displaying markers representing the receivers and their coverage. Coverage will be shown as a circular overlay on the map.
2. A back end from which the client can add and remove receivers dynamically. The backend should be able to accept the following inputs:
- Latitude
- Longitude
- Coverage radius in m (this will typically be between 4 and 10 km)

Instructions for the assignment
The front-end will be written using Javascript and will use Google Maps API to display a full-screen map showing the area of interest and the receivers. Your application should display the map and receivers as soon as it is loaded. The application will extract data from the API endpoints described in (2) below. The figure below is an example of what your map display should look like.



You will need a Google Maps API key for the application. This is the key: AIzaSyAlWnvLoFl72OeO3FpOkFBObwN5Vr6EkZA 
The backend will consist of a minimal UI to list, add and remove receivers and a public API with corresponding endpoints. No authentication system is required for the backend.
You may choose any language and technology for your backend, for example NodeJS + Firebase, Django, Flask. The application should have a database to store the receiver data persistently.
Your final solution (both front and back end) is to be deployed on Heroku.

LIVE LINKS
Deployed app: 
Video Demonstration:
BUILT WITH
Frontend
JavaScript
HTML
CSS
Backend
NodeJS
Express
MongoDB
Swagger for documentation
GETTING STARTED
Prerequisites
npm
npm install npm@latest -g
Installation
Clone the repository
git clone https://github.com/Kamayo-Spencer/GGV_simulator/
Install NPM package
npm install
Create .env file and enter your database and port
touch .env
MONGOURL=your mongoDB connection link
PORT=port_number
USAGE
Start the server
npm start
N:B. As normal HTML we open them with live server whereas here you do as follows: open browser

localhost:5000
AUTHOR
Kamayo Spencer
