export default function() {

  this.namespace = '/api';
  const data = [{
      type: 'posts',
      id: 1,
      attributes: {
        title: 'First Blog Post Title',
        author: 'Veruca Salt',
        date: 'August 28, 2013 at 10:00 PM',
        image: 'http://placehold.it/900x300',
        article: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quasi, fugiat, asperiores harum voluptatum tenetur a possimus nesciunt quod accusamus saepe tempora ipsam distinctio minima dolorum perferendis labore impedit voluptates!',
        comments: [{
          author: 'Mike TV',
          image: 'http://placehold.it/64x64',
          date: 'August 29, 2013 at 10:00 PM',
          text: 'Cool!'
        },{
          author: 'Violet Beauregarde',
          image: 'http://placehold.it/64x64',
          date: 'August 30, 2013 at 17:00 PM',
          text: 'Awesome!'
        },{
          author: 'Veruca Salt',
          image: 'http://placehold.it/64x64',
          date: 'August 31, 2013 at 13:00 PM',
          text: 'Nice post!'
        }
        ]
      }
    }, {
      type: 'posts',
      id: 2,
      attributes: {
        title: 'Second Blog Post Title',
        author: 'Mike TV',
        date: 'August 28, 2013 at 10:20 PM',
        image: 'http://placehold.it/900x300',
        article: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quasi, fugiat, asperiores harum voluptatum tenetur a possimus nesciunt quod accusamus saepe tempora ipsam distinctio minima dolorum perferendis labore impedit voluptates!',
        comments: [{
          author: 'Mike TV',
          image: 'http://placehold.it/64x64',
          date: 'August 29, 2013 at 10:00 PM',
          text: 'Cool!'
        },{
          author: 'Violet Beauregarde',
          image: 'http://placehold.it/64x64',
          date: 'August 30, 2013 at 17:00 PM',
          text: 'Awesome!'
        },{
          author: 'Veruca Salt',
          image: 'http://placehold.it/64x64',
          date: 'August 31, 2013 at 13:00 PM',
          text: 'Nice post!'
        }
        ]
      }
    }, {
      type: 'posts',
      id: 3,
      attributes: {
        title: 'Third Blog Post Title',
        author: 'Violet Beauregarde',
        date: 'August 28, 2013 at 11:00 PM',
        image: 'http://placehold.it/900x300',
        article: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, quasi, fugiat, asperiores harum voluptatum tenetur a possimus nesciunt quod accusamus saepe tempora ipsam distinctio minima dolorum perferendis labore impedit voluptates!',
        comments: [{
          author: 'Mike TV',
          image: 'http://placehold.it/64x64',
          date: 'August 29, 2013 at 10:00 PM',
          text: 'Cool!'
        },{
          author: 'Violet Beauregarde',
          image: 'http://placehold.it/64x64',
          date: 'August 30, 2013 at 17:00 PM',
          text: 'Awesome!'
        },{
          author: 'Veruca Salt',
          image: 'http://placehold.it/64x64',
          date: 'August 31, 2013 at 13:00 PM',
          text: 'Nice post!'
        }
        ]
      }
    }];

  this.get('/posts', function() {
    return {data : data};
  });

  this.post('/posts', function(schema, request) {
    const id =data[data.length-1].id+1;
    const post = JSON.parse(request.requestBody).data.attributes;
    data.push({
      type: 'posts',
        id: id,
      attributes: {
      title: post.title,
        author: post.author,
        date: post.date,
        image: post.image,
        article: post.article,
        comments: []
    }
    });


    return {data : data.find(element=>element.id === id)};
  });

  this.patch('/posts/:id', function(schema, request) {
    const text = JSON.parse(request.requestBody).data.attributes.comments;
    const id = Number(request.params.id);
    const post = data.find(element=>element.id === id);
    post.attributes.comments.push(text[text.length-1]);
    return {data : post};
  });

  this.get('/posts/:id', function(schema, request) {
    const id = Number(request.params.id);

    return {data : data.find(element=>element.id === id)};
  });
}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

