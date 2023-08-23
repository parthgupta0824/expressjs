function refreshpage() {
    $('#list').empty()
    $.get('/todos', function (data) {
        for (let todo of data) {
            $('#list').append(`<li>${todo}</li>`)
        }
    })
}
refreshpage()

$('#btn').click(function (data) {
    console.log('clicked')
    let todo = $('#inp').val()
    $.post('/todos', { todo }, function (res) {
        $('#inp').val("")
        refreshpage()
    })
})