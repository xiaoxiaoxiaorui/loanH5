/**
 * Created by Administrator on 2017/12/6.
 */
$(function () {
    $('.PhoneNumber').on('keyup',function () {
        var str = $(this).val().replace(/\D/g,'');
        $(this).val(str);
    });
    $('.Get').on('click',function () {
        alert('领取成功')
    })
});