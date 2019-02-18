var gulp= require('gulp');
var imagemin=require('gulp-imagemin');
var uglify=require('gulp-uglify');
var sass=require('gulp-sass');
var concat=require('gulp-concat');



/*
--TOP LEVEL FUNCTIONS--

gulp.task - Define tasks
gulp.src - point tofiles to use
gulp.dest- Points to folder to output
gulp.watch-watch files and folders for changes


*/


//Logs Message

// gulp.task('message',function(){

// return console.log('Gulp is running...');

// });

//Copy all HTML files

 gulp.task('copyHtml',  () =>
   gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
 );




//Optimize images


gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);



// Minify JS

gulp.task('minify',() =>
 gulp.src('src/js/*.js')
 .pipe(uglify())
 .pipe(gulp.dest('dist/js'))

 
);


//Compile Sass

gulp.task('sass',() =>
    gulp.src('src/sass/*.scss')
    .pipe(concat('style.css'))
    
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('dist/css'))
   
);
   



//gulp.task('default',['copyHtml','imageMin','scripts','sass']);


//scripts

gulp.task('scripts',() =>
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
   
);
   
gulp.task('watch',function(){
  gulp.watch('src/js/*.js',['scripts']);
  gulp.watch('src/images/*',['imageMin']);
  gulp.watch('src/sass/*.scss',['sass']);
  gulp.watch('src/*.html',['copyHtml']);


});




