pagelist = [
    '/','/404.html','/about.html','/flinks.html','/music.html',
    '/post/','/post/404/','/post/hello-world/',
    '/post/HDU2022/','/post/CSP2022/','/post/WC2023/','/post/GDKOI2023/','/post/ZJOI2023/','/post/NOI2023/','/post/THUPC2023/',
]

window.location.href=pagelist[Math.floor(Math.random()*pagelist.length+1e-6)];
