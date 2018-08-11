function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updatesViews = function(){
    return ++this.views;
  };
}

var course1 = new Course("Javascript", "dr", 1, "true", 0);
