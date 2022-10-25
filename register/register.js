const userid = document.querySelector('#userid');
const pwd1 = document.querySelector('#pwd1');
const pwd2 = document.querySelector('#pwd2');
const level = document.querySelector('#level');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const submitButton = document.querySelector('#submit_button');
const gender = document.querySelector('#gender')
//==============================================================================================
submitButton.addEventListener('click', function() {
    // 함수 호출을 배열에 삽입 첫번쨰 방법
    let chkArray = [idconfirm(), pwd1confirm(), pwd2confirm(), fullnameconfirm(), emailconfirm(), telconfirm()]
       

    let chkFlag = true;
    // chkArray에서 하나하나 가져와서 chk 값에 넣어줌
    for (const chk of chkArray) {
        if (!chk) { // 함수의 return 값이 false 일때
            chkFlag = false
        }
    }

    if (chkFlag) {
        document.signup.submit();
    }

    //  // 두번째 방법
    // // 아이디: 공백여부 / 중복여부
    // const idConf = idconfirm()
    // // 비밀번호: 공백여부 / 특수문자,문자,숫자 포함 형태 
    // const pwd1Conf = pwd1confirm()
    // // 비밀번호 확인 : 공백여부 / 비밀번호와 같은지 안같은지
    // const pwd2Conf = pwd2confirm()
    // // 이름: 공백여부
    // const fullnameConf = fullnameconfirm()
    // // 메일주소: 공백여부 / 메일형식에 맞는지(test@test.com)
    // const emailConf = emailconfirm()
    // // 연락처(필수x) 연락처 형식에 맞는지(010-2222-3333) 
    // const telConf = telconfirm()

    // if (idconf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf) {
    //     //submit 이라는 함수는 어디로 넘겨주는 함수
    //     document.signup.submit();
    // }

    genconfirm ()
})

//============================================================================================
function idconfirm () {
    const mustId =document.querySelector('.must_id');
    const overlap = document.querySelector('.overlap')

    //텍스트가 남아있는걸 방지하기 위해 (초기화)
    mustId.style.display = 'none'
    overlap.style.display = 'none'

    //null undefined 0 '' 은 false 나머지는 ture
    //userid 공백이라면 or 빈문자열이 되었을때 코드를 실행 시키겠다
    // if( userid.value === '')
    // replace(/ |0/g, "") 정규 표현식  0이나 넓은 공백이 들어오면 ''
    if ( !userid.value.replace(/ /g, "")) {
        mustId.style.display='block'
        return false
    }else {
        //if (idcheck(userid.value === false)
        if (!idcheck(userid.value.replace(/ /g, ""))){ // 아디가 중복이라면
            overlap.style.display='block'
            return false
        }
    }

    return true
}

function pwd1confirm () {
    const mustPwd1 =document.querySelector('.must_pwd1');
    const regPwd = document.querySelector('.reg_pwd')

    mustPwd1.style.display = 'none'
    regPwd.style.display = 'none'

    // pwd1에서 받아온 값이 공백이라면
    if ( !pwd1.value.replace(/ /g, "") ) {
        mustPwd1.style.display='block'
        return false
    } else{
        if ( !pwdCheck(pwd1.value.replace(/ /g, "")) ) { //정규표현식에 맞지 않으면
            regPwd.style.display = 'block'
            return false
        }
    }

    return true
}
function pwd2confirm () {
    const mustPwd2 =document.querySelector('.must_pwd2');
    const same = document.querySelector('.same')
   
    mustPwd2.style.display = 'none'
    same.style.display = 'none'
    
    if ( !pwd2.value.replace(/ /g, "") ) {
        mustPwd2.style.display='block'
        return false
    }else { // 비밀번호가 같은지 않같은지
        if ( pwd1.value.replace(/ /g, "") && pwd2.value.replace(/ /g, "")) { // 두개의 값이 있는지 확인
            if (pwd1.value !== pwd2.value ) { //두 패스워드 값이 같지 않다면
                same.style.display ='block'
                return false
            }
        }
    }

    return true
}

function fullnameconfirm () {
    const mustFullname =document.querySelector('.must_fullname');
    mustFullname.style.display = 'none'

    if (!fullname.value.replace(/ /g, "")) {
        mustFullname.style.display = 'block'
        return false
    }

    return true
}

function emailconfirm () {
    const mustEmail =document.querySelector('.must_email');
    const regEmail = document.querySelector('.reg_email')

    mustEmail.style.display = 'none'
    regEmail.style.display = 'none'

    if (!email.value.replace(/ /g, "")) {
        mustEmail.style.display = 'block'
        return false
    } else {
        if(!emailCheck(email.value.replace(/ /g, ""))) {
            regEmail.style.display = 'block'
            return false
        }
    }
     return true
}


function telconfirm () {
    const regTel =document.querySelector('.reg_tel');

    regTel.style.display = 'none'

    //전화번호가 있고 유효성체크에 통과하지 못했을때
    if (telCheck(tel.value.replace(/ /g, "")) && tel.value.replace(/ /g, "")) { // 유효성 체크를 통과 하지 못한다면
        regTel.style.display = 'block'
        return false
    } 

    return true
}

function genconfirm () {
    const regGender = document.querySelector('.reg_gender')

    gender.addEventListener('change', function(e) {
        const index = e.currentTarget.options.selectedIndex
    })

    if (index === 0) {
        regGender.style.display= 'none'
        return false
    }

    return true
}

//==========================================================================================

//중복된 아이디 체크
function idcheck(id) {
    return true
}

//비밀번호 정규식 체크

function pwdCheck(pwd) {
     //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    //정규식 체크 코드 true or false
    return reg.test(pwd)
}

function telCheck(tel) {
    const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return reg.test(tel);
}

function emailCheck(email) {
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return reg.test(email);
}