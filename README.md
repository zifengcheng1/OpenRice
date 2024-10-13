## OpenRice
Welcome to Team OpenRice! We are developing a system for large student accommodation complexes that allows tenants to share unused food ingredients with each other. 
<br><br>Our mission is to combat food waste through large-scale collaboration while minimising the effort and time required from users.
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="project-overview">Project Overview</a>
    </li>
    <li>
      <a href="#key-features">Key Features</a>
    </li>
    <li>
      <a href="#how-it-works">How It Works</a>
      <ul>
        <li><a href="#system-requirements">System Requirements</a></li>
        <li><a href="#setup-and-installation">Setup and Installation</a></li>
      </ul>
    </li>
  </ol>
</details>
<br />

## Project Overview
In shared student housing, leftover or unused food ingredients often go to waste. OpenRice offers a simple, collaborative platform where tenants can list food items they no longer need, making them available for donation to others. This encourages sustainable habits, reduces waste, and helps students save money.
<br />
<br />

## Key Features
<ol>
  <li>
    Ingredient Listing: Users can post items they no longer need for others to claim.
  </li>
  <li>
    Browse and View: Quickly browse available ingredients by category.
  </li>
  <li>
    Locker Automation: The system will automatically open the locker corresponding to the ingredient when it is successfully listed or claimed.
  </li>
  <li>
    Kiosk Mode: A shared locker system managed via a kiosk interface allows physical storage and selection of donated ingredients.
  </li>
  <li>
    User-friendly Interface: Designed for ease of use, users can quickly and easily list and claim ingredients effortlessly.
  </li>
</ol>
<br />

## How It Works
<ol>
  <li>
    Ingredient Listing: Users post items they no longer need by entering a name, category, purchase and expiry date, origin of purchase and category.
  </li>
  <li>
    View and Claim Items: Others can browse posted ingredients and claim them.
  </li>
  <li>
    Locker Automation: When an item is listed or claimed, the system automatically opens the corresponding locker via a servo motor.
  </li>
</ol>
<br />

## System Requirements
<ol>
  <li>
    Hardware:
    <ul>
      <li>
        Arduino board (Arduino UNO used in the project)
      </li>
      <li>
        Servo Motors x 4 (to control locker doors)
      </li>      
    </ul>
  </li>
  <li>
    Desktop:
    <ul>
      <li>
        Frontend: HTML, CSS, Javascript, Tailwind (CSS framework)
      </li>
      <li>
        Backend: NodeJS
      </li>
    </ul>
  </li>
  <li>
    Tools:
    <ul>
      <li>
        Arduino IDE to program the board
      </li>
      <li>
        USB cable to connect the Arduino to the computer
      </li>
    </ul>
  </li>
</ol>
<br />

## Setup and Installation
Prerequisites
* Download and install nodeJS + npm from https://nodejs.org/en
<br>

Arduino Setup
<ol>
  <li>
    Connect the servo motors to the Arduino board (pins 8, 9, 10, and 11).
  </li>
  <li>
    Upload the Arduino code to control the servos using the Arduino IDE:
    <ul>
      <li>
        Select the correct board and port in Arduino IDE.
      </li>
      <li>
        Upload the provided `Knob.ino` file to the board located in the Knob folder.
      </li>
    </ul>
  </li>
</ol>
<br>

Backend and Frontend Setup
1. Clone the repository or download the repository as a zip file
   ```sh
   git clone https://github.com/zifengcheng1/OpenRice.git
   ```
2. If you downloaded as a zip, extract to a directory of your choosing
3. Open a command line terminal in the folder where you saved the repository
4. To start the server, enter this command:
   ```sh
   node codebase/src/js/server.mjs
   ```
5. Access the website by navigating to codebase/src and opening index.html with Chrome

