# VMD

## Molecule Browser
* ``T A D F``: Top, Active, Drawn, Fixed.
    * **Top.** the current default molecule (only one)
    * **Active.** is the trajectory of the molecule updated when using the animation tools
    * **Drawn.** whether or not the molecule is drawn in the OpenGL interface
    * **Fixed.** whether or not the molecule is fixed in the OpenGL interface

## MultiSeq
* Q<sub>H</sub> is a metric for structural homology.

## VMD commands to remember
```tcl
# set the center of rotation of the molecule
molinfo top set center {{x y z}}
# set the center of rotation of the molecule
# to the variable $center_var (value "x y z"
# without quotes)
molinfo top set center "{ $center_var }"
```
source: https://www.ks.uiuc.edu/Research/vmd/mailing_list/vmd-l/9717.html

```tcl
# measures the transformation matrix
# that best aligns the coordinates
# of <sel1> with coordinates of <sel2>
#
# measure fit only works if two molecules
# have the same number of atoms!
measure fit <sel1> <sel2>
```