# Insta-react <img width=25 src="https://devicon.dev/devicon.git/icons/react/react-original.svg"> <img width=25 src="https://instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png?w=300">

Insta-react is a simple React component for displaying instagram account or hashtag post images.

#### <a href="https://github.com/redsquirrelstudio/insta-react">Github Repo</a> <img width=20 src="https://devicon.dev/devicon.git/icons/github/github-original.svg" >
#### <a href="https://www.npmjs.com/package/insta-react">NPM</a> <img width=20 src="https://devicon.dev/devicon.git/icons/npm/npm-original-wordmark.svg" >

## Installation
Insta-react can be installed with both npm and yarn as usual.
```bash
npm install insta-react

yarn add insta-react
```

And then can be imported into your project.
```js
import InstaReact from "insta-react";
```

## Configuration

Insta-react takes the following props for configuration:
<table>
    <thead>
        <th>Prop</th>
        <th>Type</th>
        <th>Default</th>
        <th>Function</th>
    </thead>
    <tbody>
        <tr>
            <td>tag</td>
            <td>String</td>
            <td>N/A, Required</td>
            <td>The username or hashtag that you would like posts to be pulled from hashtags should be prefixed with '#'.</td>
        </tr>
        <tr>
            <td>quantity</td>
            <td>Integer</td>
            <td>4</td>
            <td>The number of posts you would like to be shown.</td>
        </tr>
        <tr>
            <td>cols</td>
            <td>Integer</td>
            <td>4</td>
            <td>The number of posts to be shown in a row before wrapping.</td>
        </tr>
         <tr>
            <td>links</td>
            <td>Boolean</td>
            <td>false</td>
            <td>When true, clicking on a post image will link to it on Instagram</td>
        </tr>
         <tr>
            <td>descriptions</td>
            <td>Boolean</td>
            <td>false</td>
            <td>When true, post captions will be shown for each post.</td>
        </tr>
    </tbody>
</table>

## Example
```js
import React from 'react';
import InstaReact from 'insta-react';

const App = () => {
    return(
        <div>
            An account feed, latest 6 posts, 5 columns.
            <InstaReact tag="redsquirrelstudio" quantity={6} cols={5} />
            
            A hashtag feed, with defaults
            <InstaReact tag="#programming" />
        </div>
    )
}

```

This component is also available for Vue.js here: https://www.npmjs.com/package/insta-vue





