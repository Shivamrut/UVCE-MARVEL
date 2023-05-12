function cook() {
    return new Promise(function(resolve, reject) {
        document.getElementById('s1').innerHTML = '1. Heat 1 tablespoon ghee in a kadai or heavy based pan. Add rava in it.';
        document.getElementById('s2').innerHTML = '2. Roast it on low flame until it turns light brown, approx 4-5 minutes (time required to roast it may vary based on size and thickness of kadai). Keep stirring continuously. When done, transfer to a plate.'  ; 
        document.getElementById('s3').innerHTML = '3. Heat 2 tablespoons oil in same kadai over medium flame. Add mustard seeds. When they begin to sputter, add chana dal, urad dal, asafoetida and curry leaves. Cook until dals turn light brown.'  ;
        document.getElementById('s4').innerHTML = '4. Add chopped onion, grated ginger and chopped green chillies and sauté for 1-2 minutes until onion becomes translucent.'  ;
        document.getElementById('s5').innerHTML = '5. Add chopped carrot, green peas, chopped capsicum, chopped tomatoes and salt. Mix well and sauté for 2-3 minutes.'  ;
        document.getElementById('s6').innerHTML = '6. Add water and bring the mixture to boil, it will take around 2-3 minutes.'  ;
        document.getElementById('s7').innerHTML = '7. Add roasted rava and lemon juice; mix well.'  ;
        document.getElementById('s8').innerHTML = '8. Stir continuously for 1-2 minutes to avoid lumps.'  ;
        document.getElementById('s9').innerHTML = '9. Cover it with a lid and cook on low flame until mixture turns thick, it will take around 3-4 minutes. Stir in between regular intervals.'  ;
        document.getElementById('s10').innerHTML = '10. Turn off heat and remove the lid. Let it settle for 10 minutes before serving.'  ;
        document.getElementById('s11').innerHTML = '11. Add fried cashew nuts and coriander leaves, mix well and transfer rava upma to a serving plate.'+"<br><br>";
        resolve();
    });
}
document.getElementById('btn').addEventListener('click', function() {
    
    cook().then(function() {
        document.getElementById('s11').innerHTML+= '<b>Now enjoy your dish!!!</b>';
    });
});

