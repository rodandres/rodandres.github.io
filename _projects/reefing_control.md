---
layout: project

title: "Variable-Reefing Parachute Descent Rate Control"

category: "FLIGHT CONTROL · DYNAMICS · AEROSPACE"

year: 2025

status: "Finished"

description: >
  Nonlinear modeling and control of a variable-reefing parachute system for
  descent-rate regulation. A nonlinear second-order dynamics model used to
  design a gain-scheduled Linear Parameter-Varying PI controller for tracking
  variable descent-speed profiles.

technologies:
  - Python
  - NumPy
  - SciPy
  - Nonlinear Dynamics
  - System Linearization
  - LPV Control
  - PI Control
  - Gain Scheduling
  - Numerical Simulation

methodology:
  - Nonlinear parachute dynamics modeling
  - Equilibrium-point selection
  - Local linearization
  - Discrete gain scheduling
  - Continuous gain interpolation
  - Closed-loop simulation
  - Sensor-noise analysis

results:
  - Zero steady-state error for step references
  - Less than 5% deviation from nonlinear model response
  - Robustness to simulated sensor noise
  - Smoother transients with continuous gain interpolation
  - Elimination of artificial discontinuities between scheduling regions

limitations:
  - Experimental validation through controlled drop tests remains required

github: "https://github.com/rodandres"

demo: "https://example.com"

paper: "https://example.com/paper"

available: false

collections:
  - featured


carousel:
  featured: 3
  
---