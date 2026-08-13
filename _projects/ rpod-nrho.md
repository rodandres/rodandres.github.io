---
layout: project

title: "Rendezvous, Proximity Operations and Docking in NRHO"

category: "ASTRODYNAMICS · GNC"

year: 2026

status: "Ongoing"

description: "Modular simulation framework for spacecraft dynamics and autonomous RPOD in cislunar environments."

technologies:
  - Python
  - NumPy
  - SciPy
  - CR3BP
  - Orbital Mechanics
  - Spacecraft Dynamics
  - GNC

github: "https://github.com/rodandres"

available: false
---

## Overview

This project focuses on the modeling and simulation of autonomous
rendezvous, proximity operations, and docking in a Near Rectilinear
Halo Orbit (NRHO) within the Earth-Moon system.

The objective is to develop a modular simulation framework capable of
representing spacecraft dynamics and the complete GNC pipeline.

## Objective

The main objective is to develop a modular simulation environment
for studying spacecraft operations in cislunar environments.

## Technical approach

The project combines:

- Circular Restricted Three-Body Problem (CR3BP)
- NRHO generation
- Orbital dynamics
- Attitude dynamics
- Navigation
- Guidance
- Control
- Actuation

## Simulation architecture

The simulation follows a modular architecture:

```text
Sensors
   ↓
Navigation
   ↓
Guidance
   ↓
Control
   ↓
Actuation
   ↓
Dynamics