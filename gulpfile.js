import gulp from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const { watch: gulpWatch } = gulp;
const sass = gulpSass(dartSass);

const handleError = (error) => {
  log(error.message);
  return this.emit("end");
};

const compiler = async () => {
  return gulp
    .src("_styles/styles.scss")
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest("assets/css"))
    .on("error", handleError);
};

const watcher = () => {
  gulpWatch("_styles/**/*.scss", compiler);
};

export const compile = compiler;
export const watch = watcher;
