void setup() {
    Serial.begin(9600);  
}
 
void loop() { 
  String input;

  if(Serial.available()) {
    // Get the data from the serial port (from the web page)
    data = Serial.readString();
    
    // processing the data
    // ..
  }
}