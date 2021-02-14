# XMEME - A Meme Stream application

A Meme Stream Page where users can post memes by providing their name, a caption for the meme and the URL for the meme image as input. 
The page retrieve and display the latest 100 posted Memes (names + meme images + caption).

This is not a meme generator, but a simple app to pull created memes using their URL and listing them on this page with the user’s name and caption.

URL - https://xmeme-priyal.000webhostapp.com/

# PHP REST API

This is a simple PHP REST API from scratch with no framework.

# Quick Start

Import the xmemes.sql file, change the params in the config/Database.php file to your own

### Testing

### Posts

#### Create a Post

* Method - POST

* URL - https://xmeme-priyal.000webhostapp.com/create.php

* Sample Request

```
{
	"name": "ashok kumar",

	"url": "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg",

	"caption": "This is a meme"
}
```

* Sample Response

```
{
    "status": true,
    "message": "Post Created"
}
```

#### Get all Posts

* Method - GET

* URL - https://xmeme-priyal.000webhostapp.com/read.php

* Sample Response

```
{
    "status": true,
    "message": "Posts Found",
    "data": [

    {

	"id": "1",       

	"name": "MS Dhoni",

	"url": "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg",

	"caption": "Meme for my place"

    },

    {

	"id": "2",

	"name": "Viral Kohli",

	"url": "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg",

	"caption": "Another home meme"

    }

  ]

}
```

#### Get a Post

* Method - GET

* URL - https://xmeme-priyal.000webhostapp.com/read_single.php?id=1

* Sample Response

```
  {

	"id": "1",       

	"name": "MS Dhoni",

	"url": "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg",

	"caption": "Meme for my place"

    }
```

#### Update a Post

* Method - PATCH

* URL - https://xmeme-priyal.000webhostapp.com/update.php?id=2

* HEADER

```
{
    "Key": "Content-Type",
    "Value": "application/json"
}
```

* Sample Response

```
{

	"url": "new_url",

	"caption": "new_caption"

}
```

#### Delete a Post

* Method - DELETE

* URL - https://xmeme-priyal.000webhostapp.com/delete.php?id=2

* HEADER

```
{
    "Key": "Content-Type",
    "Value": "application/json"
}
```

* Sample Response

```
{
    "status": true,
    "message": "Post Deleted"
}
```


#### View on Docgen

* [URL](http://xmeme-priyal.000webhostapp.com/swagger-ui.html)
* LOCAL_URL - http://localhost/doc.html

![Task screenshot1](screenshot.png)
![Task screenshot2](screenshot2.png)

### Author

Priyal Dubey
[Priyal Dubey](https://xmeme-priyal.000webhostapp.com/)

### Version

1.0.0
