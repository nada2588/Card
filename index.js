
$(document).ready(function() {
    $(document).on("click", ".pic-list", function() {
      $(this).find("input").trigger('click');
    });
  });
  var popup;
  function openAd() {
    if (popup) {
      popup.focus();
    } else {
      popup = window.open('popup.html', '', 'width=600,height=300,');
    }
  }
  

// close the popup window

    function closeWindow() {
 
      
        var new_window =
            open(location, '_self');
 
        new_window.close();
 
        return false;
    }