firstSet = " # # # #"
secondSet = "# # # # "
bindingSize = 8
i = 1

while (i <= bindingSize){
    if(i % 2 == 1){
        console.log(firstSet);
    }
    else if (i % 2 == 0){
        console.log(secondSet);
    }
    i += 1
}