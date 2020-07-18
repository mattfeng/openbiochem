# Reproducibility in research

## Biomedical research

|key|value|
|:--|:----|
|title|Recommendations to enhance rigor and reproducibility in biomedical research|
|link|https://arxiv.org/pdf/2001.05127.pdf|

* what needs to be archived?
    * software
    * datasets
    * experiment protocols
    * workflows
    * annotations
* principles
    * FAIR (Findable, Accessible, Interoperable, Reusable)
* software issues
    * limited installability → docker
    * closed source software → github
    * undetermined archiving protocols → ??
* underlying reasons
    * in academia, software tools are _developed by small groups comprised of graduate students or postdocs_
    * fairly fast turnover rates of 2-5 years
    * less likely to be trained in software production standards
* need to _automatize all data manipulation tasks_ and _version control of code_
* further needs
    * computational training
    * journal policies
    * financial support

* **eight recommendations**
    1. teaching computational skills to produce reproducible research
    2. development and distribution of data and software
        * _make all data and metadata open and discoverable_
            * sharing data increases data efficiency (more discoveries can be found from the same dataset)
        * _build and use open-source software_
            * enables auditing
            * democratizes access to research
            * _needs to be well documented with user manuals_
            * _needs to be easily installable_
            * host software tools on **package managers**
        * _leverage platforms that enhance reproducibility_
            * include DOIs
    3. implementation of reproducible research
        * _make tools and workflows reproducible_
            * virtual machines, containers (docker, singularity)
            * workflow platforms (galaxy, tensorflow_?_)
            * workflow standards (CWL, WDL)
        * _implement living and reproducible figures and papers_
    4. incentivizing reproducible research
        * _enforce reproducibility during the peer-review process_
            *  **big issue: this increases the workload of an already heavy workload.**
        * _create earmarked funds and reporting requirements to support reusable resources_
            * funding agencies need to earmark funds for funding research software engineers

|key|value|
|:--|:----|
|title|Quantifying reproducibility in computational biology: the case of the tuberculosis drugome|
|link|doi:10.1371/journal.pone.0080278|

* Need to open-source both _data_ and _computational workflows_
* reproducibility of four types (levels)
    * **rep-author**. can the authors reproduce and extend the work? some of the authors may have moved on to other endeavours (or did not create enough documentation), complicating matters
    * **rep-expert**. can a resesarch familiar with the research area replicate the experiment?
    * **rep-novice**. researcher with basic bioinformatics experience
    * **rep-minimal**. researcher with no expertise in bioinformatics
* _authors should be encouraged to publish high-level flow diagrams as a normal part of the materials and methods section of a paper_    
* _authors should publish configuration files along with descriptions of the software used_
* _release data in formats as they are inputs to software, as well as formats for presentation_
* _include version numbers of software_. as software improves, more findings may appear
* _publish intermediate data, since the original sources may have changed._
* _use open source software when publishing results, particularly for reproducibility reasons_

|key|value|
|:--|:----|
|title|A manifesto for reproducible science|
|link||

* **methods**
    * protect against cognitive biases
    * improve methological training (statistics knowledge, research design)
    * implement independent methodological support (external agencies to oversee experiment design, remove conflicts of interest)
    * encourage collaboration and team science (pooled resources enables more powerful studies)
* **reporting and dissemination**
    * promote study pre-registration - improves discoverability
        * addresses problems of _publication bias_ and _analytical flexiblility_
        * <u>prespecify the study design, primary outcome, and analysis plan</u>
        * journals adopting the **Registered Reports publishing format**
    * improve the quality of reporting - improves usability
* **reproducibility**
    * promote transparency and open science
* **evaluation**
    * diversifying peer review, open peer review
