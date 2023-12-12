pagelist = [
    '/','/404.html','/about.html','/flinks.html','/music.html',
    '/categories/','/tags/','/post/','/archives/',
    // '/categories/游记/','/categories/杂项/','/categories/学术/',
    // '/tags/游记/','/tags/题解/','/tags/做题记录/','/tags/图片挂了/','/tags/杂项/','/tags/学术/',
    '/post/404/','/post/hello-world/',
    '/post/gdkoi2021/','/post/usaco2023jan/','/post/abc268/','/post/usaco2023feb/',
    '/post/hdu2022/','/post/csp2022/','/post/wc2023/','/post/gdkoi2023/','/post/zjoi2023/','/post/thupc2023/','/post/noi2023/',
    '/post/what-is-det/','/post/surreal-number/','/post/uoj514/','/post/loj3362/',
]

window.location.href=pagelist[Math.floor(Math.random()*pagelist.length+1e-9)];
