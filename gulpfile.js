const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const jsmin = require('gulp-uglify');
const imgmin = require('gulp-imagemin');
const rename = require('gulp-rename');
const connect = require('gulp-connect');
//网络服务
gulp.task('server',()=>{
    connect.server({
        root:'./dist',
        port: 3001,
        livereload:true
    })
})
//html
gulp.task('compile-html',()=>{
    return gulp.src(['./src/*.html'])
        .pipe(gulp.dest('./dist/'))

})
//img
gulp.task('compile-img',()=>{
    return gulp.src('./src/images/*.*')
        .pipe(imgmin({progressive: true}))
        .pipe(gulp.dest('./dist/images/'))
})
//less
gulp.task('compile-less',()=>{
    return gulp.src(['./src/**/*.less','./src/*.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename((path)=>{
            path.extname = '.css'
        }))
        .pipe(gulp.dest('./dist/'))


})
//js
gulp.task('compile-js',()=>{
    return gulp.src(['./src/**/*.js','./src/*.js'])
        .pipe(jsmin())
        .pipe(gulp.dest('./dist/'))


})
gulp.task('auto',()=>{
    gulp.watch('./src/**/*.html',gulp.series('compile-html'));
    gulp.watch('./src/**/*.less',gulp.series('compile-less'));
    gulp.watch('./src/**/*.js',gulp.series('compile-js'));
    gulp.watch('./src/images/*.*',gulp.series('compile-img'));
    gulp.watch('./dist/**/*.*',gulp.series('reload'))

})

gulp.task("reload", function() {
    return gulp.src("./dist/**/*.*")
        .pipe(connect.reload());
})



gulp.task('default',gulp.parallel('compile-less','compile-html','compile-js','compile-img','auto','server',async ()=>{

}))
