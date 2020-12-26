function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

  var _React$useState2 = React.useState(false),
      hashtag = _React$useState2[0],
      setHashtag = _React$useState2[1];

  var link = function link(url) {
    if (links) {
      window.open(url, '_blank');
    }
  };

  var getPosts = function getPosts() {
    setHashtag(tag[0] === '#');
    var query = hashtag ? "https://www.instagram.com/explore/tags/" + tag.replace('#', '') + "/?__a=1" : "https://www.instagram.com/" + tag + "/?__a=1";
    fetch(query).then(function (response) {
      if (response.status === 404) {
        console.error((hashtag ? 'Hashtag' : 'Account') + " not found for the tag " + tag);
      }

      response.json().then(function (data) {
        if (data.hasOwnProperty('graphql')) {
          var new_posts = [];

          for (var i = 0; i < quantity; i++) {
            var post = hashtag ? data.graphql.hashtag.edge_hashtag_to_media.edges[i].node : data.graphql.user.edge_owner_to_timeline_media.edges[i].node;

            if (post) {
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
  };

  React.useEffect(function () {
    getPosts();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    }
  }, posts.map(function (post) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return link(post.url);
      },
      style: {
        cursor: links ? 'pointer' : 'default',
        width: 100 / cols + "%",
        display: 'block',
        padding: '10px',
        boxSizing: 'border-box',
        height: 'auto'
      },
      key: post.id
    }, /*#__PURE__*/React.createElement("img", {
      alt: post.alt,
      src: post.src,
      style: {
        width: '100%'
      }
    }), descriptions ? /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: '0.5rem',
        width: '100%',
        color: '#FFF',
        fontSize: '0.9rem',
        mixBlendMode: 'difference'
      }
    }, post.description) : null);
  }));
};

module.exports = InstaReact;
//# sourceMappingURL=index.js.map
