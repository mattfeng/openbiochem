# PDB Structures and the PDBx/mmCIF Format

* CIF: "crystallographic information file" format.
* Later expanded to include items relevant to **macromolecular** crystallographic experiments.
* PDBx/mmCIF explicitly documents all relationships between data items which allows software to evaluate and validate referential integrity.

## Basic Syntax and Format
* Data items have a name of format ``_category.attribute_name`` (called a **mmCIF token**).
* Values are provided either as key/value pairs or as a table using the ``loop_`` keyword.

## Entities
* The ``_entity`` category specifies the entities (chemically distinct parts) that are within the structure.

## Parent-Child Relationships
* If the same **data item** is used in _multiple **categories**_ (e.g. entity ID within `_entity` category and `_atom_site` category), then a parent-child relationship needs to be created.
