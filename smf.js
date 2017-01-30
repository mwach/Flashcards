function firstDayOfMonth() {
        var d = new Date();
        return ('01-')
                        + ('0' + (d.getMonth() + 1)).slice(-2) + '-'
                        + d.getFullYear();
}

function currentDay(){
        var d = new Date();
        return ('0' + d.getDate()).slice(-2) + '-'
        + ('0' + (d.getMonth() + 1)).slice(-2) + '-'
                                + d.getFullYear();
}

function prepareDatePicker(datePicker){
        datePicker.datepicker({
                format : 'mm-dd-yyyy',
                container : "body",
                todayHighlight : true,
                autoclose : true,
        });
}

$(document).ready(
                function() {
                        prepareDatePicker($('input[name="startDate"]'));
                        $('input[name="startDate"]').val(firstDayOfMonth());

                        prepareDatePicker($('input[name="endDate"]'));
                        $('input[name="endDate"]').val(currentDay());
                })
