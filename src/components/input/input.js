$('.input-file input[type=file]').on('change', function(){
    let $files_list = $(this).closest('.input-file').next();
    $files_list.empty();

    for(var i = 0; i < this.files.length; i++){
        let new_file_input = '<div class="input-file-list-item">' +
            '<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
            '<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
            '</div>';
        $files_list.append(new_file_input);
        dt.items.add(this.files.item(i));
    };
    this.files = dt.files;
});