# Implementation Task: YouTube Data API Integration with Express

## Overview

This project is a Node.js application using the Express framework to create a server that retrieves data from the YouTube Data API. The server listens on port 9000 and has a single route (`/youtube`) that fetches videos related to "land cruiser 300" and returns the data in JSON format.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository or download the `implementation_task.js` file.
2. Navigate to the project directory.

### Install Dependencies

```bash
npm install express axios
```

### Running the Server

Start the server by running:

```bash
node implementation_task.js
```

The server will be running at `http://localhost:9000`.
### Use the endpoint '/youtube' to fetch data

## Usage

### Fetch YouTube Data

To fetch data from the YouTube Data API, make a GET request to:

```
http://localhost:9000/youtube
```

This request will return JSON data containing YouTube search results for the query "land cruiser 300".

### Example Response

```json
{
    "kind": "youtube#searchListResponse",
    "etag": "gKlaA1xlhxnA_dZOzHMqzpgTiEI",
    "nextPageToken": "CAUQAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 5
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "kHFi_1Qj534OUTPQ8PGyNK6i-q0",
            "id": {
                "kind": "youtube#video",
                "videoId": "e3vSaXYw_jE"
            },
            "snippet": {
                "publishedAt": "2024-06-02T08:00:21Z",
                "channelId": "UClyTiw88hGahmbsRtqDQxSA",
                "title": "Toyota LandCruiser 300 Series 2024 review: GR Sport | New LC300 4WD tested by family",
                "description": "The 2024 Toyota LandCruiser 300 Series arguably had the most anticipated release to date this decade with it breaking the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/e3vSaXYw_jE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/e3vSaXYw_jE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/e3vSaXYw_jE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "CarsGuide",
                "liveBroadcastContent": "none",
                "publishTime": "2024-06-02T08:00:21Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "uGIP5PUuHZCvFNX5_cckc18_QOY",
            "id": {
                "kind": "youtube#video",
                "videoId": "S6fBTmAqg8w"
            },
            "snippet": {
                "publishedAt": "2023-09-20T09:15:02Z",
                "channelId": "UCjWs7BxyjO5SLqevxSmp4vQ",
                "title": "Toyota Land Cruiser LC 300 review - King of the road | First Drive | Autocar India",
                "description": "The Land Cruiser has achieved legendary status in the SUV world and with good reason. It has a lineage and history that is ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/S6fBTmAqg8w/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/S6fBTmAqg8w/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/S6fBTmAqg8w/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Autocar India",
                "liveBroadcastContent": "none",
                "publishTime": "2023-09-20T09:15:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "4ScWxEU7fSiuzHsC1sUkYC3rPBw",
            "id": {
                "kind": "youtube#video",
                "videoId": "3BIdcZutwoA"
            },
            "snippet": {
                "publishedAt": "2023-08-12T06:00:02Z",
                "channelId": "UCPF4bAZimS4T8w1TlbeIAYg",
                "title": "Toyota Land Cruiser LC 300 - The Real Big Daddy Of SUVs | Faisal Khan",
                "description": "Buy Involve Gel Can Botanical Garden Car Perfume - https://bit.ly/3UB0MDA Special Discount: Flat 10% OFF across website with ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/3BIdcZutwoA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/3BIdcZutwoA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/3BIdcZutwoA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Faisal Khan",
                "liveBroadcastContent": "none",
                "publishTime": "2023-08-12T06:00:02Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "To5mxAA7AhHfAX8S9XhWICsr0II",
            "id": {
                "kind": "youtube#video",
                "videoId": "Dix7gcv-aRY"
            },
            "snippet": {
                "publishedAt": "2023-07-09T08:00:05Z",
                "channelId": "UClyTiw88hGahmbsRtqDQxSA",
                "title": "2023 Toyota LandCruiser 300 Series review: Sahara | LC300 4WD flagship shows off in off-road test!",
                "description": "The 2023 Toyota LandCruiser 300 Series is still a big deal, having now been on the market for nearly two years. After all, its ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Dix7gcv-aRY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Dix7gcv-aRY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Dix7gcv-aRY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "CarsGuide",
                "liveBroadcastContent": "none",
                "publishTime": "2023-07-09T08:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "pFKU0ikJhBG-bpW_X-t4Wa_4nQo",
            "id": {
                "kind": "youtube#video",
                "videoId": "_2-DYAMhtps"
            },
            "snippet": {
                "publishedAt": "2021-11-16T16:56:19Z",
                "channelId": "UCsqjHFMB_JYTaEnf_vmTNqg",
                "title": "Here’s Why the 2022 Toyota Land Cruiser 300-Series Should Be Sold in America",
                "description": "THANKS TO ALPINE ARMORING! https://www.alpineco.com/ https://www.instagram.com/alpinearmoring/ CHECK OUT CARS ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/_2-DYAMhtps/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/_2-DYAMhtps/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/_2-DYAMhtps/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Doug DeMuro",
                "liveBroadcastContent": "none",
                "publishTime": "2021-11-16T16:56:19Z"
            }
        }
    ]
}
```

## Middleware

The application includes a middleware function that logs the HTTP method and URL of each request received by the server.

## Error Handling

If the request to the YouTube Data API fails, the server responds with a status code of 500 and the error message.

---

For any issues or contributions, please create a pull request or open an issue in the repository.
