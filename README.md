# Easy to use breakpoints mixin
Sass mixin for managing breakpoints inside your project with a simple, human-readable syntax.

![Responsive web design](https://upload.wikimedia.org/wikipedia/commons/8/81/Content-is-like-water-1980.jpg)

## Installation
In your main Sass file, do `@import 'path/to/breakpoints/src/index.scss'`.

## Usage
The `breakpoints` mixin makes use of familiar syntax from the English language, such as the adjectives `small`, `medium` and `large`. Instead of dealing with arbitrary parameters, you can write `@include breakpoints(from 320px to 640px) { ... }`.

## Predefined breakpoints
The mixin comes with a list of predefined breakpoints to make it easier to use. There are three types of "devices" (`mobile`, `tablet`, `desktop`), each one has 3 variant sizes (`small`, `medium`, `large`). The breakpoints are a combination of the two (`mobile-small`, `desktop-large`, etc.).

List of default breakpoints:
```
  mobile-small: 320px,
  mobile-medium: 480px,
  mobile-large: 640px,

  tablet-small: 768px,
  tablet-medium: 800px,
  tablet-large: 980px,

  desktop-small: 1024px,
  desktop-medium: 1200px,
  desktop-large: 1400px
```

## Examples

### 1. Between two breakpoints
```
.example {
  @include breakpoints(from mobile-small to mobile-large) {
    // your CSS here
  }
}
```

### 2. Only a minimum breakpoint
```
.example {
  @include breakpoints(from mobile-small) {
    // your CSS here
  }
}
```

### 3. Only a maximum breakpoint
```
.example {
  @include breakpoints(to desktop-small) {
    // your CSS here
  }
}
```

## Advanced

### Custom list of breakpoints
If you want to define your own list of breakpoints, define a map with the name `$breakpoints-values`.

Example:
```
$breakpoints-values: (
  i-like-small-breakpoints: 150px,
  weird-breakpoint: 10em,
  is-this-even-a-breakpoint: 30rem
);

.example {
  @include breakpoints(from i-like-small-breakpoints to weird-breakpoints) {
    // your CSS
  }
}
```

### IE8 stylesheet
If you are building a separate stylesheet for IE8, set the variable `$breakpoints-ie8` in your IE8 only stylesheet after importing the mixin. This will create a stylesheet that ignores all breakpoints that have a maximum value, while dropping the media query for those that don't.

Example:
```
$breakpoints-ie8: true;

.example {
  @include breakpoints(to desktop-small) {
    // this will be ignored
  }

  @include breakpoints(from mobile-small) {
    // this will be compiled in the IE8 stylesheet without the media query wrapper
  }
}
```
