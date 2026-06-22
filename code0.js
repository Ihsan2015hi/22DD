gdjs._1091_1088_1086_1074_1077_1085_1100_321Code = {};
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.localVariables = [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.idToCallbackMap = new Map();
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSpriteObjects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSpriteObjects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite2Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite2Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite3Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite3Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite4Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite4Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite7Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite7Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDCoinTextObjects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDCoinTextObjects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite5Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite5Objects2= [];


gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


};gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite3Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.asyncCallback11574484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2[i].setPosition(43,623);
}
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.localVariables.length = 0;
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.idToCallbackMap.set(11574484, gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.asyncCallback11574484);
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.localVariables);
for (const obj of gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.asyncCallback11574484(runtimeScene, asyncObjectsList)), 11574484, asyncObjectsList);
}
}

}


};gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDNewSprite7Objects1Objects = Hashtable.newFrom({"NewSprite7": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite7Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GD_9595951076_9595951080_9595951085_9595951086_9595951079_9595951072_9595951074_9595951088Objects1Objects = Hashtable.newFrom({"динозавр": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.asyncCallback11579292 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2[i].setPosition(141,588);
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationIndex(3);
}
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.localVariables.length = 0;
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.idToCallbackMap.set(11579292, gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.asyncCallback11579292);
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.localVariables);
for (const obj of gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.asyncCallback11579292(runtimeScene, asyncObjectsList)), 11579292, asyncObjectsList);
}
}

}


};gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GD_9595951079_9595951072_9595951084_9595951086_9595951082Objects1Objects = Hashtable.newFrom({"замок": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GD_9595951082_9595951083_9595951102_9595951095Objects1Objects = Hashtable.newFrom({"ключ": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GD_9595951076_9595951080_9595951085_9595951086_9595951079_9595951072_9595951074_9595951088Objects1Objects = Hashtable.newFrom({"динозавр": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.asyncCallback11583204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.localVariables);
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.localVariables.length = 0;
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.idToCallbackMap.set(11583204, gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.asyncCallback11583204);
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.asyncCallback11583204(runtimeScene, asyncObjectsList)), 11583204, asyncObjectsList);
}
}

}


};gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walk");
}
}

{ //Subevents
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length !== 0 ? gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1000000, 700, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDNewSprite3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Health").IsDamageCooldownActive(null)) ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Health").Hit(10, true, true, null);
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Health").TriggerDamageCooldown(null);
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}

{ //Subevents
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite7"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDNewSprite7Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "уровень 2");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDCoinTextObjects1);
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDCoinTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("динозавр"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GD_9595951076_9595951080_9595951085_9595951086_9595951079_9595951072_9595951074_9595951088Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("Health").Hit(100, false, false, null);
}
}

{ //Subevents
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("замок"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GD_9595951079_9595951072_9595951084_9595951086_9595951082Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.VariablesContainer.badVariable.getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ключ"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GD_9595951082_9595951083_9595951102_9595951095Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.VariablesContainer.badVariable.setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("динозавр"), gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GD_9595951076_9595951080_9595951085_9595951086_9595951079_9595951072_9595951074_9595951088Objects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595321Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1 */
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSpriteObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSpriteObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite2Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite2Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite3Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite3Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite4Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite4Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite7Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite7Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDCoinTextObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDCoinTextObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite5Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite5Objects2.length = 0;

gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.eventsList4(runtimeScene);
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSpriteObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSpriteObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite2Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite2Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite3Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite3Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite4Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite4Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite7Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite7Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDPlayerObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951079_951072_951084_951086_951082Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GD_951082_951083_951102_951095Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDCoinTextObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDCoinTextObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite6Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite5Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_321Code.GDNewSprite5Objects2.length = 0;


return;

}

gdjs['_1091_1088_1086_1074_1077_1085_1100_321Code'] = gdjs._1091_1088_1086_1074_1077_1085_1100_321Code;
