---
title: Automation
date: July 18, 2020
---

## How can we make lab automation accessible to most academic labs
* [source](https://www.reddit.com/r/labrats/comments/9mavxz/how_can_we_make_lab_automation_accessible_to_most/)
* Small labs don't need automation; they need flexibility and ease of use from a machine.
* Barriers to lab automation
    * Liquid handlers are expensive
    * Many reagents and tools are proprietary and lock user into a specific brand
    * Wet lab people don't want to program, don't want to fuss with bad UI of robot handlers
    * The scale of experiments are small enough that automation is more costly than just doing it manually
    * Automation have their own separate set of issues (parts wearing out, errors, etc)

* You always want to test to see if your automation is working, which in that time you could have just manually done the task
* High quality robots usually require expensive consumables as well

* liquid handlers are useful in _production facility_
* liquid handlers are useful when doing simple, repetitive, consistent tasks
    * for most experiments, the task varies enough that writing an automated program takes longer than just doing it manually
    * **flexibility, ability to quickly modify a set protocol on the fly** without it messing up what comes after is a big factor

* lots of "microdecisions" actually get made when pipetting
    * How far down should the tip go?
    * Does this tube have drastically less/more volume than that other tube?
    * How fast should it be aspirated?
    * Did you just suck up a glob that blocked your pipet tip?
    * Is that an air bubble?
    * **can these be mitigated via good design, or does each actually need sensors?**

* **equipment is expensive (as is)**; why do we maintain this status quo?
    * equipment also comes with poor service contracts that take a long time to actually resolve issues
* **work in individual labs is varied** (this means **cloud services** make sense)
* any experiment that would warrant robots would not be in the "budget category" in the first place (i.e. they're not going to use some COTS robot, but rather an industrial one, where cost isn't a benefit)

* individual **steps** that could be automated
    * minipreps (?)
    * DNA purification
    * splitting cells
    * staining cells for flow cytometry
    * Western blots
