# Notes on Free Energy Perturbation Calculations

* FEP _in silico_ experiments **have not** yet reached the maturity to be viewed as black-box routine jobs, and thus both the sampling strategy and the results analysis must be considered with great care.
    * source: http://www.ks.uiuc.edu/Training/Tutorials/namd/FEP/tutorial-FEP.pdf

## The Dual Topology Approach
* Both the initial and final state (λ = 0, λ = 1) are defined concurrently.

## Ethane to Ethane "Zero-Sum" transformation
* The accuracy of the computed free energy depends only on the sampling strategy, and not on the force field (since the molecule doesn't change).

<p align="center">
<img src="../assets/ethane-to-ethane.png" />
</p>

* NAMD error: "Constraint failure in RATTLE algorithm for atom 10" while following "In silico alchemical free energy calculations" tutorial.

```
TCL: Setting parameter alchLambda2 to 0.125
Info: NONBONDED TABLE R-SQUARED SPACING: 0.0625
Info: NONBONDED TABLE SIZE: 705 POINTS
Info: INCONSISTENCY IN FAST TABLE ENERGY VS FORCE: 0.000290481 AT 0.251946
Info: INCONSISTENCY IN SCOR TABLE ENERGY VS FORCE: 0.000250637 AT 9.02427
Info: ABSOLUTE IMPRECISION IN VDWA TABLE ENERGY: 3.20475e-31 AT 8.99653
Info: RELATIVE IMPRECISION IN VDWA TABLE ENERGY: 1.02528e-17 AT 8.99653
Info: INCONSISTENCY IN VDWA TABLE ENERGY VS FORCE: 0.0040507 AT 0.251946
Info: ABSOLUTE IMPRECISION IN VDWB TABLE ENERGY: 4.65289e-25 AT 8.99653
Info: RELATIVE IMPRECISION IN VDWB TABLE ENERGY: 2.70598e-17 AT 8.99653
Info: INCONSISTENCY IN VDWB TABLE ENERGY VS FORCE: 0.00491121 AT 8.08934
TCL: Running for 500 steps
ERROR: Constraint failure in RATTLE algorithm for atom 10!
ERROR: Constraint failure; simulation has become unstable.
FATAL ERROR: Exiting prematurely; see error messages above.
[Partition 0][Node 0] End of program
```

* What are **softcore potentials**, and why does not using them lead to **singularities** when lambda approaches 0 or 1?
