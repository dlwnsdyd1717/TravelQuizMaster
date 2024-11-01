Mobile ForestVision 1.0 by BauerVision
----------------------

Thank you for purchasing Mobile ForestVision!  I hope you find as much delight in creating your scenes with these assets as I do.

----------------------
Please feel free to drop me a line on the forum page https://forum.unity.com/threads/mobile-forestvision.1006835/

You can also email me directly at 

mikecbauervision@gmail.com

----------------------

The MFV Tools can be found under Tools/ Mobile FV Tools
This launches a few key helper tools Ive created to assist in your development.


Tree Tools

Note: it will crash if you try to generate branches on too complicated of a mesh. I apply a Mesh collider in order to ray trace to the surface, and this is a very processor intensive operation so be careful.  Only spawn on trunks.

If you desire to spawn branches, on branches I would recommend you pick very simple branches. But even more so I would recommend you simply make your branches by hand, and then save them as optimized meshes, and spawn them on trunks.


To use: add a branch type to the Branch Spawner, at least one is required. Set the number of branches with the "How Many?" slider. Note I've limited it to 5 at one time simply to keep things manageable. 
Per Branch Type checkbox will allow you to generate the number of branches, for each type you have loaded. So if you have 3 branches loaded, with How Many set to 2, then you will get 6 total branches. Without it checked,
you will only get 3.

Delete Old Branches on Generate checkbox, if checked will clear the current spawn variety with each press of the Generate buttons. Uncheck this and you will get more and more branches with each spawn.

Starting height simply offers a quick way of positioning the spawn cluster up and down the trunk.

Up X, Up Y and Up Z offer quick ways to alter the projection of the raytrace spawning. Up X checked means a postive vector, with a negative being loaded unchecked. Basically, this helps you
to place branches on both sides of the tree quickly.

Gen X, Gen Y and Gen Z. These buttons take what you have set so far and generates solely based on the given vector.
Generate on All Axis will take your current settings and generate on all 3 vectors at once.

Randomize Branches: simply takes what you have thus generated and randomizes the arrangement.

Clear Branches removes everything from your selected game object.

Rotate All Branches on the following Axis: offes you the ability to quickly offset the rotation of all the spawned children based on the parameters you set.

If you check "Rotate Just Selected" then the rotation offset will only be applied to what is currently selected.

Scale All Branches Uniformly: scales up or down all children based on the buttons pressed. Again, if Scale Just Selected is checked then it will not be applied to the children.

------------------------

* Swap Material *
Select any asset, prefab or collection of assets that you want to change completely to a single material, and hit the button. I designed to use with MFV especially, 
so if you create a new tree, copy it, and then swap the material for any of the other materials that ship with MFV and BOOM! New tree!

------------------------

* Switch Mesh *
Same as above, except this time I take advantage of how the models are designed. You'll notice that each tree is made of v1, v2, or v3 assets. 
Use the Switch Mesh tool to easily bounce between all three versions to quickly find the look you are after!

I recommend you only use this on MFV assets!
------------------------

* Reset Transform *
Simply resets your Transform back to zero on position and rotation, with a scale of 1. Just a useful utility I use from time to time just to get objects back to the center of the world.

------------------------
* New Optimized *
With a tree selected, this tool will allow you to collapse your tree down to an optimized version.  It will collapse the entire hierarchy down to a single object,
and it will automatically apply a LOD Group component so that your tree will cull at 10%.

With a tree selected, you will also get a reading of how many vertices your tree consists of to better help you guage how dense the tree actually is.
You have the option to rename the collapsed tree, as well as set where it will be exported. Note: please set it to save within your Unity directory.

------------------------

* New Prefab *
Generates a new prefab for you based on what you have selected.

------------------------
* Renamer *
Another useful utility tool that givs you a couple of options for quickly renaming selected objects

------------------------

Screen Shot
A simple tool to take nice screenshots of your world.

------------------------


If you have any questions or issues please don't hesitate to contact me right away!

Thank you again, I hope that these assets help you to fulfill your own ForestVision but on Mobile devices!!


