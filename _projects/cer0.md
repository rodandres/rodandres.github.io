---
layout: project

title: "CER-0"

category: "ROCKETRY · AVIONICS · FLIGHT SOFTWARE"

year: 2025

status: "Completed"

description: "Experimental rocket integrating autonomous flight software, avionics, propulsion, structures, and redundant recovery systems."

role: "Mission Director · Lead Avionics Engineer"

team: "Volta Rocketry"

image: "/assets/images/placeholder.png"

image_alt: "CER-0 experimental rocket"

image_caption: "CER-0 during its development and flight campaign."

technologies:
  - C++
  - Arduino
  - Embedded Systems
  - Flight Software
  - Avionics
  - Sensors
  - State Estimation
  - Autonomous Recovery

github: "https://github.com/rodandres"

available: true
---

## **01 / THE PROBLEM**

### Building a rocket that had to work

CER-0 was the first major rocket I helped design and build at Volta
Rocketry.

The objective was not simply to launch a rocket. The mission required
the integration of propulsion, aerostructures, avionics, flight
software, and recovery into a complete vehicle capable of performing
its flight sequence and recovering safely.

For me, the central challenge was the avionics and flight software.

The flight computer had to monitor the vehicle during flight,
determine when the rocket reached apogee, and autonomously initiate
the parachute deployment sequence.

There was a fundamental difference between writing software that
worked in a controlled environment and engineering a system that had
to work during an actual flight.

A rocket only gets one chance.

---

### Mission objective

CER-0 was designed around a target apogee of approximately **500 m**,
using an **Aerotech G-80T** motor.

The vehicle also required an autonomous recovery system with
redundant electronic parachute deployment.

The mission therefore had two fundamental objectives:

1. Reach the intended flight altitude.
2. Recover the vehicle safely after flight.

The avionics system had to support both.

---

### System-level challenge

The rocket was not treated as a collection of independent components.

Each subsystem affected the behavior of the others.

[System architecture diagram: Propulsion, Avionics, Aerostructures,
Flight Computer, and Recovery]

The challenge was therefore not only to design each subsystem, but to
make their interfaces work as part of a single flight system.


## 02 / THE APPROACH

### From subsystems to a flight system

My responsibility focused primarily on avionics and flight software,
while also coordinating with the other technical areas involved in
the mission.

The flight computer acted as the interface between the physical
vehicle and the mission logic.

[System diagram: Sensor Measurements → Flight Computer →
Flight State → Mission Logic → Recovery System]

The system therefore had to transform physical measurements into a
decision about what the vehicle should do next.


### Mission sequence

The avionics system was organized around the different phases of
flight.

[Mission sequence diagram: Initialization → Launch → Ascent →
Apogee → Recovery Event → Descent → Recovery]

The key design principle was that the recovery event should depend on
the measured flight condition rather than simply on a predetermined
timer.

A timer represents an expected trajectory.

A state-based trigger responds to what the vehicle actually does.


### Design decision — autonomous apogee detection

The flight computer continuously processed sensor measurements during
flight to determine whether the rocket had reached apogee.

Instead of commanding recovery after a predetermined amount of time,
the deployment logic was connected to the detected flight condition.

This made the recovery event dependent on the actual behavior of the
vehicle.


### Design decision — redundant recovery

The electronic parachute deployment system incorporated redundancy.

The purpose was to reduce the probability that a single electronic
failure would prevent the recovery system from operating.

[Diagram showing redundant deployment paths from the flight computer
to the recovery system]

The exact implementation of redundancy was part of the recovery
architecture and testing process.


## 03 / IMPLEMENTATION

### Flight computer

The flight computer was responsible for collecting sensor data,
processing measurements, determining the current flight condition,
and executing the appropriate mission logic.

[Flight computer architecture diagram]

The important part was not simply reading sensors or activating an
output.

The flight computer had to transform measurements into information
about the vehicle's state and then use that information to make a
mission decision.


### Flight-state logic

The software was organized around the different phases of flight.

A simplified state machine consisted of:

- Initialization
- Ascent
- Apogee detection
- Recovery
- Descent

[State machine diagram]

The state-machine approach provided a clear separation between normal
flight behavior and recovery actions.

Each flight phase could therefore have its own expected behavior and
transition conditions.


### Sensor measurements and flight state

The fundamental problem can be expressed as:

**Measurements → State → Decision → Action**

Sensors do not directly tell the flight computer:

> "The rocket has reached apogee."

Instead, the software has to infer the vehicle's state from the
available measurements.

This distinction became one of the most important concepts in the
project.


### Recovery sequence

Once the flight computer determined that the vehicle had reached the
required flight condition, the recovery sequence was initiated.

The recovery system therefore represented a complete chain from
physical measurement to autonomous physical action.

[Recovery sequence diagram: Vehicle Ascending → Monitor Measurements →
Determine Flight State → Detect Apogee → Trigger Recovery System →
Parachute Deployment → Descent → Recovery]


## 04 / RESULTS

### Mission performance

CER-0 was designed around a target apogee of approximately:

**500 m**

TARGET APOGEE

The vehicle reached approximately:

**620 m**

ACHIEVED APOGEE

The rocket therefore exceeded its original altitude target while
successfully completing the mission.


### Target vs. achieved altitude

| Parameter | Value |
|---|---:|
| Target apogee | 500 m |
| Achieved apogee | ~620 m |
| Difference | ~120 m |
| Target exceeded by | ~24% |
| Motor | Aerotech G-80T |


### Recovery

The recovery system successfully deployed and the vehicle was
recovered within approximately a **50 m radius**.

The rocket was recovered in fully reusable condition.

This was particularly important because mission success was not
defined only by reaching the desired altitude.

The complete mission sequence had to be successfully executed:

Launch → Ascent → Apogee → Recovery Event → Descent → Vehicle Recovery

CER-0 successfully completed that sequence.


### Mission outcome

| Metric | Result |
|---|---:|
| Maximum altitude | ~620 m |
| Target altitude | 500 m |
| Recovery radius | ~50 m |
| Vehicle recovery | Successful |
| Vehicle condition | Fully reusable |


## 05 / TECHNICAL DEEP DIVE

### Apogee detection

Apogee is the point in the trajectory at which the rocket reaches its
maximum altitude before beginning its descent.

In a simplified one-dimensional representation, vertical velocity is
positive during ascent:

**v_z > 0**

and becomes negative during descent:

**v_z < 0**

The transition therefore occurs around:

**v_z = 0**

This makes vertical velocity a useful quantity for detecting the
transition between ascent and descent.

However, a real flight computer does not operate with perfect
measurements.

Sensor noise, bias, vibration, sampling frequency, and numerical
errors can cause the measured velocity to fluctuate around zero.

Therefore, a practical apogee detector cannot simply trigger
recovery whenever the measured velocity reaches exactly zero.

Instead, the algorithm must consider the behavior of the estimated
flight state over time.


### From measurement to decision

This illustrates a broader problem in autonomous systems.

The flight computer does not directly observe the variable of
interest.

It receives measurements and has to transform them into an
interpretation of the vehicle's state.

[Diagram: Physical Vehicle → Sensors → Measurements → State Estimation
→ Flight Condition → Decision → Action]

The recovery decision therefore depends on the quality of the entire
chain.

A sensor error can affect the estimated state.

An estimation error can affect the decision.

A decision error can affect the physical recovery event.


### Why not use a fixed timer?

A predetermined timer can be designed from a predicted trajectory.

The problem is that the actual flight may differ from the nominal
trajectory.

Changes in:

- propulsion performance,
- aerodynamic behavior,
- vehicle mass,
- launch conditions,
- atmospheric conditions,

can change the actual flight profile.

A state-based trigger instead follows the measured behavior of the
vehicle.

This is a simple example of feedback between a physical system and
its onboard decision logic.


### Redundancy and reliability

The recovery system introduced another important engineering
question:

> What happens if the component responsible for deployment fails?

A single deployment mechanism creates a potential single point of
failure.

A redundant architecture provides an additional path for the
recovery command.

[Diagram showing two independent deployment paths]

The objective is not simply to add more components.

The objective is to reduce the probability that one component failure
becomes a mission-level failure.


### Software-hardware boundary

The flight software could determine that the recovery event should
occur, but software alone could not deploy a parachute.

The decision had to cross a physical interface:

**Algorithm → Flight Software → Digital Output → Electronic Interface
→ Deployment Mechanism → Physical Recovery**

This is one of the fundamental differences between embedded systems
and software running on a conventional computer.

A software decision can directly produce a physical action.


## 06 / ENGINEERING CHALLENGES

### Integration

The most difficult part of the project was not necessarily any
individual subsystem.

It was integration.

A rocket is a tightly coupled system. Changes in one subsystem can
affect several others.

For example:

**Propulsion → Vehicle Acceleration → Flight Dynamics →
Sensor Measurements → State Estimation → Flight Logic → Recovery**

This meant that avionics could not be developed completely
independently from the rest of the vehicle.


### Testing

The system had to be tested before flight.

The purpose of testing was not only to verify that individual
components worked, but to increase confidence that the complete
mission sequence would behave as expected.

--Artificially generated to test format

A possible validation structure could have been:

**Unit Testing → Sensor Testing → Flight Computer Testing →
Recovery System Test → Integrated System Test → Flight Test**

--Artificially generated to test format

The important distinction is between verifying that a component works
and validating that the complete system performs the intended mission.


### Failure thinking

A flight system has to be designed not only around nominal behavior,
but also around what happens when something goes wrong.

Questions such as these become important:

- What if a sensor gives an incorrect measurement?
- What if the estimated state becomes unreliable?
- What if the primary deployment path fails?
- What if the vehicle behaves differently from the nominal trajectory?
- What happens if a subsystem stops responding?

These questions gradually introduced me to a way of thinking that
would become increasingly important in later aerospace systems work.


## 07 / SYSTEMS ENGINEERING PERSPECTIVE

CER-0 was one of my first experiences with the idea that engineering
is not simply about making individual components work.

The avionics could be technically correct.

The recovery system could be technically correct.

The propulsion system could perform as expected.

And yet the complete vehicle could still fail because the interfaces
between those systems were poorly defined.

This changed the way I approached engineering problems.

I started thinking less in terms of:

> "What does my subsystem do?"

and more in terms of:

> "What does the complete system need?"


### The system view

[System-level diagram showing Mission → Vehicle → Propulsion,
Avionics, Recovery, and their interactions]

The project taught me that system-level performance emerges from the
interaction between subsystems.


## 08 / WHAT I LEARNED

### Engineering something that has to work

CER-0 was the first project where I experienced the difference
between writing something that works and engineering something that
has to work.

In a conventional software project, a bug can often mean restarting
the program and trying again.

In a rocket, the system gets one flight.

That changes how decisions are made.

It changes how software is tested.

It changes how interfaces are designed.

And it changes how much attention has to be given to failure modes.


### From components to systems

Before CER-0, I was mostly interested in individual technical
problems:

electronics, programming, robotics, and flight dynamics.

The project showed me that some of the most interesting problems
exist between disciplines.

A flight computer is not just software.

A recovery system is not just hardware.

A rocket is not just a structure with an engine.

The interesting engineering happens when all of those pieces have to
work together.


### From building to autonomy

CER-0 also reinforced something that had been developing since my
first robotics projects.

I had started with a simple question:

> Can I make this machine move?

With CER-0, the question became:

> Can I make a system understand what is happening and act on it?

That question eventually led me deeper into state estimation,
guidance, navigation, control, and autonomous systems.


## 09 / THE RESULT

CER-0 successfully integrated propulsion, structures, avionics,
flight software, and recovery into a complete operational rocket.

The vehicle reached approximately **620 m** against a **500 m target**
and was successfully recovered within approximately **50 m** of the
expected recovery area.

The rocket was recovered in fully reusable condition.

But the most important result for me was not the altitude.

It was learning what it means to build a system that only gets one
chance to work.


## PROJECT TAKEAWAYS

**Build → Integrate → Test → Fly → Recover → Learn**

CER-0 was where building things started to become engineering.