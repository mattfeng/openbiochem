# QligFEP
* DOI link: 

## Notes
* Many algorithms for automating the design of perturbation intermediates are based on **maximum common substructure** (MCS).

## Testing method
* Test workflow on various systems previously used as benchmarks for other FEP protocols, including
    * Calculating solvation free energies of side chain mimics
    * Calculating relative binding free energies of 16 CDK2 ligands
    * Calculating relative binding free energies of a series of antagonists for the adenosine A<sub>2A</sub> receptor

## Materials and methods

### Four modules
#### 1. Ligand parameterization
* main aim is to translate ligand 3D coordinates into Q readable library and parameter files.

#### 2. Complex preparation
* Macromolecular target is prepared for MD simulations of the binding site under the spherical boundary conditions (droplet of water boundary).

#### 3. Generation of FEP and MD input files
* Prepare input files for FEP simulation.
* Number of lambda steps (interpolation steps), interpolation strategy (linear/non-linear), sampling time per step, starting point, and directionality, are all important for a successful FEP simulation.

#### 4. An analysis tool
* Provides statistics on the simulation results.
