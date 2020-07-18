---
title: Computational methods for cancer driver discovery
---

* Uncover the genomic causes of cancer (**known as cancer driver genes**)
* Mutation types in the genome
    * Single-nucleotide variants (SNVs)
    * Structural variants (SVs)
    * Insertions and deletions (indels)
    * Copy number aberrations (CNAs)
* Driver mutations (cause cancer) vs. passenger mutations (don't cause cancer)
```
                             +-----------------------+
                             |                       |
                             |   Cancer driver       |
                             |   discovery methods   |
                             |                       |
                             +------------+----------+
                                          |
                     +-----------------------------------------------+
                     |                    |                          |
             +-------v---------+   +------v----------+    +----------v-------+
             |                 |   |                 |    |                  |
             | Single cancer   |   | Cancer driver   |    | Personalized     |
             | driver id       |   | module id       |    | cancer driver id |
             |                 |   |                 |    |                  |
             +--------+--------+   +---------+-------+    +------------------+
                      |                      |
         +------------+----------+           +---------+-------------------+
         |                       |                     |                   |
+--------v----------+    +-------v--------+    +-------v-------+   +-------v--------+
|                   |    |                |    |               |   |                |
| Mutation-based    |    | Network-based  |    | Mutual        |   |     Others     |
| methods           |    | methods        |    | exclusivity   |   |                |
|                   |    |                |    |               |   |                |
+--------+----------+    +----------------+    +---------------+   +----------------+
         |
         +------------------------+---------------------+------------------+
         |                        |                     |                  |
+--------v----------+    +--------v-------+    +--------v------+   +-------v--------+
|                   |    |                |    |               |   |                |
|  Mutation         |    |   Functional   |    | Location of   |   |    Others      |
|  significance     |    |   impact of    |    | mutations     |   |                |
|                   |    |   mutations    |    |               |   +----------------+
+-------------------+    |                |    +---------------+   
                         +----------------+

```


## Methods for _single driver_ identification

## Methods for _driver module_ identification

## Methods for identifying _ersonalized cancer drivers_
