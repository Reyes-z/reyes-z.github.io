var posts=["2020/09/09/VMware虚拟机使用/","2020/09/05/hello-world/","2020/07/09/使用博客/","2020/09/09/优化记录/","2021/10/20/站点公告/","2020/07/09/公告/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };