# File Formats Info

## PDB (Protein Data Bank) files
<table>
    <tr>
        <th>record type</th>
        <th>atom number</th>
        <th>atom type (within residue)</th>
        <th>residue type</th>
        <th>chain</th>
        <th>residue number</th>
        <th>XYZ coordinates (angstrom)</th>
        <th>occupancy</th>
        <th>beta factor</th>
        <th>element</th>
    </tr>
    <tr>
        <td>ATOM</td>
        <td>2</td>
        <td>CA</td>
        <td>PRO</td>
        <td>A</td>
        <td>1</td>
        <td>30.307</td>
        <td>38.663</td>
        <td>5.319</td>
        <td>1.0</td>
        <td>40.62</td>
        <td>C</td>
    </tr>
</table>

* **occupancy.** (comes from crystallography and conformations) fraction of the time that the atom appears at that location
* **beta factor.** average displacement of atom (higher beta corresponds to greater uncertainty)

## PSF (Protein Structure File) files
* Source: https://www.ks.uiuc.edu/Training/Tutorials/namd/namd-tutorial-unix-html/node23.html