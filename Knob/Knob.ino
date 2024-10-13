/*
 Controlling a servo position using a potentiometer (variable resistor)
 by Michal Rinott <http://people.interaction-ivrea.it/m.rinott>

 modified on 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Knob
*/

#include <Servo.h>

const int LOCKER1 = 0;
const int LOCKER2 = 1;
const int LOCKER3 = 2;
const int LOCKER4 = 3;
const int OPEN = 1;
const int CLOSED = 0;
const int CLOSED_ANGLE = 160;
const int OPEN_ANGLE = 60;
const int PIN_ONE = 10;
const int PIN_TWO = 8;
const int PIN_THREE = 11;
const int PIN_FOUR = 9;
const int BAUDRATE = 19200;

// Array to store locker states
int lockers[] = {CLOSED, CLOSED, CLOSED, CLOSED};

Servo servo1; 
Servo servo2; 
Servo servo3; 
Servo servo4; 

// Start serial communication and set motors to closed by default
void setup() {
  Serial.begin(BAUDRATE);

  servo1.attach(PIN_ONE); 
  servo1.write(CLOSED_ANGLE); 

  servo2.attach(PIN_TWO); 
  servo2.write(CLOSED_ANGLE); 

  servo3.attach(PIN_THREE); 
  servo3.write(CLOSED_ANGLE); 

  servo4.attach(PIN_FOUR); 
  servo4.write(CLOSED_ANGLE); 

}
void loop() {
  if (Serial.available()) { // check if data is available to read
    int lockerNum = Serial.parseInt(); // read the number
    // Pre-decrement to align locker values
    switch (--lockerNum) {
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

// Open given locker
void openLocker(int motor_no){
  switch (motor_no) {
      case LOCKER1:
        servo1.write(OPEN_ANGLE); 
        break;
      case LOCKER2:
        servo2.write(OPEN_ANGLE); 
        break;
      case LOCKER3:
        servo3.write(OPEN_ANGLE); 
        break;
      case LOCKER4:
        servo4.write(OPEN_ANGLE); 
        break;
    }
}

// Close given locker
void closeLocker(int motor_no){
      switch (motor_no) {
      case LOCKER1:
        servo1.write(CLOSED_ANGLE); 
        break;
      case LOCKER2:
        servo2.write(CLOSED_ANGLE); 
        break;
      case LOCKER3:
        servo3.write(CLOSED_ANGLE); 
        break;
      case LOCKER4:
        servo4.write(CLOSED_ANGLE); 
        break;
    }
}

// Close given locker if open, open given locker if closed
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
