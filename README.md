# cubify

Convert `d` of SVG path into list of cubic bezier curves. Source code adopted from [Snap.svg](https://snapsvg.io) ( specifically [path.js](https://github.com/adobe-webplatform/Snap.svg/blob/b365287722a72526000ac4bfcf0ce4cac2faa015/src/path.js#L918) ), rearranged specific for this particular usage.

Formally [@zbryikt/pathconvert](https://github.com/zbryikt/pathconvert), refactored and transferred here.


## Usage

Install:

    npm install cubify


use `require` for Node.js or include with `<script>` in website:

    <script src="path-to-cubify-dist/index.js"></script>

    require("cubify"); /* for Node.js */
    result = cubify(d);
    

## License

[The original source code](https://github.com/adobe-webplatform/Snap.svg/blob/b365287722a72526000ac4bfcf0ce4cac2faa015/src/path.js#L918) is released under [Apache License](https://raw.githubusercontent.com/loadingio/cubify/master/LICENSE)

The adopted code is released under MIT License.
