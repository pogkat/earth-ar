function getRotation({x,y,z}) {
    return {
        x:x+10,
        y:y+10,
        z:z+10
    }

}

AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#hiroMarker");
        const aEntity = document.querySelector("#earthModel");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                const rotation = aEntity.getAttribute('rotation');
                aEntity.setAttribute('rotation', getRotation(rotation));
            }
        });
}});




