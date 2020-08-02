## Reproducibility in research
* [Software Carpentry](https://software-carpentry.org/)
* [Sequence Read Archive](https://www.ncbi.nlm.nih.gov/sra)
* [Gene Expression Omnibus](https://www.ncbi.nlm.nih.gov/geo/)
* [Software Heritage Archive](https://archive.softwareheritage.org/)
* [Zenodo](https://zenodo.org/)
* [Protocols.io](https://www.protocols.io)
* [Scicrunch.org](https://scicrunch.org/)
* [Hypothes.is](https://web.hypothes.is/) - Annotations
* [Figshare](https://figshare.com/)
* [MyBinder](https://mybinder.org/)
* [Stencila](https://stenci.la/)
* [GigaScience](https://gigasciencejournal.com/)
* [Research Parasite Awards](https://researchparasite.com/)
* [Gen3](https://gen3.org/)
* [Weaver for Latex]()
* [GenePattern for MS Word]()
* [Open Provenance Model]()
* [Wings Workflow System]()
* [Open Science Framework](https://osf.io/)
* [AsPredicted](http://AsPredicted.org/)
* [Transparency and Openness Promotion guidelines]()
* [The Equator Network](http://www.equator-network.org)
* [bioRxiv]()
* [engrRxiv]()
* [PsyArXiv]()
* [SocArXiv]()
* [Social Science Archive Network]()
* [bioRxiv]()
* [PeerJ]()
* [Plasmotron.org]()
* [Asimov](https://asimov.io)
* [Cello](https://cidarlab.org/cello)
* [Deep Genomics]()
* [Atomwise]()
* [Oxford Genetics]()
* [10x Genomics]()
* [Metafluidics]()

# Cancer driver discovery
* MutSigCV
* OncodriveFM
* OncodriveCLUST
* DriverNet (Bashashati et al., 2012)
* MEMo (Ciriello et al., 2012)
* CBNA (Pham et al., 2019)

* Get familiar with the free energy perturbation (FEP) calculations
* Download the complex pdb file (protein database) of T4-lysozyme in complex with benzene
* Practice: extract the ligand from the complex and clean the protein
* Get familiar with the molecular display software:
    * Pymol, Chimera, VMD
* Literature search on available tools
* QligFEP paper
    * https://link.springer.com/content/pdf/10.1186/s13321-019-0348-5.pdf
* Set up share folders for record-keeping and documentation

## software
* Chimera tutorial: https://www.cgl.ucsf.edu/Outreach/Tutorials/GettingStarted.html
* PyMOL tutorial: https://pymolwiki.org/index.php/Practical_Pymol_for_Beginners
* VMD tutorial: http://www.ks.uiuc.edu/Training/Tutorials/vmd/vmd-tutorial.pdf
* LAMMPS Overview: https://lammps.sandia.gov/doc/Intro_overview.html
* NAMD Overview: https://www.ks.uiuc.edu/Research/namd/
* OpenMM tutorial: http://docs.openmm.org/latest/userguide/application.html

## to read
* https://www.wwpdb.org/validation/2017/XrayValidationReportHelp#overall_quality
    * R_free score
    * Clashscore
    * Ramachandran outliers
    * Sidechain outliers
    * RSRZ outliers
* Paper: Prediction of protein-ligand binding affinity by free energy simulations
* Paper: Accurate and Reliable Prediction of Rel. Ligand Binding Potency: https://pubs.acs.org/doi/abs/10.1021/ja512751q

## learn more
* Tcl scripting: https://www.tcl.tk/man/tcl8.5/tutorial/Tcl1.html

## general scientific questions
* What does L99A stand for?
* What is hydration energy?
    * The hydration energy is the amount of energy released when one mole of ions undergoes hydration.
* What is solvation free energy?
    * Differences in thermodynamic potentials which describe the relative populations of a chemical species in solution and gas phase at equilibrium.
    * The solvation freeenergy is the reversible work required to insert a solute molecule into a solvent, at constant temperature and density (or pressure).
* What is an "amino acid side chain mimic"? (QligFEP)
    * synthetic amino acids?
* When do you use one forcefield over another?
* What is Lipinski's rule of five? (QligFEP)
* What is cycle closure analysis? (QligFEP)
* How exactly does dual-topology vs. single-topology perturbation pathways work?
    * Finding a real example would be most useful.
* Protonation, Enantiomeric, Tautomeric states (QligFEP)
* HID, HIE, HIP (histidine protonated in delta, epsilon, positively charged)? (QligFEP)
* Solvation patch (QligFEP)

## project specific questions
* How do we test that our automated system works?
* What are our benchmarks?

## additional resources
* Accelerating Drug Discovery: The Accurate Prediction of Potency - https://www.youtube.com/watch?v=wa59ZgflJD8
* TMPChem Computational Chemistry: https://www.youtube.com/watch?v=CY7UkDuOHqo&list=PLm8ZSArAXicLyQQTW-1mg8p4fzcQnilOs&index=3

## side project
* build a syntax highlighter for PDB files for VScode: https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide


* logP and logD: [https://en.wikipedia.org/wiki/Partition_coefficient](https://en.wikipedia.org/wiki/Partition_coefficient)
