//implement bubble sorting in JS

//I will do this in 2 sligtly diffrent syntaxes

{
    //first we have to create a swapping function which have as arguments our array, first and second position given;
    function swap(arr, i1, i2){
        var temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }
    
    function bubblesort(arr) {
        
        var swapped = true;
        
        //while until no elements can be swapped
        while (swapped){
            
            //the loop will stop unless two elements are swapped - so unless it goeas inside the if statement
            swapped = false;
            
            //we will loop through array swapping adjecent elements
            for( var i = 1; i < arr.length; i++){
                
                if(arr[i-1] > arr[i]){
                    swap(arr, i-1, i);
                    swapped = true;
                }
            }
        }
        
        return arr;
    }
    
    console.log(bubblesort([2, 4, 3, 1]));
}

//And second slightly diffrent syntax

{
    function swap(arr, i, j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    function bubblesort(arr){
        let swapped = false;
        for(var i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                swap(arr, i, i + 1);
                swapped = true;
            }
        }
        
        if (swapped === true){
            return bubblesort(arr);
        }
        return arr;
    }
    
    console.log(bubblesort([-4,-8, 15, 12]));
}