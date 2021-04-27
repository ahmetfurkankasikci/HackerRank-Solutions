function getCount(objects) {

    return objects.filter(o=>{return o.x==o.y}).length;
}