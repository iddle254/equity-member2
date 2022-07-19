'use strict';

var M = {
  Member: function () {
    // member step 1
    $(document).on(
      'click',
      'button[data-href="member-welcome"]',
      function (evt) {
        evt.preventDefault();
        $('section#hero, section#about').addClass('hide');
        $('#step-2').removeClass('hide');
      }
    );

    // member step 2
    $(document).on('click', 'button[data-href="step-3"]', function (evt) {
      evt.preventDefault();
      $('#step-2').addClass('hide');
      $('#step-3').removeClass('hide');
    });

    $(document).on('click', 'button[data-href="member-back"]', function (evt) {
      evt.preventDefault();
      $('#step-3').addClass('hide');
      $('#step-2').removeClass('hide');
    });

    $(document).on('click', 'button[data-href="step-4"]', function (evt) {
      var is_checked = $('#step-3 input:checked').length > 0;
      if (is_checked) {
        evt.preventDefault();
        $('#step-3').addClass('hide');
        $('#step-4').removeClass('hide');
      } else {
        $('#exampleModalCenter').modal('show');
        evt.preventDefault();
      }
    });

    // member step 4
    $(document).on('click', 'button[data-href="step-5"]', function (evt) {
      evt.preventDefault();
      $('#step-4').addClass('hide');
      $('#step-3').removeClass('hide');
    });

    $(document).on('click', 'button[data-href="step-6"]', function (evt) {
      var is_checked = $('#step-4 input:checked').length > 0;
      if (is_checked) {
        evt.preventDefault();
        $('#step-4').addClass('hide');
        $('#step-5').removeClass('hide');
      } else {
        $('#exampleModalCenter').modal('show');
        evt.preventDefault();
      }
    });
    // member step 6
    $(document).on('click', 'button[data-href="step-7"]', function (evt) {
      evt.preventDefault();
      $('#step-5').addClass('hide');
      $('#step-4').removeClass('hide');
    });

    $(document).on('click', 'button[data-href="step-8"]', function (evt) {
      var is_checked = $('#step-5 input:checked').length > 0;
      if (is_checked) {
        evt.preventDefault();
        $('#step-5').addClass('hide');
        $('#step-6').removeClass('hide');
      } else {
        $('#exampleModalCenter').modal('show');
        evt.preventDefault();
      }
    });

    // member step 8
    $(document).on('click', 'button[data-href="step-9"]', function (evt) {
      evt.preventDefault();
      $('#step-6').addClass('hide');
      $('#step-5').removeClass('hide');
    });

    $(document).on('click', 'button[data-href="step-10"]', function (evt) {
      var is_checked = $('#step-6 input:checked').length > 0;
      if (is_checked) {
        evt.preventDefault();
        $('#step-6').addClass('hide');
        $('#step-7').removeClass('hide');
      } else {
        $('#exampleModalCenter').modal('show');
        evt.preventDefault();
      }
    });

    // member step 10
    $(document).on('click', 'button[data-href="step-11"]', function (evt) {
      evt.preventDefault();
      $('#step-7').addClass('hide');
      $('#step-6').removeClass('hide');
    });

    $(document).on(
      'click',
      'form#member-form input.memberIIformsubmit, form#non-member-form input.nonmemberIIformsubmit',
      function (evt) {
        evt.preventDefault();
        var form = $(this);

        $.ajax({
          type: 'POST',
          url: 'https://s793546030.t.eloqua.com/e/f2',
          data: form.serialize(),
          beforeSend: function () {
            console.log(form.serialize());
          },
          success: function (data) {
            console.log(data);
            $('#step-7').addClass('hide');
            $('#step-8').removeClass('hide');
          },
          error: function (e) {
            console.log('hello');
          },
        });

        // $('#step-7, #step-13').addClass('hide');
        // $('#step-8').removeClass('hide');
      }
    );
  },

  init: function () {
    this.Member();
  },
};

$(function () {
  M.init();
});
$('#modal-close').click(function (evt) {
  $('#exampleModalCenter').modal('hide');
  evt.preventDefault();
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
function isPhoneNumber(phone) {
  var regex = /[0-9\-\(\)\s]+/;
  return regex.test(phone);
}
$('#member-submit').click(function (evt) {
  let errorMessage = '';
  if ($('#first_name').val() == '') {
    errorMessage += '<li>Your first name is required</li>';
  }
  if ($('#last_name').val() == '') {
    errorMessage += '<li>Your last name is required</li>';
  }
  if ($('#location').val() == '') {
    errorMessage += '<li>Your location is required</li>';
  }
  if (isEmail($('#email').val()) == false) {
    errorMessage += '<li>Your email is not valid</li>';
  }
  if (isPhoneNumber($('#phone_number').val()) == false) {
    errorMessage += '<li>Your phone number is not valid</li>';
  }
  var consentGiven = $('#step-7 :checkbox:checked').length > 0;
  if (!consentGiven) {
    errorMessage +=
      '<li>Your consent is required in order to submit the form</li>';
  }

  if (consentGiven && errorMessage == '') {
    evt.preventDefault();
    $('#step-7').addClass('hide');
    $('#step-8').removeClass('hide');
  } else {
    // console.log(errorMessage);
    $('.error-div').show();
    $('#error-message').show();
    $('#error-message').html(errorMessage);
  }
});

var NM = {
  NonMember: function () {
    // member step 1
    $(document).on(
      'click',
      'button[data-href="non-member-welcome"]',
      function (evt) {
        evt.preventDefault();
        $('section#hero, section#about').addClass('hide');
        $('#step-9').removeClass('hide');
      }
    );

    $(document).on(
      'click',
      'button[data-href="non-member-back"]',
      function (evt) {
        evt.preventDefault();
        $('#step-10').addClass('hide');
        $('#step-9').removeClass('hide');
      }
    );

    // member step 2
    $(document).on(
      'click',
      'button[data-href="non-member-start"]',
      function (evt) {
        evt.preventDefault();
        $('#step-9').addClass('hide');
        $('#step-10').removeClass('hide');
      }
    );

    $(document).on('click', 'button[data-href="next-1"]', function (evt) {
      var is_checked = $('#step-10 input:checked').length > 0;
      if (is_checked) {
        evt.preventDefault();
        $('#step-10').addClass('hide');
        $('#step-11').removeClass('hide');
      } else {
        $('#exampleModalCenter').modal('show');
        evt.preventDefault();
      }
    });

    // member step 4
    $(document).on('click', 'button[data-href="back-1"]', function (evt) {
      evt.preventDefault();
      $('#step-11').addClass('hide');
      $('#step-10').removeClass('hide');
    });

    $(document).on('click', 'button[data-href="next-2"]', function (evt) {
      var is_checked = $('#step-11 input:checked').length > 0;
      if (is_checked) {
        evt.preventDefault();
        $('#step-11').addClass('hide');
        $('#step-12').removeClass('hide');
      } else {
        $('#exampleModalCenter').modal('show');
        evt.preventDefault();
      }
    });

    // member step 6
    $(document).on('click', 'button[data-href="back-2"]', function (evt) {
      evt.preventDefault();
      $('#step-12').addClass('hide');
      $('#step-11').removeClass('hide');
    });

    $(document).on('click', 'button[data-href="next-3"]', function (evt) {
      var is_checked = $('#step-12 input:checked').length > 0;
      if (is_checked) {
        evt.preventDefault();
        $('#step-12').addClass('hide');
        $('#step-13').removeClass('hide');
      } else {
        $('#exampleModalCenter').modal('show');
        evt.preventDefault();
      }
    });

    // member step 8
    $(document).on('click', 'button[data-href="back-3"]', function (evt) {
      evt.preventDefault();
      $('#step-13').addClass('hide');
      $('#step-12').removeClass('hide');
    });
  },

  init: function () {
    this.NonMember();
  },
};

$(function () {
  NM.init();
});
$('#non-member-submit').click(function (evt) {
  let NMerrorMessage = '';
  if ($('#nm_first_name').val() == '') {
    NMerrorMessage += '<li>Your first name is required</li>';
  }
  if ($('#nm_last_name').val() == '') {
    NMerrorMessage += '<li>Your last name is required</li>';
  }
  if ($('#nm_location').val() == '') {
    NMerrorMessage += '<li>Your location is required</li>';
  }
  if (isEmail($('#nm_email').val()) == false) {
    NMerrorMessage += '<li>Your email is not valid</li>';
  }
  if (isPhoneNumber($('#nm_phone_number').val()) == false) {
    NMerrorMessage += '<li>Your phone number is not valid</li>';
  }
  var NMconsentGiven = $('#step-13 :checkbox:checked').length > 0;
  if (!NMconsentGiven) {
    NMerrorMessage +=
      '<li>Your consent is required in order to submit the form</li>';
  }

  if (NMconsentGiven && NMerrorMessage == '') {
    evt.preventDefault();
    $('#step-13').addClass('hide');
    $('#step-14').removeClass('hide');
  } else {
    console.log(NMerrorMessage);
    $('.error-div').show();
    $('#nm-error-message').show();
    $('#nm-error-message').html(NMerrorMessage);
  }
});
