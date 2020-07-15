# Reproducibility in research

## Biomedical research

|key|value|
|:-:|:---:|
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

