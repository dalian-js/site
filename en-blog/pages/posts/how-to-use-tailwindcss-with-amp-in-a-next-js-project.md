---
title: How to use tailwindcss with AMP in a Next.js project
description: Recently, I was refactoring my blog using Next.js by a whim. There are 3 tech stacks I would use...
date: 2020-03-24 22:22:22
tag: Web, Code, CSS, Note, React, AMP, Next.js, tailwindcss, Guide
author: GeekPlux
---

# How to use tailwindcss with AMP in a Next.js project

Recently, I was refactoring my blog using Next.js by a whim. There are 3 tech stacks I would use:

- [Next.js](https://nextjs.org/) , a popular React framework with SSG, SSR support naturally
- [Tailwindcss](https://tailwindcss.com/) , a low-level CSS framework with the utility-first concept.
- [AMP](https://amp.dev/) , an HTML framework developed by Google to make your website fast and loading smoothly.

However, There are so many restrictions in AMP for performance issues. At the beginning of the project, I found [this issue](https://github.com/zeit/next.js/issues/7121), which means you can NOT add a global CSS as [Next.js documented](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet). So this article may be a guide for how to use tailwindcss with AMP in a Next.js project.

## Step 1: How to add style in AMP

First, we are supposed to know how to add style for a page in AMP. After look up their [official documents](https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/?format=websites#add-styles-to-a-page), there are **only two ways** to style your site:

- [Define styles in head](https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/?format=websites#define-styles-in-head)
- [Define inline styles](https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/?format=websites#define-inline-styles)

React JSX syntax lets you add CSS inline intuitively, written as attributes and passed to elements. But it's pain to write pseudo-classes, add prefix and maintain. Besides, tailwindcss has already listed in our armoury, so I have to choose another method.

Define CSS within the `<style amp-custom>` tag, then add the class name to where you wanna style. The only one thing is different from your usual CSS writing is to write it in the `<head>` `<style>` tag.

```html
<!doctype html>
  <head>
    ...
    <style amp-custom>
      /* any custom styles go here. */
      amp-img.grey-placeholder {
        background-color: grey;
      }
    </style>
    ...
  </head>
  <body>
  	<amp-img
    	class="grey-placeholder"
    	src="https://..."
    	srcset="..."
    	width="500"
    	height="300"
    	layout="responsive">
    </amp-img>
  </body>
```

[JJ Kasper](https://jjsweb.site/) provided a way to implement this in Next.js: [to overwrite _document](https://github.com/zeit/next.js/issues/7121#issuecomment-487329715).

```js
// pages/_document.js
export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style dangerouslySetInnerHTML={{
            __html: `body{ background: orange; }`
          }} />
        </>
      )
    }
  }
}
```

So the **next step** is how to add tailwind CSS as a string into `<style>` tag.



## Step 2: How to add a CSS file as String into style tag

This step is too simple to just add a loader the [Webpack config](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config) in `next.config.js`.  **[raw-loader](https://webpack.js.org/loaders/raw-loader/)** allows importing files as a String, you could add it following [Webpack customing doc](https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config):

```js
// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        use: 'raw-loader'
      }
    )
    return config
  },
}
```

Then download the `tailwind.min.css` to your `styles` folder at root directory, try to import it in `pages/_document.js`

```js
// pages/_document.js
import tailwindcss from '!raw-loader!../styles/tailwind.min.css';
```

That's it! But when you run `next start` again after these steps, you would encounter a warning (if your pages are set to AMP):

```sh
[ warn ]  Amp Validation

/  error  The author stylesheet specified in tag 'style amp-custom (transformed)' is too long - document contains 725366 bytes whereas the limit is 75000 bytes.  https://amp.dev/documentation/guides-and-tutorials/learn/spec/amphtml#maximum-size
```

Don't worry, we all know warning is not error. We can ignore this warning message during development until you wanna build a production version.



## Step 3 How to build and deploy

Not only is it because of AMP validation error, but to add entire tailwindcss package into the final bundle is too big, so we need to process tailwindcss, leaving only the classes we actually use.

If your project was created by an [official example](https://github.com/zeit/next.js/tree/canary/examples/with-tailwindcss), you would see the `postcss.config.js` under root folder, and tailwindcss was imported in `styles/index.css`

```css
/* styles/index.css */

/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */
@tailwind utilities;
```

Next.js compiles CSS using PostCSS, so you can just create a `postcss.config.js` without other config then it works. And as you know, `postcss.config.js` also is able to used by [PostCSS CLI](https://github.com/postcss/postcss-cli).

You need to add 2 steps before building process:

- Compile a `output.css` file to `styles` folder.
- Import `styles/output.css` as String in `pages/_document.js`.

So first, let's tweak `postcss.config.js` for CLI using because of `require()` function syntax.

```js
// postcss.config.js
const purgecssOption = {
  // Specify the paths to all of the template files in your project
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
};

module.exports = {
  plugins:
    process.env.CSS_ENV === 'build'
      ? [
          require('tailwindcss'),
          require('@fullhuman/postcss-purgecss')(purgecssOption),
          require('postcss-preset-env'),
          require('cssnano')({
            preset: 'default'
          })
        ]
      : [
          'tailwindcss',
          process.env.NODE_ENV === 'production'
            ? ['@fullhuman/postcss-purgecss', purgecssOption]
            : undefined,
          'postcss-preset-env'
        ]
};
```

Please notice a **env variable** called `CSS_ENV`, it is going to use in future steps.

Second, importing `styles/output.css`:

```js
// pages/_document.js
import outputcss from '!raw-loader!../styles/output.css';
import tailwindcss from '!raw-loader!../styles/tailwind.min.css';
const cssFile = process.env.NODE_ENV === 'production' ? outputcss : tailwindcss;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          <style
            dangerouslySetInnerHTML={{
              __html: cssFile
            }}
          />
          {initialProps.styles}
        </>
      )
    };
  }
  render() {...}
}
```

When you run command here:

```sh
CSS_ENV=build postcss styles/index.css --config postcss.config.js -o styles/output.css
```

you would see `output.css` is generated. That's convenient if you add this line to your `package.json` scripts.

```json
// package.json
  "scripts": {
    "dev": "next",
    "build": "yarn build-css && next build",
    "build-css": "CSS_ENV=build postcss styles/index.css --config postcss.config.js -o styles/output.css",
    ...
  }
```

Then you run `yarn build` or `npm run build` every time, it would compile CSS automatically.

```sh
// ls -al styles
-rw-r--r--  1 geekplux  staff   7.7K Mar 24 01:54 output.css
-rw-r--r--@ 1 geekplux  staff   694K Mar 23 06:48 tailwind.min.css
```



After completing all the steps, you can now use tailwindcss well in both development and production environments.

## Summary

OK finally, in a summary, you should NOT use tailwind in your Next.js project, because when you define a custom PostCSS configuration file, Next.js **completely disables** the built-in [default behavior](https://nextjs.org/docs/advanced-features/customizing-postcss-config#default-behavior)......it's a joke.