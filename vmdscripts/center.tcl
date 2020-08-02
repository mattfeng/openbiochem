set A [atomselect top all]
set minus_com [vecsub {0.0 0.0 0.0} [measure center $A]]
$A moveby $minus_com 
