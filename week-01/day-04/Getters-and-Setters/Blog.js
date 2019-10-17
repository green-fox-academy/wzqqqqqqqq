// Reuse your BlogPost class
// Create a Blog class which can
// store a list of BlogPosts
// add BlogPosts to the list
// delete(int) one item at given index
// update(int, BlogPost) one item at the given index and update it with another BlogPost

class BlogPost{
    constructor(authorName,title,text,publicationDate){
        this.authorName = authorName;
        this.title = title;
        this.text =text;
        this.publicationDate = publicationDate;        
    }
}

var post_1 = new BlogPost('John Doe','Lorem Ipsum','Lorem ipsum dolor sit amet.','2000.05.04')
var post_2 = new BlogPost('Tim Urban','Wait but why','A popular long-form, stick-figure-illustrated blog about almost everything.','2010.10.10')
var post_3 = new BlogPost('JoWilliam Turtonhn','LOne Engineer Is Trying to Get IBM to Reckon With Trumporem Ipsum','Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.','2017.03.28')

class Blog{
    constructor(){
        this.Blog =[];
    }

    add(blogpost){
        this.Blog.push(blogpost);
    }

    delete(index) {
        if (index < this.Blog.length)
        {
            this.Blog.splice(index, 1);
        }
      }

    update(index,blogpost){
        if (index<this.Blog.length) {
            this.Blog[index]=blogpost;
        }
    }
}

const blog = new Blog()
console.log(blog);
blog.add(post_1)
console.log(blog);
blog.update(0,post_2)
console.log(blog);
blog.delete(0)  
console.log(blog);
