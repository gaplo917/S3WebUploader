# S3 Web Uploader

![alt text](misc/s3-web-uploader.gif 'Preview')

A minimalistic UI to conveniently upload and download files from AWS S3

Live Demo: https://gaplo917.github.io/S3WebUploader

# Highlights

- Angular based web client for uploading/downloading file(s) from AWS S3
- Track multiple upload progress through one consistent UI.
- Tree-like folder browser so you can find the files you want faster
- Drag-and-drop upload with support for single file, multiple files and folder upload
- Support multiple account Login
- Securely encrypt credential with standalone master password and save in browser
- Options to rename files during upload

# Built On

This app is built with many amazing framework, including:

<a href="https://angular.io/"><img src="https://angular.io/assets/images/logos/angular/angular.svg" width="150"></a>

<a href="https://ionicons.com/"><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 161.2c-52.3 0-94.8 42.5-94.8 94.8s42.5 94.8 94.8 94.8 94.8-42.5 94.8-94.8-42.5-94.8-94.8-94.8z"/><circle cx="392.1" cy="126.4" r="43.2"/><path d="M445.3 169.8l-1.8-4-2.9 3.3c-7.1 8-16.1 14.2-26.1 17.9l-2.8 1 1.1 2.7c8.6 20.7 13 42.7 13 65.2 0 93.7-76.2 169.9-169.9 169.9S86.1 349.7 86.1 256 162.3 86.1 256 86.1c25.4 0 49.9 5.5 72.8 16.4l2.7 1.3 1.2-2.7c4.2-9.8 10.8-18.5 19.2-25.2l3.4-2.7-3.9-2C321.6 55.8 289.5 48 256 48 141.3 48 48 141.3 48 256s93.3 208 208 208 208-93.3 208-208c0-30-6.3-59-18.7-86.2z"/></svg> IonIcons</a>

Argon https://demos.creative-tim.com/argon-design-system/docs/getting-started/quick-start.html

# Project History

This project is modified from fully-coupled electron-based project
https://github.com/Yamazaki93/S3Uploader/tree/762121ab33fe4854b1ec3f94d5bcc260f05f7e6d.

Yamazaki93 use `aws-sdk/NodeJs` in electron to communicate with S3. But installing an electron application
is not convenient in some cases.

So, I decided to rewrite it completely for a browser-compatible version\*.

- Rewrite the communication part with `aws-sdk-js` completely, now it is a browser-compatible tree view & drag-drop upload.
- Reuse most of the UI from Yamazaki93/S3Uploader with some enhancements and bug fixes.
- Added MinIO Demo for S3-compatible
- Store all user inputs securely in browser with a single master password by applying pbkdf2, HmacSHA512 and AES encryption

\* Some User experience has been changes due to browser limitation

## Getting Start

```
# development
yarn install
yarn start

# Test
yarn test

# Liniting
yarn lint

# production build
yarn build

# production build if have base path like GitHub Pages
yarn build --base-href="/S3WebUploader/"

```

## Credit

Thanks for the amazing works of Yamazaki93/S3Uploader that built with a
clean and consistent Angular architecture initially.

# License

MIT
