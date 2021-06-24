player1_name = localstorage.getitem("player1_name")
player2_name = localstorage.getitem("player2_name")
 
player1_score =0;
player2_score =0;

document.getElementById("player1_name").innerHTML = player1_name +" : "
document.getElementById("player2_name").innerHTML = player2_name +" : "

document.getElementById("player1_score").innerHTML =player1_score;
document.getElementById("player1_score").innerHTML =player1_score;

document.getElementById("player_question").innerHTML="question turn -"+ player1_name;
document.getElementById("player_answer").innerHTML="answer turn -"+ player2_name;


function send(){
    get_word = doucument.getElementById("word") .value;
    word =get_word.toLowerCase();
    console.log(" word in lowercase =" + word)

    charat1 =word.charat(1);
    console.log(charat1);

    lenght_divide_2 =math.lenght-1;
    charat3=word.charat(lenght_minus_1);
    console.log(charat3);

    lenght_minus_1 =math.floor(word.lenght/2);
    charat2=word.charat(lenght_divide_2);
    console.log(charat2);

    remove_charat1=word.replace(charat1, "_");
    remove_charat2=remove_charat1.replace(charat2, "_")
    remove_charat3=remove_charat2.replace(charat3, "_")

    question_word="<h4 id='word_display'> Q."+ remove_charat3 +"</h4>";
    input_box="<br>answer : <input tye ='text' id ='input_check_box'>";
    check_button= "<br><br><button class = 'btn btn-info' onclick='check()'> check</button>"
    row= question_word+ input_box + check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value="";
}
