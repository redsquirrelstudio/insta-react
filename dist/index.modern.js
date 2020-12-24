import React from 'react';

var InstaReact = function InstaReact(_ref) {
  var tag = _ref.tag,
      _ref$quantity = _ref.quantity,
      quantity = _ref$quantity === void 0 ? 4 : _ref$quantity,
      _ref$cols = _ref.cols,
      cols = _ref$cols === void 0 ? 4 : _ref$cols,
      _ref$links = _ref.links,
      links = _ref$links === void 0 ? false : _ref$links,
      _ref$descriptions = _ref.descriptions,
      descriptions = _ref$descriptions === void 0 ? false : _ref$descriptions;

  var _React$useState = React.useState([]),
      posts = _React$useState[0],
      setPosts = _React$useState[1];

  var link = function link(url) {
    if (links) {
      window.open(url, '_blank');
    }
  };

  var getPosts = function getPosts() {
    if (tag[0] === '#') {
      fetch("https://www.instagram.com/explore/tags/" + tag.replace('#', '') + "/?__a=1").then(function (response) {
        response.json().then(function (data) {
          if (data.hasOwnProperty('graphql')) {
            var new_posts = [];

            for (var i = 0; i < quantity; i++) {
              var edge = data.graphql.hashtag.edge_hashtag_to_media.edges[i];

              if (edge) {
                var post = edge.node;
                new_posts.push({
                  id: post.id,
                  src: post.display_url,
                  url: "https://www.instagram.com/p/" + post.shortcode + "/",
                  alt: post.accessibility_caption,
                  description: post.edge_media_to_caption.edges[0]['node']['text']
                });
              }
            }

            setPosts(new_posts);
          }
        });
      })["catch"](function (error) {
        console.error("Issue getting Instagram content: " + error);
      });
    } else {
      fetch("https://www.instagram.com/" + tag + "/?__a=1").then(function (response) {
        response.json().then(function (data) {
          if (data.hasOwnProperty('graphql')) {
            var new_posts = [];

            for (var i = 0; i < quantity; i++) {
              var edge = data.graphql.user.edge_owner_to_timeline_media.edges[i];

              if (edge) {
                var post = edge.node;
                new_posts.push({
                  id: post.id,
                  src: post.display_url,
                  url: "https://www.instagram.com/p/" + post.shortcode + "/",
                  alt: post.accessibility_caption,
                  description: post.edge_media_to_caption.edges[0]['node']['text']
                });
              }
            }

            setPosts(new_posts);
          }
        });
      })["catch"](function (error) {
        console.error("Issue getting Instagram content: " + error);
      });
    }
  };

  React.useEffect(function () {
    getPosts();
  }, []);
  return React.DOM("div", {
    className: "insta-react"
  }, posts.map(function (post) {
    return React.DOM("div", {
      onClick: function onClick() {
        return link(post.url);
      },
      className: "post",
      style: {
        cursor: links ? 'pointer' : 'default',
        width: 100 / cols + "%"
      },
      key: post.id
    }, React.DOM("img", {
      alt: post.alt,
      src: post.src
    }), descriptions ? React.DOM("p", {
      className: "description"
    }, post.description) : null);
  }));
};

export default InstaReact;
//# sourceMappingURL=index.modern.js.map
