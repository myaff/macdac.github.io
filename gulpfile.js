var gulp = require('gulp'),
	sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

gulp.task('sass', function(){
	return gulp.src('./app/sass/*.scss')
			   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
			   .pipe(autoprefixer())
			   .pipe(gulp.dest('./public/css'));
});

gulp.task('images', function(){
	gulp.src('./images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./images'));
});

gulp.task('js', function(){
	return gulp.src('./app/js/script.js')
			   .pipe(uglify())
			   .pipe(rename('script.min.js'))
			   .pipe(gulp.dest('./public/js'));
});

gulp.task('default', function(){
	gulp.run('sass', 'images', 'js');
	gulp.watch('./app/sass/**/*.scss', function(e){
		gulp.run('sass');
	});
	gulp.watch('./app/images/*', function(e){
		gulp.run('images');
	});
	gulp.watch('./app/js/*', function(e){
		gulp.run('js');
	});
});