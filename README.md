# Minimal-Arduino-Webserver-without-WiFi-Module

This setup doesn't require an ESP or a WIFI module to run the web server. Instead, it uses Arduino and leverages serial communication.

## Setup

```
npm i
```

## Run

0. Run the Arduino script in `arduino_index.ino`.

1. Run the express server.

```
node server.js
```

2. Open `localhost:3000`.

3. Choose a value and submit.

4. This value should now be stored inside the `data` variable in the Arduino script.
