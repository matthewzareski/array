name_array = [];

function submit()
{
    var display_array = [];

    for (var i = 1; i <= 4; i++){
        var name1= document.getElementById("name_"+i).value ;
        console.log(name1);
        name_array.push(name1);

    }

    console.log(name_array);

    var length1=name_array.length;

    console.log(length1);

    for (var z = 0; z < length1; z++){
display_array.push("<h4>NAME-"+name_array[z]+"</h4>");

    }

    console.log(display_array);
document.getElementById("with_comma").innerHTML=display_array;

var remove_comma=display_array.join(" ");
console.log(remove_comma);

document.getElementById("without_comma").innerHTML=remove_comma;

document.getElementById("submit_btn").style.display='none';
document.getElementById("sort_btn").style.display='inline-block';
}


function sorting(){
    var display_sort=[];
    name_array.sort();
    console.log(name_array);

    var length2=name_array.length;

    console.log(length2);

    for (var z = 0; z < length2; z++){
display_sort.push("<h4>NAME-"+name_array[z]+"</h4>");

    }

    console.log(display_sort);
    var remove_comma=display_sort.join(" ");
    console.log(remove_comma);
    
    document.getElementById("without_comma").innerHTML=remove_comma;

}


