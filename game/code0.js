gdjs.New_32sceneCode = {};


gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};

gdjs.New_32sceneCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;


{

gdjs.New_32sceneCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObject2Objects1[k] = gdjs.New_32sceneCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObject2Objects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].setAnimation(1);
}
}}

}


{

gdjs.New_32sceneCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObject2Objects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObject2Objects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObject2Objects1[k] = gdjs.New_32sceneCode.GDNewObject2Objects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObject2Objects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.New_32sceneCode.GDNewObject2Objects2.createFrom(gdjs.New_32sceneCode.GDNewObject2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObject2Objects2.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDNewObject2Objects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObject2Objects2[k] = gdjs.New_32sceneCode.GDNewObject2Objects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObject2Objects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects2[i].setAnimation(0);
}
}}

}


{

gdjs.New_32sceneCode.GDNewObject2Objects2.createFrom(gdjs.New_32sceneCode.GDNewObject2Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDNewObject2Objects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDNewObject2Objects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDNewObject2Objects2[k] = gdjs.New_32sceneCode.GDNewObject2Objects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDNewObject2Objects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects2[i].setAnimation(2);
}
}}

}

} //End of subevents
}

}


{

gdjs.New_32sceneCode.GDNewObject2Objects1.createFrom(runtimeScene.getObjects("NewObject2"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.New_32sceneCode.GDNewObject2Objects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDNewObject2Objects1[0].getPointX("")), "", 0);
}
}

return;
}
gdjs['New_32sceneCode']= gdjs.New_32sceneCode;
