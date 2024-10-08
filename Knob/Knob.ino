/*
 Controlling a servo position using a potentiometer (variable resistor)
 by Michal Rinott <http://people.interaction-ivrea.it/m.rinott>

 modified on 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Knob
*/

#include <Servo.h>


const int BUTTON1_PIN = 7;  
const int BUTTON2_PIN = 6; 
const int LOCKER1 = 0;
const int LOCKER2 = 1;
const int LOCKER3 = 2;
const int LOCKER4 = 3;
const int OPEN = 1;
const int CLOSED = 0;

int motor_no = 1;

int lockers[] = {0, 0, 0, 0 }

Servo servo1; 
Servo servo2; 
Servo servo3; 
Servo servo4; 
      // the number of the pushbutton pin
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(19200);
  // initialize the pushbutton pin as an pull-up input
  // the pull-up input pin will be HIGH when the switch is open and LOW when the switch is closed.
  pinMode(BUTTON1_PIN, INPUT_PULLUP);
  pinMode(BUTTON2_PIN, INPUT_PULLUP);

  servo1.attach(8); 
  servo1.write(160); 

  servo2.attach(9); 
  servo2.write(160); 

  servo3.attach(10); 
  servo3.write(160); 

  servo4.attach(11); 
  servo4.write(160); 

}
void loop() {
  // read the state of the switch/button:
  int buttonState1 = digitalRead(BUTTON1_PIN);
  int buttonState2 = digitalRead(BUTTON2_PIN);

  if (Serial.available()) { // check if data is available to read
    char receivedChar = Serial.read(); // read the incoming byte
    switch (--receivedChar) {
      case LOCKER1:
        moveLocker(LOCKER1);
        break;
      case LOCKER2:
        moveLocker(LOCKER2);
        break;
      case LOCKER3:
        moveLocker(LOCKER3);
        break;
      case LOCKER4:
        moveLocker(LOCKER4);
        break;
    }
  }
}

void openLocker(int motor_no){
  switch (motor_no) {
      case LOCKER1:
        servo1.write(60); 
        break;
      case LOCKER2:
        servo2.write(60); 
        break;
      case LOCKER3:
        servo3.write(60); 
        break;
      case LOCKER4:
        servo4.write(60); 
        break;
    }
}

void closeLocker(int motor_no){
      switch (motor_no) {
      case LOCKER1:
        servo1.write(160); 
        break;
      case LOCKER2:
        servo2.write(160); 
        break;
      case LOCKER3:
        servo3.write(160); 
        break;
      case LOCKER4:
        servo4.write(160); 
        break;
    }
}

void moveLocker(int motor_no) {
  switch (motor_no) {
    case LOCKER1:
      if (lockers[LOCKER1] == CLOSED) {
        openLocker(LOCKER1);
        lockers[LOCKER1] = OPEN;
      } else {
        closeLocker(LOCKER1);
        lockers[LOCKER1] = CLOSED;
      }
      break;
    case LOCKER2:
      if (lockers[LOCKER2] == CLOSED) {
        openLocker(LOCKER2);
        lockers[LOCKER2] = OPEN;
      } else {
        closeLocker(LOCKER2);
        lockers[LOCKER2] = CLOSED;
      }
      break;
    case LOCKER3:
      if (lockers[LOCKER3] == CLOSED) {
        openLocker(LOCKER3);
        lockers[LOCKER3] = OPEN;
      } else {
        closeLocker(LOCKER3);
        lockers[LOCKER3] = CLOSED;
      }
      break;
    case LOCKER4:
      if (lockers[LOCKER4] == CLOSED) {
        openLocker(LOCKER4);
        lockers[LOCKER4] = OPEN;
      } else {
        closeLocker(LOCKER4);
        lockers[LOCKER4] = CLOSED;
      }
      break;
  }
}
