---
title: SMARTS
date: 2020-07-23
---

# SMARTS: A language for describing molecular patterns

* Substructure searching is very common task in computational chemistry.
* SMARTS is a straightforward extension of SMILES.
* SMARTS allows for logical operators in describes atoms and bonds.

## Atomic Primitives
|symbol|symbol name|atomic property requirements|default|
|:-----|:----------|:---------------------------|:------|
|a (lowercase)|aromatic|aromatic|no default|
|A (uppercase)|aliphatic|aliphatic|no default|

## Bond Primitives
|symbol|atomic property requirements|
|:-----|:---------------------------|
|-|single bond (aliphatic)|
|=|double bond|
|#|triple bond|

## Logical Operators
|symbol|expression|meaning|
|:-----|:---------|:------|
|exclamation (!)|!ex|not e1|
|ampersand (&)|e1&e2|e1 and e2 (high precedence)|
|comma (,)|e1&e2|e1 or e2|
|semicolon (;)|e1;e2|e1 or e2 (low precedence)|

# References
* Daylight Chemical Information Systems ([http](https://daylight.com/dayhtml/doc/theory/theory.smarts.html), [ipfs](https://ipfs.io/ipfs/QmWLcYW4FfJRhQMED4sKhKs3Z625KMR9LZJuiKywUMP6og))
