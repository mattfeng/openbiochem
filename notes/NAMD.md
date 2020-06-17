# NAMD tutorial notes

* NAMD requires (at least) four things to run any MD simulation
    1. **protein data bank (pdb) file.** stores atomic coordinates and/or velocities of the system.
    2. **protein structure file (psf).** describes structural information about the protein, such as bonding interactions.
    3. **force field parameter file.** describes the potential atoms experience in the system.
    4. **a configuration file.** specifies all the options NAMD should adopt when running a simulation.

* Want to use a sphere if periodic boundary conditions are **not** being used (the water molecules will form a sphere anyways in that case).
* For periodic boundary conditions, want to use a water box large enough such that the protein will not see itself from its neighboring box.
* NAMD always returns at least two files for every simulation
    * PDB file containing the final coordinates of all atoms (``.coor``)
    * PDB file containing the final velocities of all atoms in the system (``.vel``)

## Configuration
* **Langevin dynamics** is a way to control the kinetic energy (and thus temperature/pressure) of a system.
* A **Langevin damping** constant of 1.0 is usually a good place to start.
* The time step used in any MD simulation should be dictated by the fastest process taking place in the system.

## Minimization vs. Equilibration
* minimization involves searching for local minima in the energy landscape.
* equilibration involves molecular dynamics to find an equilrium state.

## Particle Mesh Ewald (PME)
* PME is a method for dealing with electrostatic interactions in periodic boundary condition environments.
* 
