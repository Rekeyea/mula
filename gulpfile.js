"use strict";

var gulp = require("gulp");
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var ts = require('gulp-typescript');
var lint = require("gulp-tslint");
var browserSyncSpa  = require('browser-sync-middleware-spa');

var project = ts.createProject('tsconfig.json', { sortOutput: true });


//lint typescript for best practices
gulp.task("tslint", () =>
    gulp.src("app/**/*.ts")
        .pipe(lint())
        .pipe(lint.report("verbose"))
);


//generate CSS from SASS
gulp.task("sass",function(){  
    var res = gulp.src("app/**/*.scss")
        .pipe(sass(/*{outputStyle:"compressed"}*/))
        .on("error",sass.logError)
        .pipe(gulp.dest("./app/"))
        .pipe(browserSync.stream());;
    return res;
});

//generate minified CSS from SASS
gulp.task("sass:prod",function(){  
    var res = gulp.src("app/**/*.scss")
        .pipe(sass({outputStyle:"compressed"}))
        .on("error",sass.logError)
        .pipe(gulp.dest("./app/"));
    return res;
});

gulp.task("tss",function() {
    var res = project.src()
        .pipe(ts(project))
        .js.pipe(gulp.dest("./app/"))
        .pipe(browserSync.stream());
    return res;
});


// //join all CSS files
// gulp.task("concat:css",function() {
//     return gulp.src(cssLibPaths)
//         .pipe(concat("app.css"))
//         .pipe(uglify())
//         .pipe(gulp.dest("app/dist"))
//         .pipe(browserSync.stream());
// });
// //join and minify all JS files
// gulp.task("concat:js",function() {
//     return gulp.src(jsLibPaths)
//         .pipe(concat("app.js"))
//         .pipe(rename({suffix:".min"}))
//         .pipe(uglify())
//         .pipe(gulp.dest("app/dist"))
//         .pipe(browserSync.stream());
// });
const baseUrl = "./index.html";
gulp.task("serve",["sass","tss"]);
gulp.task("watch",function(){
    browserSync.init({
        server: {
            baseDir: "./",
            middleware:[
                browserSyncSpa(/^[^\.]+$/,baseUrl)
            ]
        }
    });
    gulp.watch("./app/**/*.scss",["sass"]);
    gulp.watch("./app/**/*.ts",["tss"]);
});
gulp.task("default",["serve","watch"]);