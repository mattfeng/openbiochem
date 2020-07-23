# Forcefields

* "All atom" (AA) models (which place the interaction site for non-bonding interactions on each atom) superceded "united atom" (UA) models which collapsed aliphatic hydrogens onto their carbons.
* Commonly used forcefields: AMBER, CHARMM, OPLS-AA (optimized potentials for liquid simulations).

* More complex force fields add
    * cubic and quartic terms for **anharmonicity**
    * stretch-bend cross terms
    * replacement of **Lennard-Jones** (VDW) function with **Buckingham** or **Morse** potentials (see **MM4** and **MMFF** forcefields).
* Major simplification: **atomic (partial) charges are fixed.**
    * No treatment of polarization
    * _Well known to be problematic for_
        * interactions with charge-concentrated atomic ions
        * interactions of ions with pi-electron systems (e.g. aromatic rings)
* Today's forcefields represent **pair potentials** that effectively incorporate many-body effects in an average sense (e.g. through the use of charges that yield enhanced dipole moments).
* _A general impediment for force-field optimization in this area is lack of precise knowledge of the Ramachandran plot (phi-psi map) for systems like alanine dipeptide in water_.

## Universal Force Fields
* **Heterocycles**
* Since medicinal chemistry often employs compounds that are new (new functional groups), the current forcefields sometimes do not have the appropriate parameters for simulation.
* The **principal remaining problem** resides in **assignment of partial atomic charges**.
* Charge model (CM) charges from Cramer and Truhlar et al. are derived from semiempirical calculations using **Austin Model 1** or **Parametric Model 3**.
* TMD (temperature of maximum density) and melting point require very long simululations for _ab initio_ methods.

## CHARMM

* The CHARMM force field is divided into
    * a topology file
    * a parameter file

### The topology file
    * defines the **atom types** used in the force field.
    * atom names, types, bonds, and partial charges of each residue type
    * any _patches_ necessary to link or mutate the basic residue.

### The parameter file
    * supplies the specific numerical values for the generic CHARMM potential function.

