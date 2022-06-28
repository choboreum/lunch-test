function check(){
    $("a[data-role=submit]").unbind('click').on('click', function() {
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
            location.href = "./sub2.html";
        }
    })
};

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

function nextPage(){
    $("button").on('click', function() {
        $(this).parent('section').removeClass('on')
        $(this).parent('section').next('section').addClass('on')
    });
}