$(document).ready(function () {
  $('.big').click(function () {
    $('.card').css({ transform: 'rotateY(180deg)' });
  });

  $('.ters').click(function () {
    $('.card').css({ transform: 'rotateY(0deg)' });
  });

  $('#phone1').inputmask({ mask: '9999 9999 9999 9999', placeholder: '' });
  $('#phone1').keyup(function (e) {
    $('.card_number p').html(e.target.value);
    $('.card').css({ transform: 'rotateY(0deg)' });

    if ($('#phone1').val() == '') {
      $('.card_number p').html('0123 4567 8910 1112');
    }

    if ($('#phone1').val()[0] == 4) {
      $('.bot').css({ backgroundColor: '#afb42b' });
      $('.top').css({ backgroundColor: '#d4e157' });
      $('.visa').css({ display: 'block' });
    } else if (
      $('#phone1').val()[0] == 5 &&
      ($('#phone1').val()[1] == 1 ||
        $('#phone1').val()[1] == 2 ||
        $('#phone1').val()[1] == 3 ||
        $('#phone1').val()[1] == 4 ||
        $('#phone1').val()[1] == 5)
    ) {
      $('.bot').css({ backgroundColor: '#0288D1' });
      $('.top').css({ backgroundColor: '#03A9F4' });
      $('.mastercard').css({ display: 'block' });
    } else if (
      $('#phone1').val()[0] == 2 &&
      ($('#phone1').val()[1] == 3 ||
        $('#phone1').val()[1] == 4 ||
        $('#phone1').val()[1] == 5 ||
        $('#phone1').val()[1] == 6 ||
        $('#phone1').val()[1] == 7)
    ) {
      $('.bot').css({ backgroundColor: '#0288D1' });
      $('.top').css({ backgroundColor: '#03A9F4' });
      $('.mastercard').css({ display: 'block' });
    } else if (
      $('#phone1').val()[0] == 5 &&
      ($('#phone1').val()[1] == 6 ||
        $('#phone1').val()[1] == 7 ||
        $('#phone1').val()[1] == 8)
    ) {
      $('.bot').css({ backgroundColor: '#f9a825' });
      $('.top').css({ backgroundColor: '#ffeb3b' });
      $('.maestro').css({ display: 'block' });
    } else if ($('#phone1').val()[0] == 6 && $('#phone1').val()[1] == 7) {
      $('.bot').css({ backgroundColor: '#f9a825' });
      $('.top').css({ backgroundColor: '#ffeb3b' });
      $('.maestro').css({ display: 'block' });
    } else {
      $('.bot').css({ backgroundColor: 'blue' });
      $('.top').css({ backgroundColor: 'rgb(245, 245, 245)' });
      $('.visa').css({ display: 'none' });
      $('.mastercard').css({ display: 'none' });
      $('.maestro').css({ display: 'none' });
    }
  });

  $('#phone2').inputmask({ mask: '99/99', placeholder: '' });

  $('#phone2').keyup(function (e) {
    $('.expiration p').html(e.target.value);
    $('.card').css({ transform: 'rotateY(0deg)' });
    if ($('#phone2').val() == '') {
      $('.expiration p').html('01/23');
    }
  });

  $('#phone3').inputmask({ mask: '999', placeholder: '' });
  $('#phone3').keyup(function (e) {
    $('.stars p').html(e.target.value);
    $('.card').css({ transform: 'rotateY(180deg)' });
    if ($('#phone3').val() == '') {
      $('.stars p').html('***');
    }
  });

  $('#name_input').inputmask({ placeholder: '' });

  $('#name_input').keyup(function (e) {
    $('.card_name p').html(e.target.value);
    $('.lines p').html(e.target.value);
    if ($('#name_input').val() == '') {
      $('.card_name p').html('NAME SURNAME');
    }
    if ($('#name_input').val() == '') {
      $('.lines p').html('NAME SURNAME');
    }
  });
});
