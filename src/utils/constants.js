export const urlApi = process.env.REACT_APP_YOUTUBE_API_BASE_URL;
export const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
export const urlYT = process.env.REACT_APP_YOUTUBE_API_URL;
export const resultsNumber = '50';
export const urlBase = `${urlApi}/search?part=snippet&maxResults=${resultsNumber}&key=${apiKey}`;
	
export const typesList = ["channel", "playlist", "video"];

export const response = {
    "kind": "youtube#searchListResponse",
    "etag": "xj-kMxYublAAQVawtnWvgGJHB4Q",
    "nextPageToken": "CDIQAA",
    "regionCode": "RS",
    "pageInfo": {
      "totalResults": 28643,
      "resultsPerPage": 50
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "AXOR0JWCLyPLylS-7XifWX4mLrw",
        "id": {
          "kind": "youtube#channel",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA"
        },
        "snippet": {
          "publishedAt": "2009-10-30T21:33:14Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Traversy Media",
          "description": "Traversy Media features the best online web development and programming tutorials for all of the latest web technologies from ...",
          "thumbnails": {
            "default": {
              "url": "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s88-c-k-c0xffffffff-no-rj-mo"
            },
            "medium": {
              "url": "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s240-c-k-c0xffffffff-no-rj-mo"
            },
            "high": {
              "url": "https://yt3.ggpht.com/ytc/AMLnZu-fB-c8gczS81r-VBWgzndcSZgd1zGA2QcYfACHMg=s800-c-k-c0xffffffff-no-rj-mo"
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "upcoming",
          "publishTime": "2009-10-30T21:33:14Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "SQOeI2QezXu5gHWr9uilu-ukexw",
        "id": {
          "kind": "youtube#video",
          "videoId": "XW1aGkzyjQg"
        },
        "snippet": {
          "publishedAt": "2022-03-08T14:32:32Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Build Strength From Struggle | My Story",
          "description": "This is my own personal story that I like to share with the world to show that it's possible to get to places in your life that you ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/XW1aGkzyjQg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/XW1aGkzyjQg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/XW1aGkzyjQg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-03-08T14:32:32Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Jqd098n-10eo5dL6Gw4FQFOkaro",
        "id": {
          "kind": "youtube#video",
          "videoId": "0wHyoBPc6zs"
        },
        "snippet": {
          "publishedAt": "2017-03-10T14:54:49Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Tips On Learning How To Code",
          "description": "In this video we will discuss some helpful tips on learning how to code. We will describe some strategies that programmers and ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0wHyoBPc6zs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0wHyoBPc6zs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0wHyoBPc6zs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-03-10T14:54:49Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "P-6Q36iiOQhbvJkNX4sId3D6vLQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "H_pBvUFPceA"
        },
        "snippet": {
          "publishedAt": "2022-02-01T14:30:06Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "6 Of My Personal Tips When Learning To Code",
          "description": "Here are some of the things that have always helped me learn to code. Written Version: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/H_pBvUFPceA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/H_pBvUFPceA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/H_pBvUFPceA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-02-01T14:30:06Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "QTMm7-CPorRKKWYGU2pggvKtNZY",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU"
        },
        "snippet": {
          "publishedAt": "2017-06-05T10:54:55Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "HTML &amp; CSS",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UB1O30fR-EE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UB1O30fR-EE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UB1O30fR-EE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-06-05T10:54:55Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "dZ15Z3XmGGZ_F7uEbYCaAyj6Gjc",
        "id": {
          "kind": "youtube#video",
          "videoId": "hdI2bqOjy3c"
        },
        "snippet": {
          "publishedAt": "2019-03-13T15:46:32Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "JavaScript Crash Course For Beginners",
          "description": "In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hdI2bqOjy3c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hdI2bqOjy3c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-03-13T15:46:32Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "No6xWXeot5mH0Os9jNhG1x6LL4Q",
        "id": {
          "kind": "youtube#video",
          "videoId": "w7ejDZ8SWv8"
        },
        "snippet": {
          "publishedAt": "2021-01-18T19:01:11Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "React JS Crash Course",
          "description": "Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-01-18T19:01:11Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "b4_odpsmUb9Qlb7YiSpzi-00yCQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "0xMQfnTU6oo"
        },
        "snippet": {
          "publishedAt": "2022-03-02T14:00:00Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "CSS Grid Crash Course 2022",
          "description": "This crash course will teach you all of the fundamentals of CSS Grid ⭐ Sponsor: InMotion Hosting! https://bit.ly/35rBjYU Code: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0xMQfnTU6oo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0xMQfnTU6oo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0xMQfnTU6oo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-03-02T14:00:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "zsWWHFNDujiC7yCNRmSmTqBFnGc",
        "id": {
          "kind": "youtube#video",
          "videoId": "UB1O30fR-EE"
        },
        "snippet": {
          "publishedAt": "2017-07-17T14:38:43Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "HTML Crash Course For Absolute Beginners",
          "description": "In this crash course I will cram as much about HTML that I can. This is meant for absolute beginners. If you are interested in ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UB1O30fR-EE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UB1O30fR-EE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UB1O30fR-EE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-07-17T14:38:43Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "4HdL9QJQ9YOPMx4uMOUmHn1KsgA",
        "id": {
          "kind": "youtube#video",
          "videoId": "-0exw-9YJBo"
        },
        "snippet": {
          "publishedAt": "2022-02-07T14:00:00Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Learn The MERN Stack - Express &amp; MongoDB Rest API",
          "description": "In this video, we will create a RESTful API from scratch with Node.js, Express, MongoDB and Mongoose. Code: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-0exw-9YJBo/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-0exw-9YJBo/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-0exw-9YJBo/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-02-07T14:00:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Po8eG2lnVm-nXIES3vnS6eoZR1E",
        "id": {
          "kind": "youtube#video",
          "videoId": "S67gyqnYHmI"
        },
        "snippet": {
          "publishedAt": "2022-11-09T14:47:31Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Intro To Web Scraping With Puppeteer",
          "description": "In this video, we will look at Puppeteer to scrape data from a web page. Code: https://github.com/bradtraversy/courses-scrape ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/S67gyqnYHmI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/S67gyqnYHmI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/S67gyqnYHmI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-11-09T14:47:31Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "elGTYPdRaQC5alS7NO0DkXjCAq8",
        "id": {
          "kind": "youtube#video",
          "videoId": "3YW65K6LcIA"
        },
        "snippet": {
          "publishedAt": "2022-01-18T14:00:01Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Flexbox Crash Course 2022",
          "description": "Flexbox is used for space distribution, positioning and alignment in CSS. Project Code: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3YW65K6LcIA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3YW65K6LcIA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3YW65K6LcIA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-01-18T14:00:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "NB_JVNDxRJzxpLemnJaD5e6UicA",
        "id": {
          "kind": "youtube#video",
          "videoId": "p0bGHP-PXD4"
        },
        "snippet": {
          "publishedAt": "2020-10-23T13:44:49Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Build a Responsive Website | HTML, CSS Grid, Flexbox &amp; More",
          "description": "In this project we will build a custom website using HTML5 and modern CSS techniques such as CSS Grid, Flexbox, psuedo ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/p0bGHP-PXD4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/p0bGHP-PXD4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/p0bGHP-PXD4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2020-10-23T13:44:49Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "fJrdOZqiiLDNr9nKBaCZPa-XWwo",
        "id": {
          "kind": "youtube#video",
          "videoId": "askbjJx-BQg"
        },
        "snippet": {
          "publishedAt": "2018-05-08T12:55:52Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Learning &amp; Memorizing In Programming",
          "description": "In this video I will briefly talk about learning strategies and how you should memorize coding concepts not necessarily the actual ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/askbjJx-BQg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/askbjJx-BQg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/askbjJx-BQg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-05-08T12:55:52Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "DrkQ3jgee6rDiaZCQ_zUrw8gJCk",
        "id": {
          "kind": "youtube#video",
          "videoId": "yfoY53QXEnI"
        },
        "snippet": {
          "publishedAt": "2017-07-19T15:01:36Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "CSS Crash Course For Absolute Beginners",
          "description": "In this video I will cram as much as possible about CSS. We will be looking at styles, selectors, declarations, etc. We will build a ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/yfoY53QXEnI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/yfoY53QXEnI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/yfoY53QXEnI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-07-19T15:01:36Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "dXWAdu70nME7xlL7qNFnLuiec18",
        "id": {
          "kind": "youtube#video",
          "videoId": "BcLNfwF04Kw"
        },
        "snippet": {
          "publishedAt": "2022-06-06T13:00:10Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "GraphQL Crash Course With Full Stack MERN Project",
          "description": "Join Masterschool & pay nothing until you're hired! https://goto.masterschool.com/brad2022 In this video, we will build a full-stack ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/BcLNfwF04Kw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/BcLNfwF04Kw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/BcLNfwF04Kw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-06-06T13:00:10Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "hkvtrFK-YxvMX7fAFuS_dQ2c4gY",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLillGF-Rfqbap2IB6ZS4BBBcYPagAjpjn"
        },
        "snippet": {
          "publishedAt": "2017-02-26T14:29:42Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "PHP Front To Back",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/oJbfyzaA2QA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/oJbfyzaA2QA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/oJbfyzaA2QA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-02-26T14:29:42Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "OZzkvBk3OZoYYBoxMvxSW54-QvY",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX"
        },
        "snippet": {
          "publishedAt": "2017-07-25T10:22:18Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Vanilla JavaScript",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/hdI2bqOjy3c/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/hdI2bqOjy3c/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/hdI2bqOjy3c/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-07-25T10:22:18Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "lynJxRRZuwMmIgEjNNdqedpuPao",
        "id": {
          "kind": "youtube#video",
          "videoId": "JJmcL1N2KQs"
        },
        "snippet": {
          "publishedAt": "2018-11-28T22:28:31Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Python Crash Course For Beginners",
          "description": "In this crash course we will be going over Python programming basics like variables, data types and structures, functions, loops, ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JJmcL1N2KQs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JJmcL1N2KQs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JJmcL1N2KQs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-11-28T22:28:31Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "W6owSoCx9IlRastu41Kl1-9-eU4",
        "id": {
          "kind": "youtube#video",
          "videoId": "fBNz5xF-Kx4"
        },
        "snippet": {
          "publishedAt": "2019-02-06T20:10:58Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Node.js Crash Course",
          "description": "In this crash course we will explore Node.js fundamentals including modules such as path, url, fs, events and we will create an ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/fBNz5xF-Kx4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/fBNz5xF-Kx4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/fBNz5xF-Kx4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-02-06T20:10:58Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "WSaKwRdGZCq2ihGnR_LcFVaxF-o",
        "id": {
          "kind": "youtube#video",
          "videoId": "EqzUcMzfV1w"
        },
        "snippet": {
          "publishedAt": "2022-01-10T14:00:07Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Web Development In 2022 - A Practical Guide",
          "description": "This is my annual guide to take you from start to finish when it comes to the web development technologies that are available for ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/EqzUcMzfV1w/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/EqzUcMzfV1w/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/EqzUcMzfV1w/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-01-10T14:00:07Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "MBKt8BWOICOgJYCu4nEsAuVyFyM",
        "id": {
          "kind": "youtube#video",
          "videoId": "enopDSs3DRw"
        },
        "snippet": {
          "publishedAt": "2022-02-10T14:00:13Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Learn The MERN Stack - JWT Authentication",
          "description": "In this video, we will secure our API by adding JWT authentication Code: https://github.com/bradtraversy/mern-tutorial Full ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/enopDSs3DRw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/enopDSs3DRw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/enopDSs3DRw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-02-10T14:00:13Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "7gWaPIAQYT1zJQ-_myyAeaS4zVE",
        "id": {
          "kind": "youtube#video",
          "videoId": "pqncRXFsbG4"
        },
        "snippet": {
          "publishedAt": "2021-07-19T12:00:18Z",
          "channelId": "UCzUmupLeEtkapFfFDfvjCng",
          "title": "Traversy Media - [ From Drug Addict To Millionaire Software Developer]",
          "description": "Brad Traversy AKA Traversy Media is a Software Engineer without A Degree. His rise to success is nothing but impressive, from ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/pqncRXFsbG4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/pqncRXFsbG4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/pqncRXFsbG4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "The Under Dog",
          "liveBroadcastContent": "none",
          "publishTime": "2021-07-19T12:00:18Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "NwWK2Qt35tJJYj1lwOAklhnQLHU",
        "id": {
          "kind": "youtube#video",
          "videoId": "mvfsC66xqj0"
        },
        "snippet": {
          "publishedAt": "2022-02-14T13:53:35Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Learn The MERN Stack - Frontend Authentication | Redux Toolkit",
          "description": "In this video, we will create our frontend and add authentication using Redux Toolkit to manage our global state. Code: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mvfsC66xqj0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mvfsC66xqj0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mvfsC66xqj0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-02-14T13:53:35Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "S4JJ5whw06y5kgCxrFcy19yHuqM",
        "id": {
          "kind": "youtube#video",
          "videoId": "BUCiSSyIGGU"
        },
        "snippet": {
          "publishedAt": "2022-03-30T13:00:05Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "PHP For Beginners | 3+ Hour Crash Course",
          "description": "Your first step in learning PHP. We will go over all of the fundamentals and create a small PHP/MySQL project. ⭐ Sponsor: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/BUCiSSyIGGU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/BUCiSSyIGGU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/BUCiSSyIGGU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-03-30T13:00:05Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ZjWzv7dtUOsKusFuufYvPpAFSAE",
        "id": {
          "kind": "youtube#video",
          "videoId": "lRogMYe7ZLg"
        },
        "snippet": {
          "publishedAt": "2021-06-01T15:29:28Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "My First Freelance Gig Was a Disaster",
          "description": "A little story about my first paid project as a freelancer back in 2008 - 2009 Find a list of my latest Udemy courses at: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lRogMYe7ZLg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lRogMYe7ZLg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lRogMYe7ZLg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-06-01T15:29:28Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "kzs8I1g2jfNfBefmhR3_ypUo3Ag",
        "id": {
          "kind": "youtube#video",
          "videoId": "SBvmnHTQIPY"
        },
        "snippet": {
          "publishedAt": "2020-06-19T13:54:30Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Node.js App From Scratch | Express, MongoDB &amp; Google OAuth",
          "description": "This is a full application build of the StoryBooks app which uses Node.js, Express, MongoDB, Passport with a Google OAuth ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/SBvmnHTQIPY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/SBvmnHTQIPY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/SBvmnHTQIPY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2020-06-19T13:54:30Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "NxO3e9JOuJf4VifjHBrjxuVcO14",
        "id": {
          "kind": "youtube#video",
          "videoId": "SWYqp7iY_Tc"
        },
        "snippet": {
          "publishedAt": "2017-02-05T20:03:20Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Git &amp; GitHub Crash Course For Beginners",
          "description": "In this Git tutorial we will talk about what exactly Git is and we will look at and work with all of the basic and most important ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/SWYqp7iY_Tc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/SWYqp7iY_Tc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/SWYqp7iY_Tc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-02-05T20:03:20Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "jQu5LYbVQ8nNwE7ceIqG3iuteV4",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLillGF-RfqbYeckUaD1z6nviTp31GLTH8"
        },
        "snippet": {
          "publishedAt": "2017-02-01T17:37:38Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Programming &amp; Web Development Crash Courses",
          "description": "Crash courses on anything to do with programming/web development.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UB1O30fR-EE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UB1O30fR-EE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UB1O30fR-EE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-02-01T17:37:38Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "SmvjQYvcLkog-HetCTVkiX61bU0",
        "id": {
          "kind": "youtube#video",
          "videoId": "MYyJ4PuL4pY"
        },
        "snippet": {
          "publishedAt": "2022-04-26T13:00:19Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Laravel From Scratch 2022 | 4+ Hour Course",
          "description": "Learn the Laravel PHP framework from scratch by building a job listings application with Laravel 9 and MySQL. ⭐ Sponsor: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/MYyJ4PuL4pY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/MYyJ4PuL4pY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/MYyJ4PuL4pY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-04-26T13:00:19Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "QIWK0PE9F4gn9U6vaHxdxa81gmM",
        "id": {
          "kind": "youtube#video",
          "videoId": "BCg4U1FzODs"
        },
        "snippet": {
          "publishedAt": "2021-08-18T13:13:38Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "TypeScript Crash Course",
          "description": "Learn the basics of TypeScript in this beginner-friendly crash course Visit Our Sponsor: Stream https://getstream.io/traversy ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/BCg4U1FzODs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/BCg4U1FzODs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/BCg4U1FzODs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-08-18T13:13:38Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "duhIWdl8OIOBwPRSvAZ8XQsO3K8",
        "id": {
          "kind": "youtube#video",
          "videoId": "PEDXYcQTwd0"
        },
        "snippet": {
          "publishedAt": "2021-03-23T13:38:52Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Welcome To My World | 2021 Home Office Tour",
          "description": "A little glimpse into where I work & play DESK & COMPUTERS: Uplift Desks - https://www.upliftdesk.com/ Asus PC ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PEDXYcQTwd0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PEDXYcQTwd0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PEDXYcQTwd0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-03-23T13:38:52Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "bhMlCWV86ZogJ_SyFqT_OQuOIgM",
        "id": {
          "kind": "youtube#video",
          "videoId": "mTz0GXj8NN0"
        },
        "snippet": {
          "publishedAt": "2021-01-26T21:03:52Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Next.js Crash Course",
          "description": "In this video we will look at the fundamentals of Next.js such as SSR & SSG, routing, data fetching, apis and more Code: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/mTz0GXj8NN0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/mTz0GXj8NN0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/mTz0GXj8NN0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-01-26T21:03:52Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "XqWUUlTKfLPv08dLXoOvrDycpzk",
        "id": {
          "kind": "youtube#video",
          "videoId": "4sosXZsdy-s"
        },
        "snippet": {
          "publishedAt": "2021-06-09T13:28:51Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Bootstrap 5 Crash Course | Website Build &amp; Deploy",
          "description": "Beginner-friendly website project using Bootstrap 5 Hostinger: https://www.hostinger.com/traversymedia - Use the code ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/4sosXZsdy-s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/4sosXZsdy-s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/4sosXZsdy-s/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-06-09T13:28:51Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "pqGmCaeEKRKdIeq1nJ3owgIujlQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "x_n2FGNsm0o"
        },
        "snippet": {
          "publishedAt": "2021-11-23T13:59:34Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Build a Starbucks Landing Page Clone",
          "description": "In this video, we will build the homepage of Starbucks.com from scratch with HTML, CSS and a bit of JavaScript Code: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/x_n2FGNsm0o/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/x_n2FGNsm0o/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/x_n2FGNsm0o/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-11-23T13:59:34Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "FKrri_aQJDO2oWOrp5npk981R_A",
        "id": {
          "kind": "youtube#video",
          "videoId": "wryPX7KSwSc"
        },
        "snippet": {
          "publishedAt": "2022-08-09T13:00:01Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "SpaceX Website Clone - HTML, CSS &amp; JavaScript",
          "description": "In this video, we will re-create parts of the SpaceX website including the homepage, menus, and some inner pages. We will create ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/wryPX7KSwSc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/wryPX7KSwSc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/wryPX7KSwSc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-08-09T13:00:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "nhtlFxRCE5ipbCEhsyhfHerENos",
        "id": {
          "kind": "youtube#video",
          "videoId": "JkeyKeK3V24"
        },
        "snippet": {
          "publishedAt": "2021-08-05T15:52:41Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Build 5 Projects With HTML, CSS &amp; JavaScript",
          "description": "Sharpen your JavaScript, CSS, DOM skills by building 5 projects in one video Full Course ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JkeyKeK3V24/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JkeyKeK3V24/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JkeyKeK3V24/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-08-05T15:52:41Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "quC_EQ6KKaCt_Gsrp1hb5GZlSbQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "Wm6CUkswsNw"
        },
        "snippet": {
          "publishedAt": "2016-12-25T16:11:06Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Build An HTML5 Website With A Responsive Layout",
          "description": "In this video we will build a clean coded responsive mobile friendly HTML5 website for a fictional web design company. We will go ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Wm6CUkswsNw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Wm6CUkswsNw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Wm6CUkswsNw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2016-12-25T16:11:06Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Pk1fAoAZwzI3YN0mejwKBJ3_mU8",
        "id": {
          "kind": "youtube#video",
          "videoId": "lvYnfMOUOJY"
        },
        "snippet": {
          "publishedAt": "2021-03-16T13:58:10Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Creative Agency Website From Scratch | HTML &amp; CSS",
          "description": "We will build a responsive website using HTML/CSS and look at things like positioning, flexbox, CSS Grid basics, and media ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/lvYnfMOUOJY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/lvYnfMOUOJY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/lvYnfMOUOJY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-03-16T13:58:10Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "pGNYTNsKwywyCmOHGkOAkKR1iSw",
        "id": {
          "kind": "youtube#video",
          "videoId": "ML743nrkMHw"
        },
        "snippet": {
          "publishedAt": "2022-10-03T13:18:54Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Create a Desktop App With JavaScript &amp; Electron",
          "description": "In this video, we will create a cross-platform desktop app to resize image dimensions, using JavaScript and Electron. Code: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ML743nrkMHw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ML743nrkMHw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ML743nrkMHw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-10-03T13:18:54Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Jrz6kGnUcSHPJJ6yJIPFQZk_KFE",
        "id": {
          "kind": "youtube#video",
          "videoId": "zA9krklwADI"
        },
        "snippet": {
          "publishedAt": "2018-03-07T19:03:57Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "My Struggles &amp; Success - Up Close &amp; Personal With Brad",
          "description": "No Coding today....This is a very personal video about my life struggles and success. I wanted to share it because I think it can ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/zA9krklwADI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/zA9krklwADI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/zA9krklwADI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-03-07T19:03:57Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "al5gP7OR8JGreUEzzYuNCpguDN8",
        "id": {
          "kind": "youtube#video",
          "videoId": "PoRJizFvM7s"
        },
        "snippet": {
          "publishedAt": "2018-06-22T13:13:12Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Async JS Crash Course - Callbacks, Promises, Async Await",
          "description": "In this crash course we will look at asynchronous JavaScript and cover callbacks, promises including promise.all as well as the ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/PoRJizFvM7s/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/PoRJizFvM7s/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/PoRJizFvM7s/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-06-22T13:13:12Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "lGRv4beHKIS5j1Xq2G9g9-yUsaU",
        "id": {
          "kind": "youtube#video",
          "videoId": "t3w7OCDbmnc"
        },
        "snippet": {
          "publishedAt": "2022-07-19T13:30:21Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Improve The Developer Hiring Process",
          "description": "In this video, I will propose an alternative to the current hiring process that a lot of tech companies use to hire developers.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/t3w7OCDbmnc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/t3w7OCDbmnc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/t3w7OCDbmnc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-07-19T13:30:21Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "cyqADQfmg1yc_nctHfJb5z5EeL4",
        "id": {
          "kind": "youtube#video",
          "videoId": "dFgzHOX84xQ"
        },
        "snippet": {
          "publishedAt": "2022-04-05T13:00:20Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Tailwind Crash Course | Project From Scratch",
          "description": "In this video, we will set up Tailwind CLI and create a landing page from start to finish, going over many of the common utility ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/dFgzHOX84xQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/dFgzHOX84xQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/dFgzHOX84xQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-04-05T13:00:20Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "0Gka_drxlrsGzhgOAz7EmAgtfC8",
        "id": {
          "kind": "youtube#video",
          "videoId": "nqoM4dYHiyc"
        },
        "snippet": {
          "publishedAt": "2018-10-23T16:10:57Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Wordpress Website Build For Beginners",
          "description": "In this tutorial we will build a simple Wordpress website for a financial company called SaveLight. We will use the Elementor ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nqoM4dYHiyc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nqoM4dYHiyc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nqoM4dYHiyc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-10-23T16:10:57Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "2L9EG5WBGryegN4xGomGeyjX1y0",
        "id": {
          "kind": "youtube#video",
          "videoId": "UXjMo25Nnvc"
        },
        "snippet": {
          "publishedAt": "2022-02-17T13:00:25Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Learn The MERN Stack - Redux Goals &amp; Deply",
          "description": "In this video, we will add the goals functionality and add goals to our Redux state. Code: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UXjMo25Nnvc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UXjMo25Nnvc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UXjMo25Nnvc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-02-17T13:00:25Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "6AYhaW1UWBk9ZaSx-n_VrR_qN18",
        "id": {
          "kind": "youtube#video",
          "videoId": "vxqBm6_0vyk"
        },
        "snippet": {
          "publishedAt": "2022-05-30T13:00:28Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Python In The Browser! PyScript First Look",
          "description": "In this video, we will look at the brand new PyScript framework, which uses Web Assembly and Pyodide to write Python and use ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/vxqBm6_0vyk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/vxqBm6_0vyk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/vxqBm6_0vyk/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-05-30T13:00:28Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "40OYk0b3Jl5NkKm78AD7-fpDdlk",
        "id": {
          "kind": "youtube#video",
          "videoId": "b_4ZchFAYRs"
        },
        "snippet": {
          "publishedAt": "2022-08-25T13:07:07Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Do You Need To Learn Data Structures &amp; Algorithms As A Developer?",
          "description": "A short discussion on learning data structures and algorithms as a developer. James Quick YouTube Channel: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/b_4ZchFAYRs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/b_4ZchFAYRs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/b_4ZchFAYRs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-08-25T13:07:07Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "up9d68UP0mu9cNyrcm1MH6wgU-k",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLillGF-RfqbbJYRaNqeUzAb7QY-IqBKRx"
        },
        "snippet": {
          "publishedAt": "2019-12-23T12:57:38Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Python Videos",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/JJmcL1N2KQs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/JJmcL1N2KQs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/JJmcL1N2KQs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-12-23T12:57:38Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "nuYJLi5hGYtZLH9FsD-jdMJcQgc",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLillGF-RfqbYhQsN5WMXy6VsDMKGadrJ-"
        },
        "snippet": {
          "publishedAt": "2017-06-03T23:13:02Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Laravel From Scratch",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/EU7PRmCpx-0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/EU7PRmCpx-0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/EU7PRmCpx-0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-06-03T23:13:02Z"
        }
      }
    ]
  };

export const response2 = {
    "kind": "youtube#searchListResponse",
    "etag": "O3rwslvrOfWRdCehnNn7miwlu2I",
    "nextPageToken": "CGQQAA",
    "prevPageToken": "CDIQAQ",
    "regionCode": "RS",
    "pageInfo": {
      "totalResults": 27106,
      "resultsPerPage": 50
    },
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "NSxBd-Ajx8vYIeyKe-KHoXU2RB8",
        "id": {
          "kind": "youtube#video",
          "videoId": "L72fhGm1tfE"
        },
        "snippet": {
          "publishedAt": "2019-02-22T15:05:16Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Express JS Crash Course",
          "description": "In this crash course we will dive into the Express JS framework for Node.js. I recommend first watching my Node.js crash course.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/L72fhGm1tfE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/L72fhGm1tfE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/L72fhGm1tfE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-02-22T15:05:16Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "40OYk0b3Jl5NkKm78AD7-fpDdlk",
        "id": {
          "kind": "youtube#video",
          "videoId": "b_4ZchFAYRs"
        },
        "snippet": {
          "publishedAt": "2022-08-25T13:07:07Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Do You Need To Learn Data Structures &amp; Algorithms As A Developer?",
          "description": "A short discussion on learning data structures and algorithms as a developer. James Quick YouTube Channel: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/b_4ZchFAYRs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/b_4ZchFAYRs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/b_4ZchFAYRs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-08-25T13:07:07Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "RobHkXtP_WhcP3PpKf0u_zAeRSM",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb"
        },
        "snippet": {
          "publishedAt": "2020-06-30T20:33:50Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "React Projects",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/XuFDcZABiDQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/XuFDcZABiDQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/XuFDcZABiDQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2020-06-30T20:33:50Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "WQr5VjEFSCHyVKIrcJUo5uI_PUA",
        "id": {
          "kind": "youtube#video",
          "videoId": "7aRjGIhwyQM"
        },
        "snippet": {
          "publishedAt": "2022-06-20T13:00:37Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Linux Server Setup &amp; MERN Deployment",
          "description": "In this video, we will set up a Linux Ubuntu server, set up SSH keys, and deploy a MERN app by setting up PM2 and an Nginx ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/7aRjGIhwyQM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/7aRjGIhwyQM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/7aRjGIhwyQM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-06-20T13:00:37Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "YDYrL_K68C9YKLQFz1WdFFu0Nrg",
        "id": {
          "kind": "youtube#video",
          "videoId": "Cm3U-NgJb9I"
        },
        "snippet": {
          "publishedAt": "2019-06-17T18:22:17Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Before Learning a JavaScript Framework...",
          "description": "In this video I will give my advice about learning a JavaScript front-end framework like React or Vue. Modern JS From The ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Cm3U-NgJb9I/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Cm3U-NgJb9I/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Cm3U-NgJb9I/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-06-17T18:22:17Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "QbNDt-M-KYxbmoso5OotLhJ1KkA",
        "id": {
          "kind": "youtube#video",
          "videoId": "Hf4MJH0jDb4"
        },
        "snippet": {
          "publishedAt": "2020-02-04T12:17:28Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "React Native Crash Course",
          "description": "In this course we will talk about what React Native is and get setup, look at some of the built in components and build a small ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Hf4MJH0jDb4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Hf4MJH0jDb4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Hf4MJH0jDb4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2020-02-04T12:17:28Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "B9jjXD6off6MDVzyWTzyhwlI2CI",
        "id": {
          "kind": "youtube#video",
          "videoId": "LwbhBz9jx-M"
        },
        "snippet": {
          "publishedAt": "2019-06-03T13:04:11Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Stop Comparing Yourself To Other Developers",
          "description": "In this video we will talk a little bit about Imposter Syndrome and comparing yourself to other developers. Become a Patron: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/LwbhBz9jx-M/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/LwbhBz9jx-M/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/LwbhBz9jx-M/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-06-03T13:04:11Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "kH0rxpyUJMkFkapsX5KYG5gVgsc",
        "id": {
          "kind": "youtube#video",
          "videoId": "2eebptXfEvw"
        },
        "snippet": {
          "publishedAt": "2020-12-11T17:24:16Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "PHP For Absolute Beginners | 6.5 Hour Course",
          "description": "This course is for absolute beginners and will give you a great kickstart to learning PHP. We'll first talk about what PHP is and why ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/2eebptXfEvw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/2eebptXfEvw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/2eebptXfEvw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2020-12-11T17:24:16Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ufg3pUcz4BuPN6IKJGBSQmqs8Tg",
        "id": {
          "kind": "youtube#video",
          "videoId": "3dHNOWTI7H8"
        },
        "snippet": {
          "publishedAt": "2021-05-06T15:40:03Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Angular Crash Course",
          "description": "Learn the fundamentals of Angular in this project-based crash course Video Sponsor: https://www.hostinger.com/traversymedia ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3dHNOWTI7H8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3dHNOWTI7H8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3dHNOWTI7H8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-05-06T15:40:03Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Ob7-uuoHsyff-b7feVW0fnvNAXg",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLillGF-RfqbaEmlPcX5e_ejaK7Y5MydkW"
        },
        "snippet": {
          "publishedAt": "2016-08-17T13:23:04Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Node.js &amp; PostgreSQL Recipe App",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/AFiqctkoVJ4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/AFiqctkoVJ4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/AFiqctkoVJ4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2016-08-17T13:23:04Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "pGCOqq3dOHHhLTTU7RIHWf9EMaA",
        "id": {
          "kind": "youtube#video",
          "videoId": "6Ciml5ZlXJU"
        },
        "snippet": {
          "publishedAt": "2019-02-12T13:57:03Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "My Opinion On Pre-Made Templates",
          "description": "In this video I want to share my opinion on web developers using pre-made templates, wether it is an HTML/CSS theme, ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/6Ciml5ZlXJU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/6Ciml5ZlXJU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/6Ciml5ZlXJU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-02-12T13:57:03Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ds9aqEtZKdUbe50YJo4vSpLiI5I",
        "id": {
          "kind": "youtube#video",
          "videoId": "0ik6X4DJKCc"
        },
        "snippet": {
          "publishedAt": "2017-09-12T14:38:01Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "JavaScript DOM Crash Course - Part 1",
          "description": "This crash course focuses on the DOM WITHOUT JQUERY. In this part we will talk about what the JavaScript DOM (Document ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/0ik6X4DJKCc/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/0ik6X4DJKCc/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/0ik6X4DJKCc/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-09-12T14:38:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "l3HV3pQ78-HP_IKxgcwYpBxe5NE",
        "id": {
          "kind": "youtube#video",
          "videoId": "Smw6SwUakJs"
        },
        "snippet": {
          "publishedAt": "2022-01-11T13:02:43Z",
          "channelId": "UCtsojFV90CDh7uABAssuITw",
          "title": "Response To Brad Traversy Web Development Roadmap of 2022",
          "description": "Yesterday the popular YouTuber, Brad Traversy, published his annual 'Web Development Roadmap' on YouTube. At the time of ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Smw6SwUakJs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Smw6SwUakJs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Smw6SwUakJs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "David's Insider Club",
          "liveBroadcastContent": "none",
          "publishTime": "2022-01-11T13:02:43Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "qh49rgutTzq1yYfl_6gmmslQxuc",
        "id": {
          "kind": "youtube#video",
          "videoId": "ou6x2qcLOLI"
        },
        "snippet": {
          "publishedAt": "2022-10-11T14:00:33Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Clean Code vs Preference",
          "description": "Let's talk about the phrase \"clean code\" and how it can be pretty subjective and a lot of it comes down to preference. ⭐ Check out ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ou6x2qcLOLI/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ou6x2qcLOLI/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ou6x2qcLOLI/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-10-11T14:00:33Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "K4v5RUEh99A_vxSW-DBXdm_K7TE",
        "id": {
          "kind": "youtube#video",
          "videoId": "qNiUlml9MDk"
        },
        "snippet": {
          "publishedAt": "2022-08-16T13:17:27Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Create A Simple JavaScript App to Generate QR Codes",
          "description": "Let's create a simple QR Code generator app with JavaScript, QRcode.js and Tailwind CSS. Github Repo ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qNiUlml9MDk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qNiUlml9MDk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qNiUlml9MDk/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-08-16T13:17:27Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "gPrBCNxsyCfwAthEPhSKdQY3Xx8",
        "id": {
          "kind": "youtube#video",
          "videoId": "gYzHS-n2gqU"
        },
        "snippet": {
          "publishedAt": "2018-07-25T20:25:20Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Responsive Portfolio Website [1] - Intro &amp; Sass Workflow Setup",
          "description": "In this series we will build a fully responsive portfolio website using modern technologies such as... HTML5 CSS3 ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gYzHS-n2gqU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gYzHS-n2gqU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gYzHS-n2gqU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-07-25T20:25:20Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "fW6rt_QSGWDucLdbMWuuAbuIZOE",
        "id": {
          "kind": "youtube#video",
          "videoId": "-56x56UppqQ"
        },
        "snippet": {
          "publishedAt": "2019-07-16T12:52:55Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "MongoDB Crash Course",
          "description": "In this video we will go over MongoDB, which is a popular NoSQL database that is commonly used with Node.js and other ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-56x56UppqQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-56x56UppqQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-56x56UppqQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-07-16T12:52:55Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "8Wrsf9Ld4Es477HPjgQTsyGn6Sg",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLillGF-RfqbYoGoCjKoMOkVznV6aSXKzU"
        },
        "snippet": {
          "publishedAt": "2018-07-25T20:30:20Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Responsive Portfolio Website Project",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/gYzHS-n2gqU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/gYzHS-n2gqU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/gYzHS-n2gqU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-07-25T20:30:20Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "QkerXO3KCyHa4iRYYb5v1VFA0Yc",
        "id": {
          "kind": "youtube#video",
          "videoId": "rZg2N4gFUc0"
        },
        "snippet": {
          "publishedAt": "2018-08-01T10:30:31Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "The Importance Of Passion &amp; Hard Work",
          "description": "In this video I'm going to touch on how important passion and hard work is to being successful. A break from coding for a little ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rZg2N4gFUc0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rZg2N4gFUc0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rZg2N4gFUc0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-08-01T10:30:31Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "lmePlDdmgNPaxQgrz1MNMZjaK5o",
        "id": {
          "kind": "youtube#video",
          "videoId": "P7t13SGytRk"
        },
        "snippet": {
          "publishedAt": "2019-05-21T13:11:13Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Build a Netflix Landing Page Clone with HTML, CSS &amp; JS",
          "description": "In this video, we will re-create the Netflix landing page using HTML, CSS and a bit of JavaScript for the tabs. We will use modern ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/P7t13SGytRk/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/P7t13SGytRk/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/P7t13SGytRk/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-05-21T13:11:13Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "5GKnnuGbWbIIpty3phhewbH9ICk",
        "id": {
          "kind": "youtube#video",
          "videoId": "-NhGhYsK0H4"
        },
        "snippet": {
          "publishedAt": "2020-06-10T12:00:01Z",
          "channelId": "UCshZ3rdoCLjDYuTR_RBubzw",
          "title": "Should You Buy Modern JavaScript From The Beginning By Brad Traversy ? A Udemy Course Review in 2020",
          "description": "Click here to enroll in the Modern JavaScript Course - https://bit.ly/2UtQiZR In this I review Modern JavaScript From The Beginning ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/-NhGhYsK0H4/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/-NhGhYsK0H4/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/-NhGhYsK0H4/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Program With Erik",
          "liveBroadcastContent": "none",
          "publishTime": "2020-06-10T12:00:01Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ebRm7av7UoLc0AuEp6EteS1N7wQ",
        "id": {
          "kind": "youtube#video",
          "videoId": "1gDhl4leEzA"
        },
        "snippet": {
          "publishedAt": "2019-12-11T18:50:20Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Flutter Crash Course",
          "description": "In this crash course we will look at Flutter for building native mobile apps. We will look at what Flutter is, how to get setup, built in ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/1gDhl4leEzA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/1gDhl4leEzA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/1gDhl4leEzA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-12-11T18:50:20Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "IQ24GBS2jt4GP8Qsa3H4VKuYeik",
        "id": {
          "kind": "youtube#video",
          "videoId": "UBOj6rqRUME"
        },
        "snippet": {
          "publishedAt": "2019-07-24T16:02:07Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Tailwind CSS Crash Course",
          "description": "Updated 2022 Crash Course - https://youtu.be/dFgzHOX84xQ In this video we will look at the TailwindCSS utility framework ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/UBOj6rqRUME/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/UBOj6rqRUME/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/UBOj6rqRUME/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-07-24T16:02:07Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "vYGeGVb0KmL1yOqDM3Jez5euVAk",
        "id": {
          "kind": "youtube#video",
          "videoId": "nJc3YFgujdU"
        },
        "snippet": {
          "publishedAt": "2019-08-23T15:12:25Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Web Development &amp; Making Money - My Story",
          "description": "Hopefully my story can give you some ideas and/or inspiration to make money from software development. My story is just one of ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/nJc3YFgujdU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/nJc3YFgujdU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/nJc3YFgujdU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-08-23T15:12:25Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "jiEYZdmw3HBoIFO16RYT1bPvbmk",
        "id": {
          "kind": "youtube#video",
          "videoId": "sBws8MSXN7A"
        },
        "snippet": {
          "publishedAt": "2019-01-03T21:20:36Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "React JS Crash Course (2019)",
          "description": "In this crash course you will learn what React JS is and the fundamentals such as components, state, props, JSX, events, etc.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/sBws8MSXN7A/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/sBws8MSXN7A/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/sBws8MSXN7A/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-01-03T21:20:36Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "MJCTjqvcDktnHkstk3z9E2eBjLg",
        "id": {
          "kind": "youtube#video",
          "videoId": "HtunPQtr-Xw"
        },
        "snippet": {
          "publishedAt": "2022-07-27T13:27:54Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "5 HTML, CSS &amp; JS Mini Projects - Scroll Animation, Rotating Navigation, Drag Events, etc",
          "description": "5 projects from my 50 Projects In 50 Days course on Udemy. These projects are meant to sharpen your CSS skills and help you ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/HtunPQtr-Xw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/HtunPQtr-Xw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/HtunPQtr-Xw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2022-07-27T13:27:54Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "a3ykisdIfeKhk0zlCHzxoTyTKPI",
        "id": {
          "kind": "youtube#video",
          "videoId": "3TVy6GdtNuQ"
        },
        "snippet": {
          "publishedAt": "2021-10-13T17:58:04Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Svelte Crash Course",
          "description": "Learn the fundamentals of Svelte by building a feedback app Code: https://github.com/bradtraversy/svelte-feedback-app ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3TVy6GdtNuQ/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3TVy6GdtNuQ/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3TVy6GdtNuQ/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-10-13T17:58:04Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "c8XVli8Ru0VGdbxPEgtK0lWxnIk",
        "id": {
          "kind": "youtube#video",
          "videoId": "93p3LxR9xfM"
        },
        "snippet": {
          "publishedAt": "2018-03-17T13:50:15Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Redux Crash Course With React",
          "description": "In this video we will talk about what Redux is and build a React app from scratch and add all of the boilerplate for Redux and work ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/93p3LxR9xfM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/93p3LxR9xfM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/93p3LxR9xfM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-03-17T13:50:15Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "9cMWbxZMjrZDwilUkBZjclpkzm4",
        "id": {
          "kind": "youtube#video",
          "videoId": "g_aMpyMvQ9k"
        },
        "snippet": {
          "publishedAt": "2019-11-11T16:37:10Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Escape Tutorial Hell &amp; Utilize Them In A Better Way",
          "description": "In this video I'll talk about some ways to utilize programming tutorials in a way where you are not so dependant on them and break ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/g_aMpyMvQ9k/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/g_aMpyMvQ9k/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/g_aMpyMvQ9k/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-11-11T16:37:10Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "SqDIkNPoopwMtjVvlKcRYAp94RA",
        "id": {
          "kind": "youtube#video",
          "videoId": "qZXt1Aom3Cs"
        },
        "snippet": {
          "publishedAt": "2021-02-24T16:36:53Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Vue JS Crash Course",
          "description": "Learn the fundamentals of Vue JS (v3) in this project-based crash course Task Tracker: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/qZXt1Aom3Cs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-02-24T16:36:53Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "S5jKUmvnRC0YypncLYNjpIufRdI",
        "id": {
          "kind": "youtube#video",
          "videoId": "e1IyzVyrLSU"
        },
        "snippet": {
          "publishedAt": "2019-09-04T15:58:21Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Python Django Crash Course",
          "description": "In this Django 2.x crash course we will build a polling app based off the one from the docs. We will look at apps, views, models, ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/e1IyzVyrLSU/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/e1IyzVyrLSU/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/e1IyzVyrLSU/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-09-04T15:58:21Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "4tfEexHqX8alnMD-ACuEGrSz3M8",
        "id": {
          "kind": "youtube#video",
          "videoId": "oxneJ4czNSw"
        },
        "snippet": {
          "publishedAt": "2022-08-03T17:44:39Z",
          "channelId": "UC98Q7XElpqpCZ78R2sdm-Ww",
          "title": "Brad Traversy Web Dev Guide - Part01",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/oxneJ4czNSw/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/oxneJ4czNSw/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/oxneJ4czNSw/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Jeff Scott Ranken Technical College",
          "liveBroadcastContent": "none",
          "publishTime": "2022-08-03T17:44:39Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "bXdPX08cl8o3OLlDpsA7ajm_qWs",
        "id": {
          "kind": "youtube#video",
          "videoId": "3tw16Xr8fXY"
        },
        "snippet": {
          "publishedAt": "2018-11-09T13:00:00Z",
          "channelId": "UCshZ3rdoCLjDYuTR_RBubzw",
          "title": "Python Django Dev To Deployment By Brad Traversy Course Review",
          "description": "The Python Django Dev To Deployment is an excellent course made by Brad Traversy. http://bit.ly/2Ffjped In this course Brad ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3tw16Xr8fXY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3tw16Xr8fXY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3tw16Xr8fXY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Program With Erik",
          "liveBroadcastContent": "none",
          "publishTime": "2018-11-09T13:00:00Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "e13PYguUm2Jtzuu2CRqWQMZ727w",
        "id": {
          "kind": "youtube#video",
          "videoId": "3pHdOWQcSfM"
        },
        "snippet": {
          "publishedAt": "2018-08-11T14:13:26Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Working For Yourself &amp; Side Projects",
          "description": "In this video I want to discuss leveraging your skills as a developer to work for yourself either full time or on the side including ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3pHdOWQcSfM/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3pHdOWQcSfM/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3pHdOWQcSfM/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-08-11T14:13:26Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "0MT2aFWl28D8Kk0Zz4hJsPfkklw",
        "id": {
          "kind": "youtube#video",
          "videoId": "Kyx2PsuwomE"
        },
        "snippet": {
          "publishedAt": "2018-08-15T11:30:32Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Exploring Docker [1] - Getting Started",
          "description": "In this video we will start to explore docker by talking about the benefits of Docker, looking at commands to work with containers ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Kyx2PsuwomE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Kyx2PsuwomE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Kyx2PsuwomE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-08-15T11:30:32Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "l4h16JxD30i8751ZEhyW4PV1ovY",
        "id": {
          "kind": "youtube#video",
          "videoId": "9ylj9NR0Lcg"
        },
        "snippet": {
          "publishedAt": "2019-04-22T20:51:55Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "MySQL Crash Course | Learn SQL",
          "description": "In this video we will look at installing mysql, creating users, writing SQL queries via the shell and Workbench and even ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/9ylj9NR0Lcg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/9ylj9NR0Lcg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/9ylj9NR0Lcg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-04-22T20:51:55Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "5m1tzLKHH1SxOAxnt4Z8ebGBup0",
        "id": {
          "kind": "youtube#video",
          "videoId": "eR3rcalj06Q"
        },
        "snippet": {
          "publishedAt": "2016-09-18T14:10:15Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "jQuery Crash Course [5] - Ajax",
          "description": "In this video we will work with the load, $.get, $.post and $.ajax methods in jQuery My 10 Project jQuery/JS Course ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/eR3rcalj06Q/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/eR3rcalj06Q/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/eR3rcalj06Q/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2016-09-18T14:10:15Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "zXBqB4HfD_YAasqxx7voGyfcFmo",
        "id": {
          "kind": "youtube#video",
          "videoId": "KyWaXA_NvT0"
        },
        "snippet": {
          "publishedAt": "2020-02-25T15:40:39Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Node.js &amp; Express API | Expense Tracker - Part 2 (MERN)",
          "description": "In this video we will take the react app from the last video and make it a full stack MERN app by adding a backend API with ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/KyWaXA_NvT0/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/KyWaXA_NvT0/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/KyWaXA_NvT0/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2020-02-25T15:40:39Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ruXt8pdBusl1UmWT7oaTooC0ffE",
        "id": {
          "kind": "youtube#video",
          "videoId": "3YK96_qfc-Y"
        },
        "snippet": {
          "publishedAt": "2020-08-15T13:19:58Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Keeping the Coding Dream Alive",
          "description": "A personal story of persevering through the challenging journey of keeping consistently while building a coding career. Dennis ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/3YK96_qfc-Y/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/3YK96_qfc-Y/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/3YK96_qfc-Y/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2020-08-15T13:19:58Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "ObUgn2xxikhgVGue09PYzZqhkXc",
        "id": {
          "kind": "youtube#playlist",
          "playlistId": "PLO2jC5vJwtZ5k4IjIYZUYQQsmMKGkRZHR"
        },
        "snippet": {
          "publishedAt": "2022-06-28T04:43:10Z",
          "channelId": "UCnx6lTZdpW_XRw70N3oqpJQ",
          "title": "Tailwind CSS From Scratch | Learn By Building Projects by Brad Traversy",
          "description": "Build great looking layouts fast and efficiently using Tailwind CSS utility classes.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DOd-BJetdo8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DOd-BJetdo8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DOd-BJetdo8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Best Udemy Courses",
          "liveBroadcastContent": "none",
          "publishTime": "2022-06-28T04:43:10Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "1aBVDcE6Css6pXBgjgWkBaG5Bf8",
        "id": {
          "kind": "youtube#video",
          "videoId": "v0t42xBIYIs"
        },
        "snippet": {
          "publishedAt": "2017-12-31T20:59:12Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "React &amp; Express Starter Pack For Full Stack Development",
          "description": "In this video we will create a starter pack for full stack React and Express development. I will show you how to integrate them and ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/v0t42xBIYIs/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/v0t42xBIYIs/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/v0t42xBIYIs/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2017-12-31T20:59:12Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "sCMr-Fq9nNZuLOYtsvLwz3enOQE",
        "id": {
          "kind": "youtube#video",
          "videoId": "rRgD1yVwIvE"
        },
        "snippet": {
          "publishedAt": "2018-01-13T15:05:58Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "JavaScript Higher Order Functions &amp; Arrays",
          "description": "In this video we will look at some of the very powerful higher order functions and working with arrays. We will look at forEach, map, ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/rRgD1yVwIvE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/rRgD1yVwIvE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/rRgD1yVwIvE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-01-13T15:05:58Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "M26L6Ep3SU0y3Hrdo249e1qtFpg",
        "id": {
          "kind": "youtube#video",
          "videoId": "vk0vUHWX6d8"
        },
        "snippet": {
          "publishedAt": "2020-09-07T15:47:45Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Burnout Signs &amp; How To Avoid It",
          "description": "Burnout is extremely common in programming. Let's talk about ways to avoid it Adrian's YouTube Channel: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/vk0vUHWX6d8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/vk0vUHWX6d8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/vk0vUHWX6d8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2020-09-07T15:47:45Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "Fh0HLP9XCFNSdwWbSlZjDHE97io",
        "id": {
          "kind": "youtube#video",
          "videoId": "ZORXxxP49G8"
        },
        "snippet": {
          "publishedAt": "2018-09-06T17:22:12Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Text To Speech &amp; Synthesis App - JavaScript &amp; Web Speech API",
          "description": "In this video we will build a text synthesis application using vanilla JavaScript and the web speech API. We will also use Bootstrap ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ZORXxxP49G8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ZORXxxP49G8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ZORXxxP49G8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-09-06T17:22:12Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "YrUwh5Y2zxBzTnSI7rPmePo7bZg",
        "id": {
          "kind": "youtube#video",
          "videoId": "DZg6UfS5zYg"
        },
        "snippet": {
          "publishedAt": "2019-04-04T14:58:42Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Pure CSS Hamburger Menu &amp; Overlay",
          "description": "In this video we will create a landing page with a pure CSS responsive hamburger menu (No JavaScript) with a bit of animation ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DZg6UfS5zYg/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/DZg6UfS5zYg/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/DZg6UfS5zYg/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-04-04T14:58:42Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "cYInk6f6GBdzwVoQo4szhesp028",
        "id": {
          "kind": "youtube#video",
          "videoId": "SsEn0hlKDKA"
        },
        "snippet": {
          "publishedAt": "2020-08-10T14:23:06Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Should You Learn Bootstrap in 2020?",
          "description": "Bootstrap 5 Alpha has been released and a lot of people have asked me if they should learn it or use it. I address that in this video ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/SsEn0hlKDKA/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/SsEn0hlKDKA/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/SsEn0hlKDKA/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2020-08-10T14:23:06Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "WNISmlWh9o4TbsdqieBwTRZmBCY",
        "id": {
          "kind": "youtube#video",
          "videoId": "Fdf5aTYRW0E"
        },
        "snippet": {
          "publishedAt": "2019-01-23T17:46:58Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Angular Crash Course (2019)",
          "description": "UPDATED 2021 VERSION: https://www.youtube.com/watch?v=3dHNOWTI7H8&t=2681s In this video we will talk about what ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/Fdf5aTYRW0E/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2019-01-23T17:46:58Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "H9zZx8F12hjfrb2-B4g56ZxcVZo",
        "id": {
          "kind": "youtube#video",
          "videoId": "ok6bu-3XRA8"
        },
        "snippet": {
          "publishedAt": "2018-11-12T20:43:32Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "GraphQL With React &amp; Apollo [4] - Simple Heroku Deploy",
          "description": "In this part we will take our small app and prepare and do a very simple deployment to Heroku Code: ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/ok6bu-3XRA8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/ok6bu-3XRA8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/ok6bu-3XRA8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2018-11-12T20:43:32Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "-UQQ52f7XXyIBsbfLGcoRw4kgoc",
        "id": {
          "kind": "youtube#video",
          "videoId": "eeqjIhcOa9E"
        },
        "snippet": {
          "publishedAt": "2021-10-04T14:00:14Z",
          "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
          "title": "Freelance Course Launch &amp; Update",
          "description": "Course link - https://freelancemastery.dev We finally finished the freelance course. We are launching with a special 2 week promo ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/eeqjIhcOa9E/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/eeqjIhcOa9E/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/eeqjIhcOa9E/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Traversy Media",
          "liveBroadcastContent": "none",
          "publishTime": "2021-10-04T14:00:14Z"
        }
      },
      {
        "kind": "youtube#searchResult",
        "etag": "RvBLFM9qE82QG-ewVvK0EBVBlFw",
        "id": {
          "kind": "youtube#video",
          "videoId": "iq5nGFzqDbY"
        },
        "snippet": {
          "publishedAt": "2019-11-09T16:38:03Z",
          "channelId": "UC46wWUso9H5KPQcoL9iE3Ug",
          "title": "How I really feel about Traversy Media #YoutubeDrama",
          "description": "In this video I talk about Brad Traversy from Traversy media. Looking to learn to code check these plans Monthly Plan ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/iq5nGFzqDbY/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/iq5nGFzqDbY/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/iq5nGFzqDbY/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "CodingPhase",
          "liveBroadcastContent": "none",
          "publishTime": "2019-11-09T16:38:03Z"
        }
      }
    ]
  }
  
  
  
