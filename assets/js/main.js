/**
 * jTinder initialization
 */
 var data = {};
 var datapush = [];
 var removedata = [];

$("#tinderslide").jTinder({
	// dislike callback
    onDislike: function (item) {
        $('#status').html('Tidak Setuju dengan Pertanyaan ' + (item.index()+1));
        removeBtn((item.index()+1));
        answer(item, '0', data, datapush, removedata, 'false', '0' );
    },
	// like callback
    onLike: function (item) {
        answer(item, '1', data, datapush, removedata, 'false', '0' );
        removeBtn((item.index()+1));
        $('#status').html('Setuju dengan Pertanyaan  ' + (item.index()+1));
    },

	animationRevertSpeed: 400,
	animationSpeed: 400,
	threshold: 1
});

function skip(cl, i)
{
    console.log('hello 3 ' + cl);
    $("#pane"+i).hide(200);

    $("#tinderslide").jTinder('like');
    answer('item', '0', data, datapush, removedata, 'true', cl );
}

function removeBtn(id)
{
    $("#btn-hide-"+id).remove();
}

/**
 * Set button action to trigger jTinder like & dislike.
 */
// $('.actions .like, .actions .dislike').click(function(e){
// 	e.preventDefault();
// 	$("#tinderslide").jTinder($(this).attr('class'));
// });

function answer(item, ans, data, datapush, removedata, insert, id) {

    if(insert == 'false') {
        var index = item.index()+1;
        var items = item.prevObject[index - 1];
        console.log(index);
        console.log(item);

        data[item.index()+1] = {
            pertanyaan : items.innerText,
            jawaban : ans
        };

        var dp = {
            pertanyaan : items.innerText,
            jawaban : ans
        };
        datapush.push(dp);

    } else {
        var dataRemove = {
            idCard : id
        };
        removedata.push(dataRemove);
        console.log(removedata);
    }

    // console.log(datapush);
    // // alert(data);
    // console.log(items.innerText + ' = '+ data);
    // console.log(data);
//    if(index == 1) {
//        console.log(datapush);
//        $.ajax({
//           type: "POST",
//           data: {data:datapush, remove:removedata},
//           url: "https://microsite.tempo.co/hackathon2018/ajax/post",
//           success: function(msg){
             // $('.answer').html(msg);
//             console.log(msg);
             // window.location = "";
//             window.location.replace("https://microsite.tempo.co/hackathon2018/home/hasil");
//           }
//        });
//    }
}
