function link() {
    $('#back').addClass('scale');
    setTimeout(function() {
        location.href = './chooseCha.html';
    }, 1500);
}

var usrnic = document.getElementById('userNickName');
var usrage = document.getElementById('userAge');
var usrgen = document.getElementById('userNickName');

//사용자 이름 바뀌었을때 이벤트
usrnic.addEventListener('change',function(){
  let x = document.getElementsByClassName("chaNickName")[0];
  x.innerText = usrnic.value ;
  window.localStorage.setItem('name',usrnic.value);
})

//나이 바뀌었을 때 이벤트
usrage.addEventListener('change',function(){
  //나이값의 크기비교
  //크기별로 이미지 변경
})

//라디오는 아이디를 어떻게 먹여서 변경될때마다 액션을 줄지 확인해보기

///////////////////////////////////////////////////////////////////


//3페이지넘어갈때 뿌려주

let x = document.getElementsByClassName("chaNickName")[0];
x.innerText = window.localStorage.getItem('name');

///////////////////////////////////////////////////////////////////

/* 성별 검사 */
function findGender(){
    var gender_value = $('input:radio[name=gender]:checked').val();
    //console.log(gender_value);
    var female = $('.bun-r, .bun-l')
    var clothes = $('.clothes')

    if(gender_value == 'male') {
        female.addClass('none');
        clothes.css('border-bottom', '95px solid #009688');
    } else {
        female.removeClass('none');
        clothes.css('border-bottom', '95px solid #f25437');
    }
}

/* 나이, 2글자 숫자만 가능하게*/
var userAge = document.getElementById('userAge');

userAge.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8)) {
        return false;
    }
}

$('input[type=number][maxlength]').on('input', function(ev) {
    var $this = $(this);
    var maxlength = $this.attr('maxlength');
    var value = $this.val();
    if (value && value.length >= maxlength) {
        $this.val(value.substr(0, maxlength));
    }
});

/* 연령별 구분 및 css처리 */
setTimeout(()=>{
    var chi = document.getElementById("childBag");
    var chet = chi.getContext("2d");
    chet.beginPath();
    chet.strokeStyle="#000";
    chet.lineWidth=10;
    chet.arc(0, 20, 100, 0,Math.PI,false);
    chet.stroke();

    var chi = document.getElementById("adultBag");
    var chet = chi.getContext("2d");
    chet.beginPath();
    chet.strokeStyle="#000";
    chet.lineWidth=10;
    chet.arc(60 , 70 , 40 , 0, Math.PI, true);
    chet.stroke();
}, 500)

function checkUserAge (obj) {
    var userAgeValue = document.getElementById('userAge').value;
    var childBag = $('.bag .child')
    var adultBag = $('.hand-r .adult')
    var ageHairColor = $('.headbg, .hair-r, .hair-l, .bun-r, .bun-l')
    if (userAgeValue >= 0 || userAgeValue <= 20 ){
        console.log('아동');
        childBag.addClass('on');
        adultBag.removeClass('on');
        ageHairColor.css('background','#714935');
    } 
    if (userAgeValue >= 21) {
        console.log('성인');
        childBag.removeClass('on');
        adultBag.addClass('on');
        ageHairColor.css('background','#3d3435');
        if (userAgeValue >= 51) {
            console.log('중년');
            childBag.removeClass('on');
            adultBag.addClass('on');
            ageHairColor.css('background','#646464');
        }
    } 
    
}

/* input 검사 */
function check(){
    if($('input[name="name"]').val().trim() == ''){
        alert('이름은 필수 입력입니다.');
        $('input[name="name"]').val('');
        $('input[name="name"]').focus();
        return false;
    }
    if($('input[name="age"]').val().trim() == ''){
        alert('나이는 필수 입력입니다.');
        $('input[name="age"]').val('');
        $('input[name="age"]').focus();
        return false;
    }
    if($('input[name="gender"]').is(':checked') == ''){
        alert('성별은 필수 입력입니다.');
        return false;
    }
    else{
        location.href = "./question.html";
    }
};

/* 질문페이지 효과 */
function backPage(){
    $(this).parent('section').hide().removeClass('on')
    $(this).parent('section').prev('section').addClass('on')
}
function nextPage(){
    $(this).parent('section').hide().removeClass('on')
    $(this).parent('section').next('section').addClass('on')
}
function goResult(){
    window.location.href = './result.html';
}

// 질문 배경
function bgChange(){
    $('.btn').on('click', function(){
        let home = $('#question1') || $('#question2') || $('#question3')
        let street = $('#question4') || $('#question5') || $('#question6') || $('#question7')
        let office = $('#question7') || $('#question8') || $('#question9') || $('#question10')
        if( street.hasClass('on') ){
            console.log('street')
            $('.bg-loop').css('background', 'url(../images/bg-street.jpg) bottom')
        } else if( office.hasClass('on') ){
            console.log('office')
            $('.bg-loop').css('background', 'url(../images/bg-office.jpg) bottom')
        } else if( home.hasClass('on') ){
            console.log('home')
            $('.bg-loop').css('background', 'url(../images/bg-home.jpg) bottom')
        }
    })
    
}