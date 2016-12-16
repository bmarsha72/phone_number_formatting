//enter any wacked out version of a phone number:
var phoneno = '+1-(337--776-8899';

function validatePhone(phoneno){

    //strip out the excess:
    var desired = phoneno.replace(/[^\w\s]/gi, '');
    var desired2 = desired.replace(/\s/g,'');

    //if there is a leading one, get rid of it:
    while(desired2.charAt(0) === '1'){
      desired2 = desired2.substr(1);
    }
    //some more regex formatting:
  if(desired2.match(/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i)) {
        //confirm that we're at 10 digits:
        if(desired2.length > 10)
        {
          return console.log('sorry, you have too many digits');
        }
        else if (desired2.length < 7)
        {
          return console.log('sorry, you have too few digits')
        }
        else
        {
          console.log('you are good to go, captain');
        }
      }
    else return false;
  };
