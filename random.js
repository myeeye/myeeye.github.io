pagelist = [
    '/','/404.html','/about.html','/flinks.html','/music.html',
    '/categories/','/tags/','/post/','/archives/',
    '/categories/游记/','/categories/杂项/','/categories/学术/',
    '/tags/游记/','/tags/题解/','/tags/做题记录/','/tags/图片挂了/','/tags/杂项/','/tags/学术/',
    '/post/404/','/post/hello-world/',
    '/post/HDU2022/','/post/CSP2022/','/post/WC2023/','/post/GDKOI2023/','/post/ZJOI2023/','/post/NOI2023/','/post/THUPC2023/',
]

window.location.href=pagelist[Math.floor(Math.random()*pagelist.length+1e-9)];
