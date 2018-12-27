const  gulp=require('gulp');    //引用gulp
const  cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
const less = require('gulp-less');
const imgmin = require('gulp-imagemin');//图片压缩
//wxml
gulp.task('compile-wxml',()=>{
    return gulp.src(['./src/**/**/*.wxml'])
        .pipe(gulp.dest('./examples/'))
})
//less
gulp.task('compile-less',()=>{
    return gulp.src(['./src/**/*.less','./src/*.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename((path)=>{
            path.extname = '.wxss'
        }))
        .pipe(gulp.dest('./examples/'))
})
//js
gulp.task('compile-js',()=>{
    return gulp.src(['./src/**/*.js','./src/*.js'])
        .pipe(gulp.dest('./examples/'))
})
//json
gulp.task('compile-json',()=>{
    return gulp.src(['./src/**/*.json','./src/*.json'])
        .pipe(gulp.dest('./examples/'))
})
//wxss
gulp.task('compile-wxss',()=>{
    return gulp.src(['./src/**/*.wxss','./src/*.wxss'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('./examples/'))
})
//压缩图片
gulp.task('compile-img',()=>{
    return gulp.src(['./src/pages/imgs/*.*'])
        .pipe(imgmin({
            progressive: true
        }))
        .pipe(gulp.dest('./examples/pages/imgs/'))
})

gulp.task('auto',()=>{
    gulp.watch('./src/**/*.wxml',gulp.series('compile-wxml'));
    gulp.watch('./src/**/*.less',gulp.series('compile-less'));
    gulp.watch('./src/**/*.wxss',gulp.series('compile-wxss'));
    gulp.watch('./src/**/*.js',gulp.series('compile-js'));
    gulp.watch('./src/**/*.json',gulp.series('compile-json'));
    gulp.watch('./src/pages/imgs/*.*',gulp.series('compile-img'));

})
gulp.task('default',gulp.series('compile-less','compile-wxml','compile-wxss','compile-js','compile-json','compile-img','auto',function(){}))


