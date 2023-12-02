class Posts{
slug:string;
description:string
constructor(slug:string,description:string){
    this.slug=slug
    this.description=description
}
}
const posts=[new Posts("post01","This is the first blog post"),
new Posts("post02","This is the second blog post"),
new Posts("post03","This is the third blog post"),
new Posts("post04","This is the fourth blog post"),
new Posts("post05","This is the fifth blog post"),
new Posts("post06","This is the sixth blog post"),
new Posts("post07","This is the seventh blog post"),
new Posts("post08","This is the eighth blog post"),
new Posts("post09","This is the ninth blog post"),
new Posts("post10","This is the tenth blog post"),
]
export default function Blog({ params }: { params: { slug: string } }) {
    const selectedPost=posts.filter((items)=>items.slug==params.slug      
    )
    return (
    <div>
        <h1>{selectedPost[0].slug}</h1>
        <p>My Post: {selectedPost[0].description}</p>
    </div>)
  }