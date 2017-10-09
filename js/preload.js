var imgs = [
    'http://img2.imgtn.bdimg.com/it/u=1142822403,32080314&fm=214&gp=0.jpg',
    'http://img2.imgtn.bdimg.com/it/u=1999334205,3363040809&fm=27&gp=0.jpg',
    'http://p8.aipai.com/photo/179/19254179/photo/68/2653508/2653508_normal.jpg',
    'http://img5.imgtn.bdimg.com/it/u=3088271132,1257566149&fm=27&gp=0.jpg',
    'http://img5.duitang.com/uploads/item/201410/24/20141024162359_XmNQJ.jpeg'
];

var index = 0,
    len = imgs.length;

$('.btn').on('click', function() {
    if ($(this).data('control') === 'prev') { // 上一张
        index = Math.max(0, --index);
    } else { //	下一张
        index = Math.min(len - 1, ++index);
    }
    document.title = (index + 1) + '/' + len;
    $('#img').attr('src',imgs[index]); 
})