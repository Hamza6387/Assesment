import schema from '../schema.json';
function BuildChildrenMap(schema){
const childrenMap={}
schema.forEach((item) => {
    if(item.pId){
        if(!childrenMap[item.pId]){
            childrenMap[item.pId]=[]
        }
        childrenMap[item.pId].push(item);
    }
});
return childrenMap;
}
export default BuildChildrenMap;