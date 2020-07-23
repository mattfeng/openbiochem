---
title: Variant Calling
date: 2020-07-23
---

# Variant Calling

## What is it?

## Variant Calling at the Genomic Data Commons (GDC) <sup>[1/http][1/http], [1/ipfs][1/ipfs]</sup>

* GDC applies three different somatic variant calling algorithms and provides the output from all three
* GDC strives for high-quality results, but the results are not authoritative; they are generated using the software generally recognized as acceptable by the genomics community.

### Overview of Somatic Variant Calling

#### Sources of error in a calling pipeline
* Pipeline generally consists of the following 5 steps:
    1. Raw read alignement to reference genome
    2. Pre-calling alginment recalibration (co-cleaning)
    3. Raw variant calling
    4. Post-call quality assignment
    5. Post-call variant filtering
* Any of the five steps can introduce error.
* Variant calling algorithms use models to quantify the error. However, if the data departs from the model's assumptions, then the error estimates can be poor.




# References

[1/http]: https://gdc.cancer.gov/about-gdc/variant-calling-gdc
[1/ipfs]: https://ipfs.io/ipfs/Qmc4DHEaE9CjegfHXZdkCijBNcFD4PaTPeVgpkC3yirvim
