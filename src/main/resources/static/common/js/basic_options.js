var bOti = {
    addClass : function(className, selector){
        var selectList = document.querySelectorAll(selector);

        for(var i=0;i<selectList.length;i++){

            if(selectList[i].className.indexOf(className) === -1){
                selectList[i].className += ' ' + className;

            }
        }
    },
    removeClass : function(className, selector){
        var selectList = document.querySelectorAll(selector);

        for(var i=0;i<selectList.length;i++){
            var reple = selectList[i].className.replace(className, '').trim();
            selectList[i].className = reple;
        }

    },
    deleteElement : function(child, parent){
        var childs = document.querySelectorAll(child);
        var parent = document.querySelector(parent);
        
        childs.forEach(child =>{

            if(parent){
                parent.parentNode.removeChild(child);
            }else{
                child.parentNode.removeChild(child);
            }
        });

     
    },
    checkAll : function(checkAll, checkList) {
        var checkAll = document.querySelector(checkAll);
        var checkList = document.querySelectorAll(checkList);

        checkAll.addEventListener('click', ()=>{
          
            if(checkAll.checked){
                
                checkList.forEach(checkItem =>{
                    checkItem.checked = true;
                    

                });
            }else {
                checkList.forEach(checkItem =>{
                    
                    checkItem.checked = false;
                    

                })
            }
            
        });
    },
    // aj : function(url, type, data){
    //     var result = {
    //         log : function(text){
    //             return console.log(text);
    //         }
    //     };
    //     var xhr = new XMLHttpRequest;
    //     xhr.onreadystatechange = function(){

    //         if(xhr.readyState === xhr.DONE){

    //             if(xhr.status === 200){
    //                 var text = xhr.responseText.toString(); 

                    
                  
    //             };

    //         };
    //     };

    //     xhr.open(type, url);
    //     xhr.send(data);
    // }

}