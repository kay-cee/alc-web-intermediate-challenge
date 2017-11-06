/**
 * Created by everest on 05/11/17.
 */
$(document).ready(function () {

    $('studentform').on('submit', function () {
        // showDialog();
        let item = $('form input');
        let student = {item: item.val()};

        $.ajax({
            type : 'POST',
            url : '/Add%20%Student',
            data : student,
            success : function (data) {
                // hideDialog();
                let reply = 'Student has been successfully added';
                alert(reply);
                window.document.location = 'Bio.html'
            }
        });

        return false;
    });


});