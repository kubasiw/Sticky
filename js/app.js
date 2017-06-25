jQuery(document).ready(function(){
    
    
    var button = document.querySelector('.btn');
    var section2 = document.querySelector('.section2');
    
    var newDiv = document.createElement('div');
    
    button.addEventListener('click', function(){
        section2.append(newDiv);
        newDiv.className = "test";
    });
    
    
    
    function addListeners(){
        document.querySelector('test').addEventListener('mousedown', mouseDown, false);
        section2.addEventListener('mouseup', mouseUp, false);
    };
    

    function mouseUp() {
        section2.removeEventListener('mousemove', divMove, true);
    };
    

    function mouseDown(e) {
        section2.addEventListener('mousemove', divMove, true);
    };

    function divMove(e){
        var divToMove = document.querySelector('test');
        divToMove.style.position = 'absolute';
        divToMove.style.top = e.clientY + 'px';
        divToMove.style.left = e.clientX + 'px';
    };
    
}); // end of DOM