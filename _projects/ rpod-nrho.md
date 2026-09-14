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

demo: "https://example.com"

paper: "https://example.com/paper"

available: true

collections:
  - featured
  - recent
  - technical

carousel:
  featured: 3  
  technical: 1
  recent: 2
---

## Overview

Research spanning three complementary lines. Independently developing the ARGOS Toolkit, a modular Python GNC simulation framework with pluggable guidance/navigation/control/allocation laws, multi-spacecraft relative-motion (REL2BP) and three-body (CR3BP) propagators, a custom adaptive-step RK45 integrator, and differential correction/continuation for periodic orbit families (Lyapunov–Halo bifurcation detection, NRHO resonance targeting). Faculty-supervised: (1) applying Arcadia/Capella MBSE methodology to define the operational and logical architecture of a cislunar RPOD GNC system in an NRHO/L2 environment; (2) proposing a fault-aware extension of passively-safe convex guidance for cislunar NRHO/L2 operations, coupling a lightweight onboard anomaly detector to guaranteed-feasible abort/safe-hold re-solve, with an abstract in preparation for the AAS/AIAA Space Flight Mechanics Meeting 2027.

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