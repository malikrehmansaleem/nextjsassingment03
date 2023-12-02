


export const blogsData = [  {
    "id":1,
    "slug": "Blog-01" ,
    "description": "Mollit incididunt ad quis laboris sint qui veniam culpa. Mollit labore sit amet dolor dolor officia aliqua labore ea elit amet. Ea in aute commodo ullamco esse est quis laborum sit. Nulla voluptate Lorem dolor proident labore do consequat nisi."
},

{
    "id":2,
    "slug":"Blog-02" ,
    "description":
    "Laborum Lorem veniam sunt amet deserunt irure officia do veniam pariatur deserunt consequat. Dolore exercitation tempor quis ex culpa id excepteur sunt qui reprehenderit. Sunt enim id sit consectetur aute deserunt. Est consequat cupidatat Lorem laborum est ea labore in tempor duis duis labore. Reprehenderit excepteur adipisicing est elit. Pariatur nulla ea nostrud labore consequat elit adipisicing quis. Est cillum quis deserunt in sit deserunt ea irure id qui culpa sunt minim."}
,{
    "id": 3,
    "slug":"Blog-03",
    "description":"loremOfficia nulla ullamco enim ea eiusmod. Officia dolor aliqua eiusmod dolore veniam minim. Est sunt ipsum velit quis pariatur deserunt adipisicing nostrud. Amet aliquip in non Lorem deserunt ex nisi mollit laboris do. Ullamco commodo cupidatat adipisicing esse ipsum velit. Deserunt elit excepteur excepteur commodo tempor Lorem ipsum elit reprehenderit pariatur exercitation consequat aute sit. Adipisicing aliqua ad veniam proident amet veniam cillum cillum ex eu dolore tempor sunt pariatur."  
},
{
    "id":4,
    "slug":"blog-04",
    "description":"Nostrud irure dolore aute quis qui elit cupidatat qui. Elit eiusmod culpa in nostrud irure qui magna quis labore nisi tempor mollit. Adipisicing incididunt mollit tempor dolore magna ipsum occaecat."
},{
    "id": 5,
    "slug":"Blog-05",
    "description":"loremOfficia nulla ullamco enim ea eiusmod. Officia dolor aliqua eiusmod dolore veniam minim. Est sunt ipsum velit quis pariatur deserunt adipisicing nostrud. Amet aliquip in non Lorem deserunt ex nisi mollit laboris do. Ullamco commodo cupidatat adipisicing esse ipsum velit. Deserunt elit excepteur excepteur commodo tempor Lorem ipsum elit reprehenderit pariatur exercitation consequat aute sit. Adipisicing aliqua ad veniam proident amet veniam cillum cillum ex eu dolore tempor sunt pariatur."  
},
{
    "id":6,
    "slug":"blog-06",
    "description":"Nostrud irure dolore aute quis qui elit cupidatat qui. Elit eiusmod culpa in nostrud irure qui magna quis labore nisi tempor mollit. Adipisicing incididunt mollit tempor dolore magna ipsum occaecat."
},
{
    "id": 7,
    "slug":"Blog-07",
    "description":"loremOfficia nulla ullamco enim ea eiusmod. Officia dolor aliqua eiusmod dolore veniam minim. Est sunt ipsum velit quis pariatur deserunt adipisicing nostrud. Amet aliquip in non Lorem deserunt ex nisi mollit laboris do. Ullamco commodo cupidatat adipisicing esse ipsum velit. Deserunt elit excepteur excepteur commodo tempor Lorem ipsum elit reprehenderit pariatur exercitation consequat aute sit. Adipisicing aliqua ad veniam proident amet veniam cillum cillum ex eu dolore tempor sunt pariatur."  
},
{
    "id":8,
    "slug":"blog-08",
    "description":"Nostrud irure dolore aute quis qui elit cupidatat qui. Elit eiusmod culpa in nostrud irure qui magna quis labore nisi tempor mollit. Adipisicing incididunt mollit tempor dolore magna ipsum occaecat."
},
{
    "id": 9,
    "slug":"Blog-09",
    "description":"loremOfficia nulla ullamco enim ea eiusmod. Officia dolor aliqua eiusmod dolore veniam minim. Est sunt ipsum velit quis pariatur deserunt adipisicing nostrud. Amet aliquip in non Lorem deserunt ex nisi mollit laboris do. Ullamco commodo cupidatat adipisicing esse ipsum velit. Deserunt elit excepteur excepteur commodo tempor Lorem ipsum elit reprehenderit pariatur exercitation consequat aute sit. Adipisicing aliqua ad veniam proident amet veniam cillum cillum ex eu dolore tempor sunt pariatur."  
},
{
    "id":10,
    "slug":"Blog-10",
    "description":"Nostrud irure dolore aute quis qui elit cupidatat qui. Elit eiusmod culpa in nostrud irure qui magna quis labore nisi tempor mollit. Adipisicing incididunt mollit tempor dolore magna ipsum occaecat."
}

]



function blog({ params } : { params: {slug: string }}){
    const selectBlog = blogsData.filter((item)=> item.slug === params.slug)
    return(
        <div>{selectBlog[0]?.description}</div>
    )
}
export default blog