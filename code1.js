gdjs._1091_1088_1086_1074_1077_1085_1100_322Code = {};
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.localVariables = [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.idToCallbackMap = new Map();
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDDoorObjects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDDoorObjects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewTiledSpriteObjects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewTiledSpriteObjects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951075_951086_951088_951072Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951075_951086_951088_951072Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951079_951072_951084_951086_951082Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951079_951072_951084_951086_951082Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951082_951083_951102_951095Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951082_951083_951102_951095Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects2= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects1= [];
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects2= [];


gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11632788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2[i].setPosition(43,623);
}
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.localVariables.length = 0;
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.idToCallbackMap.set(11632788, gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11632788);
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.localVariables);
for (const obj of gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11632788(runtimeScene, asyncObjectsList)), 11632788, asyncObjectsList);
}
}

}


};gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite6Objects1Objects = Hashtable.newFrom({"NewSprite6": gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GD_9595951076_9595951080_9595951085_9595951086_9595951079_9595951072_9595951074_9595951088Objects1Objects = Hashtable.newFrom({"динозавр": gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11635828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2[i].setPosition(141,588);
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2[i].getBehavior("Animation").setAnimationIndex(3);
}
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.localVariables.length = 0;
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.idToCallbackMap.set(11635828, gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11635828);
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.localVariables);
for (const obj of gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11635828(runtimeScene, asyncObjectsList)), 11635828, asyncObjectsList);
}
}

}


};gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GD_9595951076_9595951080_9595951085_9595951086_9595951079_9595951072_9595951074_9595951088Objects1Objects = Hashtable.newFrom({"динозавр": gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11638092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.localVariables);
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.localVariables.length = 0;
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.idToCallbackMap.set(11638092, gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11638092);
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.asyncCallback11638092(runtimeScene, asyncObjectsList)), 11638092, asyncObjectsList);
}
}

}


};gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


};gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GD_9595951072_9595951083_9595951084_9595951072_9595951079Objects1Objects = Hashtable.newFrom({"алмаз": gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects1});
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length !== 0 ? gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[0] : null), true, "", 0);
}
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1000000, 700, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDPlayerObjects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Health").IsDamageCooldownActive(null)) ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Health").Hit(10, true, true, null);
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Health").TriggerDamageCooldown(null);
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}

{ //Subevents
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite6"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDPlayerObjects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDNewSprite6Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CoinText"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects1);
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("динозавр"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDPlayerObjects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GD_9595951076_9595951080_9595951085_9595951086_9595951079_9595951072_9595951074_9595951088Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Health").Hit(100, false, false, null);
}
}

{ //Subevents
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("динозавр"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GD_9595951076_9595951080_9595951085_9595951086_9595951079_9595951072_9595951074_9595951088Objects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1 */
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Walk");
}
}

{ //Subevents
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[k] = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("алмаз"), gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GDPlayerObjects1Objects, gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.mapOfGDgdjs_9546_95951091_95951088_95951086_95951074_95951077_95951085_95951100_9595322Code_9546GD_9595951072_9595951083_9595951084_9595951072_9595951079Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= 1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1 */
/* Reuse gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects1 */
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "End");
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDDoorObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDDoorObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951075_951086_951088_951072Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951075_951086_951088_951072Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951079_951072_951084_951086_951082Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951079_951072_951084_951086_951082Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951082_951083_951102_951095Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951082_951083_951102_951095Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects2.length = 0;

gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.eventsList4(runtimeScene);
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSpriteObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite2Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite4Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDDoorObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDDoorObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewTiledSpriteObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewTiledSpriteObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951075_951086_951088_951072Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951075_951086_951088_951072Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951072_951083_951084_951072_951079Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDPlayerObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951076_951080_951085_951086_951079_951072_951074_951088Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951079_951072_951084_951086_951082Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951079_951072_951084_951086_951082Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951082_951083_951102_951095Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GD_951082_951083_951102_951095Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDCoinTextObjects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite6Objects2.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects1.length = 0;
gdjs._1091_1088_1086_1074_1077_1085_1100_322Code.GDNewSprite5Objects2.length = 0;


return;

}

gdjs['_1091_1088_1086_1074_1077_1085_1100_322Code'] = gdjs._1091_1088_1086_1074_1077_1085_1100_322Code;
