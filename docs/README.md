# Canary

## Team Members
Ben, Thomas, Katie, Greg

## Project Description
Canary is a learning platform that makes virtual learning environments that engage students through movement. Teachers on the platform can pose questions to the classroom and students can select their answers simply through their gestures. We use tensorflow pose recognition to detect these gestures and socket.io to create classroom environments.

## User Stories
As a teacher, I want a unique classroom environment that my students can join.
Feature: Socket.io automatically creates unique rooms for teacher users and students have a button to join their teacher's room.
Acceptance Test: Socket.io rooms for every teacher user that is logged in.

As a student or a teacher, I want to chat with the other people in my classroom.
Feature: Chatbox
Acceptance Test: Socket.io real time chat feature.

As a teacher, I want to be able to ask questions to the students in my classroom and receive scores in real time.
Feature: Question list with drag and drop question items.
Acceptance Test: Using Socket.io to pass question data between teacher and student clients.

As a teacher I want to provide a kinesthetic learning experience to my students.
Feature: Webcam based answer selection.
Acceptance Test: Answer selections determined using Tensorflow Mobilenet package.

As a student, I want a fun and engaging online learning experience.
Feature: Webcam based answer selection.
Acceptance Test: Able to physically select answers to questions using Tensorflow.

