menu_list_array =["Chicken Tandoori Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza","Veg Extravaganza Pizza",
"Veg Margherita Pizza ","Veg Supreme Pizza"];
var item1;
var item2;


function getmenu(){

menu_list_array.sort();
item1=null;
item1=menu_list_array[0]+'<br>';
        for(var i=1;i<menu_list_array.length;i++){
            item1=item1 + menu_list_array[i] + '<br>';
        }
        console.log(item1);
        document.getElementById("display_menu").innerHTML = item1;
}

function add_item()
{
    item2=null;
    menu_list_array.sort();  
    item2=menu_list_array[0] + '<br>';    
    for(var a=1;a<menu_list_array.length;a++)
    {
        item2=item2 + menu_list_array[a] + '<br>';
    }
    console.log(item2)
    document.getElementById("display_addedmenu").innerHTML = item2;		
}

function add_top()
{
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}