---
title: Autoprotocol
source: https://autoprotocol.org
---

# Autoprotocol

## Motivation
* Improve productivity and reproducibility in life science experiments.

## Design Goals
* **Flexible.** able to accomodate nearly all possible protocols, with straightforward addition of new instructions.
* **Composable.** build up complexity from smaller pieces.
* **Synthesizable.** able to be understood by machines without need for human interpretation.
* **Platform independent.** consumable by software written in any language, for any platform.
* **Just data.** no branching logic or looping constructs evaluatable at runtime.
* **Learnable.** functionality needs to be straightforward enough that users can infer usage.

## Supported instructions

|instruction|purpose|
|:----------|:------|
|`acoustic_transfer`||
|`cover`||
|`flow_cytometry`||
|`incubate`||
|`liquid_handle`|allows precise control over liquid handling parameters and operations|
|`measure_mass`||
|`measure_volume`||
|`provision`|add some amount of an external resource to an aliquot|
|`seal`|cover or seal a container|
|`spectrophotometry`||
|`spin`||
|`uncover`||
|`unseal`||

## Supported constraints
|constraint|purpose|
|:---------|:------|
|`time_constraints`|encode a temporal relationship between two time points|
