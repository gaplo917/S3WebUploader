# S3 Web Uploader

![alt text](misc/s3-web-uploader.gif 'Preview')

This project is modified from fully-coupled electron-based project
https://github.com/Yamazaki93/S3Uploader/tree/762121ab33fe4854b1ec3f94d5bcc260f05f7e6d.

Yamazaki93 use `aws-sdk/NodeJs` in electron to communicate with S3. I think it is too
much friction for installing an electron application for this purpose.

So, I decided to rewrite it completely to a browser-compatible version\*.

- Rewrite the communication part with `aws-sdk-js` completely, now it is a browser-compatible tree view & drag-drop upload.
- Reuse most of the UI from Yamazaki93/S3Uploader with some enhancements and bug fixes.
- Added MinIO Demo for S3-compatible
- (TODO) Store all user inputs(`accessKeyId`, `accessKeySecret`, `endpoint`) securely in browser by applying hash and encryption

\* Some User experience has been changes due to browser limitation

## Getting Start

```
# development
yarn install
ng serve

# Test
ng test

# production build
ng build
```

## Credit

Thanks for the amazing works of Yamazaki93/S3Uploader that built with a
clean and consistent Angular architecture.
